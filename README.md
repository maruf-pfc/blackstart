# blackstart

> Bring your Linux machine up from zero — one command, fully equipped.

<p align="center">
  <img src="https://img.shields.io/badge/Debian%20%2F%20Ubuntu-supported-blue?logo=ubuntu&logoColor=white" />
  <img src="https://img.shields.io/badge/Arch%20Linux-supported-1793D1?logo=arch-linux&logoColor=white" />
  <img src="https://img.shields.io/badge/license-MIT-green" />
  <img src="https://img.shields.io/badge/shell-bash-89e051?logo=gnu-bash&logoColor=white" />
  <img src="https://img.shields.io/badge/idempotent-yes-brightgreen" />
</p>

---

In power engineering, a **black start** is the process of restoring a system from complete shutdown — no external power, no dependencies, from absolute zero.

That's exactly what this does for your dev machine.

---

## Quick Start

```bash
git clone https://github.com/blackstart-labs/blackstart.git
cd blackstart
chmod +x devsetup.sh
sudo ./devsetup.sh --full
```

Or run directly (audit the script first):

```bash
curl -fsSL https://raw.githubusercontent.com/blackstart-labs/blackstart/main/devsetup.sh | sudo bash -s -- --minimal
```

---

## Supported Platforms

| Distro | Package Manager | Status |
|---|---|---|
| Ubuntu 20.04+ | apt | ✅ Fully supported |
| Debian 11+ | apt | ✅ Fully supported |
| Arch Linux | pacman + yay | ✅ Fully supported |
| Manjaro | pacman | ✅ Compatible |

---

## Modes

| Flag | What it installs |
|---|---|
| `--minimal` | Core tools + languages + shell |
| `--full` | Everything (all categories below) |
| `--devops` | Core + Docker, kubectl, Helm, Terraform, AWS CLI |
| `--security` | Core + nmap, wireshark, hashcat, gobuster, pwndbg |
| `--interactive` | Prompts you for each category |

### Extra Options

| Option | Description |
|---|---|
| `--dry-run` | Print all commands without executing anything |
| `--dotfiles <url>` | Clone and apply your personal dotfiles repo |
| `--help` | Show usage |

---

## What Gets Installed

### Core System
`git` · `curl` · `wget` · `neovim` · `htop` · `btop` · `tmux` · `zsh` · `fzf` · `ripgrep` · `fd`

### Programming Languages
| Language | Method |
|---|---|
| Node.js (LTS) | nvm |
| Bun | Official installer |
| Python 3 | System + pip + pipx + venv |
| Rust | rustup |
| Go (latest) | Official tarball |
| C / C++ | gcc, clang, gdb, valgrind |
| Java | OpenJDK + Maven + Gradle |
| .NET SDK | Microsoft feed (8.0 + 6.0 LTS) |

### Shell & Terminal
- **zsh** as default shell
- **Oh-My-Zsh** with plugins:
  - `zsh-autosuggestions`
  - `zsh-syntax-highlighting`
  - `git`, `docker`, `kubectl`, `python`, `node`, `rust`, `fzf`, `z`
- **Starship** prompt
- Fully configured `.zshrc` with aliases, PATH setup, and editor defaults

### CLI Enhancements
`bat` (cat replacement) · `eza` (ls replacement) · `httpie` · `zellij` · `tmux`

### Dev Tools
- **Docker** + Compose plugin (with user group setup)
- **VS Code** + 15 extensions (C++, Python, Rust, Go, Docker, GitLens, Prettier, etc.)
- **Git** global config (name, email, editor, aliases)
- **SSH key** generation (ed25519, prints pubkey for GitHub)

### DevOps (`--devops`)
`Docker` · `kubectl` · `Helm` · `Terraform` · `AWS CLI v2` · `cloudflared`

### Security (`--security`)
`nmap` · `wireshark` · `hashcat` · `john` · `gobuster` · `feroxbuster` · `sqlmap` · `aircrack-ng` · `pwndbg` · `socat` · `netcat` · `strace` · `exiftool` · `steghide`

### GUI Apps (`--full`)
- **Brave Browser**
- **Flameshot** (screenshot tool)
- **CopyQ** (clipboard manager)

### Input / Localization
- **iBus** + **ibus-avro** for Bangla typing

### Flatpak
- Flathub remote setup
- Optional: Spotify, VLC, OBS Studio, GIMP

---

## Examples

```bash
# Minimal — just the essentials
sudo ./devsetup.sh --minimal

# Full workstation
sudo ./devsetup.sh --full

# DevOps machine with your dotfiles
sudo ./devsetup.sh --devops --dotfiles https://github.com/you/dotfiles

# Security / CTF rig
sudo ./devsetup.sh --security

# Preview everything without touching your system
sudo ./devsetup.sh --full --dry-run

# Let it ask you what to install
sudo ./devsetup.sh --interactive
```

---

## Dotfiles Support

Pass your dotfiles repo and blackstart will:
1. Clone it to `~/.dotfiles`
2. Run `install.sh` / `setup.sh` / `bootstrap.sh` if present
3. Symlink common files (`.zshrc`, `.gitconfig`, `.tmux.conf`, `nvim/`, etc.)

```bash
sudo ./devsetup.sh --full --dotfiles https://github.com/you/dotfiles
```

---

## Script Design

- **Modular** — each category is an isolated function
- **Idempotent** — safe to run multiple times; checks before installing
- **Logged** — full output written to `devsetup.log`
- **Error-handled** — `set -euo pipefail`, `trap ERR`, fallback messages
- **Non-root safe** — uses `$SUDO_USER` / `as_user()` for user-level installs
- **Dry-run** — `--dry-run` prints every command without executing

---

## After Running

```bash
# Apply shell changes immediately
exec zsh

# Use Docker without sudo right away
newgrp docker

# Copy your SSH key to GitHub
cat ~/.ssh/id_ed25519.pub

# Set up Bangla input
ibus-setup
```

---

## Repository Structure

```
blackstart/
├── devsetup.sh     ← the bootstrap script
├── README.md
└── LICENSE         ← MIT
```

---

## Contributing

PRs welcome. Please:
- Test on both Ubuntu and Arch before submitting
- Keep functions modular and idempotent
- Comment any non-obvious logic
- Update the README if you add a new category

---

## License

[MIT](LICENSE) © [blackstart-labs](https://github.com/blackstart-labs)
