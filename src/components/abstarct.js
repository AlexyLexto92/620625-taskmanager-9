import {createElement, unrender} from './utils.js';
export class AbstractComponent {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    throw Error(`Abstract method not implemented: getTemplate`);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    unrender(this._element);
    this._element = null;
    this._id = 0;
  }
}
