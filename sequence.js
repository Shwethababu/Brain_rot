const sequenceData = [
    { heading: ' King Hiero II of Syracuse suspected that his crown, which was made of gold, had been adulterated with silver by the crown maker' , body:''},
    { heading: ' To determine if the crown was made of pure gold, Archimedes was tasked with finding a way to test it without damaging it.' ,body:'' },
    { heading: 'One day, Archimedes stepped into his bath and noticed that as he sank into the water, the water level rose.',body:'' },
    { heading: 'This made him realize that the volume of water displaced by his body was proportional to the volume of the submerged part of his body.',body:'' },
    {heading:'Excited by this discovery, Archimedes realized that by comparing the amount of water displaced by the crown with that displaced by an equal weight of pure gold, he could determine whether the crown was pure or had been mixed with silver.' , body:''},
    {heading:'In a moment of euphoria, Archimedes is said to have leapt out of the bath and run through the streets of Syracuse shouting "Eureka!" which means "I have found it!"', body:''},
    {heading :'This moment marked the discovery of Archimedes Principle, which states that any object submerged in a fluid experiences an upward buoyant force equal to the weight of the fluid displaced by the object ', body:''},
  ];
  
  
// Utility function to generate a random shuffle of indices
const generateRandomOrder = (length) => {
  const order = Array.from({ length }, (_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [order[i], order[randomIndex]] = [order[randomIndex], order[i]];
  }
  return order;
};

// Generate a random wrong order each time
const wrongOrder = generateRandomOrder(sequenceData.length);
  
  // Select the container to append cards
  const container = document.querySelector('.card-container');
  const memeContainer = document.getElementById('meme-container');
  
  // Function to render the cards in an incorrect order
  const renderCards = () => {
    wrongOrder.forEach((index) => {
      const data = sequenceData[index];
      const card = document.createElement('div');
      card.classList.add('card');
      card.setAttribute('draggable', true); // Make the card draggable
      card.setAttribute('data-heading', data.heading); // Store the correct heading for validation
      card.innerHTML = `
        <h1 class="card-heading">${data.heading}</h1>
        <p class="card-body">${data.body}</p>
      `;
  
      // Add dragstart event
      card.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', data.heading); // Store the dragged card's identifier
        setTimeout(() => {
          card.classList.add('dragging'); // Add a class to visually indicate dragging
        }, 0);
      });
  
      // Add dragend event
      card.addEventListener('dragend', () => {
        card.classList.remove('dragging'); // Remove the dragging class after drop
      });
  
      // Append the card to the container
      container.appendChild(card);
    });
  };
  
  // Function to handle dragging over a valid drop zone
  container.addEventListener('dragover', (e) => {
    e.preventDefault();
    const draggingCard = document.querySelector('.dragging');
    const afterElement = getDragAfterElement(container, e.clientY);
    if (afterElement == null) {
      container.appendChild(draggingCard);
    } else {
      container.insertBefore(draggingCard, afterElement);
    }
  });
  
  // Function to determine the position to insert the dragged card
  const getDragAfterElement = (container, y) => {
    const draggableElements = [...container.querySelectorAll('.card:not(.dragging)')];
  
    return draggableElements.reduce((closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
  };
  
  // Function to display a meme (GIF)
  const showMeme1 = () => {
    const memeAlert = document.getElementById('meme-alert');
    const memeImage = document.getElementById('meme-image');
    const memeText = document.getElementById('meme-text');
    const overlay = document.getElementById('overlay');
  
    // Set the meme image and text
    memeImage.src = 'correct meme.gif'; // Replace with your GIF path
    memeText.textContent = '🎉 Congrats! You arranged the sequence correctly! 🎉';
  
    // Show the alert and overlay
    memeAlert.style.display = 'block';
    overlay.style.display = 'block';
  
    // Add functionality to close the alert
    document.getElementById('close-meme').addEventListener('click', () => {
      memeAlert.style.display = 'none';
      overlay.style.display = 'none';
    });
  };

  const showMeme2 = () => {
    const memeAlert = document.getElementById('meme-alert');
    const memeImage = document.getElementById('meme-image');
    const memeText = document.getElementById('meme-text');
    const overlay = document.getElementById('overlay');
  
    // Set the meme image and text
    memeImage.src = 'wrong_answer.webp'; // Replace with your GIF path
    
  
    // Show the alert and overlay
    memeAlert.style.display = 'block';
    overlay.style.display = 'block';
  
    // Add functionality to close the alert
    document.getElementById('close-meme').addEventListener('click', () => {
      memeAlert.style.display = 'none';
      overlay.style.display = 'none';
    });
  };
  
  // Check the sequence when the button is clicked
  document.getElementById('check-sequence').addEventListener('click', () => {
    const cards = Array.from(container.children);
  
    // Check if each card's data-heading matches the sequenceData order
    const isCorrect = cards.every((card, index) => {
      return card.getAttribute('data-heading') === sequenceData[index].heading;
    });
  
    if (isCorrect) {
      
      showMeme1(); // Show meme on correct sequence
    } else {
      showMeme2();
    }
  });
  
  // Call render function to display the cards on page load
  renderCards();
  // Add an event listener to the Go Back button
document.getElementById('go-back').addEventListener('click', () => {
  history.back(); // Navigate to the previous page
});

  