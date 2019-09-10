import {Board} from "../components/board";
import {TaskList} from "../components/taskList";
import {render, Position, unrender, KeyCode} from './../components/utils.js';
import {Card} from './../components/card';
import {CardEdit} from './../components/cardEdit.js';
import {MoreButton} from "../components/loadMoreButton";
import {NoTaskElement} from "../components/noTask";
import {dataCards} from '../components/data.js';
import {AbstractComponent} from "../components/abstarct";
import {Sort} from "../components/sort";
import {FilterContainer} from "../components/filtercontainer";
import {Filter} from "../components/filter";
import {Menu} from "../components/menu";
import {Search} from "../components/search";

export class BoardController extends AbstractComponent {
  constructor(container, cards, position, filters) {
    super();
    this._position = position;
    this._filters = filters;
    this._container = container;
    this._cards = cards;
    this._board = new Board();
    this._taskList = new TaskList();
    this._noElement = new NoTaskElement();
    this._sort = new Sort();
    this._filterContainer = new FilterContainer();
    this._buttonMore = new MoreButton();
    this._menu = new Menu();
    this._search = new Search();

  }
  init() {
    unrender(document.querySelector(`.main__control`));
    render(this._container, this._menu.getElement(), Position.AFTERBEGIN);
    render(this._container, this._search.getElement(), Position.BEFOREEND);
    render(this._container, this._filterContainer.getElement(), Position.BEFOREEND);
    render(this._container, this._board.getElement(), Position.BEFOREEND);

    render(this._board.getElement(), this._sort.getElement(), Position.AFTERBEGIN);
    render(this._board.getElement(), this._taskList.getElement(), Position.BEFOREEND);
    this._cards.forEach((data) => this._renderCard(data));
    this._filters.forEach((data) => this._renderFilter(data));

    this._renderButton();
    this._renderNoTask();
    this._sort.getElement()
      .addEventListener(`click`, (evt) => this._onSortLinkClick(evt));

  }
  _renderCard(data) {
    const card = new Card(data);
    const cardEdit = new CardEdit(data);
    const cardElement = card.getElement();
    const cardEditElement = cardEdit.getElement();
    const delOnClick = () => {
      card.removeElement();
      cardEdit.removeElement();
    };

    const onEscKeyDown = (evt) => {
      if (evt.keyCode === KeyCode.ESK_KEY) {
        this._taskList.getElement().replaceChild(cardElement, cardEditElement);
        document.removeEventListener(`keydown`, onEscKeyDown);
      }
    };

    cardElement
      .querySelector(`.card__btn--edit`)
      .addEventListener(`click`, () => {
        this._taskList.getElement().replaceChild(cardEditElement, cardElement);
        document.addEventListener(`keydown`, onEscKeyDown);
      });

    cardEditElement.querySelector(`textarea`)
      .addEventListener(`focus`, () => {
        document.removeEventListener(`keydown`, onEscKeyDown);
      });

    cardEditElement.querySelector(`textarea`)
      .addEventListener(`blur`, () => {
        document.addEventListener(`keydown`, onEscKeyDown);
      });

    cardEditElement
      .querySelector(`.card__save`)
      .addEventListener(`click`, () => {
        this._taskList.getElement().replaceChild(cardElement, cardEditElement);
        document.removeEventListener(`keydown`, onEscKeyDown);
      });

    cardEditElement.querySelector(`.card__delete`)
      .addEventListener(`click`, delOnClick);

    render(this._taskList.getElement(), cardElement, Position.BEFOREEND);
  }
  _onSortLinkClick(evt) {
    evt.preventDefault();
    if (evt.target.tagName !== `A`) {
      return;
    }
    this._taskList.getElement().innerHTML = ``;
    switch (evt.target.dataset.sortType) {

      case `date-up`:
        const sortedByDateUpTasks = this._cards.slice().sort((a, b) => a.dueDate - b.dueDate);
        sortedByDateUpTasks.forEach((dataCard) => this._renderCard(dataCard));
        break;
      case `date-down`:
        const sortedByDateDownTasks = this._cards.slice().sort((a, b) => b.dueDate - a.dueDate);
        sortedByDateDownTasks.forEach((dataCard) => this._renderCard(dataCard));
        break;
      case `default`:
        this._cards.forEach((dataCard) => this._renderCard(dataCard));
        break;
    }
  }

  _renderButton() {
    let start = 0;
    const stepCardLoad = 8;
    let end = start + stepCardLoad;
    const addCards = () => {
      start = start + stepCardLoad;
      end = end + stepCardLoad;
      dataCards.slice(start, end).forEach((data) => this._renderCard(data));
      const cards = document.querySelectorAll(`.card`);
      const cardsLength = Array.from(cards).length;
      if (cardsLength >= dataCards.length) {
        this._buttonMore.removeElement();
      }
    };
    this._buttonMore.getElement().addEventListener(`click`, addCards);
    render(this._board.getElement(), this._buttonMore.getElement(), Position.BEFOREEND);
  }

  _renderFilter(data) {
    const filter = new Filter(data);
    render(this._filterContainer.getElement(), filter.getElement(), Position.BEFOREEND);
  }

  _renderNoTask() {
    if (dataCards.length <= 0 && this._cards.length <= 0) {
      this._sort.removeElement();
      this._buttonMore.removeElement();
      this._taskList.removeElement();
      render(this._board.getElement(), this._noElement.getElement(), Position.AFTERBEGIN);
    }
  }

}

