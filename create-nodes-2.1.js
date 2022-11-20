const arr = ['html', 'css', 'js']

const ul = document.createElement('ul')
let li;

for (let i = 0; i < arr.length; i++) {
    li = document.createElement('li')
    li.textContent = arr[i]
    ul.append(li)
}

console.log(ul)
