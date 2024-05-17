# @astii/autofit

[![NPM version](https://img.shields.io/npm/v/@astii/autofit.svg?style=flat)](https://npmjs.com/package/@astii/autofit)
[![NPM downloads](http://img.shields.io/npm/dm/@astii/autofit.svg?style=flat)](https://npmjs.com/package/@astii/autofit)

## Usage

```bash
$ yarn add @astii/autofit
```

### autoScale

```tsx
//entry of app
import { autoFit, autoScale } from "@astii/autofit";

autoScale({ dw: 375 });
```

### autoFit

```tsx
//entry of app
import { autoFit, autoScale } from "@astii/autofit";

autoFit({ dw: 375, dh: 667 });
```

#### with "viewport"

"px" need convert to **"vw"** and **"vh"**

```css
.card {
  /* width: 300px;
  height: 300px; */
  width: calc(300 * var(--pxw));
  height: calc(300 * var(--pxh));
}
```

#### with "rem"

"px" need convert to **"rem"**

```css
.card {
  /* width: 300px;
  height: 300px; */
  width: calc(300 / var(--rem));
  height: calc(300 / var(--rem));
}
```

## Options

| Name    | Type                | Default            | Description   |
| ------- | ------------------- | ------------------ | ------------- |
| dw      | number              | -                  | design width  |
| dh      | number              | window.innerHeight(viewport mode default to 100) | design height |
| fitType | "viewport" \| "rem" | "viewport"         | autoFit type  |

## LICENSE

MIT
