import { AbstractComponent } from "../components/abstarct";
import { Search } from "../components/search";
import { ResultSearch } from "../components/resultSearch";

export class SearchController extends AbstractComponent{
  constructor(search, container, onButtonClick){
    super();
    this._search = search;
    this._container = container;
    this._onButtonClick = onButtonClick;
    this._searchBoard = new ResultSearch();
  }

}
