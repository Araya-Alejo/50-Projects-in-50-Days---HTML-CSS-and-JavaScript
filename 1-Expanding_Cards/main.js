const boxs = document.querySelectorAll('.box')

boxs.forEach(box => {
    box.addEventListener('click', () => {
        removeActiveClasses()
        box.classList.add('active')
    })
})

function removeActiveClasses() {
    boxs.forEach(box => {
        box.classList.remove('active')
    })
}