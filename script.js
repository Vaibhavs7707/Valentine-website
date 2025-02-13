const messages = [
    "Yaad hai wo din baby jb aapko sbse pehli br mile the wo mulakat wo baatein aur wo haseen pal jo apke sang guzare! 🌞",
    "In real I fall for you more every day bubu baby mela. 💘",
    "favourite day- 5 april  💓",
    "favourite color- your skin color 🌙",
    "favourite movie- jo bhi dekhu apke sang 🏰",
    "favourite moments- jo apke sang bitau ✨",
    "You are my everything shona baby. 💖",
    "favourite person- aap se jyada koi nahi shona baby ",
    "roz ka roz apse pyaar krne ka mann hota jyada jyada bchu. 🌟",
    "I am so lucky to have you in my life LOVE YOU shona baby. 🍀",
    "LOVE YOU BABY",
    "Miss you betu ",
    "Bye shona",
  ];
  
  const button = document.getElementById("messageButton");
  const messageDisplay = document.getElementById("messageDisplay");
  
  button.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    messageDisplay.textContent = messages[randomIndex];
  });