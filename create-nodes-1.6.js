const div = document.createElement('div')
const ul = document.createElement('ul')
const li_1 = document.createElement('li')
const li_2 = document.createElement('li')
const a_1 = document.createElement('a')
const a_2 = document.createElement('a')

a_1.href = 'https://instagram.com/intocode'
a_2.href = 'https://intocode.ru'

a_1.textContent = 'Наш инст'
a_2.textContent = 'Наш сайт'

li_1.append(a_1)
li_2.append(a_2)

ul.append(li_1, li_2)

div.append(ul)
div.after('body')

console.log(div)
