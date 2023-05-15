const checkboxes = document.querySelectorAll('.form-check-input')
const cards = document.querySelectorAll('.user-card')

const checkedArr = []

export function filterItems(data) {
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', (event) => {
      const checkboxValueFilter = checkbox.value.toLowerCase()

      const filteredData = data.filter(dataValue => {
        const dataValueFilter = dataValue.gender.toLowerCase()

        if (dataValueFilter === checkboxValueFilter) {
          return true
        }
      })

      if (checkbox.checked) {
        checkedArr.push(checkboxValueFilter)
      } else {
        const index = checkedArr.indexOf(checkboxValueFilter)
        if (index > -1) {
          checkedArr.splice(index, 1)
        }
      }

      renderData(filteredData)
      
      console.log(filteredData)
      console.log(checkedArr)
    })
  })
}

function renderData(filteredData) {
  cards.forEach(card => {
    card.style.display = 'none'
  })

  filteredData.forEach(item => {
    const cardId = item.id
    const card = document.getElementById(cardId)
    if (card) {
      card.style.display = 'block'
    } else {
      card.style.display = 'none'
    }
  })
}