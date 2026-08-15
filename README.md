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

- **The yellow line under the title** — `occasion`.
- **The schedule** — add or remove days and events.
- **The forms** — paste each Google Form link into its `url`. The title becomes
  the link. While a `url` is left empty, that card shows as "Opening soon", so
  the site can go live before the forms are ready.
- **Venue, airports, phone numbers.**

Times are written in 24-hour form (`"19:00"` means 7:00 PM). If an event runs
past midnight, add `endsNextDay: true` to it — the Rainnsabaee Keertan is the
example to copy.

## Still to come

- The two Google Form links are not connected yet, so both cards show
  "Opening soon".
- The Gurmukhi translations need a proofread by a native reader.

Feedback on wording, timings, or anything missing is welcome — open an issue or
just send it to Maneet.
