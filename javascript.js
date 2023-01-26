// Add red text

const container = document.querySelector('#container');

const content = document.createElement('p');

content.style.color = 'red';

content.classList.add('content');
content.textContent = "Hey I'm red!";

container.appendChild(content);

// Add blue text

const moreContent = document.createElement('h3');

moreContent.style.color = 'blue';

moreContent.classList.add('blueText');
moreContent.textContent = 'Im a blue h3!';

container.appendChild(moreContent)


