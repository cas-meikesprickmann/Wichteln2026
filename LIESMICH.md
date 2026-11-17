# Weihnachtswünsche – kurze Anleitung

## Veröffentlichen mit GitHub Pages
1. Bei github.com anmelden (kostenloses Konto) und oben rechts auf **+ → New repository** klicken.
2. Einen Namen vergeben (z. B. `weihnachten`), **Public** wählen, **Create repository** klicken.
3. Auf **uploading an existing file** klicken und die 4 Dateien `index.html`, `style.css`, `script.js`, `wuensche.js` hineinziehen (nicht den Ordner, sondern die Dateien). Unten **Commit changes** klicken.
4. Oben auf **Settings → Pages**. Bei „Branch“ **main** und **/ (root)** wählen, **Save** klicken.
5. Nach 1 bis 2 Minuten erscheint oben auf der Seite dein Link, ungefähr `https://DEINNAME.github.io/weihnachten/`.

## Texte und Links ändern
1. Im Repository auf die Datei `wuensche.js` klicken.
2. Oben rechts auf das Stift-Symbol (Edit) klicken.
3. Nur den Text zwischen den Anführungszeichen ändern, dann **Commit changes**.
4. Nach etwa 1 Minute ist die Änderung online.

Leere Felder bei `titel` oder `linkUrl` = Kachel ist ausgegraut.

## Protokoll einrichten (wer klickt auf welchen Wunsch)
1. Auf forms.google.com ein neues Formular erstellen. Zwei Fragen vom Typ **Kurzantwort**: „Wer klickt?“ und „Wessen Wunsch?“.
2. Im Formular oben auf **Einstellungen**: Anmeldung **nicht** verlangen und **nicht** auf eine Antwort pro Person begrenzen.
3. Oben auf **Antworten → In Tabellen ansehen**, damit die Klicks in einer Google-Tabelle landen (nur für dich sichtbar).
4. Im Formular auf die drei Punkte **⋮ → Vorausgefüllten Link abrufen**. Beide Fragen mit „test“ ausfüllen, **Link abrufen**, **Link kopieren**.
5. Der Link sieht so aus: `https://docs.google.com/forms/d/e/ABC.../viewform?usp=pp_url&entry.111=test&entry.222=test`
   - `formUrl` = alles bis `/viewform`, aber mit `/formResponse` am Ende
   - `feldWer` = `entry.111`, `feldWunsch` = `entry.222`
6. Diese drei Werte in `tracking.js` eintragen und die Datei bei GitHub hochladen.
