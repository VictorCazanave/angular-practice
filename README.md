# Angular2 Practice
It's not innovative. It's not useful. It's not beautiful. It's just a random project to learn and practice Angular2.

## Software factory

### Gulp + Browserify

#### Tasks
* `gulp clean`:
* `gulp html`:
* `gulp js`:
* `gulp build`:
* `gulp watch`:

#### TODO
* Rename tasks (`build:js`, `watch:js`...)?

#### IMHO

### npm scripts + Browserify

#### Tasks
* `npm run clean`: delete all files and folders inside `dist/`.
* `npm run html`: copy all HTML files from `src/` to `dist/` keeping the folders tree.
* `npm run js`: compile (TypeScript -> ES5) and bundle JS files with Browserify.
* `npm run build`: build application running `clean` + `html` + `js`.
* `npm run watch:html`: watch HTML files running `html` every time an HTML file is modified.
* `npm run watch:js`: watch JS files running `js` (kinda) every time a JS file is modified.
* `npm run watch:all`: watch HTML and JS files running `clean` then `html` then `watch:html` and `watch:js` at the same time.
* `npm run serve`: lauch `lite-server`.
* `npm start`: start application for development running `watch:all` and `serve` at the same time.

#### TODO
* Fix uglify (error with uglifyjs/uglify-to-browserify/uglifyify)
* Make build for production (uglify, no source map, concatenate templates...)
* Use cross-platform scripts
* Use short options (when used to it)

#### IMHO
Good (quick and easy to write/read) for small projects.
Maybe too limited (no variable, function, comment...) and hard to read for more complex projects.

### Webpack
TODO

## Search pages

### Used features
* App configuration (normal class)
* Feature module (`SearchModule`)
* HTTP request with promise (`HttpModule`)
* Router (`RouterModule`)
* Resolve (`Resolve` & `ActivatedRouteSnapshot` interfaces)
* Custom pipe (`Pipe` decorator & `PipeTransform` interface)

### TODO
* Try observable instead of promise
* Use relative paths for templateUrl
* Reorganize files into folders (components, services, pipes...?)
* Create a navigation menu to access different pages
* Make it ~~beautiful~~ less ugly (Bootstrap ?)

## Login pages
### TODO (everything)
* Learn Firebase and AngularFire ?
* Auth0 ?
