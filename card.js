const cardContent = document.querySelector('#card-content')

export function createCard(data) {
  cardContent.innerHTML = data.map(e => {
    return `<div id='${e.id}' class='user-card'>
                <h6><span class='text-primary'>${e.id}</span> ${e.first_name} ${e.last_name} ${e.gender}</h6>
            </div>`
  }).join('')
}