export const launchScreen = {
  render: () => {
    add(
      [
        text("Welcome!", {
          size: 48,
        }),
        pos(center().x - 100, center().y),
      ],
      scale(2)
    );
    add([sprite("bean")]);
  },
};
