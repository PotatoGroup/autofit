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
  const scale = window.innerWidth / dw;
  let meta = document.querySelector("meta[name=viewport]") as HTMLMetaElement;
  if (!meta) {
    const meta = document.createElement("meta");
    meta.setAttribute("name", "viewport");
    document.head.appendChild(meta);
  }
  meta.setAttribute(
    "content",
    `width=${window.innerWidth}, initial-scale=${scale}, user-scalable=no`
  );
};

export { autoScale };
