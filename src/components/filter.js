import {AbstractComponent} from "./abstarct";

export class Filter extends AbstractComponent {
  constructor({title, count}) {
    super();
    this._title = title;
    this._count = count;
  }
  getTemplate() {
    return `  <label for="filter__archive" class="filter__label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"></font>${this._title}</font>
    <input type="radio" id="filter__archive" class="filter__input visually-hidden" name="filter">
    <span class="filter__archive-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">${this._count}</font></font></span></label>
`;
  }
}
