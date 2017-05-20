# apply-classes

[![NPM Version](https://img.shields.io/npm/v/apply-classes.svg)](https://www.npmjs.com/package/apply-classes) [![NPM Downloads](https://img.shields.io/npm/dm/apply-classes.svg)](https://www.npmjs.com/package/apply-classes)


A small utility to apply classes, the use case to use it is in React.

# Instalation

```sh
  npm i --save apply-classes
  yarn add apply-classes
```

# Usage
```jsx
  const Example = () => (
    <div className={applyClasses({
      'example': true,
      'hidden': false
    })}></div>
  )
```

It will render only the truthy conditions


## license

MIT. Copyright (C) [Gabriel García Seco](https://ggseco.com)