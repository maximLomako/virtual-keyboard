import { main } from "./state";
import { statisticsCard } from "./cardsForStatistics";

type StatisticsCardItem = {
  category: string
  word: string
  translation: string
  image: string
  audioSrc: string
  trainMode: number
  correct: number
  errors: number
  errorsPercent: number
}

export const renderStatisticsBlock = () => {
  const tableHeaderItems = ["Categories", "Words", "Translation",
    "Train Mode", "Correct", "Errors", "Errors,%"];
  main.innerHTML = `
  <table class="table">
    <tr class="table-header">
    </tr>
  </table>`;

  const table = document.querySelector(".table");
  const tableHeader = document.querySelector(".table-header");
  tableHeaderItems.map(h => tableHeader.insertAdjacentHTML("beforeend",
    `<th class="table-item table-header__item">${h}</th>`));

  for (let i = 0; i < statisticsCard.length; i += 1) {
    statisticsCard.map((item: Array<StatisticsCardItem>) => table.insertAdjacentHTML("beforeend", `
  <tr class="table-body">
      <td class="table-item table-body__item">${item[i].category}</td>
      <td class="table-item table-body__item">${item[i].word}</td>
      <td class="table-item table-body__item">${item[i].translation}</td>
      <td class="table-item table-body__item">${item[i].trainMode}</td>
      <td class="table-item table-body__item">${item[i].correct}</td>
      <td class="table-item table-body__item">${item[i].errors}</td>
      <td class="table-item table-body__item">${item[i].errorsPercent}</td>
  </tr>`));
  }

};

