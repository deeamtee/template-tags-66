const items = [
	"Сделать проектную работу",
	"Полить цветы",
	"Пройти туториал по Реакту",
	"Сделать фронт для своего проекта",
];

const itemTemplate = document.querySelector(".item_template").content;
const list = document.querySelector(".list");
const formButton = document.querySelector(".form__submit");
const formInput = document.querySelector(".form__input");

items.forEach(renderItem)

function renderItem (item) {
	const htmlElement = itemTemplate.cloneNode(true);
	htmlElement.querySelector('.item__text').textContent = item;
	list.append(htmlElement);

}

const handleSubmit = () => {
	const value = formInput.value;
	renderItem(value);
}

formButton.addEventListener('click', handleSubmit);
