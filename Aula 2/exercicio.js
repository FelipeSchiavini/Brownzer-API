const divContainer = document.querySelector('.container')
const p = document.querySelector('p')

divContainer.classList.toggle('container')
p.innerText = 'MODIFIED HELLO WORLD'
divContainer.classList.add('container2')