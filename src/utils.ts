export const isMobile = () =>
  /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);

export const supportViewport = () => CSS.supports("width", "100vw");
