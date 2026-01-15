package engine

type Module struct {
	ID          string   `json:"id" yaml:"id"`
	Name        string   `json:"name" yaml:"name"`
	Description string   `json:"description" yaml:"description"`
	Category    string   `json:"category" yaml:"category"`
	Install     Platform `json:"install" yaml:"install"`
	Check       string   `json:"check,omitempty" yaml:"check,omitempty"`
}

type Platform struct {
	Linux   []string `json:"linux,omitempty" yaml:"linux,omitempty"`
	Mac     []string `json:"mac,omitempty" yaml:"mac,omitempty"`
	Windows []string `json:"windows,omitempty" yaml:"windows,omitempty"`
}
