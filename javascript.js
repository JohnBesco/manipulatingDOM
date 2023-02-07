const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const someRedText = document.createElement('p');
someRedText.classList.add('redText');
someRedText.textContent = 'Hey im red!'

someRedText.style.color = 'red'

container.appendChild(someRedText);
