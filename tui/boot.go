package tui

import (
	"fmt"
	"math/rand"
	"strings"
	"time"
	tea "github.com/charmbracelet/bubbletea"
)

type bootTickMsg time.Time

func tickCmd() tea.Cmd {
	return tea.Tick(time.Millisecond*50, func(t time.Time) tea.Msg {
		return bootTickMsg(t)
	})
}

type bootModel struct {
	progress float64
	lines    []string
}

var bootLogs = []string{
	"Initializing BLACKSTART kernel...",
	"Loading module definitions...",
	"Establishing secure environment...",
}

func (m *Model) updateBoot(msg tea.Msg) (tea.Model, tea.Cmd) {
	switch msg.(type) {
	case bootTickMsg:
		if m.boot.progress >= 1.0 {
			m.state = stateSelect
			return m, nil
		}
		m.boot.progress += 0.05 + rand.Float64()*0.1
		idx := int(m.boot.progress * float64(len(bootLogs)))
		if idx > len(bootLogs) { idx = len(bootLogs) }
		m.boot.lines = bootLogs[:idx]
		return m, tickCmd()
	}
	return m, nil
}

func (m *Model) viewBoot() string {
	var s strings.Builder
	s.WriteString(styleTitle.Render(asciiArt) + "\n\n")
	for _, l := range m.boot.lines {
		s.WriteString("[OK] " + l + "\n")
	}
	width := 30
	pos := int(m.boot.progress * float64(width))
	if pos > width { pos = width }
	bar := strings.Repeat("█", pos) + strings.Repeat("░", width-pos)
	s.WriteString(fmt.Sprintf("\n[%s] %.0f%%\n", bar, m.boot.progress*100))
	return styleBase.Render(s.String())
}
