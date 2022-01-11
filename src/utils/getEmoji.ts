export const getEmoji = (number: number) => {
  const emoji =
    number < 1 / 8
      ? "😱"
      : number < 2 / 8
      ? "😤"
      : number < 3 / 8
      ? "😢"
      : number < 4 / 8
      ? "🥱"
      : number < 5 / 8
      ? "🙂"
      : number < 6 / 8
      ? "😃"
      : number < 7 / 8
      ? "😁"
      : "🤪";

  return emoji;
};
