export const isValidIndex = <T>(index: number | undefined, array: T[]): boolean => {
  if (index === undefined) return false;
  
  return index >= 0 && index < array.length;
};