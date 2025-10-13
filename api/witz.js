// api/witz.js
export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  
  const witze = [
    "Warum können Geister so schlecht lügen? Weil man durch sie hindurchsieht!",
    "Was macht ein Pirat am Computer? Er drückt die Enter-Taste!",
    "Warum ging der Pilz auf die Party? Weil er ein Champignon war!",
    "Was ist grün und steht vor der Tür? Ein Klopfsalat!",
    "Warum nehmen Skelette nie ein Bad? Weil sie bis auf die Knochen durchnässt werden!",
    "Was sagt ein Gen, wenn es ein anderes Gen trifft? Halogen!",
    "Warum können Bienen so gut rechnen? Weil sie den ganzen Tag mit Summen arbeiten!",
    "Was macht ein Clown im Büro? Faxen!",
    "Warum tragen Hühner keine Hosen? Weil das Ei sonst in die Hose geht!",
    "Was ist braun und schwimmt im Wasser? Ein U-Brot!"
  ];
  
  const zufall = witze[Math.floor(Math.random() * witze.length)];
  
  res.status(200).json({ 
    witz: zufall,
    timestamp: new Date().toISOString(),
  });
}
