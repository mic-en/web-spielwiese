CSS-Selektoren Übung:

Wähle das h1-Element im header-Element und ändere die Textfarbe zu Blau.
Wähle alle p-Elemente, die direkt in einem Element mit der Klasse post liegen, und setze die Schriftgröße auf 18px.
Wähle den Artikel mit der ID primary und gib ihm einen gelben Hintergrund.
Wähle alle h2-Elemente, die sich in einem Element mit der Klasse highlight befinden, und mache den Text fett und rot.
Wähle das footer-Element und zentriere den Text darin.
Wenn du diese Übung fertiggestellt hast, solltest du ein besseres Verständnis dafür haben, wie du mit CSS-Selektoren gezielt HTML-Elemente ansprechen und stilisieren kannst. Du kannst die Ergebnisse im Browser überprüfen, indem du die HTML- und CSS-Codes in separaten Dateien speicherst und die HTML-Datei in einem Webbrowser öffnest.




Übung 1: Selektoren
Gegeben sei folgende HTML-Struktur:

html
Copy code
<div class="box special">
  <p>Erster Absatz in einer speziellen Box.</p>
  <p class="highlight">Hervorgehobener Absatz in einer speziellen Box.</p>
</div>

<div class="box">
  <p>Zweiter Absatz in einer normalen Box.</p>
  <p id="unique-paragraph">Einzigartiger Absatz in einer normalen Box.</p>
</div>
Wähle alle p-Elemente innerhalb der div mit der Klasse box und setze die Schriftfarbe auf Grün.
Wähle das p-Element mit der ID unique-paragraph und setze die Schriftfarbe auf Blau.
Wähle das p-Element mit der Klasse highlight innerhalb der div mit der Klasse special und setze die Schriftgröße auf 20px und die Schriftfarbe auf Rot.
Übung 2: Cascade
Für die folgenden CSS-Regeln, schreibe auf, welche Farbe das p-Element haben wird:

css
Copy code
p {
  color: red;
}

.box p {
  color: green;
}

div p {
  color: blue;
}
Übung 3: Specificity
Gegeben sei folgendes CSS:

css
Copy code
#container .box p {
  color: blue;
}

.box p {
  color: green;
}

p {
  color: red;
}

div p {
  color: purple;
}
Angenommen, alle p-Elemente befinden sich innerhalb einer div mit der Klasse box, welche sich wiederum innerhalb eines div mit der ID container befindet. Welche Farbe haben die p`-Elemente? Warum?

Übung 4: Inheritance
Gegeben sei folgendes CSS:

css
Copy code
.box {
  font-size: 16px;
  color: blue;
}

.box p {
  color: green;
}
Angenommen, innerhalb der div mit der Klasse box gibt es ein p-Element ohne spezifische Klasse oder ID. Welche Schriftgröße und welche Schriftfarbe hat das p-Element? Warum?

Lösungsvorschläge:
Für die Übungen 2 und 3 schreibe ich hier keine Lösungen, da du diese selbst erarbeiten solltest, um dein Verständnis zu vertiefen. Nutze die Browser-Entwicklertools, um deine Annahmen zu überprüfen. Bei den Übungen 1 und 4 solltest du die Lösungen im Browser testen und sehen, ob das Ergebnis deinen Erwartungen entspricht. Wenn du bei den Lösungen Unterstützung benötigst oder Feedback zu deinen Lösungen haben möchtest, stehe ich bereit, dir zu helfen!