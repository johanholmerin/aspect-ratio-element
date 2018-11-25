# aspect-ratio-element

A Custom Element that maintains aspect ratio. Uses Custom Properties and Shadow
DOM.

## Installation

```sh
yarn add git+https://github.com/johanholmerin/aspect-ratio-element#semver:^1.0.0
```

## Usage

```html
<script type="module" src="./node_modules/aspect-ratio-element/index.js"></script>

<aspect-ratio style="--aspect-ratio: 16 / 9;">
  <img src="https://picsum.photos/640/360/?random" alt="Lorem Picsum">
</aspect-ratio>
```
