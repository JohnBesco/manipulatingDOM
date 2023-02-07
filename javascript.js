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

const blueText = document.createElement('h3');
blueText.classList.add('blueText');
blueText.textContent = 'Im a blue h3!'

blueText.style.color = 'blue';

container.appendChild(blueText);

const funkyDiv = document.createElement('div');
funkyDiv.classList.add('funky');

funkyDiv.style.border = '1px solid black';
funkyDiv.style.backgroundColor = 'pink';

const anotherH1 = document.createElement('h1');
anotherH1.textContent = 'Im in a div';

const someText = document.createElement('p');
someText.textContent = 'ME TOO!';

funkyDiv.appendChild(anotherH1);
funkyDiv.appendChild(someText);


container.appendChild(funkyDiv);

