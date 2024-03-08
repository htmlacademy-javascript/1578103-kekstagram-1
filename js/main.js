import { getData } from './api.js';
import { showImageFilters, renderCardsFilters, setFilterClick } from './image-filters.js';
import { debounce } from './utils.js';
import { RERENDER_DELAY } from './constants.js';

getData()
  .then((photos) => {
    renderCardsFilters(photos);
    setFilterClick(debounce(
      () => renderCardsFilters(photos),
      RERENDER_DELAY,
    ));
  })
  .then(() => showImageFilters());

