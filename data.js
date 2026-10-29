/* ============================================================
   EDIT THIS FILE TO UPDATE THE SITE. Nothing else needs to change.

   Every piece of text is a pair:  { en: "English", pa: "ਪੰਜਾਬੀ" }
   Edit both halves. If you leave `pa` empty, the English shows in
   its place, so a missing translation never blanks the page.

   ---- Turning the page over to a new year ----
   1. Set `year` and `concluded: false`.
   2. Update `dates` and the whole `schedule`.
   3. Move last year's entry from `recordings.links` into
      `recordings.past` (newest first).
   4. Blank each form `url` back to "" until the new form exists.
   Nothing else needs undoing.
   ============================================================ */

window.SAMAAGAM = {

  // ---- Event basics -----------------------------------------

  // The year this page is about. Shown in the footer and used to name
  // the downloaded calendar file.
  year: 2026,

  // false  → the page shows the schedule, location, forms and airports.
  // true   → the Samaagam is over: those four sections are replaced by
  //          the recordings links. Contact numbers stay either way.
  concluded: true,

  title: {
    en: "Connecticut Akhand Keertan Samaagam",
    pa: "ਕਨੈਕਟੀਕਟ ਅਖੰਡ ਕੀਰਤਨ ਸਮਾਗਮ"
  },
  occasion: {
    en: "In celebration of the Parakash Purab of Dhan Dhan Sri Guru Raamdaas Sahib Ji",
    pa: "ਧੰਨ ਧੰਨ ਸ੍ਰੀ ਗੁਰੂ ਰਾਮਦਾਸ ਸਾਹਿਬ ਜੀ ਦੇ ਪ੍ਰਕਾਸ਼ ਪੁਰਬ ਦੀ ਖੁਸ਼ੀ ਵਿੱਚ"
  },
  dates: {
    en: "October 1 – 4, 2026",
    pa: "੧ – ੪ ਅਕਤੂਬਰ, ੨੦੨੬"
  },

  // ---- Venue -------------------------------------------------
  venue: {
    name: {
      en: "Gurdwara Guru Nanak Darbar",
      pa: "ਗੁਰਦੁਆਰਾ ਗੁਰੂ ਨਾਨਕ ਦਰਬਾਰ"
    },
    street: "1610 West Street",
    cityStateZip: "Southington, CT 06489",
    // Used for map links and calendar entries — always plain English
    fullAddress: "1610 West Street, Southington, CT 06489"
  },

  // ---- Schedule ----------------------------------------------
  // start & end are 24h "HH:MM" on the given date (America/New_York).
  // If an event runs past midnight, set endsNextDay: true.
  schedule: [
    {
      date: "2026-10-01",
      label: { en: "Thursday, Oct 1", pa: "ਵੀਰਵਾਰ, ੧ ਅਕਤੂਬਰ" },
      events: [
        {
          name: { en: "Evening Akhand Keertan", pa: "ਸ਼ਾਮ ਦਾ ਅਖੰਡ ਕੀਰਤਨ" },
          start: "17:00", end: "20:30"
        }
      ]
    },
    {
      date: "2026-10-02",
      label: { en: "Friday, Oct 2", pa: "ਸ਼ੁੱਕਰਵਾਰ, ੨ ਅਕਤੂਬਰ" },
      events: [
        {
          name: { en: "Amrit Vela & Asa Ki Vaar Keertan", pa: "ਅੰਮ੍ਰਿਤ ਵੇਲਾ ਤੇ ਆਸਾ ਕੀ ਵਾਰ ਕੀਰਤਨ" },
          start: "03:00", end: "09:00"
        },
        {
          name: { en: "Evening Akhand Keertan", pa: "ਸ਼ਾਮ ਦਾ ਅਖੰਡ ਕੀਰਤਨ" },
          start: "17:00", end: "21:00"
        }
      ]
    },
    {
      date: "2026-10-03",
      label: { en: "Saturday, Oct 3", pa: "ਸ਼ਨਿੱਚਰਵਾਰ, ੩ ਅਕਤੂਬਰ" },
      events: [
        {
          name: { en: "Amrit Vela & Asa Ki Vaar Keertan", pa: "ਅੰਮ੍ਰਿਤ ਵੇਲਾ ਤੇ ਆਸਾ ਕੀ ਵਾਰ ਕੀਰਤਨ" },
          start: "03:00", end: "10:30"
        },
        {
          name: { en: "Rainnsabaee Keertan", pa: "ਰੈਣਸਬਾਈ ਕੀਰਤਨ" },
          start: "19:00", end: "04:00", endsNextDay: true
        }
      ]
    }
  ],

  // ---- Forms (Google Forms links) -----------------------------
  // Paste the Google Form URL into `url`. The title becomes the link.
  // Leave url empty ("") to grey the row out with an "Opening soon" note.
  forms: [
    {
      title: { en: "Submit Rehaish Google Form", pa: "ਰਿਹਾਇਸ਼ ਗੂਗਲ ਫਾਰਮ ਭਰੋ" },
      url: "https://docs.google.com/forms/d/1CWcwb_cHjnb0nqdR_hlPjvQ2PAwYJDN4vKVv6CqCDxg/viewform"
    }
  ],

  // ---- Nearby airports ----------------------------------------
  airports: [
    {
      code: "BDL",
      name: { en: "Bradley International", pa: "ਬ੍ਰੈਡਲੀ ਇੰਟਰਨੈਸ਼ਨਲ" },
      where: { en: "Windsor Locks, CT", pa: "ਵਿੰਡਸਰ ਲੌਕਸ, CT" },
      drive: { en: "35 min", pa: "੩੫ ਮਿੰਟ" }
    },
    {
      code: "HVN",
      name: { en: "Tweed New Haven", pa: "ਟਵੀਡ ਨਿਊ ਹੈਵਨ" },
      where: { en: "New Haven, CT", pa: "ਨਿਊ ਹੈਵਨ, CT" },
      drive: { en: "40 min", pa: "੪੦ ਮਿੰਟ" }
    },
    {
      code: "LGA",
      name: { en: "LaGuardia", pa: "ਲਾਗਵਾਰਡੀਆ" },
      where: { en: "Queens, NY", pa: "ਕੁਈਨਜ਼, NY" },
      drive: { en: "2 hr", pa: "੨ ਘੰਟੇ" }
    },
    {
      code: "BOS",
      name: { en: "Boston Logan International", pa: "ਬੋਸਟਨ ਲੋਗਨ ਇੰਟਰਨੈਸ਼ਨਲ" },
      where: { en: "Boston, MA", pa: "ਬੋਸਟਨ, MA" },
      drive: { en: "2 hr", pa: "੨ ਘੰਟੇ" }
    },
    {
      code: "JFK",
      name: { en: "John F. Kennedy International", pa: "ਜੌਹਨ ਐਫ਼. ਕੈਨੇਡੀ ਇੰਟਰਨੈਸ਼ਨਲ" },
      where: { en: "Queens, NY", pa: "ਕੁਈਨਜ਼, NY" },
      drive: { en: "2 hr 15 min", pa: "੨ ਘੰਟੇ ੧੫ ਮਿੰਟ" }
    },
    {
      code: "EWR",
      name: { en: "Newark Liberty International", pa: "ਨਿਵਾਰਕ ਲਿਬਰਟੀ ਇੰਟਰਨੈਸ਼ਨਲ" },
      where: { en: "Newark, NJ", pa: "ਨਿਵਾਰਕ, NJ" },
      drive: { en: "2 hr 15 min", pa: "੨ ਘੰਟੇ ੧੫ ਮਿੰਟ" }
    }
  ],

  // ---- Contacts ------------------------------------------------
  // Just phone numbers, no names.
  contacts: [
    "801-916-7247",
    "860-294-1037",
    "203-767-9884"
  ],

  // ---- Recordings ----------------------------------------------
  // Shown in place of the schedule, location, forms and airports once
  // `concluded` above is true. A link with an empty url greys out.
  recordings: {
    heading: { en: "Listen & watch", pa: "ਸੁਣੋ ਤੇ ਦੇਖੋ" },
    message: {
      en: "The Samaagam has concluded. The full keertan is available to listen to and watch.",
      pa: "ਸਮਾਗਮ ਸੰਪੂਰਨ ਹੋ ਗਿਆ ਹੈ। ਪੂਰਾ ਕੀਰਤਨ ਸੁਣਨ ਤੇ ਦੇਖਣ ਲਈ ਉਪਲਬਧ ਹੈ।"
    },
    links: [
      {
        title: { en: "Livestream playlist on YouTube", pa: "ਯੂਟਿਊਬ ਉੱਤੇ ਲਾਈਵਸਟ੍ਰੀਮ ਪਲੇਲਿਸਟ" },
        url: "https://www.youtube.com/playlist?list=PLbFdD28mbl3A"
      },
      {
        title: { en: "Full album on SoundCloud", pa: "ਸਾਊਂਡਕਲਾਉਡ ਉੱਤੇ ਪੂਰੀ ਐਲਬਮ" },
        url: "https://soundcloud.com/keertanhd/sets/connecticut-samagaam-2026"
      }
    ],

    // Earlier years, newest first. Add a line per year as each album goes
    // up on SoundCloud; the list hides itself entirely when empty.
    pastHeading: { en: "Previous years", pa: "ਪਿਛਲੇ ਸਾਲ" },
    past: [
      {
        title: { en: "Connecticut Samaagam 2025", pa: "ਕਨੈਕਟੀਕਟ ਸਮਾਗਮ ੨੦੨੫" },
        url: "https://soundcloud.com/keertanhd/sets/connecticut-samaagam-2025"
      },
      {
        title: { en: "Connecticut Samaagam 2024", pa: "ਕਨੈਕਟੀਕਟ ਸਮਾਗਮ ੨੦੨੪" },
        url: "https://soundcloud.com/keertanhd/sets/connecticut-samagaam-2024"
      }
    ]
  },

  // ---- Section headings --------------------------------------
  headings: {
    schedule: { en: "Schedule",        pa: "ਸਮਾਂ-ਸਾਰਣੀ" },
    location: { en: "Getting there",   pa: "ਸਥਾਨ" },
    forms:    { en: "Staying with us", pa: "ਸਾਡੇ ਨਾਲ ਰਿਹਾਇਸ਼" },
    airports: { en: "Nearby airports", pa: "ਨੇੜਲੇ ਹਵਾਈ ਅੱਡੇ" },
    contact:  { en: "Questions",       pa: "ਸੰਪਰਕ" }
  },

  // ---- Button and label text ---------------------------------
  ui: {
    concluded:  { en: "Concluded",     pa: "ਸੰਪੂਰਨ" },
    addCal:     { en: "Add all events to my calendar", pa: "ਸਾਰੇ ਪ੍ਰੋਗਰਾਮ ਮੇਰੇ ਕੈਲੰਡਰ ਵਿੱਚ ਪਾਓ" },
    addCalSub:  { en: "Downloads a calendar file (.ics)", pa: "ਕੈਲੰਡਰ ਫ਼ਾਈਲ (.ics) ਡਾਊਨਲੋਡ ਹੋਵੇਗੀ" },
    google:     { en: "Open in Google Maps", pa: "ਗੂਗਲ ਮੈਪਸ ਵਿੱਚ ਖੋਲ੍ਹੋ" },
    apple:      { en: "Open in Apple Maps",  pa: "ਐਪਲ ਮੈਪਸ ਵਿੱਚ ਖੋਲ੍ਹੋ" },
    callUs:     { en: "Call any of the numbers below and we will help.", pa: "ਹੇਠਾਂ ਦਿੱਤੇ ਕਿਸੇ ਵੀ ਨੰਬਰ ਉੱਤੇ ਫ਼ੋਨ ਕਰੋ, ਅਸੀਂ ਮਦਦ ਕਰਾਂਗੇ।" },
    soon:       { en: "Opening soon",  pa: "ਜਲਦੀ ਸ਼ੁਰੂ ਹੋਵੇਗਾ" },
    tentative:  { en: "Tentative",     pa: "ਸੰਭਾਵੀ" },
    am:         { en: "AM", pa: "ਸਵੇਰੇ" },
    pm:         { en: "PM", pa: "ਸ਼ਾਮ" }
  }
};
