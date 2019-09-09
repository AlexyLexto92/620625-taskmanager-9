import {AbstractComponent} from "./abstarct";

export class Search extends AbstractComponent {
  getTemplate() {
    return `<section class="main__search search container">
  <input type="text" id="search__input" class="search__input" placeholder="START TYPING — SEARCH BY WORD, #HASHTAG OR DATE">
  <label class="visually-hidden" for="search__input"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Поиск</font></font></label>
</section>
`;
  }
}
