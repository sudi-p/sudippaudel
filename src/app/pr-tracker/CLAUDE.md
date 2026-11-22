# PR Tracker (`/pr-tracker` route)

The `/pr-tracker` page of the portfolio site. It shows Canada Express Entry PR
timelines taken from the r/canadaexpressentry "Biweekly PR Timeline
Megathread". The data comes from Reddit comments that the user pastes into the
chat. Claude turns them into `data.json`. Reddit is blocked from Claude's
environment, so nothing is scraped.

- `page.tsx` is the client-component shell. `tracker.ts` renders the stats and
  table into it, using the same pattern as `src/app/ai-engineer`.
- `tracker.css` holds all the styles, scoped under `.prt-root`.
- `data.json` is the only data store. It is imported at build time, so a data
  update shows up on the live site after the next deploy.
- The user's own timeline is in `my-timeline.ts`, not `data.json`. Only
  `src/app/api/pr-tracker/me/route.ts` imports it, and only returns it after
  checking the `PR_TRACKER_PASSWORD` env var. Never import `my-timeline.ts`
  from `page.tsx` or `tracker.ts`, or the dates would ship to the browser.
  When the user gives new dates of their own (FD, P1, eCOPR…), update
  `my-timeline.ts`.
- Run locally with `npm run dev` from the repo root, then open
  http://localhost:3000/pr-tracker.

## When the user pastes comments: update `data.json`

When the user pastes a batch of comments, merge it into `data.json` without
being asked. Follow these rules every time.

### Never lose data
- **Never delete an entry**, and never rebuild the file from scratch.
  Read the existing `data.json`, merge the new batch in, and write it back.
  Every user who was there before must still be there afterwards.
- **One entry per username**, matched case-insensitively. Never create a second
  entry for a user who already exists.
- **A missing value never erases a known one.** If a new comment doesn't
  mention a field, or says "waiting", "⏳" or "N/A", keep the existing value.

### Conflicts: the newest information wins, and the old value goes into history
- If a new comment gives a different value for a field that already has one
  (for example a different AOR date), use the value from the **most recent
  comment** in the field.
- Don't throw the old value away. Add a record of it to that entry's `history`
  array:
  `{ "field": "aor_date", "old": "2026-08-01", "new": "2026-08-03", "changed_at": "<today>" }`
- An entry with no `history` key has never had a conflict. If one already
  exists, append to it.
- "Most recent" goes by comment age. A comment posted "2h ago" is newer than
  one posted "3d ago", and anything in a new batch is newer than what is
  already stored.

### Keep every comment
- `raw_comment` holds all of the user's comments, oldest first. When a user
  posts again, append the new text after a separator line
  `--- added <YYYY-MM-DD> ---`. Never replace what is already there.
- A user's own reply under their timeline comment counts as their data. Merge
  it into their entry and append it to `raw_comment` the same way.

### Extraction rules
- Skip comments that aren't a timeline: questions, congratulations, tips,
  opinions and "same here" replies with no dates. If a "same here" reply does
  include the user's own dates, keep it.
- **Never invent or fill in data.** Leave unknown fields as `null`.
- Dates use the form `YYYY-MM-DD`. A month-only date stays as `YYYY-MM`, never
  a guessed day. If the year is missing, use the year of the post date, so the
  event can't fall after the comment was posted.
- "BIL submitted / sent" and "Biometrics done" go in `biometrics_date`.
  "BIL" or "BIL request" goes in `bil_date`. "COPR" goes in `ecopr_date`.
  Eligibility and background statuses go into the `eligibility` and
  `background_check` text fields.
- Anything useful that has no field of its own (ADR details, "PAL", "ghost
  update", passport sent) goes in `notes`. Append to existing notes and don't
  overwrite them.

### Bookkeeping
- New entry: set `added_at` and `updated_at` to today.
- Changed entry: set `updated_at` to today and leave `added_at` alone.
- Unchanged entry: leave both dates as they are.
- Always set `thread.last_processed` to today.
- `posted` holds the relative age from the newest comment, e.g. "2h ago".
- Entry fields: `username, posted, stream, category, inland_outland, family,
  country, pvo_svo, ita_date, aor_date, bil_date, biometrics_date,
  medical_date, adr, eligibility, background_check, fd_date, ppr_date,
  p1_date, p2_date, ecopr_date, pr_card_date, notes, raw_comment, added_at,
  updated_at` plus optional `history`.

### Doing the merge
Write the batch's extracted entries to a scratch JSON file. Then merge it with
a short Python script that applies the rules above. Don't hand-edit the large
`data.json`. After the merge, check that:
- the number of entries is at least what it was before,
- there are no duplicate usernames,
- the file parses as valid JSON.

Then tell the user how many entries were added, how many were updated, which
fields changed, and the new total.
