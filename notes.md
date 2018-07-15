## NPM Modules

```terminla
npm i -g babel-cli@6.24.1
add babel-preset-env@1.5.2
add babel-preset-react@6.24.1
```

## Babel Commands

```terminal
babel .\src\app.js --out-file=public/scripts/app.js --presets=env,react --watch
```

## All Supported HTML Attributes

```
accept acceptCharset accessKey action allowFullScreen alt async autoComplete
autoFocus autoPlay capture cellPadding cellSpacing challenge charSet checked
cite classID className colSpan cols content contentEditable contextMenu controls
controlsList coords crossOrigin data dateTime default defer dir disabled
download draggable encType form formAction formEncType formMethod formNoValidate
formTarget frameBorder headers height hidden high href hrefLang htmlFor
httpEquiv icon id inputMode integrity is keyParams keyType kind label lang list
loop low manifest marginHeight marginWidth max maxLength media mediaGroup method
min minLength multiple muted name noValidate nonce open optimum pattern
placeholder poster preload profile radioGroup readOnly rel required reversed
role rowSpan rows sandbox scope scoped scrolling seamless selected shape size
sizes span spellCheck src srcDoc srcLang srcSet start step style summary
tabIndex target title type useMap value width wmode wrap
```

## Supported Events

| Events             | Names                                                                      |
| ------------------ | -------------------------------------------------------------------------- |
| Clipboard Events   | onCopy onCut onPaste                                                       |
| Composition Events | onCompositionEnd onCompositionStart onCompositionUpdate                    |
| Keyboard Events    | onKeyDown onKeyPress onKeyUp                                               |
| Focus Events       | onFocus onBlur                                                             |
| Form Events        | onChange onInput onInvalid onSubmit                                        |
| Mouse Events       | onClick onContextMenu onDoubleClick                                        |
| -                  | onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart |
| -                  | onDrop onMouseDown onMouseEnter onMouseLeave onMouseMove onMouseOut        |
| -                  | onMouseOver onMouseUp                                                      |
| Pointer Events     | onPointerDown onPointerMove onPointerUp onPointerCancel                    |
| -                  | onGotPointerCapture onLostPointerCapture                                   |
| -                  | onPointerEnter onPointerLeave onPointerOver onPointerOut                   |
| Selection Events   | onSelect                                                                   |
| Touch Events       | onTouchCancel onTouchEnd onTouchMove onTouchStart                          |
| UI Events          | onScroll                                                                   |
| Wheel Events       | onWheel                                                                    |
| Media Events       | onAbort onCanPlay onCanPlayThrough onDurationChange onEmptied              |
| -                  | onEncrypted onEnded onError onLoadedData onLoadedMetadata onLoadStart      |
| -                  | onPause onPlay onPlaying onProgress onRateChange onSeeked                  |
| -                  | onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting        |
| Image Events       | onLoad onError                                                             |
| Animation Events   | onAnimationStart onAnimationEnd onAnimationIteration                       |
| Transition Events  | onTransitionEnd                                                            |
| Other Events       | onToggle                                                                   |

## webpack exports

one default export
many named exports

## Redux DevTools extension: http://extension.remotedev.io/
> GitHub: https://github.com/zalmoxisus/redux-devtools-extension

## yarn modules

```
"babel-core": "6.25.0",
"babel-loader": "7.1.1",
"babel-cli": "6.24.1",
"babel-preset-env": "1.5.2",
"webpack": "^3.1.0",
"validator": "8.0.0",
"react": "16.0.0",
"react-dom": "16.0.0",
"webpack-sev-server": "2.5.1",
"babel-plugin-transform-class-properties": "6.24.1",
"react-modal": "2.2.2",
"style-loader": "^0.18.2",
"css-loader": "^0.28.4",
"sass-loader": "6.0.6",
"node-sass": "4.5.3",
"normalize.css": "7.0.0",
"react-router-dom": "^4.2.2",
"redux": "^3.7.2",
"uuid": "^3.1.0",
"babel-plugin-transform-object-rest-spread": "^6.23.0",
"react-redux": "^5.0.5",
"moment": "^2.18.1",
"react-dates": "12.7.0",
"react-addons-shallow-compare": "15.6.0",
"jest": "^20.0.4",
"react-test-renderer": "16.0.0",
"enzyme": "3.0.0",
"enzyme-adapter-react-16": "1.0.0",
"raf": "3.3.2",
"enzyme-to-json": "3.0.1",
"extract-text-webpack-plugin": "3.0.0",
"express": "4.15.4",
```

## git: https://git-scm.com
```bash
git init - Create a new git repo
git staus - View the changes to your project code
git add - Add files to staging area
git commit - Creates a new commit with files from staging area
git log - View recent commits
```

## Connecting to GitHub with SSH: https://help.github.com/articles/connecting-to-github-with-ssh/

## Setup SSH keys
> In git-bash:
```bash
ls -al ~/.ssh
ssh-keygen -t rsa -b 4096 -C "sir.lyt@gmail.com"
# choose default key file nmae, no password
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
clip < ~/.ssh/id_rsa.pub
# the public ssh key is in clipboard, add it via GitHub page
ssh -T git@github.com
# choose continue connection
```

## Setup GitHub repository

### …or create a new repository on the command line
```
echo "# course_react-redux_expensify-app" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/lyt2015/course_react-redux_expensify-app.git
git push -u origin master
```

### …or push an existing repository from the command line
```
git remote add origin https://github.com/lyt2015/course_react-redux_expensify-app.git
git push -u origin master
```

## Setup Heroku
### Configuration
#### package.json
```js
 "scripts": {
    "start": "node server/server.js",
    "heroku-postbuild": "yarn run build:prod",
 }
```
#### server.js
`const port = process.env.PORT || 3000`

### Install Heroku CLI
```shell
heroku --version
heroku login
heroku create course-expensify-app-zin
# !    Name must start with a letter and can only contain
# !    lowercase letters, numbers, and dashes. Name is too long
# !    (maximum is 30 characters)
git remote
git remote -v
git add .
git commit -m 'Setup production build and server'
git push
git push heroku master
heroku open
```
