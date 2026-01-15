package tui

import (
	"fmt"
	"strings"
	tea "github.com/charmbracelet/bubbletea"
	"github.com/maruf-pfc/blackstart-labs/blackstart/engine"
)

func (m *Model) updatePlan(msg tea.Msg) (tea.Model, tea.Cmd) {
	switch msg := msg.(type) {
	case tea.KeyMsg:
		switch msg.String() {
		case "enter", "y":
			m.state = stateInstall
			return m, m.startInstall()
		case "esc", "n":
			m.state = stateSelect
		}
	}
	return m, nil
}

func (m *Model) viewPlan() string {
	var s strings.Builder
	s.WriteString(styleTitle.Render("EXECUTION PLAN") + "\n\n")
	s.WriteString("The following modules will be processed:\n\n")
	count := 0
	for _, mod := range m.selection.modules {
		if m.selection.selected[mod.ID] {
			s.WriteString("  [+] " + mod.Name + "\n")
			count++
		}
	}
	if count == 0 { s.WriteString("  (None selected)\n") }
	s.WriteString("\nProceed with initialization? [Y/n]")
	return styleBase.Render(s.String())
}
