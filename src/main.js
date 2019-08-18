import {dataCards} from './components/data.js';
import {filters} from './components/data.js';
import {getComponentMenu} from './components/menu.js';
import {getComponentFilter} from './components/filter.js';
import {getComponentSearch} from './components/search.js';
import {getComponentBoardFilter} from './components/boardFilter.js';
import {getComponentCard} from './components/card.js';
import {getComponentCardEdit} from './components/cardEdit.js';
import {getComponentLoadMoreButton} from './components/loadMoreButton.js';

let start = 1;
let end = 8;
const stepCardLoad = 8;

const main = document.querySelector(`.main`);
const mainControl = document.querySelector(`.main__control`);
const filterContainer = document.createElement(`section`);

filterContainer.classList.add(`main__filter`, `filter`, `container`);
const insertMarkup = (markupContainer, markup, position) => {
  markupContainer.insertAdjacentHTML(position, markup);
};

const boardContainer = document.createElement(`section`);
boardContainer.classList.add(`board`, `container`);

const boardTaskContainer = document.createElement(`div`);
boardTaskContainer.classList.add(`board__tasks`);

insertMarkup(mainControl, getComponentMenu(), `beforeend`);

insertMarkup(main, getComponentSearch(), `beforeend`);

main.appendChild(filterContainer);

for (let prop of filters) {
  insertMarkup(filterContainer, getComponentFilter(prop), `beforeend`);
}

main.appendChild(boardContainer);

insertMarkup(boardContainer, getComponentBoardFilter(), `beforeend`);

boardContainer.appendChild(boardTaskContainer);

insertMarkup(boardTaskContainer, getComponentCardEdit(dataCards[0]), `beforeend`);
let Cards = dataCards.slice(start, end);
for (let card of Cards) {
  insertMarkup(boardTaskContainer, getComponentCard(card), `beforeend`);
}

insertMarkup(boardContainer, getComponentLoadMoreButton(), `beforeend`);

const loadButton = document.querySelector(`.load-more`);

const addCards = () => {
  start = 9;
  end = start + stepCardLoad;
  start = start + stepCardLoad;
  end = end + stepCardLoad;
  Cards = dataCards.slice(start, end);
  for (let card of Cards) {
    insertMarkup(boardTaskContainer, getComponentCard(card), `beforeend`);
  }
  const cards = document.querySelectorAll(`.card`);
  const cardsLength = Array.from(cards).length;
  if (cardsLength >= dataCards.length) {
    loadButton.remove();
  }
};
loadButton.addEventListener(`click`, addCards);

