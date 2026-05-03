# init.sh

> Turn a fresh Linux install into a fully equipped dev machine — with a single command.

<p align="center">
  <img src="https://img.shields.io/badge/Debian%20%2F%20Ubuntu-supported-blue?logo=ubuntu&logoColor=white" />
  <img src="https://img.shields.io/badge/Arch%20Linux-supported-1793D1?logo=arch-linux&logoColor=white" />
  <img src="https://img.shields.io/badge/license-MIT-green" />
  <img src="https://img.shields.io/badge/shell-bash-89e051?logo=gnu-bash&logoColor=white" />
  <img src="https://img.shields.io/badge/idempotent-yes-brightgreen" />
</p>

---

## What is this?

`init.sh` is a modular, idempotent bootstrap script that transforms a clean Linux system into a complete developer workstation. It auto-detects your distro and supports multiple installation profiles via flags.

**Use cases:**
- New machine setup in minutes
- Reproducible dev environments
- CI/CD base image provisioning
- Dotfiles bootstrapping

---

## Supported Platforms

| Distro | Package Manager | Status |
|---|---|---|
| Ubuntu 20.04+ | apt | ✅ Fully supported |
| Debian 11+ | apt | ✅ Fully supported |
| Arch Linux | pacman + yay | ✅ Fully supported |
| Manjaro | pacman | ✅ Compatible |

---

## Quick Start

```bash
git clone https://github.com/blackstart-labs/init.sh.git
cd init.sh
chmod +x devsetup.sh
sudo ./devsetup.sh --full
```

Or run directly (audit first!):

```bash
curl -fsSL https://raw.githubusercontent.com/blackstart-labs/init.sh/main/devsetup.sh | sudo bash -s -- --minimal
```

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
| `--help` | Show usage information |

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
- **Starship** prompt (replaces ZSH_THEME)
- Fully configured `.zshrc` with aliases, PATH setup, and editor settings

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
# Minimal setup — just the essentials
sudo ./devsetup.sh --minimal

# Full workstation
sudo ./devsetup.sh --full

# DevOps machine with dotfiles
sudo ./devsetup.sh --devops --dotfiles https://github.com/you/dotfiles

# Security / CTF rig
sudo ./devsetup.sh --security

# See everything it would do without touching your system
sudo ./devsetup.sh --full --dry-run

# Let it ask you what to install
sudo ./devsetup.sh --interactive
```

---

## Dotfiles Support

Pass your dotfiles repo URL and the script will:
1. Clone it to `~/.dotfiles`
2. Run `install.sh` / `setup.sh` / `bootstrap.sh` if present
3. Symlink common files (`.zshrc`, `.gitconfig`, `.tmux.conf`, `nvim/`, etc.)

```bash
sudo ./devsetup.sh --full --dotfiles https://github.com/you/dotfiles
```

---

## Customization

| What | Where in script |
|---|---|
| Add packages | `APT_PKGS` / `PACMAN_PKGS` arrays in `install_core` |
| Add VS Code extensions | `EXTENSIONS` array in `install_editors` |
| Change Node version | `nvm install --lts` line in `install_languages` |
| Modify `.zshrc` | `configure_zshrc` heredoc |
| Add Flatpak apps | `FLATPAK_APPS` array in `install_flatpak` |
| Add a new stage | Write `install_X()` function, call it from `main()` |

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

# Use Docker without sudo (no re-login needed)
newgrp docker

# Add your SSH key to GitHub
cat ~/.ssh/id_ed25519.pub

# Configure Bangla input
ibus-setup
```

---

## Contributing

PRs welcome! Please:
- Test on both Ubuntu and Arch before submitting
- Keep functions modular and idempotent
- Add a comment for any non-obvious logic
- Update this README if you add a new category

---

## License

[MIT](LICENSE) © [blackstart-labs](https://github.com/blackstart-labs)
