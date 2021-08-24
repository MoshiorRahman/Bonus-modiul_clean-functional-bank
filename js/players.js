function setPlayerStyle(player) {
    player.style.border = '1px solid red'
    player.style.margin = '10px'
    player.style.borderRadius = '15px'
    player.style.padding = '10px'
}

const players = document.getElementsByClassName('player');
for (const player of players) {
    setPlayerStyle(player)

}

function addPlayer() {
    const playersContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player')
    player.innerHTML = `
        <h4 class="player-name"> New player</h4>
        <p>Quibusdam, iste officiis mollitia laborum delectus quo inventore veritatis. Neque possimus
        perferendis alias saepe officiis? Praesentium eius nulla dolore, voluptates commodi distinctio
        consequatur enim ipsam vero aut inventore laboriosam illum!</p>
    `;
    playersContainer.appendChild(player);
    setPlayerStyle(player)
}

document.getElementById('players').addEventListener('click', function (event) {
    console.log()
    if (event.target.tagName.toLowerCase() == 'div') {
        event.target.style.backgroundColor = 'green'
    }
    else {
        event.target.parentNode.style.backgroundColor = 'Bisque'
    }
})