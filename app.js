const words = ['Akyl', 'Asyl', 'Adam', 'Alym', 'Islam', 'Emir', 'Esentur', 'Bakhtiyar', 'Nurali'];

function getRandomWord() {
  
  const randomIndex = Math.floor(Math.random() * words.length);
 
  return words[randomIndex];
}


const randomWordElement = document.getElementById('rand');


const generateButton = document.getElementById('gen');


generateButton.addEventListener('click', function() {
  
  randomWordElement.textContent = getRandomWord();
});

