const autoScale = ({ width }: { width: number }) => {
  const scale = window.innerWidth / width;
  let meta = document.querySelector("meta[name=viewport]") as HTMLMetaElement;
  if (!meta) {
    const meta = document.createElement("meta");
    meta.setAttribute("name", "viewport");
    document.head.appendChild(meta);
  }
  meta.setAttribute(
    "content",
    `width=${width}, initial-scale=${scale}, user-scalable=no`
  );
};

export { autoScale };
