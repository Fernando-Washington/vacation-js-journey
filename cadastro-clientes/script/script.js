const closeModal = document.querySelector('.modal-register i')
const openModal = document.querySelector('.open-register')
const modal = document.querySelector('.modal-register')

openModal.onclick = () => {
    modal.style.display = 'block'
}

closeModal.onclick = () => {
    modal.style.display = 'none'
}