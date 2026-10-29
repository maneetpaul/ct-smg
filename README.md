# Connecticut Akhand Keertan Samaagam — event site

The page behind the QR code on the poster.

**To change anything on the site, edit `data.js` and nothing else.** Open it in
any text editor — it is commented throughout, and you do not need to know how to
code. Save, then push (or ask whoever manages the site to).

The page shows either English or Gurmukhi, chosen with the toggle at the top.
**Every piece of text is written twice** — once as `en`, once as `pa`. Change
both, or the other language will still show the old wording. If you leave the
Gurmukhi blank, the English shows instead, so nothing ever goes missing.

What you can change there:

- **The line above the title** — `occasion`.
- **The schedule** — add or remove days and events.
- **The forms** — paste each Google Form link into its `url`. The title becomes
  the link. While a `url` is left empty, that row shows as "Opening soon", so
  the site can go live before the forms are ready.
- **Venue, airports, phone numbers.**
- **The recordings links**, shown once the Samaagam is over.

Times are written in 24-hour form (`"19:00"` means 7:00 PM). If an event runs
past midnight, add `endsNextDay: true` to it — the Rainnsabaee Keertan is the
example to copy.

## Turning the page over to a new year

Four edits in `data.js`, all near the top of their sections:

1. Set `year` to the new year and `concluded` back to `false`.
2. Update `dates` and the whole `schedule`.
3. Move last year's entry from `recordings.links` down into `recordings.past`,
   newest first.
4. Blank each form `url` back to `""` until the new Google Form exists.

Nothing else needs undoing. When the Samaagam finishes, set `concluded: true`
and the schedule, location, forms and airports are replaced by the recordings
links; the phone numbers stay either way.

## Still to come

- The Gurmukhi translations need a proofread by a native reader.

Feedback on wording, timings, or anything missing is welcome — open an issue or
just send it to Maneet.
