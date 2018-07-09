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
```
