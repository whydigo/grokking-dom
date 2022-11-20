const div_1 = document.createElement('div')
const div_2 = document.createElement('div')
const div_3 = document.createElement('div')

div_1.className = 'red'
div_2.className = 'green'
div_3.className = 'blue'

div_3.textContent = 'Я вложен'

div_2.append(div_3)
div_1.append(div_2)

console.log(div_1)