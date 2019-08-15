import {randomInteger} from './../components/utils.js';
export const card = {
  description: [
    `Изучить теорию`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`
  ][Math.floor(Math.random() * 3)],
  dueDate: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,
  repeatingDays: {
    Mo: Boolean(randomInteger(0, 1)),
    Tu: Boolean(randomInteger(0, 1)),
    We: Boolean(randomInteger(0, 1)),
    Th: Boolean(randomInteger(0, 1)),
    Fr: Boolean(randomInteger(0, 1)),
    Sa: Boolean(randomInteger(0, 1)),
    Su: Boolean(randomInteger(0, 1)),
  },
  tags: new Set([`homework`, `theory`, `practice`, `intensive`, `keks`].splice(randomInteger(0, 5), 3)),
  color: [`black`, `yellow`, `blue`, `green`, `pink`][Math.floor(Math.random() * 5)],
  isFavorite: Boolean(randomInteger(0, 1)),
  isArchive: Boolean(randomInteger(0, 1)),
};
