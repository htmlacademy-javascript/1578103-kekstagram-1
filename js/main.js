import { getArrayPhotoDescription } from './data.js';
import { renderCards } from './show-other-photos.js';


const otherPhotos = getArrayPhotoDescription();
renderCards(otherPhotos);

