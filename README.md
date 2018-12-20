## Ghostload (WIP)

React component for seamless masking of async content.

[Illustration]

### Why Ghostload?

Ghostload exists because I wanted the loading placeholders and the actual contents to match as closely as possible. I couldn't find any other libraries that focused on this aspect.

Example:

[Animation]

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
| loaded |        Sets background color        |      false      |
| length | Estimated length of actual contents |       10        |
