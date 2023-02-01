// Add red text

const container = document.querySelector('#container');

const addRedText = document.createElement('p');

addRedText.style.color = 'red';

addRedText.classList.add('content');
addRedText.textContent = "Hey I'm red!";

container.appendChild(addRedText);

// Add blue text

const moreContent = document.createElement('h3');

moreContent.style.color = 'blue';

moreContent.classList.add('blueText');
moreContent.textContent = 'Im a blue h3!';

container.appendChild(moreContent)

const addDiv = document.createElement('div');

addDiv.style.border = '1px solid black';
addDiv.style.backgroundColor = 'pink';
addDiv.style.width = '200px';
addDiv.style.height = '200px';

const divContent = document.createElement('h1');
divContent.textContent = 'Im in a div';

addDiv.appendChild(divContent);

const moreDivContent = document.createElement('p');
moreDivContent.textContent = 'ME TOO!'

addDiv.appendChild(moreDivContent);

container.appendChild(addDiv);

//const btn = document.querySelector('#btn');
//btn.onclick = () => alert("Hello World"); 

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    alert("Hello World");
});