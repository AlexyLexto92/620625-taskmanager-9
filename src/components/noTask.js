import {AbstractComponent} from "./abstarct";

export class NoTaskElement extends AbstractComponent {
  getTemplate() {
    return `<p class="board__no-tasks"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    Поздравляю, все задания были выполнены! </font><font style="vertical-align: inherit;">Для создания нового нажмите кнопку «Добавить новое задание».
  </font></font></p>`;
  }
}
