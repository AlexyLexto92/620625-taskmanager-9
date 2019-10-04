import {AbstractComponent} from "../components/abstarct";
import {ResultSearch} from "../components/resultSearch";
import {render, Position, unrender, Mode} from "../components/utils";
import {TaskController} from "./task";
import {ResultCards} from "../components/resultCards";

export class SearchController extends AbstractComponent {

  constructor(container, seach, data, taskList, buttonMore, sortList, board) {
    super();
    this._board = board;
    this._buttonMore = buttonMore;
    this._taskList = taskList;
    this._sortList = sortList;
    this._search = seach;
    this._container = container;
    this._searchBoard = new ResultSearch();
    this._resultCards = new ResultCards();
    this._cards = data;
    this._data = [];
    this._init();
  }

  _init() {
    this._search.getElement().querySelector(`input`)
      .addEventListener(`input`, (evt) => {
        const {value} = evt.target;
        let cards = [];
        cards = this._cards.filter((card) => {
          return card.description.includes(value);
        });
        this._data = [];
        this._data = cards;
        if (value.length > 0) {
          this._show();
          this._searchBoard.getElement().querySelector(`.result__back`).addEventListener(`click`, () => {
            this._search.getElement().querySelector(`input`).value = ``;
            this._hide();
          });
        } else {
          this._hide();
        }
      });
  }
  _show() {
    this._sortList.getElement().classList.add(`visually-hidden`);
    this._taskList.getElement().classList.add(`visually-hidden`);
    this._buttonMore.getElement().classList.add(`visually-hidden`);
    render(this._board.getElement(), this._searchBoard.getElement(), Position.BEFOREEND);
    const cardList = document.querySelector(`.result__group`);
    render(cardList, this._resultCards.getElement(), Position.BEFOREEND);
    const result = document.querySelector(`.result__cards`);
    const tasks = result.querySelectorAll(`.card`);
    tasks.forEach((task) => {
      unrender(task);
    });
    this._data.forEach((element) => {
      this._renderCards(element);

    });
  }

  _hide() {
    unrender(this._searchBoard.getElement());
    this._sortList.getElement().classList.remove(`visually-hidden`);
    this._taskList.getElement().classList.remove(`visually-hidden`);
    this._buttonMore.getElement().classList.remove(`visually-hidden`);
  }
  _renderCards(elem) {
    //  eslint-disable-next-line
    const searchTasks = new TaskController(this._resultCards, elem, Mode.DEFAULT);
  }
}

