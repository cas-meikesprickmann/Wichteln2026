/* Logik der App – hier musst du nichts ändern. */
(function () {
  "use strict";

  var liste = document.getElementById("kacheln");
  var start = document.getElementById("start");
  var detail = document.getElementById("detail");
  var hintergrund = document.getElementById("dialog-hintergrund");
  var jaKnopf = document.getElementById("ja");
  var abbrechenKnopf = document.getElementById("abbrechen");

  var gewaehlt = null;      // Eintrag, der gerade bestätigt werden soll
  var letzteKachel = null;  // Kachel, auf die der Fokus zurückkehrt

  // Eintrag ist nur nutzbar, wenn Titel und Link vorhanden sind
  function istFertig(e) {
    return e.titel.trim() !== "" && e.linkUrl.trim() !== "";
  }

  // Kacheln aufbauen
  WUENSCHE.forEach(function (e) {
    var li = document.createElement("li");
    var b = document.createElement("button");
    b.type = "button";
    b.className = "kachel";
    b.innerHTML = '<span class="kachel-icon" aria-hidden="true"></span><span class="kachel-name"></span>';
    b.querySelector(".kachel-icon").textContent = e.icon;
    b.querySelector(".kachel-name").textContent = e.name;
    if (istFertig(e)) {
      b.addEventListener("click", function () { dialogOeffnen(e, b); });
    } else {
      b.disabled = true;
      b.setAttribute("aria-label", e.name + " (noch kein Wunsch hinterlegt)");
    }
    li.appendChild(b);
    liste.appendChild(li);
  });

  function dialogOeffnen(eintrag, kachel) {
    gewaehlt = eintrag;
    letzteKachel = kachel;
    hintergrund.hidden = false;
    abbrechenKnopf.focus(); // sicherste Voreinstellung: "Lieber nicht"
  }

  function dialogSchliessen() {
    hintergrund.hidden = true;
    gewaehlt = null;
    if (letzteKachel) letzteKachel.focus();
  }

  // Detailansicht wird ausschließlich hier gefüllt, also nur nach "Ja"
  function detailZeigen(e) {
    document.getElementById("detail-icon").textContent = e.icon;
    document.getElementById("detail-name").textContent = "Wunsch von " + e.name;
    document.getElementById("detail-titel").textContent = e.titel;
    document.getElementById("detail-text").textContent = e.beschreibung;
    var link = document.getElementById("detail-link");
    link.textContent = e.linkText || "Zum Link";
    link.href = e.linkUrl;
    start.hidden = true;
    detail.hidden = false;
    document.getElementById("detail-titel").focus();
    window.scrollTo(0, 0);
  }

  function detailSchliessen() {
    detail.hidden = true;
    document.getElementById("detail-titel").textContent = "";
    document.getElementById("detail-text").textContent = "";
    document.getElementById("detail-link").removeAttribute("href");
    start.hidden = false;
    if (letzteKachel) letzteKachel.focus();
  }

  jaKnopf.addEventListener("click", function () {
    var e = gewaehlt;
    hintergrund.hidden = true;
    gewaehlt = null;
    if (e) detailZeigen(e);
  });
  abbrechenKnopf.addEventListener("click", dialogSchliessen);
  document.getElementById("zurueck").addEventListener("click", detailSchliessen);

  // Klick neben den Dialog = abbrechen
  hintergrund.addEventListener("click", function (ev) {
    if (ev.target === hintergrund) dialogSchliessen();
  });

  // Tastatur: Esc schließt, Tab bleibt im Dialog
  document.addEventListener("keydown", function (ev) {
    if (hintergrund.hidden) return;
    if (ev.key === "Escape") { dialogSchliessen(); return; }
    if (ev.key === "Tab") {
      var a = jaKnopf, b = abbrechenKnopf;
      if (ev.shiftKey && document.activeElement === a) { ev.preventDefault(); b.focus(); }
      else if (!ev.shiftKey && document.activeElement === b) { ev.preventDefault(); a.focus(); }
    }
  });
})();
