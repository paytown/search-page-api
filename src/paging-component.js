import { writePageToQuery } from './hash-query.js';

const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');
const currentPage = document.getElementById('current-page');
const totalPages = document.getElementById('total-pages');

let currentPageNumber = 1;

previousButton.addEventListener('click', () => {
    currentPageNumber--;
    updatePage();
});
nextButton.addEventListener('click', () => {
    currentPageNumber++;
    updatePage();
});

export default function updatePage() {
    const existingQuery = window.location.hash.slice(1);
    const newQuery = writePageToQuery(existingQuery, currentPageNumber);
    window.location.hash = newQuery;
}

export function updatePagingInfo(pagingInfo) {
    currentPage.textContent = currentPageNumber;
    totalPages.textContent = pagingInfo.totalPages;
    nextButton.disabled = currentPageNumber === pagingInfo.totalPages;
    previousButton.disabled = currentPageNumber === 1;
}