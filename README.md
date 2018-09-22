# vpro

> vpro project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

//https://www.cnblogs.com/wisewrong/p/6255817.html



引入bootstrap
引入jquery
引入Font Awesome  
引入element-ui
引入scss
1. vue-cli
> 2. vue
> 3. vue-router
> 4. webpak
> 5. canvas
> 6. ajax
npm install font-awesome --save-dev

//严格模式的问题，修改src目录下的文件为非严格模式解决问题，修改方式如下：在.eslintignore中增加src/*
* 解决：修改bablerc文件的配置，让项目忽略第三方js的转码。
//例如："ignore": [
//  "./src/assets/libs/*.js"
//]
*/