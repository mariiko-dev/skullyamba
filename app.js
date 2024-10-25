function getRandomChoice() {
    const choices = ["Даник", "Даник"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  const computerChoice = getRandomChoice();
  console.log(`Кто получит пизды завтра утром: ${computerChoice}`);