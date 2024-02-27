const createIdGenerator = () => {
  let lastGeneratedId = 0;
  return () => (lastGeneratedId += 1);
};

const getRandomInteger = (min, max) => {
  const minInteger = Math.ceil(Math.min(min, max));
  const maxInteger = Math.floor(Math.max(min, max));
  return Math.floor(Math.random() * (maxInteger - minInteger + 1) + minInteger);
};

const getRandomArrayElement = (arrayName) => arrayName[getRandomInteger(0, arrayName.length - 1)];

const isEscKey = (e) => e.key === 'Escape';

export { createIdGenerator, getRandomInteger, getRandomArrayElement, isEscKey };
