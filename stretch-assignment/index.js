let blocks = document.querySelectorAll('.block')

blocks.forEach(block => {
  block.addEventListener('click', e => {
    e.target.style.order = blocks.length
  })
  block.addEventListener('mousedown', e => {
    e.target.style.transform = 'translateX(1000000000000000000000000000px)'
  })
})