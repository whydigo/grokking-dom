function render (arr) {
    const ul = document.createElement('ul')
    let li
    let a
    for (let i = 0; i < arr.length; i++) {
        li = document.createElement('li')
        a = document.createElement('a')
        a.href = arr[i].url
        a.textContent = arr[i].name
        li.append(a)
        ul.append(li)
    }
    document.body.append(ul)
    return ul
}

console.log(render([{
    name: 'Google',
    url: 'https://google.com'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com'
  },
  {
    name: 'intocode',
    url: 'https://intocode.ru'
  },]))