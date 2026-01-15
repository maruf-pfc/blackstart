package tui

import "strings"

func (m *Model) viewDone() string {
	var s strings.Builder
	s.WriteString(styleTitle.Render("DEBIAN INFRASTRUCTURE READY") + "\n\n")
	s.WriteString("The selected environment has been provisioned.\n")
	s.WriteString("Your system is now under BLACKSTART control.\n\n")
	s.WriteString(styleBase.Foreground(colorGreen).Render("PRESS Q TO EXIT SYSTEM."))
	return styleBase.Render(s.String())
}
