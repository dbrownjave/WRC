# WRC Software

This project is developed with Polymer 2.0

### Reviewing UI

To review the UI follow the next instructions

* **NPM** install npm from [here](https://www.npmjs.com/get-npm?utm_source=house&utm_medium=homepage&utm_campaign=free%20orgs&utm_term=Install%20npm)
* **Polymer CLI** install the Polymer CLI using npm i -g polymer-cli
* **Bower** install bower using npm i -g bower
* **Install bower components** navigate to project path and execute bower install command to install the bower components
* **Serve using Polymer CLI** go to your project path via terminal and use the "polymer serve" command
* **Open in browser** use the  command "polymer serve" and go to "localhost:port" (by default port will be 8081)

**Please add/edit the following code to firebase-auth on bower_components/polymerfire/firebase-auth.html**

* function > _handleSignIn
```
_handleSignIn: function(promise, action) {
    return promise
    .then(function(user) {
        this.fire('success', action);
    }.bind(this))
    .catch(function(err) {
        this.fire('error', err);
        throw err;
    }.bind(this));
}
```

* function > signInWithEmailAndPassword
```
signInWithEmailAndPassword: function(email, password) {
    return this._handleSignIn(this.auth.signInWithEmailAndPassword(email, password), 'auth');
}
```

* function > sendPasswordResetEmail
```
sendPasswordResetEmail: function(email) {
    return this._handleSignIn(this.auth.sendPasswordResetEmail(email), 'recover');
}
```

### In iron-form element

* function > reset
```
replace:
    node.value = defaults.value;
    node.checked = defaults.checked;

with:
    node.value = null;
    node.checked = false;
    node.invalid = false;
```