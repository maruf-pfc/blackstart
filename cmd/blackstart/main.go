package main

import (
	"fmt"
	"os"
	tea "github.com/charmbracelet/bubbletea"
	"github.com/maruf-pfc/blackstart-labs/blackstart/tui"
)

func main() {
	p := tea.NewProgram(tui.NewModel(), tea.WithAltScreen())
	if _, err := p.Run(); err != nil {
		fmt.Printf("ERR: %v\n", err)
		os.Exit(1)
	}
}
