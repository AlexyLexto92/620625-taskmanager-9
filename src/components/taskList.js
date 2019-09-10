import {AbstractComponent} from "./abstarct";

export class TaskList extends AbstractComponent {
  getTemplate() {
    return `<div class="board__tasks"></div>`;
  }
}
