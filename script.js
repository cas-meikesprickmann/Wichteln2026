/* Logik der App – hier musst du nichts ändern.
   Ablauf: "Ich bin ..." wählen -> Namenskachel einer anderen Person -> Wunsch.
   Die eigene Kachel wird nicht angezeigt.
   Der Klick auf einen Wunsch wird nur gemeldet, wenn in tracking.js etwas eingetragen ist. */
(function () {
  "use strict";

  var schritte = {
    ich: document.getElementById("schritt-ich"),
    wahl: document.getElementById("schritt-wahl"),
    wunsch: document.getElementById("schritt-wunsch")
  };
  var ich = null;           // wer gerade die App benutzt (nur im Arbeitsspeicher)
  var letzteKachel = null;  // für den Fokus beim Zurückgehen

  function istFertig(e) {
    return e.titel.trim() !== "" && e.linkUrl.trim() !== "";
  }

  function zeige(name, fokus) {
    Object.keys(schritte).forEach(function (k) { schritte[k].hidden = (k !== name); });
    document.body.dataset.seite = name; // steuert die Farbe der Seite (siehe style.css)
    window.scrollTo(0, 0);
    if (fokus) fokus.focus();
  }

  // Eine Kachel bauen. hinweis = kleine Zeile unter dem Namen (optional).
  function kachel(e, hinweis, gesperrt, beiKlick, oben) {
    var li = document.createElement("li");
    var b = document.createElement("button");
    b.type = "button";
    b.className = "kachel";
    b.innerHTML = '<span class="kachel-ober"></span><span class="kachel-icon" aria-hidden="true"></span>' +
                  '<span class="kachel-text"><span class="kachel-name"></span><span class="kachel-hinweis"></span></span>';
    b.querySelector(".kachel-ober").textContent = oben || "";
    b.querySelector(".kachel-icon").textContent = e.icon;
    b.querySelector(".kachel-name").textContent = e.name;
    b.querySelector(".kachel-hinweis").textContent = hinweis || "";
    if (gesperrt) {
      b.disabled = true;
      b.setAttribute("aria-label", e.name + (hinweis ? " (" + hinweis + ")" : ""));
    } else {
      b.addEventListener("click", function () { letzteKachel = b; beiKlick(e); });
    }
    li.appendChild(b);
    return li;
  }

  // Meldet "wer hat welchen Wunsch angeklickt" an das Google-Formular (siehe tracking.js)
  function trackingAktiv() {
    return typeof TRACKING !== "undefined" && TRACKING.formUrl && TRACKING.feldWer && TRACKING.feldWunsch;
  }
  function protokollieren(wer, wunsch) {
    if (!trackingAktiv()) return;
    try {
      var daten = new URLSearchParams();
      daten.append(TRACKING.feldWer, wer.name);
      daten.append(TRACKING.feldWunsch, wunsch.name);
      fetch(TRACKING.formUrl, { method: "POST", mode: "no-cors", body: daten, keepalive: true })
        .catch(function () {}); // Fehler bleiben für die Wichtel unsichtbar
    } catch (err) {}
  }
  if (trackingAktiv()) document.getElementById("datenhinweis").hidden = false;

  // Schritt 1: alle Namen
  var listeIch = document.getElementById("kacheln-ich");
  WUENSCHE.forEach(function (e) {
    listeIch.appendChild(kachel(e, "", false, ichWaehlen, "Ich bin"));
  });

  // Schritt 2 neu aufbauen: nur die anderen Namen, unfertige Einträge gesperrt
  function wahlAufbauen() {
    var liste = document.getElementById("kacheln-wahl");
    liste.innerHTML = "";
    WUENSCHE.forEach(function (e) {
      if (e.name === ich.name) return; // eigene Kachel wird gar nicht angezeigt
      var hinweis = istFertig(e) ? "" : "noch kein Wunsch";
      liste.appendChild(kachel(e, hinweis, !istFertig(e), wunschZeigen));
    });
  }

  function ichWaehlen(e) {
    ich = e;
    var titel = document.getElementById("wahl-titel");
    titel.textContent = "Hallo Wichtel " + e.name + "!";
    wahlAufbauen();
    zeige("wahl", titel);
  }

  // Schutz: Der eigene Wunsch wird nie angezeigt, auch nicht über Umwege
  function wunschZeigen(e) {
    if (!ich || e.name === ich.name || !istFertig(e)) return;
    protokollieren(ich, e);
    document.getElementById("detail-icon").textContent = e.icon;
    document.getElementById("detail-name").textContent = "Wunsch von " + e.name;
    document.getElementById("detail-titel").textContent = e.titel;
    document.getElementById("detail-text").textContent = e.beschreibung;
    var link = document.getElementById("detail-link");
    link.textContent = e.linkText || "Zum Link";
    link.href = e.linkUrl;
    zeige("wunsch", document.getElementById("detail-titel"));
  }

  document.getElementById("zurueck").addEventListener("click", function () {
    // Wunschinhalte wieder entfernen
    document.getElementById("detail-titel").textContent = "";
    document.getElementById("detail-text").textContent = "";
    document.getElementById("detail-link").removeAttribute("href");
    zeige("wahl", letzteKachel);
  });

  document.getElementById("nicht-ich").addEventListener("click", function () {
    ich = null;
    document.getElementById("kacheln-wahl").innerHTML = "";
    zeige("ich", schritte.ich.querySelector("h1"));
  });

  // Schnee im Hintergrund (reine Deko)
  var schnee = document.querySelector(".schnee");
  for (var i = 0; i < 40; i++) {
    var f = document.createElement("span");
    f.textContent = "\u2022";
    f.style.left = ((i * 2.5 + (i % 4) * 0.9) % 100) + "%";
    f.style.fontSize = (10 + (i % 4) * 5) + "px";
    f.style.animationDuration = (9 + (i * 7) % 12) + "s";
    f.style.animationDelay = "-" + ((i * 5) % 19) + "s";
    schnee.appendChild(f);
  }
})();
