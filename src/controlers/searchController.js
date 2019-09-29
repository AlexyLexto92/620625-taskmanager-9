import {AbstractComponent} from "../components/abstarct";
import {ResultSearch} from "../components/resultSearch";
import {render, Position, unrender, Mode} from "../components/utils";
import {TaskController} from "./task";

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
    this._cards = data;
    this._data = [];
    this._init();
  }

  _init() {
    this._search.getElement().querySelector(`input`)
      .addEventListener(`keyup`, (evt) => {
        const {value} = evt.target;
        const cards = this._cards.filter((card) => {
          return card.description.includes(value);
        });
        this._data = cards;
        if (value.length > 0) {
          this._show();
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
    const taskList = document.querySelector(`.result__cards`);
    const card = new TaskController(taskList, elem, Mode.DEFAULT);
  }
}

