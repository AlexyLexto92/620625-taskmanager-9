import {dataCards} from './components/data.js';
import {filters} from './components/data.js';
import {BoardController} from './controlers/board.js';
import {Position} from './components/utils.js';

let start = 0;
let end = 8;
const tasksContainer = document.querySelector(`.main`);
const boardController = new BoardController(tasksContainer, dataCards.slice(start, end), Position.BEFOREEND, filters);
boardController.init();
