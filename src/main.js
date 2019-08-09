/*
const getComponentMenu = () => (`
<section class="control__btn-wrap">
<input type="radio" name="control" id="control__new-task" class="control__input visually-hidden">
<label for="control__new-task" class="control__label control__label--new-task"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ ДОБАВИТЬ НОВУЮ ЗАДАЧУ</font></font></label>
<input type="radio" name="control" id="control__task" class="control__input visually-hidden" checked="">
<label for="control__task" class="control__label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ЗАДАЧИ</font></font></label>
<input type="radio" name="control" id="control__statistic" class="control__input visually-hidden">
<label for="control__statistic" class="control__label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">СТАТИСТИКА</font></font></label>
</section>
`);
*/
/*
const getComponentSearch = () => (`
<section class="main__search search container">
        <input type="text" id="search__input" class="search__input" placeholder="START TYPING — SEARCH BY WORD, #HASHTAG OR DATE">
        <label class="visually-hidden" for="search__input"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Поиск</font></font></label>
      </section>
      `);
*/
/*
const getComponentFilter = () => (`
<section class="main__filter filter container">
        <input type="radio" id="filter__all" class="filter__input visually-hidden" name="filter" checked="">
        <label for="filter__all" class="filter__label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
          Все </font></font><span class="filter__all-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2</font></font></span></label>
        <input type="radio" id="filter__overdue" class="filter__input visually-hidden" name="filter" disabled="">
        <label for="filter__overdue" class="filter__label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Просрочено </font></font><span class="filter__overdue-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">0</font></font></span></label>
        <input type="radio" id="filter__today" class="filter__input visually-hidden" name="filter" disabled="">
        <label for="filter__today" class="filter__label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Сегодня </font></font><span class="filter__today-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">0</font></font></span></label>
        <input type="radio" id="filter__favorites" class="filter__input visually-hidden" name="filter" disabled="">
        <label for="filter__favorites" class="filter__label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Избранное </font></font><span class="filter__favorites-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">0</font></font></span></label>
        <input type="radio" id="filter__repeating" class="filter__input visually-hidden" name="filter" disabled="">
        <label for="filter__repeating" class="filter__label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Повторять </font></font><span class="filter__repeating-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">0</font></font></span></label>
        <input type="radio" id="filter__tags" class="filter__input visually-hidden" name="filter" disabled="">
        <label for="filter__tags" class="filter__label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Теги </font></font><span class="filter__tags-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">0</font></font></span></label>
        <input type="radio" id="filter__archive" class="filter__input visually-hidden" name="filter">
        <label for="filter__archive" class="filter__label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Архив </font></font><span class="filter__archive-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">115</font></font></span></label>
      </section>
      `);
      */
/*
const getComponentBoardFilter = () => (
  `<div class="board__filter-list">
  <a href="#" class="board__filter"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Сортировка по умолчанию </font></font></a>
  <a href="#" class="board__filter"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Сортировка по дате вверх </font></font></a>
  <a href="#" class="board__filter"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Сортировка по дате вниз</font></font></a>
</div>
`
);
*/
/*
const getComponentCard = () => (
  `
  <article class="card card--black">
            <div class="card__form">
              <div class="card__inner">
                <div class="card__control">
                  <button type="button" class="card__btn card__btn--edit"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                    редактировать
                  </font></font></button>
                  <button type="button" class="card__btn card__btn--archive"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                    архив
                  </font></font></button>
                  <button type="button" class="card__btn card__btn--favorites card__btn--disabled"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                    избранное
                  </font></font></button>
                </div>

                <div class="card__color-bar">
                  <svg class="card__color-bar-wave" width="100%" height="10">
                    <use xlink:href="#wave"></use>
                  </svg>
                </div>

                <div class="card__textarea-wrap">
                  <p class="card__text"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Пример задания по умолчанию с цветом по умолчанию.</font></font></p>
                </div>

                <div class="card__settings">
                  <div class="card__details">
                    <div class="card__dates">
                      <div class="card__date-deadline">
                        <p class="card__input-deadline-wrap">
                          <span class="card__date"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">23 сентября </font></font></span>
                          <span class="card__time"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">23:15</font></font></span>
                        </p>
                      </div>
                    </div>

                    <div class="card__hashtag">
                      <div class="card__hashtag-list">
                        <span class="card__hashtag-inner">
                          <span class="card__hashtag-name"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                            #todo
                           </font></font></span>
                        </span>

                        <font style="vertical-align: inherit;"><span class="card__hashtag-inner"><span class="card__hashtag-name"><font style="vertical-align: inherit;">
                            #personal
                           </font></span></span><span class="card__hashtag-inner"><span class="card__hashtag-name"><font style="vertical-align: inherit;">
                            #important
                          </font></span></span></font><span class="card__hashtag-inner">
                          <span class="card__hashtag-name"><font style="vertical-align: inherit;"></font></span>
                        </span>

                        <span class="card__hashtag-inner">
                          <span class="card__hashtag-name"><font style="vertical-align: inherit;"></font></span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          `
);
*/
/*
const getComponentCardEdit = () => (`
<article class="card card--edit card--black">
            <form class="card__form" method="get">
              <div class="card__inner">
                <div class="card__control">
                  <button type="button" class="card__btn card__btn--archive"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                    архив
                  </font></font></button>
                  <button type="button" class="card__btn card__btn--favorites card__btn--disabled"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                    избранное
                  </font></font></button>
                </div>

                <div class="card__color-bar">
                  <svg width="100%" height="10">
                    <use xlink:href="#wave"></use>
                  </svg>
                </div>

                <div class="card__textarea-wrap">
                  <label>
                    <textarea class="card__text" placeholder="Start typing your text here..." name="text">This is example of new task, you can add picture, set date and time, add tags.</textarea>
                  </label>
                </div>

                <div class="card__settings">
                  <div class="card__details">
                    <div class="card__dates">
                      <button class="card__date-deadline-toggle" type="button"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                        дата: </font></font><span class="card__date-status"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">нет</font></font></span>
                      </button>

                      <fieldset class="card__date-deadline" disabled="">
                        <label class="card__input-deadline-wrap">
                          <input class="card__date" type="text" placeholder="23 September" name="date">
                        </label>
                      </fieldset>

                      <button class="card__repeat-toggle" type="button"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                        повторить: </font></font><span class="card__repeat-status"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">нет</font></font></span>
                      </button>

                      <fieldset class="card__repeat-days" disabled="">
                        <div class="card__repeat-days-inner">
                          <input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-mo-1" name="repeat" value="mo">
                          <label class="card__repeat-day" for="repeat-mo-1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">мо</font></font></label>
                          <input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-tu-1" name="repeat" value="tu" checked="">
                          <label class="card__repeat-day" for="repeat-tu-1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">вт</font></font></label>
                          <input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-we-1" name="repeat" value="we">
                          <label class="card__repeat-day" for="repeat-we-1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">мы</font></font></label>
                          <input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-th-1" name="repeat" value="th">
                          <label class="card__repeat-day" for="repeat-th-1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">го</font></font></label>
                          <input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-fr-1" name="repeat" value="fr" checked="">
                          <label class="card__repeat-day" for="repeat-fr-1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">фр</font></font></label>
                          <input class="visually-hidden card__repeat-day-input" type="checkbox" name="repeat" value="sa" id="repeat-sa-1">
                          <label class="card__repeat-day" for="repeat-sa-1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">са</font></font></label>
                          <input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-su-1" name="repeat" value="su" checked="">
                          <label class="card__repeat-day" for="repeat-su-1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">су</font></font></label>
                        </div>
                      </fieldset>
                    </div>

                    <div class="card__hashtag">
                      <div class="card__hashtag-list"></div>

                      <label>
                        <input type="text" class="card__hashtag-input" name="hashtag-input" placeholder="Type new hashtag here">
                      </label>
                    </div>
                  </div>

                  <div class="card__colors-inner">
                    <h3 class="card__colors-title"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">цвет</font></font></h3>
                    <div class="card__colors-wrap">
                      <input type="radio" id="color-black-1" class="card__color-input card__color-input--black visually-hidden" name="color" value="black" checked="">
                      <label for="color-black-1" class="card__color card__color--black"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">черный</font></font></label>
                      <input type="radio" id="color-yellow-1" class="card__color-input card__color-input--yellow visually-hidden" name="color" value="yellow">
                      <label for="color-yellow-1" class="card__color card__color--yellow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">желтый</font></font></label>
                      <input type="radio" id="color-blue-1" class="card__color-input card__color-input--blue visually-hidden" name="color" value="blue">
                      <label for="color-blue-1" class="card__color card__color--blue"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">синий</font></font></label>
                      <input type="radio" id="color-green-1" class="card__color-input card__color-input--green visually-hidden" name="color" value="green">
                      <label for="color-green-1" class="card__color card__color--green"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">зеленый</font></font></label>
                      <input type="radio" id="color-pink-1" class="card__color-input card__color-input--pink visually-hidden" name="color" value="pink">
                      <label for="color-pink-1" class="card__color card__color--pink"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">розовый</font></font></label>
                    </div>
                  </div>
                </div>

                <div class="card__status-btns">
                  <button class="card__save" type="submit"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">спасти</font></font></button>
                  <button class="card__delete" type="button"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">удалять</font></font></button>
                </div>
              </div>
            </form>
          </article>
          `);
*/
/*
const getComponentLoadMoreButton = () => (
  `
<button class="load-more" type="button"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Загрузи больше</font></font></button>
  `
);
*/
import {
  getComponentMenu
} from './components/menu.js';
import {
  getComponentFilter
} from './components/filter.js';
import {
  getComponentSearch
} from './components/search.js';
import {
  getComponentBoardFilter
} from './components/boardFilter.js';
import {
  getComponentCard
} from './components/card.js';
import {
  getComponentCardEdit
} from './components/cardEdit.js';
import {
  getComponentLoadMoreButton
} from './components/loadMoreButton.js';


const Main = document.querySelector(`.main`);
const boardContainer = document.createElement(`section`);
boardContainer.classList.add(`board`, `container`);
const boardTaskContainer = document.createElement(`div`);
boardTaskContainer.classList.add(`board__tasks`);
const mainControl = document.querySelector(`.main__control`);
const insertMarkup = (markupContainer, markup, position) => {
  markupContainer.insertAdjacentHTML(position, markup);
};
const numberOfRepetitionsCards = 3;

insertMarkup(mainControl, getComponentMenu(), `beforeend`);
insertMarkup(Main, getComponentSearch(), `beforeend`);
insertMarkup(Main, getComponentFilter(), `beforeend`);
Main.appendChild(boardContainer);
insertMarkup(boardContainer, getComponentBoardFilter(), `beforeend`);
boardContainer.appendChild(boardTaskContainer);
insertMarkup(boardTaskContainer, getComponentCardEdit(), `beforeend`);
new Array(numberOfRepetitionsCards).fill(getComponentCard()).forEach(() => {
  insertMarkup(boardTaskContainer, getComponentCard(), `beforeend`);
});
insertMarkup(boardContainer, getComponentLoadMoreButton(), `beforeend`);
