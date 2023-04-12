export const countItemsBasket = (data) => {
  return data.reduce((acc, curr) => {
    const { count } = curr;
    return acc + count;
  }, 0);
};
