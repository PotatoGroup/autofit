/**
 * page scale
 * @param {dw: number, dh?: number}
 */
const autoScale = ({
  dw,
  dh = window.innerHeight,
}: {
  dw: number;
  dh?: number;
}) => {
  const scale = Math.min(window.innerWidth / dw, window.innerHeight / dh);
  let meta = document.querySelector("meta[name=viewport]") as HTMLMetaElement;
  if (!meta) {
    const meta = document.createElement("meta");
    meta.setAttribute("name", "viewport");
    document.head.appendChild(meta);
  }
  meta.setAttribute(
    "content",
    `width=${dw}, initial-scale=${scale}, user-scalable=no`
  );
};

export { autoScale };
