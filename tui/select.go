package tui

import (
	"fmt"
	"strings"
	tea "github.com/charmbracelet/bubbletea"
	"github.com/maruf-pfc/blackstart-labs/blackstart/engine"
)

type selectModel struct {
	modules  []engine.Module
	cursor   int
	selected map[string]bool
	err      error
}

func newSelectModel() selectModel {
	mods, err := engine.LoadModules()
	return selectModel{
		modules:  mods,
		cursor:   0,
		selected: make(map[string]bool),
		err:      err,
	}
}

func (m *Model) updateSelect(msg tea.Msg) (tea.Model, tea.Cmd) {
	switch msg := msg.(type) {
	case tea.KeyMsg:
		switch msg.String() {
		case "up", "k":
			if m.selection.cursor > 0 { m.selection.cursor-- }
		case "down", "j":
			if m.selection.cursor < len(m.selection.modules)-1 { m.selection.cursor++ }
		case "space":
			id := m.selection.modules[m.selection.cursor].ID
			m.selection.selected[id] = !m.selection.selected[id]
		case "enter":
			m.state = statePlan
		}
	}
	return m, nil
}

func (m *Model) viewSelect() string {
	var s strings.Builder
	s.WriteString(styleTitle.Render("MODULE SELECTION"))
	s.WriteString("\n\n")

	var currentCat string
	for i, mod := range m.selection.modules {
		if mod.Category != currentCat {
			currentCat = mod.Category
			s.WriteString("\n" + styleBase.Bold(true).Foreground(colorGreen).Render(strings.ToUpper(currentCat)) + "\n")
		}

		cursor := "  "
		if m.selection.cursor == i { cursor = "> " }

		checked := "[ ]"
		if m.selection.selected[mod.ID] { checked = "[x]" }

		line := fmt.Sprintf("%s%s %s", cursor, checked, mod.Name)
		if m.selection.cursor == i {
			line = styleBase.Background(colorGray).Render(line) + styleBase.Faint(true).Render(" - "+mod.Description)
		} else {
			line += " - " + mod.Description
		}
		s.WriteString(line + "\n")
	}

	s.WriteString("\n" + styleBase.Faint(true).Render("SPACE: Toggle | ENTER: Confirm | q: Quit"))
	return styleBase.Render(s.String())
}
