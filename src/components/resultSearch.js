import {AbstractComponent} from "./abstarct";

export class ResultSearch extends AbstractComponent {
  constructor(title, count) {
    super();
    this._title = title;
    this._count = count;
  }
  getTemplate() {
    return `<section class="result container">
    <button class="result__back"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">назад</font></font></button>
    <section class="result__group">
      <h2 class="result__title"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        ${this._title} работа </font></font><span class="result__count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">${this._count}</font></font></span>
      </h2>

    </section>
  </section>`;
  }
}
