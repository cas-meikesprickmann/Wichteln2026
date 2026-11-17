/* ==========================================================================
   HIER PFLEGST DU DIE INHALTE – das ist die wichtigste Datei zum Ändern.

   So geht's:
   - Ersetze nur den Text zwischen den Anführungszeichen "..."
   - Anführungszeichen, Doppelpunkte und Kommas NICHT löschen.
   - Jede Person hat eine Liste "links". Pro Link gibt es eine Zeile:
         { text: "Text auf dem Knopf", url: "https://..." },
     Weitere Links = weitere Zeilen. Eine Zeile löschen = ein Link weniger.
   - Eine Zeile mit leerer url ("") wird nicht angezeigt.
   - Hat eine Person keinen Titel oder keinen Link mit url, ist die Kachel
     automatisch ausgegraut und nicht anklickbar.
   - Jede url muss mit https:// beginnen.
   - Für einen Zeilenumbruch in der Beschreibung schreibst du \n
   ========================================================================== */

const WUENSCHE = [
  {
    name: "Mareen", icon: "⭐",
    titel: "Eine Heißluft Fritteuse für Mareen",
    beschreibung: "Mareen wünscht sich die Heißluftfritteuse von Russel Hobbs, genauer das Modell AF140EU 4 in 1. Die Heißluftfritteuse ist zur Zeit auf 79 € reduziert.",
    links: [
      { text: "Zur Heißluftfritteuse", url: "https://www.sharkninja.de/ninja-heissluftfritteuse-pro-47-l/AF140EU.html" }
    ]
  },
  {
    name: "Nino", icon: "🔔",
    titel: "Smarter Ring für Nino",
    beschreibung: "Nino wünscht sich einen Smarten Ring, der Benachrichtigungen des Handys durch Vibration anzeigt. Wichtig ist ihm, dass man kein Abo braucht, um den Ring zu nutzten. Ringgröße ist 6,5 cm.",
    links: [
      { text: "Zum Smarten Ring", url: "https://amzn.eu/d/04qk8iNe" }
    ]
  },
  {
    name: "Marion", icon: "🎁",
    titel: "Barfuß-Sportschuhe für Marion",
    beschreibung: "Marion wünscht sich einen Barfußschuh von der Marke Leguano für den Sport beim TSV, Modell inspiro Sport oder Score in Schwarz in der Größe 40.",
    links: [
      { text: "Zum Barfußschuh", url: "https://www.sportsonline.de/leguano-inspiro-barfussschuhe-slipper-black-1006301040-1359277?affiliateCode=Idealo_SportOnline_de" }
    ]
  },
  {
    name: "Stefan", icon: "🕯️",
    titel: "Ein fairer Pullover Stefan",
    beschreibung: "Stefan freut sich über einen neuen Pullover von der fairen Marke Armed Angels. Er hat sich das Modell BAARO FLEECE SWEATSHIRT aus 100% Bio-Baumwolle ausgesucht. Er trägt Größe XL und möchte die Farbe Petrol Velvet.",
    links: [
      { text: "Zum Pullover", url: "https://www.armedangels.com/products/baaro-fleece-sweatshirt-petrol-velvet?option_values=11973503746373%2C11973503254853" }
    ]
  },
  {
    name: "Gino", icon: "🌲",
    titel: "Eine Heizweste für Gino",
    beschreibung: "Kalte Tagen können Gino bald ncihts mehr anhaben, denn er wünscht sich eine Heitzweste. Er hat bei Amazon ein gutes Modell gefunden, Gino mächte die Größe XL.",
    links: [
      { text: "Zur Heitzweste", url: "https://amzn.eu/d/02FJ18mx" }
    ]
  },
  {
    name: "Gaby", icon: "❄️",
    titel: "Eine Handtasche für Gaby",
    beschreibung: "Gaby freut sich über eine neue Handtasche. Sie hat sich ein besonders schönes Modell ausgesucht, das sie lange begeliten soll. Da sie etwas teuer ist, als unser Preisrahmen, gibt sie gerne was dazu.",
    links: [
      { text: "Zur Handtasche", url: "https://amzn.eu/d/091znlGQ" }
    ]
  },
  {
    name: "Meike", icon: "🛷",
    titel: "Ein Beschriftungsgerät für Meike",
    beschreibung: "Meike freut sich über ein Beschriftungsgerät. Sie hat sich ein schönes Modell ausgesucht: P-touch E110 von Brother in schwarz&orange. Die Farbe ist nicht ganz so wichtig. Ein Beschriftungsgerät bruacht auch noch Beschriftungsbänder. Hier wünscht Meike sich: brother Schriftband TZe-131 TZE131, 12 mm schwarze Schrift aud weißem Band und weiße Schrift auf schwarzem Band.",
    links: [
      { text: "Zum Beschriftungsgerät", url: "https://www.bueroshop24.de/brother-p-touch-e110-beschriftungsgeraet-416204" },
      { text: "Zum Schriftband (schwarz auf weiß)", url: "https://www.bueroshop24.de/brother-tze-231-schriftband-653162" },   // <- hier noch den Link eintragen
      { text: "Zum Schriftband (weiß auf schwarz)", url: "https://www.bueroshop24.de/brother-tze-335-schriftband-784868" }    // <- hier noch den Link eintragen
    ]
  },
  {
    name: "Julian", icon: "🍬",
    titel: "iPhone Hülle und Portemonnaie ",
    beschreibung: "Julian möchte sein Portemonnaie mit seinem Handy verbinden und wünscht sich dazu eine iPhonehülle mit Mac Safe für sein IPhone 12 Pro und das smarte Portemonnaie von Apple.",
    links: [
      { text: "Zur iPhone-Hülle", url: "https://amzn.eu/d/0impGN5n" },    // <- hier noch den Link eintragen
      { text: "Zum Portemonnaie", url: "https://amzn.eu/d/08aBELML" }     // <- hier noch den Link eintragen
    ]
  },
  {
    name: "Christel", icon: "🎅",
    titel: "Ein TV-Zeitschriften Abo für Christel",
    beschreibung: "Christel ließt sehr gerne die TV-Zeitschrift TV Hören und Sehen. Sie würde sich sehr über ein Jahresabofreuen.",
    links: [
      { text: "Zum Jahres-Abo", url: "https://www.abomix.de/tv-hoeren-sehen/jahresabo" }
    ]
  }
];
