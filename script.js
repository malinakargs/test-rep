$ = function(selector) { return document.querySelector(selector) }
function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)) }
function copy(text) {
  let clipboard = $('#clipboard')
  clipboard.value = text
  clipboard.select()
  document.execCommand("copy")
}

Element.prototype.disableEvents = function() {
  this.classList.add('disable-events')
}
Element.prototype.enableEvents = function() {
  this.classList.remove('disable-events')
}

$('#ip').onmousedown = async function() {
  let text = this.textContent
  copy(text)
  this.textContent = 'Айпи адрес был скопирован!'
  this.disableEvents()
  await sleep(2000)
  this.enableEvents()
  this.textContent = text
}