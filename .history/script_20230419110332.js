const featuredTeams = [
    {
        image: "Assets/teams/nrg.jpg",
        Name: "NRG Esports",
        region: "(North America)",
        description: "NRG Esports is a top-performing North American team that has won several major Rocket League tournaments. The team consists of players GarrettG, jstn, and SquishyMuffinz."
    }
];

featuredTeams.forEach((team) => {

    // create article element
    const container = document.createElement('article');
    container.classList.add('card, d-flex', 'flex-row', 'justify-content-end', 'p-2', 'my-2');
    
    // create image div 
    const imageHolder = document.createElement('div');
    imageHolder.classList.add('featured-image-holder', 'd-flex', 'justify-content-end', 'align-items-end');
    container.appendChild(imageHolder);

    // create image element
    const image = document.createElement('img');
    image.src = 
})

document.querySelector('.featured-cards').appendChild(container);

