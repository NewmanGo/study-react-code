export const sleep = (delay) => {
  const start = Date.now();
  while (Date.now() - start <= delay) {}
};
