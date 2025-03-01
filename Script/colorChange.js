function changeBackground() {
  const colorlist = [
    "#FFC0CB",
    "#FF5733",
    "#008080",
    "#3357FF",
    "#87CEEB",
    "#F1C40F",
    "#9B59B6",
  ];

  // Function to shuffle the array
  function choseColor(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  choseColor(colorlist);

  // Pick the first color from the shuffled array
  const Color = colorlist[0];

  document.body.style.backgroundColor = Color;
}
