import {randomInteger} from './utils.js';
import {tagRandom} from './utils.js';
const NUMBER_OF_REPETITIONS_CARDS = 36;
const tagArray = [`homework`, `theory`, `practice`, `intensive`, `keks`];

export const getDataCard = () => ({
  description: [
    `Изучить теорию`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`
  ][Math.floor(Math.random() * 3)],
  dueDate: [Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,
    Date.now() - Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000][Math.floor(Math.random() * 2)],
  repeatingDays: {
    Mo: Boolean(randomInteger(0, 1)),
    Tu: Boolean(randomInteger(0, 1)),
    We: Boolean(randomInteger(0, 1)),
    Th: Boolean(randomInteger(0, 1)),
    Fr: Boolean(randomInteger(0, 1)),
    Sa: Boolean(randomInteger(0, 1)),
    Su: Boolean(randomInteger(0, 1)),
  },
  tags: tagRandom(tagArray, 0, tagArray.length, 3),
  color: [`black`, `yellow`, `blue`, `green`, `pink`][Math.floor(Math.random() * 5)],
  isFavorite: Boolean(randomInteger(0, 1)),
  isArchive: Boolean(randomInteger(0, 1)),
});
export let dataCards = new Array(NUMBER_OF_REPETITIONS_CARDS).fill(getDataCard()).map(getDataCard);
export const filters = [{
  title: ` All `,
  get count() {
    return dataCards.length;
  }
},
{
  title: `Overdue`,
  get count() {
    let a = 0;
    for (let elem of dataCards) {
      let dateNow = Date.now();
      if (elem.dueDate < dateNow) {
        a += 1;
      }
    }
    return a;
  }
},
{
  title: `Today`,
  get count() {
    const dateNow = new Date().toDateString();
    let a = 0;
    for (let elem of dataCards) {
      if (new Date(elem.dueDate).toDateString() === dateNow) {
        a += 1;
      }
    }
    return a;
  }
},
{
  title: `Favorites`,
  get count() {
    let a = 0;
    for (let elem of dataCards) {
      if (elem.isFavorite) {
        a += 1;
      }
    }
    return a;
  }
},
{
  title: `Repeating `,
  get count() {
    let a = 0;
    for (let elem of dataCards) {
      let b = Object.values(elem.repeatingDays);
      if (b.some((el) => el === true)) {
        a += 1;
      }
    }
    return a;
  }},
{
  title: `Tags`,
  get count() {
    let a = 0;
    for (let elem of dataCards) {
      if (elem.tags.length > 0) {
        a += 1;
      }
    }
    return a;
  }
},
{
  title: `Archive`,
  get count() {
    let a = 0;
    for (let elem of dataCards) {
      if (elem.isArchive) {
        a += 1;
      }
    }
    return a;
  }
},
];

