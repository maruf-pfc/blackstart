package tui
import "github.com/charmbracelet/lipgloss"
var (
	colorBlack = lipgloss.Color("#000000")
	colorGray  = lipgloss.Color("#333333")
	colorWhite = lipgloss.Color("#EEEEEE")
	colorGreen = lipgloss.Color("#00FF00")
	colorRed   = lipgloss.Color("#FF0000")
	styleBase = lipgloss.NewStyle().Foreground(colorWhite).Background(colorBlack)
	styleTitle = lipgloss.NewStyle().Foreground(colorGreen).Bold(true).Padding(1, 0)
	styleBorder = lipgloss.NewStyle().Border(lipgloss.NormalBorder()).BorderForeground(colorGray)
)
