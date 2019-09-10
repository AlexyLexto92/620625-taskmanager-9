import {AbstractComponent} from "./abstarct";

export class MoreButton extends AbstractComponent {
  getTemplate() {
    return `<button class="load-more" type="button">
    <font style="vertical-align: inherit;">
      <font style="vertical-align: inherit;">Загрузи больше</font>
    </font>
  </button>`;
  }
}
