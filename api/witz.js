// api/witz.js
export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  
const witze = [
  "Ei rät nicht Ei weiß.",
  "„Ich hab zwei Radler im Kühlfach“ – Gerd, 42, Gerichtsmediziner.",
  "Wie nennt man einen kleinen Türsteher? Sicherheitshalber.",
  "Wie nennt man gesellige Hülsenfrüchte? Kontaktlinsen.",
  "Hätte ich ein Oreg, würde ich es Draulik nennen. Hü Draulik.",
  "Und wie nennt man jemanden, der DIN-A4-Blätter scannt? Scandinavier.",
  "Oma im Ofen vergessen. Hilde Gart.",
  "Wenn ein Delfin kifft, ist er dann Hai?",
  "Die Glatze ist eine ausgefallene Frisur.",
  "Herzrasen ist auch ein anderes Wort für Brustbehaarung.",
  "Witze über Tofu fänd ich geschmacklos.",
  "Kommt ein Cowboy aus dem Friseur, Pony weg."
];

  
  const zufall = witze[Math.floor(Math.random() * witze.length)];

  const berlinZeit = new Date().toLocaleString('de-DE', {
    timeZone: 'Europe/Berlin',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }).replace(',', '');

  res.status(200).json({
    witz: zufall,
    timestamp: berlinZeit
  });
}
