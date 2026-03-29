# BLACKSTART_LABS

> Great systems begin in silence and awaken with purpose. 

A modern, minimal, engineering-first studio website and platform. Built for developers, by developers. Built with precision, resilience, and intent.

---

## Technical_Stack

- **Frontend**: Next.js 16 (App Router), TypeScript, Tailwind CSS 4
- **Backend**: ASP.NET Core (.NET 10), C#
- **Animations**: Framer Motion (Minimal usage)
- **Deployment**: Vercel (Front) / Docker (Back)

## Repository_Structure

```text
.
├── /frontend           # Next.js Web Application
│   ├── /src/app        # Core routes and pages
│   ├── /src/components # UI and Layout components
│   └── /src/lib        # Shared utilities
├── /backend            # .NET Core Engineering Solution
│   ├── /API            # Web API Layer
│   ├── /Application    # Business Logic
│   ├── /Domain         # Core Entities
│   └── /Infrastructure # Data and External Services
└── docker-compose.yml  # Local orchestration
```

## Setup_Protocol

### _Frontend
```bash
cd frontend
bun install
bun run dev
```

### _Backend
```bash
cd backend
dotnet restore
dotnet run --project BlackstartLabs.API
```
