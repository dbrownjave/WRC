# WRC Software

Weight Room Coach Software is a web application for coaches & athletes, to control their workouts and profiles.

## How to work on WRC

To work on WRC, follow the next instructions:

* **NPM:** install npm from [here](https://www.npmjs.com/get-npm?utm_source=house&utm_medium=homepage&utm_campaign=free%20orgs&utm_term=Install%20npm),
* **Polymer CLI:** install the Polymer CLI using npm i -g polymer-cli,
* **Bower:** install bower using npm i -g bower,
* **Serve using Polymer CLI:** go to your project folder via terminal and use the ```polymer serve``` command.

## Building app

To build the app run the ```polymer build``` command and once completed, do the following:

1. **Remove "weird code":** in the files ```wrc-athletes.html``` and ```pdf-workout-creator.html``` remove all the "weird code" which actually is the `pdfmake` library imported, but it is causing issues.
2. **Add `pdfmake` folder to `build/es6-bundled/bower_components`:** copy the `pdfmake` folder from local `bower_components` and copy it to the `bower_components` in the `build` folder.
3. **Import `pdfmake` to `build` files:** in the files mentioned in step 1, import the `pdfmake` library like this `<script src="../../bower_components/pdfmake/build/pdfmake.min.js"></script>` and `<script src="../../bower_components/pdfmake/build/vfs_fonts.js"></script>`. Please note the order, first `pdfmake` and then the `fonts`.

## Testing `build` app

To test the `build` app before deploying just run the following command: `polymer serve build/es6-bundled`.

## Deploying app

Once you built the app and added the `pdfmake` library as mentioned above, just run `firebase deploy` to deploy the app to the global host.

###### WRC Software is designed, created and supported by @ZEUSOFCS in collaboration with @codeselfinc
