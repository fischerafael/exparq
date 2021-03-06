export const getEmoji = (number: number) => {
  const emoji =
    number < 1 / 8
      ? "ðą"
      : number < 2 / 8
      ? "ðĪ"
      : number < 3 / 8
      ? "ðĒ"
      : number < 4 / 8
      ? "ðĨą"
      : number < 5 / 8
      ? "ð"
      : number < 6 / 8
      ? "ð"
      : number < 7 / 8
      ? "ð"
      : "ðĪŠ";

  return emoji;
};
