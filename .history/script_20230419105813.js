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
    container.innerHTML = 'sdfavsdfs';
})

document.querySelector('.featured-cards').appendChild(container);

