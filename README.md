# CindyWebsite

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

It's Cindy Tang Portfolio. A static website with a reusable component structure

## Site structure
There is 2 file containing all the structure. One for the Home page, the other one for all the others pages.

### Home Page
In the Home page, each new button is an `EntryButtonModel` and can contain 
``
title
subtitle
type
imageUrl
key
``

The key is the key use in the url to go on the content page.
All the entry button are grouped in an entryButtonArray at the end

### Content pages
All the pages are group in a map (contentDataDic) linking the page keyword and the content.

To create a new page, you need to add a new ContentPageModel
``
title
subtitle
credits
blockList
``
All the images and the other contents of the pages will be in the blockList.
Each page has it's own blockList that are blocks that all inherits from ContentBlockModel

There is 4 block types
* block-image
* block-legend
* block-search
* block-video

They all have a blockName (IMAGE for example) and an optional legend.

So the basic structure in general is something like :

```json
{
  myContentPageModel: {
    "blockList": myBlockImageList
  }
}
```
```json
myBlockImageList: [
  contentImageModel1,
  contentImageModel2,
  contentImageModel3
  ...
]
```

Where it's start to be interesting it's that instead of putting directly your blockList of one type,
you can have different types. Some are taking other as parameters. 
For example, the search block take a list of ImageBlock.
If you want more examples, go on the `datas/content-data.mock.ts` file
```json
{
  myContentPageModel: {
    "blockList": myBlockList
  }
}
```
```json
myBlockList: [
    contentImageModel5,
    contentImageModel6,
    mySearchContent,
     ...
]
```
```json
mySearchContent: [
    myBlockImageList
    ...
]
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## TODO
* better img management
* better loading management
* bug animation home page not on safari and firefox

## Further help

To get more help this project, contact me : [remy.b3d@gmail.com](mailto:remy.b3d@gmail.com)
