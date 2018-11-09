## Ghostload (WIP)

React component for async content masking.

### Why Ghostload?

Ghostload will match the exact line-height/font-size of the content it's masking. This prevents flicker when the data arrives.

### Installation

`npm install --save ghost-load`

### Usage

`import Ghost from "ghost-load"`

```
<h1>
  <Ghost loaded={isLoaded} length={10}>
    {asyncText}
  </Ghost>
</h1>
```

### Props

| _Prop_ |            _Description_            | _Default value_ |
| ------ | :---------------------------------: | :-------------: |
| loaded |        Sets background color        |      false      |
| length | Estimated length of actual contents |       10        |
