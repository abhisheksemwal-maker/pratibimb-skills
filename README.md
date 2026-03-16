# Pratibimb — Design Skills for Claude Code

**Pratibimb** (प्रतिबिंब, *reflection in a mirror*) is a design mode for Claude Code that activates expert UX + UI design thinking for every session.

---

## What's included

- `commands/pratibimb.md` — the `/pratibimb` command (activates design mode)
- `skills/ux-designer/` — UX strategy, psychology, flows, decision architecture
- `skills/ui-designer/` — Visual craft, design tokens, component specs, polish
- `skills/wiom-design-system.md` — Wiom DS token reference (Wiom projects only)

---

## Requirements

- [Node.js](https://nodejs.org/) (v16 or later)
- [Claude Code](https://claude.ai/code) installed and authenticated
- Git

---

## Install

**Step 1 — Clone the repo**
```bash
git clone https://github.com/abhisheksemwal-maker/pratibimb-skills.git
cd pratibimb-skills
```

**Step 2 — Run the installer**
```bash
node install.js
```

This copies all skill files to `~/.claude/` and resolves paths for your machine. You should see:
```
  OK  commands/pratibimb.md
  OK  skills/ux-designer/SKILL.md
  OK  skills/ux-designer/references/psychology-deep-dive.md
  OK  skills/ux-designer/references/patterns-and-flows.md
  OK  skills/ui-designer/SKILL.md
  ...
Done. 11 files installed to /Users/yourname/.claude
```

**Step 3 — Verify**

Check that the files landed correctly:
```bash
ls ~/.claude/commands/
ls ~/.claude/skills/
```

You should see `pratibimb.md` in commands and `ux-designer/`, `ui-designer/`, `wiom-design-system.md` in skills.

---

## Use

Open any Claude Code session and type:

```
pratibimb
```

Claude responds: *"Pratibimb loaded. Design skills active."*

From that point in the session, Claude applies UX + UI design thinking to all work.

---

## Add new principles

```
pratibimb, add principle: [your principle]
```

Claude appends it to the relevant skill file (`ux-designer`, `ui-designer`, or Wiom DS).

---

## Troubleshooting

**`node install.js` — command not found**
Node.js is not installed. Download from https://nodejs.org/ and re-run.

**`node install.js` — SKIP (not found): ...`**
A skill file is missing from the cloned repo. Try:
```bash
git pull
node install.js
```

**Pratibimb loads but design skills don't activate**
The skill files may not be in the right location. Check:
```bash
cat ~/.claude/commands/pratibimb.md
```
If the file is empty or missing, re-run `node install.js`.

**`pratibimb` command not recognized in Claude Code**
Claude Code reads commands from `~/.claude/commands/`. If the folder doesn't exist, create it manually:
```bash
mkdir -p ~/.claude/commands
```
Then re-run `node install.js`.

**Paths look wrong (Windows)**
On Windows, `~` resolves to `C:\Users\<yourname>`. The installer handles this automatically via `os.homedir()`. If paths still look wrong, check the output of:
```bash
node -e "console.log(require('os').homedir())"
```
That's where the files will be installed.

**Skills installed but Claude ignores them**
Restart your Claude Code session. Skills are loaded at session start — changes mid-session aren't picked up automatically.
