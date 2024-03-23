import {onWindowResize} from "../utils/utils";

const hiddenText = (obj) => {
	const { row, container } = obj;
	const $contents = document.querySelectorAll(container);
	if (!$contents.length) return;

	$contents.forEach(($card) => {
		const $text = $card.querySelector('p');
		const $btn = $card.querySelector('.js-hidden-content-btn');
		if (!$text || !$btn) return;
		let isMobile;
		let isClick = true;

		let containerHeight= $text.clientHeight;
		const tempElement = document.createElement('div');
		tempElement.style.whiteSpace = 'pre';
		tempElement.innerHTML = 'A';
		$text.appendChild(tempElement);
		const lineHeight = tempElement.clientHeight;
		$text.removeChild(tempElement);
		const numberOfRows = Math.floor(containerHeight / lineHeight);

		$text.style.overflow= 'hidden';
		console.log(numberOfRows);

		if (numberOfRows > row) {
			$btn.style.display = 'block';
			$text.style.maxHeight = `${lineHeight * row}px`;

			$btn.addEventListener('click', () => {
				if (isClick) {
					$btn.innerText = 'Less more';
					$text.style.transition = 'max-height .3s ease-in-out';
					$text.style.maxHeight = `${containerHeight}px`;
					isClick = false;
				} else {
					$btn.innerText = 'Show more';
					$text.style.transition = 'max-height .3s ease-in-out';
					$text.style.maxHeight = `${lineHeight * row}px`;
					isClick = true;
				}
			});
		}
	});
};

export default hiddenText;
