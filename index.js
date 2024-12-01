const cardData1 = [
    {
        heading :'Buoyancy',
        body:'Click here to know about the discovery of Buoyancy'
    },
    
]
const cardData2=[
    {
        heading:'Penicillin',
        body:'Click here to know about the discovery of Penicillin'
    },
]
const cardData3 =[
    {
        heading :'Electron',
        body:'Click here to know about the discovery of Electron'
    },

]
const cardData4=[
    {
        heading :'Electricity',
        body:'Click here to know the discovery of Electricity'
    },
]

const cardData5=[
    {
        heading :'Electric battery',
        body:'Click here to know about the discovery of Electric Battery'
    },
]

const postContainer = document.querySelector('.card-container');
// Function to shuffle an array

const postMethods = ()=> {
    cardData1.forEach((postData,index) => {
        const postElement = document.createElement('div');
        postElement.classList.add('card');
        postElement.innerHTML = `
        <h1 class="card-heading">${postData.heading}</h1>
      <p class="card-body">${postData.body}</p> 
      `;
      // Add click event to navigate
    postElement.addEventListener('click', () => {
        console.log(`Card ${index + 1} clicked`); // Debugging log
        localStorage.setItem('selectedCardIndex', index); // Store selected card index
        window.location.href = 'sequence-game.html'; // Navigate to the next page
      });
      postContainer.appendChild(postElement);
    })
}
postMethods()

const postMethods2 = ()=> {
    cardData2.forEach((postData,index) => {
        const postElement = document.createElement('div');
        postElement.classList.add('card');
        postElement.innerHTML = `
        <h1 class="card-heading">${postData.heading}</h1>
      <p class="card-body">${postData.body}</p> 
      `;
      // Add click event to navigate
    postElement.addEventListener('click', () => {
        console.log(`Card ${index + 1} clicked`); // Debugging log
        localStorage.setItem('selectedCardIndex', index); // Store selected card index
        window.location.href = 'sequence-game1.html'; // Navigate to the next page
      });
      postContainer.appendChild(postElement);
    })
}
postMethods2()

const postMethods3 = ()=> {
    cardData3.forEach((postData,index) => {
        const postElement = document.createElement('div');
        postElement.classList.add('card');
        postElement.innerHTML = `
        <h1 class="card-heading">${postData.heading}</h1>
      <p class="card-body">${postData.body}</p> 
      `;
      // Add click event to navigate
    postElement.addEventListener('click', () => {
        console.log(`Card ${index + 1} clicked`); // Debugging log
        localStorage.setItem('selectedCardIndex', index); // Store selected card index
        window.location.href = 'sequence-game2.html'; // Navigate to the next page
      });
      postContainer.appendChild(postElement);
    })
}
postMethods3()

const postMethods4 = ()=> {
    cardData4.forEach((postData,index) => {
        const postElement = document.createElement('div');
        postElement.classList.add('card');
        postElement.innerHTML = `
        <h1 class="card-heading">${postData.heading}</h1>
      <p class="card-body">${postData.body}</p> 
      `;
      // Add click event to navigate
    postElement.addEventListener('click', () => {
        console.log(`Card ${index + 1} clicked`); // Debugging log
        localStorage.setItem('selectedCardIndex', index); // Store selected card index
        window.location.href = 'sequence-game3.html'; // Navigate to the next page
      });
      postContainer.appendChild(postElement);
    })
}
postMethods4()

const postMethods5 = ()=> {
    cardData5.forEach((postData,index) => {
        const postElement = document.createElement('div');
        postElement.classList.add('card');
        postElement.innerHTML = `
        <h1 class="card-heading">${postData.heading}</h1>
      <p class="card-body">${postData.body}</p> 
      `;
      // Add click event to navigate
    postElement.addEventListener('click', () => {
        console.log(`Card ${index + 1} clicked`); // Debugging log
        localStorage.setItem('selectedCardIndex', index); // Store selected card index
        window.location.href = 'sequence-game4.html'; // Navigate to the next page
      });
      postContainer.appendChild(postElement);
    })
}
postMethods5()