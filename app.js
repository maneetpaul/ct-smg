/* Renders the page from data.js. You should not need to edit this file. */

(function () {
  var D = window.SAMAAGAM;
  var TZ = "America/New_York";
  var STORE_KEY = "samaagam-lang";

  var lang = "en"; // default; overridden by saved preference below
  try {
    var saved = localStorage.getItem(STORE_KEY);
    if (saved === "en" || saved === "pa") lang = saved;
  } catch (err) { /* private browsing — fall back to English */ }

  function el(id) { return document.getElementById(id); }

  /* ---------- Gurmukhi webfont ----------
     Mukta Mahee is fetched only once the page is actually showing
     Gurmukhi, so an English visitor makes no external request at all
     and the page stays instant on Gurdwara wifi. Injected once; the
     browser caches it across toggles and across visits.

     If the request fails the page is unharmed — the `--gurmukhi` stack
     in styles.css falls back to the system faces. */

  var fontRequested = false;

  function loadGurmukhiFont() {
    if (fontRequested) return;
    fontRequested = true;

    // Warm the connections first; the stylesheet and the font file
    // itself come from two different hosts.
    [["https://fonts.googleapis.com", false],
     ["https://fonts.gstatic.com", true]].forEach(function (pair) {
      var pre = document.createElement("link");
      pre.rel = "preconnect";
      pre.href = pair[0];
      if (pair[1]) pre.crossOrigin = "anonymous";
      document.head.appendChild(pre);
    });

    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Mukta+Mahee:wght@400;600;700;800&display=swap";
    document.head.appendChild(link);
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  // Pull the active language out of a {en, pa} pair.
  // Falls back to English so a missing translation never blanks the page.
  function t(pair) {
    if (pair == null) return "";
    if (typeof pair === "string") return pair;
    return (lang === "pa" && pair.pa) ? pair.pa : (pair.en || "");
  }

  var PA_DIGITS = ["੦", "੧", "੨", "੩", "੪", "੫", "੬", "੭", "੮", "੯"];

  function digits(str) {
    if (lang !== "pa") return str;
    return String(str).replace(/[0-9]/g, function (d) { return PA_DIGITS[+d]; });
  }

  // "17:00" -> "5:00 PM" / "੫:੦੦ ਸ਼ਾਮ"
  function pretty(hhmm) {
    var p = hhmm.split(":");
    var h = parseInt(p[0], 10);
    var suffix = h >= 12 ? t(D.ui.pm) : t(D.ui.am);
    var h12 = h % 12 === 0 ? 12 : h % 12;
    return digits(h12 + ":" + p[1]) + " " + suffix;
  }

  function addDays(isoDate, n) {
    var d = new Date(isoDate + "T12:00:00");
    d.setDate(d.getDate() + n);
    return d.toISOString().slice(0, 10);
  }

  // "2026-10-01" + "17:00" -> "20261001T170000"
  function stamp(isoDate, hhmm) {
    return isoDate.replace(/-/g, "") + "T" + hhmm.replace(":", "") + "00";
  }

  /* ---------- Calendar (.ics) ----------
     Always built in English so the file reads correctly in any
     calendar app, regardless of which language the page is showing. */

  function buildICS() {
    var lines = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Connecticut Akhand Keertan Samaagam//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "X-WR-CALNAME:" + D.title.en
    ];
    var seq = 0;
    D.schedule.forEach(function (day) {
      day.events.forEach(function (e) {
        var endDate = e.endsNextDay ? addDays(day.date, 1) : day.date;
        seq++;
        lines.push(
          "BEGIN:VEVENT",
          "UID:ctsamaagam-" + day.date + "-" + seq + "@ctsamaagam",
          "DTSTAMP:" + new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z",
          "DTSTART;TZID=" + TZ + ":" + stamp(day.date, e.start),
          "DTEND;TZID=" + TZ + ":" + stamp(endDate, e.end),
          "SUMMARY:" + e.name.en + (e.tentative ? " (tentative)" : ""),
          "LOCATION:" + D.venue.name.en + ", " + D.venue.fullAddress,
          "DESCRIPTION:" + D.title.en,
          "END:VEVENT"
        );
      });
    });
    lines.push("END:VCALENDAR");
    return lines.join("\r\n");
  }

  /* A full-width button, or a greyed "Opening soon" one when the url is
     empty. Everything tappable on this page is a 64px button — see
     `.btn` in styles.css. */
  function buttonHTML(item) {
    if (!item.url) {
      return '<li><div class="btn btn--off">' +
        '<span>' + esc(t(item.title)) + '</span>' +
        '<span class="row__soon">' + esc(t(D.ui.soon)) + '</span></div></li>';
    }
    return '<li><a class="btn btn--solid" href="' + esc(item.url) + '" target="_blank" rel="noopener">' +
      esc(t(item.title)) + '</a></li>';
  }

  /* ---------- Render ---------- */

  var mapQuery = encodeURIComponent(D.venue.name.en + ", " + D.venue.fullAddress);

  function render() {
    document.documentElement.lang = lang === "pa" ? "pa" : "en";
    document.body.classList.toggle("lang-pa", lang === "pa");
    if (lang === "pa") loadGurmukhiFont();
    document.title = t(D.title) + " — " + t(D.dates);

    // Masthead
    el("occasion").textContent = t(D.occasion);
    el("title").textContent = t(D.title);
    el("dates").textContent = t(D.dates);
    el("place").textContent = D.venue.cityStateZip;

    // "Concluded" marker, shown only after the Samaagam
    el("badge").hidden = !D.concluded;
    el("badge").textContent = t(D.ui.concluded);

    // Footer
    el("footName").textContent = t(D.title);
    el("footYear").textContent = digits(D.year);

    // Language toggle state
    var isPa = lang === "pa";
    el("langEn").setAttribute("aria-pressed", String(!isPa));
    el("langPa").setAttribute("aria-pressed", String(isPa));

    // Section headings
    el("hSchedule").textContent = t(D.headings.schedule);
    el("hLocation").textContent = t(D.headings.location);
    el("hForms").textContent = t(D.headings.forms);
    el("hAirports").textContent = t(D.headings.airports);
    el("hContact").textContent = t(D.headings.contact);

    // Schedule: a day label, then the name over the time for each event
    el("schedule").innerHTML = D.schedule.map(function (day) {
      var rows = day.events.map(function (e) {
        return '<div class="evt">' +
          '<p class="evt__name">' + esc(t(e.name)) +
            (e.tentative ? '<span class="tentative">' + esc(t(D.ui.tentative)) + '</span>' : '') +
          '</p>' +
          '<p class="evt__time">' + pretty(e.start) + " – " + pretty(e.end) + '</p>' +
        '</div>';
      }).join("");
      return '<div class="day"><p class="day__label">' + esc(t(day.label)) + '</p>' + rows + '</div>';
    }).join("");

    // Calendar button
    el("addCal").textContent = t(D.ui.addCal);
    el("addCalSub").textContent = t(D.ui.addCalSub);

    // Venue
    el("venueName").textContent = t(D.venue.name);
    el("venueAddr").innerHTML = esc(D.venue.street) + "<br>" + esc(D.venue.cityStateZip);
    el("mapsGoogle").href = "https://www.google.com/maps/search/?api=1&query=" + mapQuery;
    el("mapsApple").href = "https://maps.apple.com/?q=" + mapQuery;
    el("mapsGoogle").textContent = t(D.ui.google);
    el("mapsApple").textContent = t(D.ui.apple);

    // Forms — the title is the button; no description text
    el("forms").innerHTML = D.forms.map(buttonHTML).join("");

    /* After the Samaagam: the recordings replace the schedule, location,
       forms and airports — there is nothing left to travel to. The
       contact numbers stay. */
    var rec = D.concluded ? D.recordings : null;
    ["secSchedule", "secLocation", "secForms", "secAirports"].forEach(function (id) {
      el(id).hidden = !!rec;
    });
    el("secRecordings").hidden = !rec;
    if (rec) {
      el("hRecordings").textContent = t(rec.heading);
      el("recordingsMessage").textContent = t(rec.message);
      el("recordingsLinks").innerHTML = rec.links.map(buttonHTML).join("");

      // Earlier years, hidden entirely until there is at least one.
      var past = rec.past || [];
      el("hRecordingsPast").hidden = !past.length;
      el("hRecordingsPast").textContent = t(rec.pastHeading);
      el("recordingsPast").innerHTML = past.map(buttonHTML).join("");
    }

    // Airports — code, name and city, with the drive time flush right
    el("airports").innerHTML = D.airports.map(function (a) {
      return '<li><a class="airport" href="https://www.google.com/maps/dir/?api=1&destination=' + mapQuery +
        '&origin=' + encodeURIComponent(a.name.en + " Airport") + '" target="_blank" rel="noopener">' +
        '<span class="airport__code">' + esc(a.code) + '</span>' +
        '<span class="airport__text">' +
          '<span class="airport__name">' + esc(t(a.name)) + '</span>' +
          '<span class="airport__where">' + esc(t(a.where)) + '</span>' +
        '</span>' +
        '<span class="airport__drive">' + esc(t(a.drive)) + '</span></a></li>';
    }).join("");

    // Contacts — phone numbers only, no labels.
    // Deliberately NOT converted to Gurmukhi numerals: a phone number is
    // something people read aloud and dial by hand.
    el("contactLede").textContent = t(D.ui.callUs);
    el("contacts").innerHTML = D.contacts.map(function (phone) {
      return '<li><a class="btn btn--phone" href="tel:' + phone.replace(/[^0-9+]/g, "") + '">' +
        esc(phone) + '</a></li>';
    }).join("");
  }

  function setLang(next) {
    lang = next;
    try { localStorage.setItem(STORE_KEY, next); } catch (err) { /* ignore */ }
    render();
  }

  el("langEn").addEventListener("click", function () { setLang("en"); });
  el("langPa").addEventListener("click", function () { setLang("pa"); });

  el("addCal").addEventListener("click", function () {
    var blob = new Blob([buildICS()], { type: "text/calendar;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "ct-samaagam-" + D.year + ".ics";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
  });

  render();
})();
