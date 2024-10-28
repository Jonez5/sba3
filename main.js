const characterSelect = document.getElementById('character-select');
const characterInfoDiv = document.getElementById('character-info');

let backPic = document.querySelector('body')
backPic.style.background = "url(https://i.makeagif.com/media/2-09-2024/zRzh4j.gif)"
backPic.style.backgroundSize = "cover";
backPic.style.display = "flex : 100%"

fetch('https://api.disneyapi.dev/character')
  .then(response => response.json())
  .then(data => {
    data.data.forEach(character => {
      const option = document.createElement('option');
      option.value = character._id;
      option.text = character.name;
      characterSelect.add(option);
    });
  });

function getCharacterInfo() {
  const characterId = characterSelect.value;
  
  if (characterId) {
    fetch(`https://api.disneyapi.dev/character/${characterId}`)
      .then(response => response.json())
      .then(data => {
        // Display character information
        characterInfoDiv.innerHTML = 
          `<h2>${data.data.name}</h2>
          <img src="${data.data.imageUrl}" alt="${data.data.name}" width="200">
          <p><strong>Films:</strong> ${data.data.films.join(', ')}</p>
          <p><strong>TV Shows:</strong> ${data.data.tvShows.join(', ')}</p>
          <p><strong>Video Games:</strong> ${data.data.videoGames.join(', ')}</p>
          <p><a href="${data.data.sourceUrl}" target="_blank">More info</a></p>`
        ;
      });
  } else {
    characterInfoDiv.innerHTML = '<p>Please select a character.</p>';
  }
      } 
