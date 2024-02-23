import { createPhotoId, createPhotoUrl, createCommentId, getRandomInteger, getRandomArrayElement, MIN_LIKES, MAX_LIKES, AVATAR_MIN_INDEX, AVATAR_MAX_INDEX, MIN_NUMBER_COMMENTS, MAX_NUMBER_COMMENTS, MAX_GENERATED_OBJECTS } from './main.js';

const DESCRIPTION_PHOTO = ['Вид из окна гостиницы', 'На пляж', 'Красивый пляж', 'Я фотограф', 'А это точно джакузи?', 'Точно дверь не сломалась?', 'Обед, когда до лета 7 дней', 'Очень молодое вино - это сок', 'Привет - железная птица', 'Удобная полка', 'Дорога в рай', 'Ауди', 'Местная кухня', 'Коксоролл', 'Когда Железному человеку холодно', 'Страшно красиво', 'Я первый слева в третьем ряду, точнее мое ухо', 'Американская  мечта', 'Заказал на Кекс-экспресс', 'Какой отдых без пальм?', 'Вкусняшка', 'Попросила мужа красиво сфотографировать на фоне заката)', 'Мой сосед, а может и обед', 'Концерт', 'Похоже повернул не туда'];

const ARRAY_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const USER_NAME = ['Михаил', 'Александр', 'Максим', 'Марк', 'Артём', 'Лев', 'Матвей', 'Иван', 'Дмитрий', 'Тимофей', 'София', 'Анна', 'Мария', 'Ева', 'Виктория', 'Полина', 'Варвара', 'Алиса', 'Василиса', 'Александра'];

const createComment = () => ({
  id: createCommentId(),
  avatar: `img/avatar-${getRandomInteger(AVATAR_MIN_INDEX, AVATAR_MAX_INDEX)}.svg`,
  message: getRandomArrayElement(ARRAY_MESSAGES),
  name: getRandomArrayElement(USER_NAME)
});

const createPhotoDescription = () => {
  const photoId = createPhotoId();
  const descriptionIndex = photoId - 1;
  return {
    id: photoId,
    url: `./photos/${createPhotoUrl()}.jpg`,
    description: DESCRIPTION_PHOTO[descriptionIndex],
    likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
    comments: Array.from({ length: getRandomInteger(MIN_NUMBER_COMMENTS, MAX_NUMBER_COMMENTS) }, createComment),
  };
};

const getArrayPhotoDescription = () => Array.from({ length: MAX_GENERATED_OBJECTS }, createPhotoDescription);

export { getArrayPhotoDescription };

