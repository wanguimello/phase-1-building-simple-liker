// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';
const MODAL = document.querySelector('div#modal h2')
MODAL.classList.add('hidden')
const MODAL_MESSAGE = document.querySelector('#modal')
MODAL_MESSAGE.classList.add('hidden')
MODAL_MESSAGE.style.backgroundColor = 'white'


// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", function() {
  let likeGlyphs = document.querySelectorAll('.like-glyph')
  likeGlyphs.forEach(likeGlyph => {
    likeGlyph.addEventListener('click', function() {
      mimicServerCall().then(() => {
        likeGlyph.innerHTML = FULL_HEART
      }).catch(() => {
        likeGlyph.innerHTML = EMPTY_HEART
      })
    })
  })
  
})




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
