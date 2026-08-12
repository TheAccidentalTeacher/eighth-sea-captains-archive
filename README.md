# The Eighth Sea · Captain's Archive

Modular static site. No build step — Netlify's build command stays EMPTY, publish directory is `site`.

**Live:** _(filled after the Netlify import)_

A bright, modular, interactive reference for the original Crownwake privateer game and the source-audited research behind its design. It combines a playable encounter, ship comparator, conquest planner, career guide, version comparison, research library, and living world atlas.

## Structure

```
site/
  index.html        the hub — renders cards from data/modules.js
  assets/site.css   shared stylesheet (design tokens at the top)
  assets/hub.js     draws the hub from the registry
  data/modules.js   THE REGISTRY (script global — fetch() is dead on file://)
  <module>/index.html
```

## Add a module

1. `site/<name>/index.html` — copy an existing module page for the header/nav shell
2. Add one entry to `site/data/modules.js`

## Remove a module

Delete the folder, delete its registry entry. Nothing else references it.

## Before pushing

```
node "$HOME/.agents/skills/site-forge/scripts/check-site.mjs" site
```

Zero broken links, zero orphans. Then look at it in a browser.
