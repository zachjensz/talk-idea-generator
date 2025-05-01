const form = document.querySelector('form')
const output = document.querySelector('#output')

const ideas = [
  "Juniors should focus on HTML, CSS and JS instead of frameworks, here's why",
  "React is terrible and it ruined my day",
  "View Transitions and speculative rendering: why MPAs have a comeback",
  "New Map and Set methods in JS",
  "You need to try CSS container queries",
  "How to not spend $10,000 on AWS",
  "I tried writing my own JS framework so you don't have to",
  "CSS rem vs em",
  "Is Tailwind really that bad? Yes.",
  "5 HTML elements you should likely know but don't",
  "HTML popovers vs dialogs",
  "Can I hear your website?",
  "Should you generate alt text with AI?",
  "How does AI change the a11y landscape?",
  "Do we have too many web APIs?",
  "Why aren't PWAs more popular?",
  "How to start a local tech meetup",
  "How to give an engaging tech talk",
  "Do you really know the CSS cascade?"
]

const chooseAtRandom = arr => arr[Math.floor(Math.random() * arr.length)];

form.onsubmit = (e) => {
  e.preventDefault();
  output.innerText = chooseAtRandom(ideas)
}
