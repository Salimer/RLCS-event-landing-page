const featuredTeams = [
    {
        image: "Assets/teams/nrg.jpg",
        name: "NRG Esports",
        region: "(North America)",
        description: "NRG Esports is a top-performing North American team that has won several major Rocket League tournaments. The team consists of players GarrettG, jstn, and SquishyMuffinz."
    }, 
    {
        image: "Assets/teams/vitality.jpg",
        name: "Team Vitality",
        region: "(Europe)",
        description: "Team Vitality is a dominant European team with a consistent track record of success. The team features players such as Fairy Peak!, Alpha54, and Kaydop."
    },
    {
        image: "Assets/teams/spacestation.jpg",
        name: "Spacestation Gaming",
        region: "(North America)",
        description: "Spacestation Gaming is a North American team that has been consistently performing well in recent seasons of RLCS. The team is composed of players Sypical, Arsenal, and retals."
    },
    {
        image: "Assets/teams/b.jpg",
        name: "BDS Esport",
        region: "(Europe)",
        description: "BDS Esport is a European team that has been a rising star in the competitive Rocket League scene. The team's roster includes players such as Monkey Moon, Extra, and Marc_By_8."
    },
    {
        image: "Assets/teams/nrg.jpg",
        name: "G2 Esports",
        region: "(North America)",
        description: "G2 Esports is a North American team with a long history of success in competitive Rocket League. The team consists of players JKnaps, Rizzo, and Chicago."
    },
    {
        image: "Assets/teams/nrg.jpg",
        name: "Team Envy",
        region: "(North America)",
        description: "Team Envy is a North American team that has had success in both RLCS and other Rocket League tournaments. The team features players such as Atomic, Mist, and Turinturo."
    }
];

featuredTeams.forEach((team) => {

    // create article element
    const container = document.createElement('article');
    container.classList.add('card', 'd-flex', 'flex-row', 'justify-content-end', 'p-2', 'my-2');
    
    // create image div 
    const imageHolder = document.createElement('div');
    imageHolder.classList.add('featured-image-holder', 'd-flex', 'justify-content-end', 'align-items-end');
    container.appendChild(imageHolder);

    // create image element
    const image = document.createElement('img');
    image.src = team.image;
    image.alt = team.name;
    imageHolder.appendChild(image);

    // create team details div
    const teamDetails = document.createElement('div');
    teamDetails.classList.add('team', 'd-flex', 'flex-column', 'ps-2');
    container.appendChild(teamDetails);

    // create team name
    const teamName = document.createElement('h5');
    teamName.className = "card-title";
    teamName.innerHTML = team.name;
    teamDetails.appendChild(teamName);

    // create team region element
    const teamRegion = document.createElement('span');
    teamRegion.className = "card-text";
    teamRegion.innerHTML = team.region;
    teamDetails.appendChild(teamRegion);

    // create underline element
    const underline = document.createElement('div');
    underline.className = "underline my-1"
    teamDetails.appendChild(underline);

    // create description element 
    const teamDescription = document.createElement('p');
    teamDescription.className = "card-text";
    teamDescription.innerHTML = team.description;
    teamDetails.appendChild(teamDescription);

    // append team card to html
    document.querySelector('.featured-cards').appendChild(container);
});

