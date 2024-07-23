export const wait = async (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const mapBy = <T>(key: keyof T, array: T[]) => {
  return array.reduce(
    (acc, obj) => {
      const property = obj[key] as string;
      if (!acc[property]) {
        acc[property] = [];
      }
      acc[property].push(obj);
      return acc;
    },
    {} as Record<string, T[]>,
  );
};
