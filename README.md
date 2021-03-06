# todomvc-model
> Model object for TodoMVC apps

[![NPM][todomvc-model-icon] ][todomvc-model-url]

[![Build status][todomvc-model-ci-image] ][todomvc-model-ci-url]
[![semantic-release][semantic-image] ][semantic-url]

## Use

    npm install --save todomvc-model virtual-todos fake-todos virtual-dom

Then create the model and init with some fake or real todos. Pass it to the renderer

```js
var Todos = require('todomvc-model')
Todos.items = require('fake-todos')(100)
var virtualDom = require('virtual-todos')(Todos)
var createElement = require('virtual-dom/create-element')
var rootNode = createElement(virtualDom)
document.body.appendChild(rootNode)
```

See in [action](http://glebbahmutov.com/hydrate-vdom-todo/), browse 
[source](https://github.com/bahmutov/hydrate-vdom-todo)

## Related

* [fake-todos](https://github.com/bahmutov/fake-todos) to generate fake todo items
* [virtual-todos](https://github.com/bahmutov/virtual-todos) for rendering virtual DOM from todos
* [hydrate-vdom-todo](https://github.com/bahmutov/hydrate-vdom-todo) uses virtual rendering
  and this model object to implement the full app.

### Small print

Author: Gleb Bahmutov &copy; 2015

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/todomvc-model/issues) on Github

## MIT License

Copyright (c) 2015 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[todomvc-model-icon]: https://nodei.co/npm/todomvc-model.png?downloads=true
[todomvc-model-url]: https://npmjs.org/package/todomvc-model
[todomvc-model-ci-image]: https://travis-ci.org/bahmutov/todomvc-model.png?branch=master
[todomvc-model-ci-url]: https://travis-ci.org/bahmutov/todomvc-model
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release

