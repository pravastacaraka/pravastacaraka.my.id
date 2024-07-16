export const arrayGroupBy = (key) => {
  return (array = []) =>
    array.reduce((acc, obj) => {
      const property = obj[key];
      if (!acc[property]) acc[property] = [];
      acc[property].push(obj);
      return acc;
    }, {});
};
