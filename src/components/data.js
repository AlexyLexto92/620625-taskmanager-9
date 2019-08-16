import {randomInteger} from './../components/utils.js';
const NUMBER_OF_REPETITIONS_CARDS = 5;
export const getCard = () => ({
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
  tags: [`homework`, `theory`, `practice`, `intensive`, `keks`].splice(randomInteger(0, 5), 3),
  color: [`black`, `yellow`, `blue`, `green`, `pink`][Math.floor(Math.random() * 5)],
  isFavorite: Boolean(randomInteger(0, 1)),
  isArchive: Boolean(randomInteger(0, 1)),
});

export const Cards = new Array(NUMBER_OF_REPETITIONS_CARDS).fill(getCard());
export const filters = [{
  title: ` All `,
  get count() {
    return Cards.length;
  }
},
{
  title: `Overdue`,
  get count() {
    let a = 0;
    for (let elem of Cards) {
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
    for (let elem of Cards) {
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
    for (let elem of Cards) {
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
    return 0;
  }
},
{
  title: `Tags`,
  get count() {
    let a = 0;
    for (let elem of Cards) {
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
    for (let elem of Cards) {
      if (elem.isArchive) {
        a += 1;
      }
    }
    return a;
  }
},
];

