# Clientside Assets for ViewPro Web App
HTML fragments can be copied from the Vue templates in this project, into HTML templates in the ViewPro web app. In some cases we may copy JavaScript, Vue components or other clientside assets from this project into the main web app as well as HTML. In most cases html fragments can be found in the `src/views` or `src/components`. Although the files have `.vue` extensions, they can usually be treated as regular HTML files. In some cases it may be useful to run this project locally by following the steps below. In other cases it may be sufficient to copy code out of this project without actually running it.

## Project setup
```
git clone https://github.com/viewprogis/html_templates html_templates
cd html_templates
npm install
```
If you get an error message relating to the installation of `node-gyp` check out [this message](https://github.com/nodejs/node-gyp/issues/569). You may need to run 
```
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
```  

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
