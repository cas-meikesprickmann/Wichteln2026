/* ==========================================================================
   PROTOKOLL: Wer hat welchen Wunsch angeklickt?

   Die Klicks werden an ein Google-Formular geschickt. Die Antworten siehst
   nur du (in Google Formulare bzw. Google Tabellen), die Wichtel sehen nichts.

   Solange hier alles leer ("") ist, wird NICHTS gespeichert und der
   Datenschutz-Hinweis auf der Startseite bleibt unsichtbar.

   Einrichtung: siehe Datei LIESMICH.md (Abschnitt "Protokoll einrichten").
   Trage hier drei Dinge zwischen die Anführungszeichen ein:
   ========================================================================== */

const TRACKING = {
  formUrl:    "https://docs.google.com/forms/d/e/1FAIpQLSfzBkgdAY8Fmed58o9xyml9moNbkNpqqhgmuhSzDc85uPVg3w/formResponse",  // z. B. "https://docs.google.com/forms/d/e/1FAIpQLSe.../formResponse"
  feldWer:    "entry.54664319",  // z. B. "entry.1234567890"  (Frage: Wer klickt?)
  feldWunsch: "entry.822446754"   // z. B. "entry.9876543210"  (Frage: Wessen Wunsch?)
};
