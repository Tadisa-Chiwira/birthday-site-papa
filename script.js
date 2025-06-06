const cupcake = document.getElementById('cupcake');
const blowOutBtn = document.getElementById('blow-out-btn');

blowOutBtn.addEventListener('click', () => {
  cupcake.src = 'assets/cupcake_unlit.png';
  blowOutBtn.disabled = true;
  blowOutBtn.innerText = 'Candles Blown! 🎉';

  // Fire confetti
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 },
  });

  // After a few seconds, show message
  setTimeout(() => {
    document.body.innerHTML = `
      <div class= "letter"; style="text-align: center; margin-top: 100px;">
        <h1 style="font-size: 3rem;">🎂 Happy Birthday, Papa! 🎂</h1>
        <p style="font-size: 1.5rem; max-width: 600px; margin: 20px auto;">
          We made this just for you — Adriel helped in spirit — because you’re one of the most inspiring, hardworking, and loving people we know. 
          Hope this year is filled with joy, peace, and lots of wealth ❤️ May the Lord continue you to guide you always and bless you abundantly.
          May you continue to be a blessing to everyone around you. May you live a long and healthy life, full of love and laughter.
          May you continue to be the best dad ever and may you always know how much you are loved and appreciated.
          Thank you so much for always being supportive and caring and for being the best dad ever!
          We love you so much, Papa!
        </p>
        <p style="font-size: 1.2rem;">Love, Tadisa and Adriel 💛</p>
      </div>
    `;
  }, 2500);
});

