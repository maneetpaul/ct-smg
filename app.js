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

  /* ---------- Render ---------- */

  var mapQuery = encodeURIComponent(D.venue.name.en + ", " + D.venue.fullAddress);

  function render() {
    document.documentElement.lang = lang === "pa" ? "pa" : "en";
    document.body.classList.toggle("lang-pa", lang === "pa");
    document.title = t(D.title) + " — " + t(D.dates);

    // Header
    el("occasion").textContent = t(D.occasion);
    el("title").textContent = t(D.title);
    el("dates").textContent = t(D.dates);

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

    // Schedule
    el("schedule").innerHTML = D.schedule.map(function (day) {
      var rows = day.events.map(function (e) {
        return '<div class="evt">' +
          '<span class="evt__name">' + esc(t(e.name)) +
            (e.tentative ? ' <span class="tentative">' + esc(t(D.ui.tentative)) + '</span>' : '') +
          '</span>' +
          '<span class="evt__time">' + pretty(e.start) + " – " + pretty(e.end) + '</span>' +
        '</div>';
      }).join("");
      return '<div class="day"><p class="day__label">' + esc(t(day.label)) + '</p>' + rows + '</div>';
    }).join("");

    // Calendar button
    el("addCalLabel").textContent = t(D.ui.addCal);
    el("addCalSub").textContent = t(D.ui.addCalSub);

    // Venue
    el("venueName").textContent = t(D.venue.name);
    el("venueAddr").innerHTML = esc(D.venue.street) + "<br>" + esc(D.venue.cityStateZip);
    el("mapsGoogle").href = "https://www.google.com/maps/search/?api=1&query=" + mapQuery;
    el("mapsApple").href = "https://maps.apple.com/?q=" + mapQuery;
    el("mapsGoogle").textContent = t(D.ui.google);
    el("mapsApple").textContent = t(D.ui.apple);

    // Forms — the title is the link; no description text
    el("forms").innerHTML = D.forms.map(function (f) {
      if (!f.url) {
        return '<div class="card card--off">' +
          '<span class="card__title">' + esc(t(f.title)) + '</span>' +
          '<span class="card__soon">' + esc(t(D.ui.soon)) + '</span></div>';
      }
      return '<a class="card" href="' + esc(f.url) + '" target="_blank" rel="noopener">' +
        '<span class="card__title">' + esc(t(f.title)) + '</span>' +
        '<span class="card__arrow" aria-hidden="true">→</span></a>';
    }).join("");

    // Airports
    el("airports").innerHTML = D.airports.map(function (a) {
      return '<a class="airport" href="https://www.google.com/maps/dir/?api=1&destination=' + mapQuery +
        '&origin=' + encodeURIComponent(a.name.en + " Airport") + '" target="_blank" rel="noopener">' +
        '<span class="airport__code">' + esc(a.code) + '</span>' +
        '<span class="airport__text"><span class="airport__name">' + esc(t(a.name)) + '</span>' +
        '<span class="airport__note">' + esc(t(a.note)) + '</span></span></a>';
    }).join("");

    // Contacts — phone numbers only, no labels.
    // Deliberately NOT converted to Gurmukhi numerals: a phone number is
    // something people read aloud and dial by hand.
    el("contacts").innerHTML = D.contacts.map(function (phone) {
      return '<a class="contact" href="tel:' + phone.replace(/[^0-9+]/g, "") + '">' +
        esc(phone) + '</a>';
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
    a.download = "ct-samaagam-2026.ics";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
  });

  render();
})();
