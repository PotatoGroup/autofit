import { isMobile } from "./utils";
const autoFit = ({
  dw,
  dh = 100,
  fitType = "viewport",
}: {
  dw: number;
  dh?: number;
  fitType?: "viewport" | "rem";
}) => {
  if (isMobile()) {
    resetViewport();
  }
  if (fitType === "viewport") {
    injectCssVar({
      vw: `${100 / dw}vw`,
      vh: `${100 / dh}vh`,
    });
  } else {
    toRem();
    injectCssVar({
      rem: `${dw / 10}rem`,
    });
    window.addEventListener("resize", toRem);
  }
};

const resetViewport = () => {
  document.querySelector('meta[name="viewport"]')?.remove();
  const meta = document.createElement("meta");
  meta.name = "viewport";
  meta.content =
    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
  document.head.appendChild(meta);
};

const toRem = () => {
  const root = document.documentElement;
  const scale = root.clientWidth / 10;
  root.style.fontSize = scale + "px";
};

const injectCssVar = (vars: Record<string, any> = {}) => {
  const styleContent = Object.entries(vars)
    .map(([key, val]) => `--${key}: ${val};`)
    .join("\n");
  if (styleContent) {
    const style = document.createElement("style");
    style.innerHTML = styleContent;
    document.head.appendChild(style);
  }
};

export { autoFit };
