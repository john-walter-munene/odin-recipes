// JavaScript code to manipulate my DOM.

const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const paragraph = document.createElement('p')
paragraph.classList.add('content')
paragraph.textContent = "Hey I'm red!"
container.appendChild(paragraph)
paragraph.style.cssText = 'color: red;';

const heading_3 = document.createElement('h3')
heading_3.classList.add('content')
heading_3.textContent = "I'm blue h3"
container.appendChild(heading_3)
heading_3.style.cssText = 'color: blue;';

const pinkBox = document.createElement('div')

const heading_1 = document.createElement('h1')
heading_1.classList.add('content')
heading_1.textContent = "I'm in a div"

const paragraph_2 = document.createElement('p')
paragraph_2.classList.add('content')
paragraph_2.textContent = 'Me too!'

pinkBox.appendChild(heading_1)
pinkBox.appendChild(paragraph_2)

container.appendChild(pinkBox)
pinkBox.style.color = 'pink'

/*  Method 2 to manipulate DOM dynamically using JS: On event property */
const btn = document.querySelector('#btn2');
btn.onclick = () => alert("Hello World");


/* Method 3 to manipulate DOM using JS: Event listeners */
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
    alert("Hello World");
  });

