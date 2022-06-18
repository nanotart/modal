// select modules
const modal = document.querySelector('#modal')
const openButton = document.querySelector('#open-modal-btn')
const closeButton = document.querySelector('#close-modal-btn')
const overlay = document.querySelector('#overlay')

// create a click listener for the openButton
openButton.addEventListener('click', e => {
  e.preventDefault()
  modal.classList.add('open')
  overlay.classList.add('open')

  // remove click listener for the closeButton
  closeButton.addEventListener('click', closeModal)

  // remove click listener for the overlay
  overlay.addEventListener('click', closeModal)
})

function closeModal() {
  modal.classList.remove('open')
  overlay.classList.remove('open')
}