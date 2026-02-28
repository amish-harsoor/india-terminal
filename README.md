# INDIA TERMINAL
## Indian Politics Intelligence Platform

A fully client-side, offline-capable political intelligence terminal covering Indian politics from 1947 to 2024.

---

## HOW TO RUN

Simply open `index.html` in any modern web browser. No server required.

```
Double-click index.html  →  Opens in browser
```

Or use a local server:
```bash
python3 -m http.server 8080
# Then open http://localhost:8080
```

---

## FEATURES

### Screens (navigate with F1–F9 or sidebar)

| Key | Screen | Description |
|-----|--------|-------------|
| F1  | Dashboard | Overview: PMs, Elections, Events, Parliament |
| F2  | Prime Ministers | All 18 PMs with detailed profiles |
| F3  | Elections | All 18 Lok Sabha elections (1951–2024) |
| F4  | Parties | 15 major political parties with seat history |
| F5  | Events Timeline | 55+ major events, filterable by category |
| F6  | Parliament 2024 | Seat distribution, coalition breakdown, donut chart |
| F7  | Chief Ministers | Current CMs of all 29 states |
| F8  | Scandals | 13 major political scandals |
| F9  | Search | Full-text search across all data |

### Additional screens (via sidebar):
- **Presidents** – All 15 Presidents of India
- **Seat History** – INC vs BJP seat chart (canvas drawn)
- **Vote Share** – Turnout + vote share bar charts
- **Amendments** – 16 landmark constitutional amendments

---

## DATA COVERAGE

- **18 Prime Ministers** (Nehru → Modi) with profiles, tenures, notable events
- **15 Presidents** (Rajendra Prasad → Droupadi Murmu)
- **15 Major Political Parties** with ideology, strength, history
- **18 General Elections** (1951–2024) with full results
- **55+ Timeline Events** from Independence to 2024
- **29 State Chief Ministers** (current)
- **13 Major Scandals** with amounts and descriptions
- **16 Constitutional Amendments** (landmark ones)
- **Live Clock** (IST)
- **News Ticker** with current political headlines

---

## TECH STACK

- **HTML5** – Single page, no framework
- **CSS3** – Custom color theme, CSS variables, animations
- **Vanilla JavaScript** – Zero dependencies, zero npm
- **Google Fonts** – IBM Plex Mono
- **Canvas API** – Seat history line chart, Parliament donut chart

**Total size: ~100KB** (excluding fonts)

---

## COLOR THEME

| Element | Color |
|---------|-------|
| Background | `#000000` |
| Primary Accent | `#ff6600` (Orange) |
| Positive | `#00cc44` (Green) |
| Negative | `#ff2222` (Red) |
| Highlight | `#ffcc00` (Yellow) |
| Data | `#00ccff` (Cyan) |
| Borders | `#2a2a2a` |
| Font | IBM Plex Mono |

---

## KEYBOARD SHORTCUTS

| Key | Action |
|-----|--------|
| F1–F11 | Navigate screens |
| Enter (in search) | Open search screen |
| Click sidebar items | Navigate to section |

---

*Data compiled from public sources. For educational and informational purposes.*
