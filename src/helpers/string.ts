export const hasSubString = (text: string, subText: string) => {
  if (text && subText) {
    return text.toString().toLowerCase().includes(subText.toLowerCase());
  }
  return false;
};
