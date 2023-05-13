const genderCheckboxes = document.querySelectorAll('input[name="gender"]')

const genderArr = []

export function filterItems(data) {
  genderCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('click', () => {
      if (checkbox.checked) {
        const filters = {
          male: true,
          female: false,
          others: true
        }
      
        const result = data.filter(person => {
          return filters[person.gender]
        })
        console.log(result)
      }
    })
  })
}