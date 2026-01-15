package tui

import (
	"fmt"
	"strings"
	tea "github.com/charmbracelet/bubbletea"
	"github.com/charmbracelet/bubbles/viewport"
	"github.com/maruf-pfc/blackstart-labs/blackstart/engine"
)

type installModel struct {
	queue     []engine.Module
	current   int
	logs      []string
	viewport  viewport.Model
	completed bool
	outCh     <-chan string
	errCh     <-chan error
}

func newInstallModel() installModel {
	vp := viewport.New(80, 15)
	vp.SetContent("Ready.")
	return installModel{viewport: vp}
}

type installLogMsg string
type installDoneMsg struct{}
type installFailMsg error

func waitForMsg(o <-chan string, e <-chan error) tea.Cmd {
	return func() tea.Msg {
		select {
		case line, ok := <-o:
			if !ok {
				if err := <-e; err != nil { return installFailMsg(err) }
				return installDoneMsg{}
			}
			return installLogMsg(line)
		}
	}
}

func (m *Model) startInstall() tea.Cmd {
	m.install.queue = nil
	for _, mod := range m.selection.modules {
		if m.selection.selected[mod.ID] { m.install.queue = append(m.install.queue, mod) }
	}
	m.install.current = 0
	m.install.logs = []string{"Starting system deployment..."}
	m.install.completed = false
	if len(m.install.queue) == 0 {
		m.install.completed = true
		return nil
	}
	return m.installNext()
}

func (m *Model) installNext() tea.Cmd {
	if m.install.current >= len(m.install.queue) {
		m.install.completed = true
		m.install.logs = append(m.install.logs, "\n" + styleBase.Foreground(colorGreen).Bold(true).Render(">> ALL TASKS FINISHED."))
		m.install.viewport.SetContent(strings.Join(m.install.logs, "\n"))
		m.install.viewport.GotoBottom()
		return nil
	}

	mod := m.install.queue[m.install.current]
	m.install.logs = append(m.install.logs, fmt.Sprintf("\n[*] Processing %s...", mod.Name))
	
	if mod.IsInstalled() {
		m.install.logs = append(m.install.logs, "    → Detected: Already present. Skipping.")
		m.install.current++
		m.install.viewport.SetContent(strings.Join(m.install.logs, "\n"))
		m.install.viewport.GotoBottom()
		return m.installNext()
	}

	m.install.logs = append(m.install.logs, "    → Installing...")
	m.install.viewport.SetContent(strings.Join(m.install.logs, "\n"))
	m.install.viewport.GotoBottom()

	o, e := mod.Execute()
	m.install.outCh, m.install.errCh = o, e
	return waitForMsg(o, e)
}

func (m *Model) updateInstall(msg tea.Msg) (tea.Model, tea.Cmd) {
	switch msg := msg.(type) {
	case tea.KeyMsg:
		if m.install.completed && (msg.String() == "enter" || msg.String() == "q") { m.state = stateDone }
	case installLogMsg:
		m.install.logs = append(m.install.logs, "      "+string(msg))
		m.install.viewport.SetContent(strings.Join(m.install.logs, "\n"))
		m.install.viewport.GotoBottom()
		return m, waitForMsg(m.install.outCh, m.install.errCh)
	case installDoneMsg:
		m.install.logs = append(m.install.logs, "    → Success.")
		m.install.current++
		return m, m.installNext()
	case installFailMsg:
		m.install.logs = append(m.install.logs, styleBase.Foreground(colorRed).Render(fmt.Sprintf("    → ERROR: %v", msg)))
		m.install.current++
		return m, m.installNext()
	}
	return m, nil
}

func (m *Model) viewInstall() string {
	var s strings.Builder
	s.WriteString(styleTitle.Render("SYSTEM DEPLOYMENT") + "\n\n")
	s.WriteString(styleBorder.Render(m.install.viewport.View()) + "\n\n")
	if m.install.completed {
		s.WriteString(styleBase.Foreground(colorGreen).Render("Task sequence complete. Press ENTER."))
	} else {
		s.WriteString(styleBase.Faint(true).Render("Status: Active execution..."))
	}
	return styleBase.Render(s.String())
}
