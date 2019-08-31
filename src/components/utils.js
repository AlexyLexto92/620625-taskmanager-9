
import {Position} from './../main.js';
export const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
export const tagRandom = (tagArr, tagsStart, tagsEnd, tagsCounts)=>{
  const startCount = randomInteger(tagsStart, tagsEnd);
  const tags = tagArr.slice(startCount, startCount + tagsCounts);
  return tags;
};


export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstElementChild;
};

// Рендер и анрендер для компонент
export const render = (container, element, place) => {
  switch (place) {
    case Position.AFTERBEGIN:
      container.prepend(element);
      break;
    case Position.BEFOREEND:
      container.append(element);
      break;
  }
};

export const unrender = (element) => {
  if (element) {
    element.remove();
  }
};
