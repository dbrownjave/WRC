# d2l-offscreen
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/BrightspaceUI/offscreen)
[![Bower version][bower-image]][bower-url]
[![Build status][ci-image]][ci-url]

This component contains a [Polymer](https://www.polymer-project.org/1.0/)-based web component and mixin, as well as a [Sass mixin](http://sass-lang.com/). Any of these can be used to position elements off the screen in an accessible manor.

For further information on this and other D2L UI components, see the docs at [ui.valence.d2l.com](http://ui.valence.d2l.com/).

## Installation

`d2l-offscreen` can be installed from [Bower][bower-url]:
```shell
bower install d2l-offscreen
```

## Usage

Off-screen elements are valuable from an accessibility perspective when you wish to have elements which are only visible to screen readers. For more information, read [WebAIM's article on Invisible Content](http://webaim.org/techniques/css/invisiblecontent/).

### Polymer Web component

Include the [webcomponents.js](http://webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components), then import `d2l-offscreen.html`.

```html
<head>
	<script src="../webcomponentsjs/webcomponents-lite.js"></script>
	<link rel="import" href="../d2l-offscreen/d2l-offscreen.html">
</head>
```

The `<d2l-offscreen>` custom element can now be used in your markup, the children of which will be hidden offscreen.

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="../d2l-typography/d2l-typography.html">
    <link rel="import" href="d2l-offscreen.html">
    <custom-style include="d2l-typography">
      <style is="custom-style" include="d2l-typography"></style>
    </custom-style>
    <style>
      html {
        font-size: 20px;
      }
      body {
        color: var(--d2l-color-ferrite);
        font-family: 'Lato', 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
        letter-spacing: 0.01rem;
        font-size: 0.95rem;
        font-weight: 400;
        line-height: 1.4rem;
      }
    </style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
Some offscreen content:
<d2l-offscreen>
	This message will only be visible to assistive technology, such as a screen reader.
</d2l-offscreen>
```

### Polymer Mixin

Alternatively, you can apply the offscreen styles to an existing element using the mixin.

You'll still include the web component polyfill, but instead of importing `d2l-offscreen.html`, import `d2l-offscreen-shared-styles.html`. Include `d2l-offscreen-shared-styles` on your style block and apply the `--d2l-offscreen` mixin to any CSS selector:

```html
<link rel="import" href="../d2l-offscreen/d2l-offscreen-shared-styles.html">
<style include="d2l-offscreen-shared-styles">

my-element {
	@apply --d2l-offscreen;
}
```

More on [Polymer shared style modules](https://www.polymer-project.org/1.0/docs/devguide/styling#style-modules)...

### Sass Mixin

Alternatively, to position an element offscreen using the Sass mixin, apply the `d2l-offscreen()` mixin to any CSS selector.

For example, to hide this message:
```html
<p class="offscreen">
	This message will only be visible to assistive technology, such as a screen reader.
</p>
```

SCSS:
```scss
@import 'bower_components/d2l-offscreen/offscreen.scss';
.offscreen {
	@include d2l-offscreen();
}
```

## Developing, Testing and Contributing

After cloning the repo, run `npm install` to install dependencies.

If you don't have it already, install the [Polymer CLI](https://www.polymer-project.org/2.0/docs/tools/polymer-cli) globally:

```shell
npm install -g polymer-cli
```

To start a [local web server](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#serve) that hosts the demo page and tests:

```shell
polymer serve
```

To lint ([eslint](http://eslint.org/) and [Polymer lint](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#lint)):

```shell
npm run lint
```

To run unit tests locally using [Polymer test](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#tests):

```shell
polymer test --skip-plugin sauce
```

To lint AND run local unit tests:

```shell
npm test
```

[bower-url]: http://bower.io/search/?q=d2l-offscreen
[bower-image]: https://img.shields.io/bower/v/d2l-offscreen.svg
[ci-image]: https://travis-ci.org/BrightspaceUI/offscreen.svg?branch=master
[ci-url]: https://travis-ci.org/BrightspaceUI/offscreen
