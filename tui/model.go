package tui

import (
	tea "github.com/charmbracelet/bubbletea"
)

type state int
const (
	stateBoot state = iota
	stateSelect
	statePlan
	stateInstall
	stateDone
	stateError
)

type Model struct {
	state     state
	err       error
	boot      bootModel
	selection selectModel
	install   installModel
}

func NewModel() *Model {
	return &Model{
		state: stateBoot,
		boot: bootModel{progress: 0},
		selection: newSelectModel(),
		install:   newInstallModel(),
	}
}

func (m *Model) Init() tea.Cmd {
	return tea.Batch(tea.EnterAltScreen, tickCmd())
}

func (m *Model) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
	if keyMsg, ok := msg.(tea.KeyMsg); ok {
		switch keyMsg.String() {
		case "ctrl+c", "q": return m, tea.Quit
		}
	}

	if m.selection.err != nil {
		m.state = stateError
		m.err = m.selection.err
	}

	switch m.state {
	case stateBoot: return m.updateBoot(msg)
	case stateSelect: return m.updateSelect(msg)
	case statePlan: return m.updatePlan(msg)
	case stateInstall: return m.updateInstall(msg)
	case stateDone:
		if km, ok := msg.(tea.KeyMsg); ok && km.String() == "q" { return m, tea.Quit }
	}
	return m, nil
}

func (m *Model) View() string {
	switch m.state {
	case stateBoot: return m.viewBoot()
	case stateSelect: return m.viewSelect()
	case statePlan: return m.viewPlan()
	case stateInstall: return m.viewInstall()
	case stateDone: return m.viewDone()
	case stateError: return "CRITICAL ERROR: " + m.err.Error()
	}
	return "UNKNOWN STATE"
}
