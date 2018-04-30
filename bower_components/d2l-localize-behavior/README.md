# d2l-localize-behavior
[![Bower version][bower-image]][bower-url]
[![Build status][ci-image]][ci-url]

[Polymer](https://www.polymer-project.org) mixin wrapper around [app-localize-behavior](https://github.com/PolymerElements/app-localize-behavior), adding automatic language resolution, timezone and locale overrides support.

For further information on this and other Brightspace UI components, see the docs at [ui.developers.brightspace.com](http://ui.developers.brightspace.com/).

## Installation

`d2l-localize-behavior` can be installed from [Bower][bower-url]:

```shell
bower install d2l-localize-behavior
```

## Usage

Use this mixin in your web components the same way [app-localize-behavior](https://github.com/PolymerElements/app-localize-behavior) is used. Place your language resources as a collection property called `resources`. Unlike `app-localize-behavior`, don't specify a `language` property as it will be resolved automatically.

```html
<link rel="import" href="bower_components/d2l-localize-behavior/d2l-localize-behavior.html">
<dom-module id="my-elem">
  <template strip-whitespace>
    <p>{{localize('hello')}}</p>
  </template>
  <script>
    Polymer({
      is: 'my-elem',
      behaviors: [
        D2L.PolymerBehaviors.LocalizeBehavior
      ],
      properties: {
        resources: {
          value: function() {
            return {
              'de': { 'hello': 'Hallo' },
              'en': { 'hello': 'Hello' },
              'en-ca': { 'hello': 'Hello, eh' },
              'es': { 'hello': 'Hola' },
              'fr': { 'hello': 'Bonjour' }
            };
          }
        }
      }
    });
  </script>
</dom-module>
```

Then consume your web component in a page which has the `lang` attribute set on the `<html>` element:

```html
<html lang="fr">
  <head>
    <link rel="import" href="my-elem.html">
  </head>
  <body>
    <my-elem></my-elem>
  </body>
</html>
```

If the language of the page changes (via an update to the `lang` attribute on `<html>`), the mixin will automatically detect the change and re-render the web component. It will fire the event `d2l-localize-behavior-language-changed` when this occurs.

### Language Resources

* Always provide entries for base languages (e.g. "en", "fr", "pt") so that if the user is using a regional language (e.g. "en-gb", "fr-ca", "pt-br") which is missing, it can fall back to the base language.
* If there's no entry for a particular language, and no base language, the value of `data-lang-default` on the `<html>` element will be used.
* If no `data-lang-default` is specified, "en" will be used as a last resort.

### Numbers, File Sizes, Dates and Times

While [format.js](https://formatjs.io) has built-in support for date, time and number formatting, D2L has its own rules and also allows complex overriding of the standard locale settings (decimal separator, group separator, 24-hour clocks, etc.).

To support these custom rules, `d2l-localize-behavior` exposes several methods for formatting and parsing dates, times, numbers and file sizes. These simply leverage the [D2L Intl library](https://github.com/Brightspace/intl).

#### Formatting Numbers (decimal and percent)

Use the `formatNumber` method for number formatting:

```javascript
this.formatNumber(1234567.89);
// -> '1,234,567.89' for en-CA
```

To round to various decimal places, use the options `minimumFractionDigits` (0-20, default is 0) and `maximumFractionDigits` (0-20, default is larger of `minimumFractionDigits` and 3):

```javascript
this.formatNumber(
	1234567.89,
	{maximumFractionDigits: 0}
);
// -> '1,234,568' for en-CA
```

To format as a percentage use the `style` option, which can be `decimal` (default) or `percent`:

```javascript
this.formatNumber(0.189, {style: 'percent'});
// -> '18.9 %' for en-CA
```

#### Parsing Numbers

To parse user-inputted numbers, use the `parseNumber` method:

```javascript
this.parseNumber('1,234,567.890');
// -> '1234567.89' for en-CA
```

#### Formatting Dates and Times

To format dates use the `formatDate` method. An optional `format` can be provided, which can be one of: `full`, `medium`, `short` (default), `monthYear` or `monthDay`.

```javascript
this.formatDate(new Date(2017, 11, 1));
// -> '12/1/2017' for en-CA

this.formatDate(
	new Date(2017, 11, 1),
	{format: 'full'}
);
// -> 'Friday, December 1, 2017' for en-CA
```

To format a time on its own, use the `formatTime` method. An optional `format` can be provided, which can be one of: `full`, `medium` or `short` (default):

```javascript
this.formatTime(new Date(2017, 11, 1, 17, 13));
// -> '5:13 PM' for en-CA

this.formatTime(
	new Date(2017, 11, 1, 17, 13),
	{format: 'full'}
);
// -> '5:13 PM <timezone-name>'
```

To format both a date and a time, use the `formatDateTime` method. Again, the optional `format` can be one of: `full`, `medium` or `short` (default):

```javascript
this.formatDateTime(new Date(2017, 11, 1, 17, 13));
// -> '12/1/2017 5:13 PM' for en-CA

this.formatDateTime(
	new Date(2017, 11, 1, 17, 13),
	{format: 'medium'}
);
// -> 'Dec 1, 2017 5:13 PM' for en-CA
```

### Parsing Dates and Times

To parse a user-entered date, use the `parseDate` method. It will return a [JavaScript Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object.

```javascript
var date = this.parseDate('12/1/2017');
date.getFullYear(); // -> 2017
date.getMonth(); // -> 11
date.getDate(); // -> 1
```

Similarly, `parseTime` can be used to parse user-entered times:

```javascript
var time = this.parseTime('5:13 PM');
time.getHours(); // -> 17
time.getMinutes(); // -> 13
```

### File Size Formatting

To format file sizes in the user's locale, use the `formatFileSize` method:

```javascript
time.formatFileSize(1234567.89);
// -> '1.18 MB' for en-CA
```

## Automatic Language, Timezone and Override Support

The user's language, timezone and any D2L locale overrides are automatically fetched by `d2l-localize-behavior` from the `<html>` element's `lang`, `data-timezone` and `data-intl-overrides` attributes respectively.

These attributes are set automatically by pages in the monolith, and will also be automatically set in IFRAME'd Free-Range Apps (and kept in sync) by [ifrau](https://github.com/Brightspace/ifrau).

## Future Enhancements

* Ability to "merge" regional and base language values such that only regional overrides would be required

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

[bower-url]: http://bower.io/search/?q=d2l-localize-behavior
[bower-image]: https://badge.fury.io/bo/d2l-localize-behavior.svg
[ci-url]: https://travis-ci.org/BrightspaceUI/localize-behavior
[ci-image]: https://travis-ci.org/BrightspaceUI/localize-behavior.svg
