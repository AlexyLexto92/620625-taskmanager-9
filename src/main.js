import {dataCards} from './components/data.js';
import {filters} from './components/data.js';
import {getComponentMenu} from './components/menu.js';
import {getComponentFilter} from './components/filter.js';
import {getComponentSearch} from './components/search.js';
import {getComponentBoardFilter} from './components/boardFilter.js';
import {getComponentLoadMoreButton} from './components/loadMoreButton.js';
import {Card} from './components/cardComponent.js';
import {CardEdit} from './components/cardEditComponent.js';
import {render} from './components/utils.js';

export const Position = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

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


const renderCard = (data) => {
  const card = new Card(data);
  const cardEdit = new CardEdit(data);

  const onEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      boardTaskContainer.replaceChild(card.getElement(), cardEdit.getElement());
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  card.getElement()
  .querySelector(`.card__btn--edit`)
    .addEventListener(`click`, () => {
      boardTaskContainer.replaceChild(cardEdit.getElement(), card.getElement());
      document.addEventListener(`keydown`, onEscKeyDown);
    });

  cardEdit.getElement().querySelector(`textarea`)
    .addEventListener(`focus`, () => {
      document.removeEventListener(`keydown`, onEscKeyDown);
    });

  cardEdit.getElement().querySelector(`textarea`)
    .addEventListener(`blur`, () => {
      document.addEventListener(`keydown`, onEscKeyDown);
    });

  cardEdit.getElement().querySelector(`.card__save`)
    .addEventListener(`click`, () => {
      boardTaskContainer.replaceChild(card.getElement(), cardEdit.getElement());
      document.removeEventListener(`keydown`, onEscKeyDown);
    });

  render(boardTaskContainer, card.getElement(), Position.BEFOREEND);
};


dataCards.forEach((data) => renderCard(data));

insertMarkup(boardContainer, getComponentLoadMoreButton(), `beforeend`);

const loadButton = document.querySelector(`.load-more`);

const addCards = () => {
  start = 9;
  end = start + stepCardLoad;
  start = start + stepCardLoad;
  end = end + stepCardLoad;

  const cards = document.querySelectorAll(`.card`);
  const cardsLength = Array.from(cards).length;
  if (cardsLength >= dataCards.length) {
    loadButton.remove();
  }
};
loadButton.addEventListener(`click`, addCards);

