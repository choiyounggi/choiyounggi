<h1 align="center">Younggi Choi</h1>

<p align="center">
  <strong>I build the safety and verification layer for agentic coding —<br>
  hooks, skills, and MCP servers that make an AI harness trustworthy enough to run unattended.</strong>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@younggichoi/cliclaw"><img alt="cliclaw on npm" src="https://img.shields.io/npm/v/%40younggichoi%2Fcliclaw?style=flat-square&label=cliclaw&labelColor=0D1117&color=2A3140"></a>
  <a href="https://www.npmjs.com/package/@younggichoi/claude-secretmode"><img alt="claude-secretmode on npm" src="https://img.shields.io/npm/v/%40younggichoi%2Fclaude-secretmode?style=flat-square&label=claude-secretmode&labelColor=0D1117&color=2A3140"></a>
</p>

---

Most AI coding effort goes into the prompt. I think the leverage is one layer below that — in the
**harness**: the hooks that stop an agent before it force-pushes, the skills that encode a procedure
so it isn't re-derived every session, the MCP servers that hand an agent real context instead of
guesses, and the memory that survives a `/clear`.

An agent is only as good as the environment you put it in. That environment is the thing I build.

## Start Here

**[groundwork](https://github.com/choiyounggi/groundwork)** — the harness foundation
Guardrail hooks, memory system, skill architecture, audit logging. Written after learning the hard
way that a guard regex which matches *everything* is indistinguishable from one that matches
nothing — so the hooks ship with both-direction regression tests: mention passes, execution blocks.

**[cliclaw](https://github.com/choiyounggi/cliclaw)** — four coding agents, from your phone
```bash
npm install -g @younggichoi/cliclaw
```
A Telegram bot driving Claude Code, Codex, Pi, and Gemini CLI as a macOS daemon. Per-chat agent
sessions, a confirm gate before anything destructive, response streaming, image attachments,
auto-installed launchd, and corporate-TLS (Zscaler) auto-detection.

**[claude-secretmode](https://github.com/choiyounggi/claude-secretmode)** — leave no trace
```bash
npm install -g @younggichoi/claude-secretmode
```
Runs Claude Code on a RAM disk, so transcripts, prompt history, and file snapshots never touch disk
and evaporate on exit — while still inheriting your keychain auth, MCP servers, CLAUDE.md, hooks,
and skills.

## The harness stack

| | |
| --- | --- |
| **[dev-loop](https://github.com/choiyounggi/dev-loop)** | Knowledge management for coding agents — wiki-grounded verification, RFC-based docs, and best-practice capture that feeds the next task instead of being relearned. |
| **[loop-orchestrator](https://github.com/choiyounggi/loop-orchestrator)** | Multi-agent orchestration — parallel execution, TDD/PDCA/Reflexion loops, test-quality audit, merge-gate verification. |
| **[dev-llm-wiki](https://github.com/choiyounggi/dev-llm-wiki)** | Case-routed engineering knowledge written to be loaded as minimal working context by an agent, not read by a human. One case per page, routed by domain. |
| **[awesome-claude-plugins](https://github.com/choiyounggi/awesome-claude-plugins)** | Plugins that extend Claude Code with commands, agents, hooks, and MCP servers. |
| **[awesome-cli-coding-agents](https://github.com/choiyounggi/awesome-cli-coding-agents)** | Terminal-native coding agents and the harnesses that orchestrate them — Pi, OpenCode, Aider, Goose, Claude Code, Codex, Gemini CLI, parallel runners, autonomous loops. |

## Research — what if a language were designed for an LLM, not a typist?

**[linkly](https://github.com/choiyounggi/linkly)** starts from a premise: existing languages were
designed to be easy for *humans to write*. From here on, most code is generated. So what does a
language look like when it's designed to be easy for an **LLM to reason about and optimize**?

```
Developer → Intent (what) → LLM → Semantic IR → Native Optimizer → Machine Code
```

You declare goals and business rules; the compiler and an agent pipeline design, implement, verify,
and optimize the rest. Current state: **8 RFCs**, `.lnpl` parses and lowers to a semantic IR, runs on
an IR interpreter *and* compiles through **MLIR to a native binary**. A differential check confirms
both modes agree on execution order, policy outcome, observability signals, and masking. **264 tests
passing.** OpenAPI is generated from the IR. Next: a custom `lnpl` MLIR dialect.

<details>
<summary><strong>Also shipped</strong> — services and utilities</summary>

<br>

| | |
| --- | --- |
| **[korea-data-suite](https://github.com/choiyounggi/korea-data-suite)** | Clean REST APIs over Korean public data — nationwide real-estate transaction prices (MOLIT) and public holidays (KASI), normalized to plain English JSON. |
| **[chungyak-alimi](https://github.com/choiyounggi/chungyak-alimi)** | Housing-subscription notices pulled from official open APIs into PostgreSQL, matched against your criteria, pushed to Telegram, browsable on a FastAPI dashboard with parcel polygons. Runs on a Raspberry Pi under systemd. |
| **[mac-inputlock](https://github.com/choiyounggi/mac-inputlock)** | Lock your Mac's keyboard and mouse while the screen stays on — `⌃⌥⌘L`. For wiping the keyboard, or cat-proofing. |
| **[meetingSummary](https://github.com/choiyounggi/meetingSummary)** | On-device meeting transcription and summarization on macOS. |
| **[ai-gossip](https://github.com/choiyounggi/ai-gossip)** | What several models say about each other when they think you've left the room. |

</details>

---

<p align="center">
  Building in public. If you work on agent harnesses, MCP, or LLM automation,<br>
  open an issue on any of these — I answer.
</p>
