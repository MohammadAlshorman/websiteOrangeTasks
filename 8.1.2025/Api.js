async function getData() {
    try {
        let res = await fetch('https://api.npoint.io/b9f8b3cb90aa3b6edbd2');

        if (!res.ok) {
            throw new Error('Failed to fetch data from API');
        }

        let data = await res.json();

        console.log(data);  // For debugging
        displayUsers(data);
    } catch (error) {
        console.error('Error:', error);
        const cardsContainer = document.getElementById('cards');
        cardsContainer.textContent = 'Failed to load data from API.';
    }
}

function getDatajson() {
    fetch('Api.json')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json();
        })
        .then(data => {
            displayUsers(data);
        })
        .catch(error => {
            console.error('Error:', error);
            const cardsContainer = document.getElementById('cards');
            cardsContainer.textContent = 'Failed to load data from JSON.';
        });
}

function displayUsers(users) {
    const cardsContainer = document.getElementById('cards');
    cardsContainer.innerHTML = ''; // Clear any previous cards

    users.forEach(user => {
        let card = document.createElement('div');
        card.className = "card";
        card.innerHTML = `




        
            <img src="${user.Image}" alt="${user.name}" class="user-image">
            <h2>${user.name}</h2>
            <p><b>Age: </b><br>${user.Age}</p>
            <p><b>Email: </b><br>${user.Email}</p>
            <p><b>Profession: </b><br>${user.Profession}</p>
            <p><b>Phone: </b><br>${user.Phone}</p>
        `;
        cardsContainer.appendChild(card);
    });
}
