<h1 align="center">Younggi Choi</h1>

<p align="center">
  <strong>I don't prompt AI to write code. I build the harness it writes code inside.</strong>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@younggichoi/cliclaw"><img alt="cliclaw on npm" src="https://img.shields.io/npm/v/%40younggichoi%2Fcliclaw?style=flat-square&label=cliclaw&color=0b7285"></a>
  <a href="https://www.npmjs.com/package/@younggichoi/claude-secretmode"><img alt="claude-secretmode on npm" src="https://img.shields.io/npm/v/%40younggichoi%2Fclaude-secretmode?style=flat-square&label=claude-secretmode&color=0b7285"></a>
  <img alt="License MIT" src="https://img.shields.io/badge/license-MIT-444?style=flat-square">
</p>

---

## What I actually work on

Most AI coding effort goes into the prompt. I think the leverage is one layer below that — in the
**harness**: the hooks that stop an agent before it force-pushes, the skills that encode a
procedure so it isn't re-derived every session, the MCP servers that hand an agent real context
instead of guesses, and the memory that survives a `/clear`.

An agent is only as good as the environment you put it in. That environment is the thing I build.

---

## Install something I made

```bash
# Drive Claude Code, Codex, Pi, and Gemini CLI from Telegram — macOS daemon,
# per-chat agent sessions, confirm gate for dangerous commands, response streaming
npm install -g @younggichoi/cliclaw

# Ephemeral Claude Code sessions on a RAM disk — transcripts, prompt history, and
# file snapshots never touch disk, while inheriting your keychain auth, MCP, and hooks
npm install -g @younggichoi/claude-secretmode
```

---

## Harness engineering

Building the layer between an LLM and a codebase — guardrails, procedure, context, and memory.

| Project | What it is |
| --- | --- |
| **[groundwork](https://github.com/choiyounggi/groundwork)** | Claude Code harness foundation — guardrail hooks, memory system, skill architecture, audit logging. The base layer everything else sits on. |
| **[dev-loop](https://github.com/choiyounggi/dev-loop)** | Knowledge management for LLM agents — wiki-grounded verification, RFC-based documentation, best-practice capture that feeds back into the next task. |
| **[loop-orchestrator](https://github.com/choiyounggi/loop-orchestrator)** | Multi-agent task orchestration — parallel execution, TDD/PDCA/Reflexion loops, test-quality audit, merge-gate verification. |
| **[claude-secretmode](https://github.com/choiyounggi/claude-secretmode)** | Leave-no-trace sessions on macOS. RAM disk, nothing persisted. |
| **[cliclaw](https://github.com/choiyounggi/cliclaw)** | One Telegram bot, four local coding CLIs, from your phone. |

---

## Research: an LLM-native language

**[linkly](https://github.com/choiyounggi/linkly)** — the premise is that languages were designed to
be easy for *humans to type*, and from here on most code is generated. So what does a language look
like when it's designed to be easy for an **LLM to reason about and optimize**?

```
Developer → Intent (what) → LLM → Semantic IR → Native Optimizer → Machine Code
```

Current state: **8 RFCs**, `.lnpl` parses and lowers to a semantic IR, runs on an IR interpreter
*and* compiles through **MLIR to a native binary**. A differential check confirms both execution
modes agree on execution order, policy outcome, observability signals, and masking. **264 tests
passing.** OpenAPI is generated from the IR.

Next: a custom `lnpl` MLIR dialect. RFCs are written in Korean; identifiers and schemas in English.

---

## Curated for the ecosystem

- **[awesome-claude-plugins](https://github.com/choiyounggi/awesome-claude-plugins)** — plugins that extend Claude Code with commands, agents, hooks, and MCP servers.
- **[awesome-cli-coding-agents](https://github.com/choiyounggi/awesome-cli-coding-agents)** — terminal-native coding agents and the harnesses that orchestrate them: Pi, OpenCode, Aider, Goose, Claude Code, Codex, Gemini CLI, parallel runners, autonomous loops.
- **[dev-llm-wiki](https://github.com/choiyounggi/dev-llm-wiki)** — case-routed best practices written to be loaded as minimal working context by a coding agent, not read by a human.

---

## Also shipped

| Project | |
| --- | --- |
| **[korea-data-suite](https://github.com/choiyounggi/korea-data-suite)** | Clean REST APIs over Korean public data — nationwide real-estate transaction prices (MOLIT) and public holidays (KASI), normalized to plain English JSON. |
| **[chungyak-alimi](https://github.com/choiyounggi/chungyak-alimi)** | Housing-subscription notices collected from official open APIs into PostgreSQL, matched against your criteria, pushed to Telegram, browsable on a FastAPI dashboard with parcel polygons. Runs on a Raspberry Pi under systemd. |
| **[mac-inputlock](https://github.com/choiyounggi/mac-inputlock)** | Lock your Mac's keyboard and mouse while the screen stays on. `⌃⌥⌘L`. For wiping the keyboard, or cat-proofing. |
| **[meetingSummary](https://github.com/choiyounggi/meetingSummary)** | On-device meeting transcription and summarization on macOS. |

---

## Stack

**Daily:** Python · TypeScript · Shell · Swift · Java/Kotlin
**Backend:** Spring Boot · FastAPI · PostgreSQL · Redis
**AI:** Claude (API + Code) · MCP · local models via Ollama/MLX · RAG · agent loops
**Infra:** AWS · Docker · Kubernetes · ArgoCD · GitHub Actions

---

<p align="center">
  <img alt="GitHub stats" src="https://github-readme-stats.vercel.app/api?username=choiyounggi&show_icons=true&hide_border=true&include_all_commits=true&theme=transparent&hide_title=true">
</p>

---

<p align="center">
  Building in public. If you work on agent harnesses, MCP, or LLM automation — open an issue anywhere, I'll answer.
  <br><br>
  <a href="https://github.com/choiyounggi">github.com/choiyounggi</a>
</p>
