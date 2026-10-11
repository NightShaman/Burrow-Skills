# Burrow Skills

Public operating skills for Burrow and its integrations, updated independently of application releases.

## Available

- `burrow-runtime/SKILL.md`: native runtime, tools, continuity, delegation, skills and verification.

Backdoor and Node Goblin skills are not included yet. Add them when their operating instructions have been reviewed against their implementations.

## Install and update

In Settings → Skills, import repository `https://github.com/NightShaman/Burrow-Skills.git`, ref `main`, path `burrow-runtime/SKILL.md`. Preview, inspect, then install and enable automatic synchronization with your preferred schedule. Tags/commits pin content instead of following updates.

Import never overwrites an existing ID. For an existing bundled `burrow-runtime`, configure its Git source instead. Synchronization preserves assignments; bundled startup publication defers to a configured Git source.

Text-only skills use PostgreSQL. Select a directory for skills with artifacts: supporting files stay together in runtime filesystem storage. Import and sync do not execute scripts.

## Contributions

Each skill has its own directory with `SKILL.md` and name/description frontmatter. Supporting files belong alongside it. Keep instructions matched to current capabilities; document minimum runtime requirements where needed. Runtime tool schemas remain authoritative: skills cannot grant tools, access or authorization.

Review for secrets, private infrastructure details and operator-specific data before publishing. Do not include runtime exports, credentials, conversations, caches or mirrored application source.
