package engine

import (
	"fmt"
	"sort"

	"github.com/maruf-pfc/blackstart-labs/blackstart/modules"
	"gopkg.in/yaml.v3"
)

func LoadModules() ([]Module, error) {
	var loaded []Module
	entries, err := modules.FS.ReadDir(".")
	if err != nil {
		return nil, fmt.Errorf("read modules: %w", err)
	}

	for _, entry := range entries {
		if entry.IsDir() || entry.Name() == "embed.go" {
			continue
		}
		data, err := modules.FS.ReadFile(entry.Name())
		if err != nil {
			return nil, fmt.Errorf("read %s: %w", entry.Name(), err)
		}
		var mod Module
		if err := yaml.Unmarshal(data, &mod); err != nil {
			return nil, fmt.Errorf("parse %s: %w", entry.Name(), err)
		}
		if mod.ID != "" {
			loaded = append(loaded, mod)
		}
	}

	if len(loaded) == 0 {
		return nil, fmt.Errorf("no modules found")
	}

	categoryOrder := map[string]int{
		"system": 0, "languages": 1, "devops": 2, "editors": 3, "shell": 4, "other": 5,
	}

	sort.Slice(loaded, func(i, j int) bool {
		catI, catJ := loaded[i].Category, loaded[j].Category
		if catI == "" { catI = "other" }
		if catJ == "" { catJ = "other" }
		if catI == catJ { return loaded[i].Name < loaded[j].Name }
		return categoryOrder[catI] < categoryOrder[catJ]
	})

	return loaded, nil
}
