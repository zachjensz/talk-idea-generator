const form = document.querySelector('form')
const output = document.querySelector('#output')

form.onsubmit = (e) => {
  e.preventDefault();
  output.innerText = "You have good ideas in there, use your brain"
}
