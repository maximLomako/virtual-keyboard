import cards from "./cards";

export type CardItemsDataType = {
  word: string
  translation: string
  image: string
  audioSrc: string
}

export const main = document.querySelector(".main");
export const [categoriesData] = cards;
export const cardsItemsData = cards.map((c: string[] | Array<CardItemsDataType>) => ({ ...c }));
cardsItemsData.shift();
export const categoriesAvatarIndex = 6;
export const firstArrayItemIndex = 0;
const arrayItemLength = 7;

export const burgerCategories = [...categoriesData];
burgerCategories.unshift("Main Page");
burgerCategories.push("Statistics");
export const burgerCardItems = cardsItemsData
  .map((c: string[] | Array<CardItemsDataType>) => ({ ...c }));

burgerCardItems.unshift([Array(arrayItemLength)]);
burgerCardItems[firstArrayItemIndex][categoriesAvatarIndex] = {
  image: "images/house.png"
};
burgerCardItems.push([Array(arrayItemLength)]);
const lastArrayItem = burgerCardItems.length - 1;
burgerCardItems[lastArrayItem][categoriesAvatarIndex] = {
  image: "images/stat.png"
};
export let categoryValue: null | number = null;
export const getCategoryValue = (value: number) => {
  categoryValue = value;
};

export const toggleButton = document.querySelector(".toggleButton");
export const btnTrain = document.querySelector(".btn__train");
export const btnGame = document.querySelector(".btn__game");

export let buttonValue = true;
export const setButtonValue = (value: boolean) => {
  buttonValue = value;
};
