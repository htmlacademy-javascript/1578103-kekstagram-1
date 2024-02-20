const descriptionPhoto = ['Вид из окна гостиницы', 'На пляж', 'Красивый пляж', 'Я фотограф', 'А это точно джакузи?', 'Точно дверь не сломалась?', 'Обед, когда до лета 7 дней', 'Очень молодое вино - это сок', 'Привет - железная птица', 'Удобная полка', 'Дорога в рай', 'Ауди', 'Местная кухня', 'Коксоролл', 'Когда Железному человеку холодно', 'Страшно красиво', 'Я первый слева в третьем ряду, точнее мое ухо', 'Американская  мечта', 'Заказал на Кекс-экспресс', 'Какой отдых без пальм?', 'Вкусняшка', 'Попросила мужа красиво сфотографировать на фоне заката)', 'Мой сосед, а может и обед', 'Концерт', 'Похоже повернул не туда'];

const arrayMessages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const userName = ['Михаил', 'Александр', 'Максим', 'Марк', 'Артём', 'Лев', 'Матвей', 'Иван', 'Дмитрий', 'Тимофей', 'София', 'Анна', 'Мария', 'Ева', 'Виктория', 'Полина', 'Варвара', 'Алиса', 'Василиса', 'Александра'];

const minlikes = 15;
const maxLikes = 200;

const createIdGenerator = () => {
  let lastGeneratedId = 0;
  return () => (lastGeneratedId += 1);
};

const createPhotoId = createIdGenerator();
const createPhotoUrl = createIdGenerator();
const createCommentId = createIdGenerator();

const getRandomInteger = (min, max) => {
  const minInteger = Math.ceil(Math.min(min, max));
  const maxInteger = Math.floor(Math.max(min, max));
  return Math.floor(Math.random() * (maxInteger - minInteger + 1) + minInteger);
};

const getRandomArrayElement = (arrayName) => arrayName[getRandomInteger(0, arrayName.length - 1)];

const createComment = () => ({
  id: createCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(arrayMessages), //[getRandomInteger(0, arrayMessages.length - 1)], // arrayMessages[getRandomInteger(0, arrayMessages.length--)], то работает, то нет??
  name: getRandomArrayElement(userName)
});

//console.log(createComment());


const createPhotoDescription = () => {
  const photoId = createPhotoId();
  const descriptionIndex = photoId - 1;
  return {
    id: photoId,
    url: `./photos/${createPhotoUrl()}.jpg`,
    description: descriptionPhoto[descriptionIndex],
    likes: getRandomInteger(minlikes, maxLikes),
    comments: Array.from({ length: getRandomInteger(1, 10) }, createComment),
  };
};

// console.log(createPhotoDescription());
// console.log(createPhotoDescription());
// console.log(createPhotoDescription());

const getArrayPhotoDescription = Array.from({ length: 25 }, createPhotoDescription);


console.log(getArrayPhotoDescription);

