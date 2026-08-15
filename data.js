/* ============================================================
   EDIT THIS FILE TO UPDATE THE SITE. Nothing else needs to change.

   Every piece of text is a pair:  { en: "English", pa: "ਪੰਜਾਬੀ" }
   Edit both halves. If you leave `pa` empty, the English shows in
   its place, so a missing translation never blanks the page.
   ============================================================ */

window.SAMAAGAM = {

  // ---- Event basics -----------------------------------------
  title: {
    en: "Connecticut Akhand Keertan Samaagam",
    pa: "ਕਨੈਕਟੀਕਟ ਅਖੰਡ ਕੀਰਤਨ ਸਮਾਗਮ"
  },
  occasion: {
    en: "In celebration of the Parakash Purab of Dhan Dhan Sri Guru Raamdaas Sahib Ji",
    pa: "ਧੰਨ ਧੰਨ ਸ੍ਰੀ ਗੁਰੂ ਰਾਮਦਾਸ ਸਾਹਿਬ ਜੀ ਦੇ ਪ੍ਰਕਾਸ਼ ਪੁਰਬ ਦੀ ਖੁਸ਼ੀ ਵਿੱਚ"
  },
  dates: {
    en: "October 1 to 4, 2026",
    pa: "ਅਕਤੂਬਰ ੧ ਤੋਂ ੪, ੨੦੨੬"
  },

  // ---- Section headings --------------------------------------
  headings: {
    schedule: { en: "Schedule",        pa: "ਸਮਾਂ-ਸਾਰਣੀ" },
    location: { en: "Location",        pa: "ਸਥਾਨ" },
    forms:    { en: "Staying with us", pa: "ਸਾਡੇ ਨਾਲ ਰਿਹਾਇਸ਼" },
    airports: { en: "Nearby airports", pa: "ਨੇੜਲੇ ਹਵਾਈ ਅੱਡੇ" },
    contact:  { en: "Contact",         pa: "ਸੰਪਰਕ" }
  },

  // ---- Button and label text ---------------------------------
  ui: {
    addCal:     { en: "Add all events to my calendar", pa: "ਸਾਰੇ ਪ੍ਰੋਗਰਾਮ ਮੇਰੇ ਕੈਲੰਡਰ ਵਿੱਚ ਪਾਓ" },
    addCalSub:  { en: "Downloads a calendar file (.ics)", pa: "ਕੈਲੰਡਰ ਫ਼ਾਈਲ (.ics) ਡਾਊਨਲੋਡ ਹੋਵੇਗੀ" },
    google:     { en: "Directions in Google Maps", pa: "ਗੂਗਲ ਮੈਪਸ ਵਿੱਚ ਰਸਤਾ" },
    apple:      { en: "Directions in Apple Maps",  pa: "ਐਪਲ ਮੈਪਸ ਵਿੱਚ ਰਸਤਾ" },
    soon:       { en: "Opening soon", pa: "ਜਲਦੀ ਸ਼ੁਰੂ ਹੋਵੇਗਾ" },
    tentative:  { en: "Tentative",    pa: "ਸੰਭਾਵੀ" },
    am:         { en: "AM", pa: "ਸਵੇਰੇ" },
    pm:         { en: "PM", pa: "ਸ਼ਾਮ" }
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
  // Leave url empty ("") to grey the card out with an "Opening soon" note.
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
      note: { en: "Windsor Locks, CT — approx. 35 min", pa: "ਵਿੰਡਸਰ ਲੌਕਸ, CT — ਲਗਭਗ ੩੫ ਮਿੰਟ" }
    },
    {
      code: "HVN",
      name: { en: "Tweed New Haven", pa: "ਟਵੀਡ ਨਿਊ ਹੈਵਨ" },
      note: { en: "New Haven, CT — approx. 40 min", pa: "ਨਿਊ ਹੈਵਨ, CT — ਲਗਭਗ ੪੦ ਮਿੰਟ" }
    },
    {
      code: "JFK",
      name: { en: "John F. Kennedy International", pa: "ਜੌਹਨ ਐਫ਼. ਕੈਨੇਡੀ ਇੰਟਰਨੈਸ਼ਨਲ" },
      note: { en: "Queens, NY — approx. 2 hr 15 min", pa: "ਕੁਈਨਜ਼, NY — ਲਗਭਗ ੨ ਘੰਟੇ ੧੫ ਮਿੰਟ" }
    },
    {
      code: "LGA",
      name: { en: "LaGuardia", pa: "ਲਾਗਵਾਰਡੀਆ" },
      note: { en: "Queens, NY — approx. 2 hr", pa: "ਕੁਈਨਜ਼, NY — ਲਗਭਗ ੨ ਘੰਟੇ" }
    },
    {
      code: "EWR",
      name: { en: "Newark Liberty International", pa: "ਨਿਵਾਰਕ ਲਿਬਰਟੀ ਇੰਟਰਨੈਸ਼ਨਲ" },
      note: { en: "Newark, NJ — approx. 2 hr 15 min", pa: "ਨਿਵਾਰਕ, NJ — ਲਗਭਗ ੨ ਘੰਟੇ ੧੫ ਮਿੰਟ" }
    },
    {
      code: "BOS",
      name: { en: "Boston Logan International", pa: "ਬੋਸਟਨ ਲੋਗਨ ਇੰਟਰਨੈਸ਼ਨਲ" },
      note: { en: "Boston, MA — approx. 2 hr", pa: "ਬੋਸਟਨ, MA — ਲਗਭਗ ੨ ਘੰਟੇ" }
    }
  ],

  // ---- Contacts ------------------------------------------------
  // Just phone numbers, no names.
  contacts: [
    "801-916-7247",
    "860-294-1037",
    "203-767-9884"
  ]
};
