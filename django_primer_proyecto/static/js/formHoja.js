const scriptURL = 'https://script.google.com/macros/s/AKfycbzy_3E241Sd2ZrMbWKurhmQOIz0LPGkqHdnFDxrhNlVahyRVislgHE1np-VxAdGmu10/exec'

const form = document.forms['form-reserva']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("A la brevedad le confirmaremos la reserva. Gracias por elegirnos, Break Point!" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})