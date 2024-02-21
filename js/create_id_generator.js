const createIdGenerator = () => {
  let lastGeneratedId = 0;
  return () => (lastGeneratedId += 1);
};

export { createIdGenerator };
