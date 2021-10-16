const getBgColor = () => {
  return `rgb(${(Math.random() * 255) << 0}, ${(Math.random() * 255) << 0}, ${
    (Math.random() * 255) << 0
  }, 0.5)`;
};

export default getBgColor;
