## Ghostload (WIP)

3.5KB gzipped

React component for seamless masking of async content.

[DEMO](https://whatthefoo.github.io/ghostload/)

![Demo ](https://raw.githubusercontent.com/whatthefoo/ghostload/master/example.png)

### Why Ghostload?

Ghostload exists because I wanted the loading placeholders and the actual contents to match as closely as possible. I couldn't find any other libraries that focused on this aspect.

Example:

![Example ](https://raw.githubusercontent.com/whatthefoo/ghostload/master/demo.gif)

Ghostload, by default, will match the exact line-height/font-size of the content it's masking. This prevents flicker and page jumping when the data arrives.

### Installation

`npm install --save ghost-load`

### Usage

`import Ghost from "ghost-load"`

```
<h1>
  <Ghost loaded={isLoaded}>
    {asyncText}
  </Ghost>
</h1>
```

### Variants

### Props

| _Prop_ |            _Description_            | _Default value_ |
| ------ | :---------------------------------: | :-------------: |
| loaded |         mask/show contents          |      true       |
| length | Estimated length of actual contents |       15        |
