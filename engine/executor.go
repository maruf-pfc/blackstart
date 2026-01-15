package engine

import (
	"bufio"
	"fmt"
	"os/exec"
	"runtime"
)

func (m *Module) IsInstalled() bool {
	if m.Check == "" { return false }
	var cmd *exec.Cmd
	if runtime.GOOS == "windows" {
		cmd = exec.Command("powershell", "-Command", m.Check)
	} else {
		cmd = exec.Command("sh", "-c", m.Check)
	}
	return cmd.Run() == nil
}

func (m *Module) Execute() (<-chan string, <-chan error) {
	outCh := make(chan string)
	errCh := make(chan error, 1)

	go func() {
		defer close(outCh)
		defer close(errCh)

		var cmds []string
		switch runtime.GOOS {
		case "linux": cmds = m.Install.Linux
		case "darwin": cmds = m.Install.Mac
		case "windows": cmds = m.Install.Windows
		default:
			errCh <- fmt.Errorf("unsupported OS: %s", runtime.GOOS)
			return
		}

		for _, cmdStr := range cmds {
			outCh <- fmt.Sprintf("Running: %s", cmdStr)
			var cmd *exec.Cmd
			if runtime.GOOS == "windows" {
				cmd = exec.Command("powershell", "-Command", cmdStr)
			} else {
				cmd = exec.Command("sh", "-c", cmdStr)
			}

			stdout, _ := cmd.StdoutPipe()
			cmd.Stderr = cmd.Stdout
			
			if err := cmd.Start(); err != nil {
				errCh <- fmt.Errorf("failed to start %s: %w", m.Name, err)
				return
			}

			scanner := bufio.NewScanner(stdout)
			for scanner.Scan() {
				outCh <- scanner.Text()
			}

			if err := cmd.Wait(); err != nil {
				errCh <- fmt.Errorf("command failed: %s: %w", cmdStr, err)
				return
			}
		}
		outCh <- fmt.Sprintf("Successfully installed %s", m.Name)
	}()

	return outCh, errCh
}
