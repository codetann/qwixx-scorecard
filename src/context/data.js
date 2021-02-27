const colors = ["red", "yellow", "green", "blue"];

const Rows = colors.map((color) => {
  if (color === "red" || color === "yellow") {
    return {
      color: color,
      numbers: [
        { number: 2, toggled: false },
        { number: 3, toggled: false },
        { number: 4, toggled: false },
        { number: 5, toggled: false },
        { number: 6, toggled: false },
        { number: 7, toggled: false },
        { number: 8, toggled: false },
        { number: 9, toggled: false },
        { number: 10, toggled: false },
        { number: 11, toggled: false },
        { number: 12, toggled: false },
        { number: 0, toggled: false },
      ],
      score: 0,
      unlocked: false,
    };
  } else {
    return {
      color: color,
      numbers: [
        { number: 12, toggled: false },
        { number: 11, toggled: false },
        { number: 10, toggled: false },
        { number: 9, toggled: false },
        { number: 8, toggled: false },
        { number: 7, toggled: false },
        { number: 6, toggled: false },
        { number: 5, toggled: false },
        { number: 4, toggled: false },
        { number: 3, toggled: false },
        { number: 2, toggled: false },
        { number: 0, toggled: false },
      ],
      score: 0,
      unlocked: false,
    };
  }
});

export const Board = {
  rows: Rows,
  penalty: {
    total: 0,
    penalties: [
      { id: 1, toggled: false },
      { id: 2, toggled: false },
      { id: 3, toggled: false },
      { id: 4, toggled: false },
    ],
  },
};
