import {randomInteger} from './utils.js';
import {tagRandom} from './utils.js';
const NUMBER_OF_REPETITIONS_CARDS = 36;
const tagsAll = [`homework`, `theory`, `practice`, `intensive`, `keks`];

export const getDataCard = () => ({
  description: [
    `Почесать кота`,
    `Добить проект`,
    `Не сойти с ума`
  ][Math.floor(Math.random() * 3)],
  dueDate: [Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,
    Date.now() - Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000][Math.floor(Math.random() * 2)],
  repeatingDays: {
    'mo': Boolean(randomInteger(0, 1)),
    'tu': Boolean(randomInteger(0, 1)),
    'we': Boolean(randomInteger(0, 1)),
    'th': Boolean(randomInteger(0, 1)),
    'fr': Boolean(randomInteger(0, 1)),
    'sa': Boolean(randomInteger(0, 1)),
    'su': Boolean(randomInteger(0, 1)),
  },
  tags: tagRandom(tagsAll, 0, tagsAll.length, 3),
  color: [`black`, `yellow`, `blue`, `green`, `pink`][Math.floor(Math.random() * 5)],

  id: Math.random(),
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
    let number = 0;
    for (let elem of dataCards) {
      let dateNow = Date.now();
      if (elem.dueDate < dateNow) {
        number += 1;
      }
    }
    return number;
  }
},
{
  title: `Today`,
  get count() {
    const dateNow = new Date().toDateString();
    let number = 0;
    for (let elem of dataCards) {
      if (new Date(elem.dueDate).toDateString() === dateNow) {
        number += 1;
      }
    }
    return number;
  }
},
{
  title: `Favorites`,
  get count() {
    let number = 0;
    for (let elem of dataCards) {
      if (elem.isFavorite) {
        number += 1;
      }
    }
    return number;
  }
},
{
  title: `Repeating `,
  get count() {
    let number = 0;
    for (let elem of dataCards) {
      let b = Object.values(elem.repeatingDays);
      if (b.some((el) => el === true)) {
        number += 1;
      }
    }
    return number;
  }},
{
  title: `Tags`,
  get count() {
    let number = 0;
    for (let elem of dataCards) {
      if (elem.tags.length > 0) {
        number += 1;
      }
    }
    return number;
  }
},
{
  title: `Archive`,
  get count() {
    let number = 0;
    for (let elem of dataCards) {
      if (elem.isArchive) {
        number += 1;
      }
    }
    return number;
  }
},
];

