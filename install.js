#!/usr/bin/env node
/**
 * Pratibimb Design Skills — Installer
 * Copies skill files to ~/.claude/ and resolves {{HOME}} placeholders.
 *
 * Usage: node install.js
 */

const fs   = require('fs');
const path = require('path');
const os   = require('os');

const HOME      = os.homedir();
const REPO_ROOT = __dirname;
const CLAUDE    = path.join(HOME, '.claude');

// Files to copy: [src relative to repo, dest relative to ~/.claude]
const FILES = [
  ['commands/pratibimb.md',                               'commands/pratibimb.md'],
  ['skills/ux-designer/SKILL.md',                         'skills/ux-designer/SKILL.md'],
  ['skills/ux-designer/references/psychology-deep-dive.md','skills/ux-designer/references/psychology-deep-dive.md'],
  ['skills/ux-designer/references/patterns-and-flows.md', 'skills/ux-designer/references/patterns-and-flows.md'],
  ['skills/ui-designer/SKILL.md',                         'skills/ui-designer/SKILL.md'],
  ['skills/ui-designer/references/design-tokens.md',      'skills/ui-designer/references/design-tokens.md'],
  ['skills/ui-designer/references/component-library.md',  'skills/ui-designer/references/component-library.md'],
  ['skills/ui-designer/references/polish-and-craft.md',   'skills/ui-designer/references/polish-and-craft.md'],
  ['skills/wiom-design-system.md',                        'skills/wiom-design-system.md'],
];

let installed = 0;
let skipped   = 0;

for (const [src, dest] of FILES) {
  const srcPath  = path.join(REPO_ROOT, src);
  const destPath = path.join(CLAUDE, dest);

  if (!fs.existsSync(srcPath)) {
    console.warn(`  SKIP (not found): ${src}`);
    skipped++;
    continue;
  }

  // Ensure destination directory exists
  fs.mkdirSync(path.dirname(destPath), { recursive: true });

  // Read, resolve {{HOME}} placeholder, write
  let content = fs.readFileSync(srcPath, 'utf8');
  // Normalise to OS path separator
  const homeNorm = HOME.replace(/\//g, path.sep);
  content = content.split('{{HOME}}').join(homeNorm);

  fs.writeFileSync(destPath, content, 'utf8');
  console.log(`  OK  ${dest}`);
  installed++;
}

console.log(`\nDone. ${installed} files installed to ${CLAUDE}`);
if (skipped > 0) console.log(`${skipped} files skipped (not found in repo).`);
console.log('\nLoad in Claude Code with: pratibimb');
