const autoFit = () => {
  if (isMobile()) {
    resetViewport();
  }
  if (supportViewport()) {
    //viewport
  } else {
    //rem
  }
};

const isMobile = () =>
  /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);

const resetViewport = () => {
  document.querySelector('meta[name="viewport"]')?.remove();
  const meta = document.createElement("meta");
  meta.name = "viewport";
  meta.content =
    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
  document.head.appendChild(meta);
};

const supportViewport = () => CSS.supports("width", "100vw");

export { autoFit };
