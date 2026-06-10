# Fantasy Statblocks — Community Templates

This is a **template registry** for the
[Fantasy Statblocks](https://github.com/Obsidian-TTRPG-Community/fantasy-statblocks) Obsidian
plugin. It lets users browse and install statblock layouts for game systems
beyond the built-in D&D 5e and Pathfinder 2e support — directly from the
plugin's settings, via **Layouts → Browse Community Templates**.

Each template bundles two things:

1. **A layout** (`layout.json`) — the visual result. This is the same JSON the
   plugin produces when you use *Export as JSON* on a layout.
2. **An example note** (`example.md`) — a complete note demonstrating the
   expected **in-note format** for a monster using that layout.

## How the plugin uses this repo

The plugin fetches `index.json` from the registry URL configured in settings
(this repo's raw URL by default). The manifest lists every template and points
at its `layout` and `example` files. Paths are resolved relative to the
manifest, so the whole registry can be served straight from GitHub via
`raw.githubusercontent.com`.

When a user clicks **Install**, the plugin:

- downloads and validates the `layout.json`,
- warns first if the layout contains JavaScript blocks,
- adds the layout to the user's custom layouts, and
- (optionally) drops the `example.md` into a `Statblock Templates/` folder in
  their vault so they can see the in-note format immediately.

## `index.json` format

```json
{
    "version": 1,
    "name": "My Template Registry",
    "description": "Optional registry description.",
    "templates": [
        {
            "id": "unique-id",
            "name": "Display Name",
            "system": "Game System",
            "author": "Your name",
            "description": "What this template renders.",
            "tags": ["osr", "sci-fi"],
            "layout": "templates/my-template/layout.json",
            "example": "templates/my-template/example.md",
            "preview": "templates/my-template/preview.png",
            "homepage": "https://example.com/my-template"
        }
    ]
}
```

| Field         | Required | Notes                                                            |
| ------------- | -------- | ---------------------------------------------------------------- |
| `id`          | yes      | Unique within the registry.                                      |
| `name`        | yes      | Shown in the browser and used as the installed layout name.      |
| `layout`      | yes      | Path/URL to the layout JSON.                                     |
| `system`      | no       | Used for the system filter in the browser.                       |
| `author`      | no       | Credit shown on the card.                                        |
| `description` | no       | One-line summary.                                                |
| `tags`        | no       | Searchable keywords.                                             |
| `example`     | no       | Path/URL to an in-note example. Strongly recommended.            |
| `preview`     | no       | Path/URL to a preview image (used as the gallery thumbnail).     |
| `css`         | no       | Path/URL to a CSS snippet (or array of them). Installed into the vault's snippets folder and enabled automatically on install. May embed textures/logos/fonts as base64 data URIs. |
| `requires`    | no       | Free-text requirements the plugin can't auto-install (e.g. fonts, companion plugins). Shown on the detail view. |
| `downloads`   | no       | Fallback popularity number. Real per-template counts come automatically from jsDelivr CDN stats (see Popularity below); this is only used until/if stats are available. |
| `homepage`    | no       | External docs/source link.                                       |

Paths may be **relative to `index.json`** or **absolute `http(s)` URLs**.

## Popularity (download counts)

Template assets are served to the plugin through the [jsDelivr](https://www.jsdelivr.com/) CDN
(`cdn.jsdelivr.net/gh/Obsidian-TTRPG-Community/fantasy-statblocks-templates@main/...`).
jsDelivr publishes **per-file download statistics**, so the plugin can show how
often each template is pulled and offer a **"Most popular"** sort — with no
backend and nothing phoning home beyond the fetch the plugin already makes.

Notes:
- Stats are aggregate and lag by a day or so, and count CDN hits (including
  caches/bots), so treat them as a relative popularity signal, not an exact
  install ledger.
- A maintainer-curated `downloads` value in `index.json` is used as a fallback
  until real stats exist for a template.

## Contributing a template

1. Build your layout in Obsidian (**Settings → Fantasy Statblocks → Layouts →
   Add New Layout**), then use **Export as JSON**.
2. Create `templates/<your-template>/layout.json` from that export.
3. Write `templates/<your-template>/example.md` — a real note whose
   `statblock` code block uses `layout: <Your Layout Name>` and every property
   your layout reads. Keep example data system-appropriate and original.
4. Add an entry to `index.json`.
5. Open a pull request.

### Guidelines

- **Prefer JavaScript-free layouts.** They install without a security prompt
  and are safer for users. Only use `javascript` blocks when a layout genuinely
  needs computed output.
- **Make examples self-explanatory.** The example note is the best
  documentation a user gets for the in-note format.
- **Use original flavor text.** Don't paste copyrighted statblocks; demonstrate
  the format with your own creatures.

## Bundled examples

- `templates/mork-borg-creature` — minimal grim OSR creature card.
- `templates/mothership-monster` — sci-fi horror adversary block.
