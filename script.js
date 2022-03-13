


const button = document.querySelector('button');

const dogContainer = document.querySelector('.dogs-pictures-container');


const handleButtonClick = () => {
	const nextDog = document.createElement('div');
	nextDog.style.width = '100%';
	nextDog.style.height = '100%';


	const randomDog = fetch('https://dog.ceo/api/breeds/image/random')
	.then((dogs) => dogs.json())
	.then((result) => {
		const dogLink = result.message;
		nextDog.style.backgroundImage = `url(${dogLink})`;
		nextDog.style.backgroundRepeat = 'no-repeat';
		nextDog.style.backgroundSize = 'cover';

		dogContainer.innerHTML = '';
		dogContainer.append(nextDog);
	});	
}

button.addEventListener('click', handleButtonClick);
