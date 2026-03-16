# Pratibimb — Design Skills for Claude Code

**Pratibimb** (प्रतिबिंब, *reflection in a mirror*) is a design mode for Claude Code that activates expert UX + UI design thinking for every session.

## What's included

- `commands/pratibimb.md` — the `/pratibimb` command (activates design mode)
- `skills/ux-designer/` — UX strategy, psychology, flows, decision architecture
- `skills/ui-designer/` — Visual craft, design tokens, component specs, polish
- `skills/wiom-design-system.md` — Wiom DS token reference (Wiom projects only)

## Install

Requires Node.js.

```bash
git clone <repo-url>
cd pratibimb-skills
node install.js
```

This copies all files to `~/.claude/` and resolves paths for your machine.

## Use

In any Claude Code session:

```
pratibimb
```

Claude responds: *"Pratibimb loaded. Design skills active."*

## Add new principles

```
pratibimb, add principle: [your principle]
```

Claude appends it to the relevant skill file.
