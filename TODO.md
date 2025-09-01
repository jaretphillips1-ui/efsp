# EFSP – Master To-Do (Admin Source of Truth)
_Last updated: 2025-09-01

## ✅ Foundations (done)
- [x] Single canonical repo (`efsp`)
- [x] Clean Next.js app (TS, App Router)
- [x] Vercel deploy (efsp.vercel.app)
- [x] Daily rotating backups (keeps last 3) + verified
- [x] GitHub ↔ Vercel linked; repo visibility corrected

## 🔒 Backups & Safety
- [ ] Auto-backup hook: run `~/efsp-backup.sh` after successful `npm run build`
- [ ] Weekly log check for `~/efsp-backup.log`, alert if failures
- [ ] Document restore steps in README ("Backups" section)

## 🛠 CI/CD & Repo Hygiene
- [ ] GitHub Actions CI (lint / typecheck / spellcheck warn / build)
- [ ] README CI badge
- [ ] Branch protection: require passing checks on `main`
- [ ] (Optional) Husky pre-commit: lint + typecheck

## 🧹 Cleanup
- [ ] Remove any old local folders (`~/efsp-live-*`, `~/efsp-fix*`) if present
- [ ] Delete stale Vercel deployments (tidy up history)

## 📚 Docs
- [ ] "Run locally": Node 20, `npm i`, `npm run dev`
- [ ] "Deploy": push to `main` triggers Vercel
- [ ] "Backups": where they live, how to restore, cron schedule

## 🚀 Product – Core Features
### Sponsors
- [ ] Sponsors grid & detail pages
- [ ] Sponsor logos, tiers, links, tracking UTM
- [ ] Sponsor “presenter deck” page

### Tournaments
- [ ] Tournament model (date, water, ruleset, species)
- [ ] Event list & detail pages
- [ ] Registration flow (public)
- [ ] Check-in & rules acknowledgment (digital)
- [ ] Live leaderboard scaffold

### Results & Scoring
- [ ] Weigh-in entry (admin)
- [ ] Big fish side pot (Biggie) / small fish (Smallie)
- [ ] Auto standings + ties, DQs
- [ ] CSV export for records/DFO
- [ ] Public results pages + share OG images

### Anglers
- [ ] Angler profiles
- [ ] Season points/standings
- [ ] Rookie & youth tracking

### Media
- [ ] Albums per tournament
- [ ] Social share links & OG images

### Rules & Compliance
- [ ] Rules system (global + per event overrides)
- [ ] On-site waiver/checklist
- [ ] Audit log for admin actions

### Nice-to-Have / Later
- [ ] AI photo verification assist
- [ ] Achievements/badges
- [ ] Prize wheel / random draw
- [ ] Basic analytics & error logging

## 🧑‍💼 Admin & Ops
- [ ] Admin-only dashboard (/admin)
- [ ] Admin To-Do page (/admin/todo) – read from this file
- [ ] Pricing page / sponsorship page

