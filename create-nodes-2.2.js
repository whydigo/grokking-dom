function render (arr) {
    const ul = document.createElement('ul')
    let li;
    for (let i = 0; i < arr.length; i++) {
        li = document.createElement('li')
        li.textContent = arr[i]
        ul.append(li)
    }
    document.body.append(ul)
    return ul
}

console.log(render(['we', 'are', 'a', 'venom']))