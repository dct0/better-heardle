export const objectToQuery = (object: Record<string, string>) => {
  return new URLSearchParams(object).toString();
};

export const queryToObject = (query: string) => {
  const parameters = new URLSearchParams(query);
  return Object.fromEntries(parameters.entries());
};

export const formatTime = (time: number) => {
  return `00:${String(Math.ceil(time)).padStart(2, '0')}`;
};
