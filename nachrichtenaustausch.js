const nachrichtZuVerschluesseln = document.querySelector(".encryptionField");
const verschluesselnSubmit = document.querySelector(".encryptMessage");
const entschluesselnSubmit = document.querySelector(".decryptionField");
const encryptedMessage = document.querySelector(".encryptedMessage");
const decryptedMessage = document.querySelector(".decryptedMessage");

function verschluesseln(klartext, schluessel) {
  let text = {};

  if (typeof klartext === "string") {
    text = klartext.split("");
  }

  let tmp0 = text[0];
  let tmp1 = text[1];
  text[0] = text[text.length - 2];
  text[1] = text[text.length - 1];
  text[text.length - 2] = tmp1;
  text[text.length - 1] = tmp0;

  for (let i = 0; i < text.length; i++) {
    text[i] = text[i].charCodeAt(0) + schluessel;
  }

  for (let i = 0; i < text.length; i++) {
    if (text[i] % 2 === 0) {
      text[i] += 6;
    }
    text[i] = String.fromCharCode(text[i]);
  }

  return text.join("");
}

function entschluesseln(klartext, schluessel) {
  let text = {};

  if (typeof klartext === "string") {
    text = klartext.split("");
  }

  for (let i = 0; i < text.length; i++) {
    if (text[i] % 2 === 0) {
      text[i] = String.fromCharCode(text[i].charCodeAt(0) + 6);
    }
  }

  for (let i = 0; i < text.length; i++) {
    text[i] = String.fromCharCode(text[i].charCodeAt(0) - schluessel);
  }

  let tmp0 = text[0];
  let tmp1 = text[1];
  text[0] = text[text.length - 1];
  text[1] = text[text.length - 2];
  text[text.length - 1] = tmp0;
  text[text.length - 2] = tmp1;

  return text.join("");
}

function generiereSchluessel(text) {
  let schluessel = text.length % 4;
  schluessel = schluessel + 1;
  return schluessel;
}

function verUndEntschluesseln() {
  let klartextNachricht = String(nachrichtZuVerschluesseln.value);
  let schluessel = generiereSchluessel(klartextNachricht);
  let geheimtext = verschluesseln(klartextNachricht, schluessel);
  encryptedMessage.textContent = "verschlüsselte Nachricht: " + geheimtext;
  decryptedMessage.textContent = "entschlüsselte Nachricht: " + entschluesseln(geheimtext, schluessel);
}

verschluesselnSubmit.addEventListener("click", verUndEntschluesseln);
