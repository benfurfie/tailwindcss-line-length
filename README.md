# Line Length Utility Plugin for Tailwind CSS

## Installation

Add this plugin to your project

```bash
# Install via NPM
npm install tailwindcss-line-length --save-dev

# Install via Yarn
yarn add tailwindcss-line-length -D
```

## Usage

This plugin allows you to constrain the maximum length of a line of text to aid with readability. This fits in the idea that there is a maximum length a line of text can be before it becomes difficult to read. With text that is 1rem/16px in size, that is typically somewhere around 80 characters.

This plugin uses EM units to scale the max-width of the element it is applied to. This means you can be sure that the length of a line of text will never be too long to read easily. Because it uses EM units, as your text becomes larger, the max-width becomes wider.

### Container vs Line Length

As both the container and line length both make use of the max-width prop, I strongly advise you only add this class to an element nested within a container – never at the same level.

```html
<div class="container mx-auto">
  <div class="line-length-md">
    <p>Your content goes here</p>
  </div>
</div>
```

### Recommended Settings

Text goes here

```javascript
require('./src/plugins/reading')({
  widths: {
    'xs': '18em', // 300px at 1rem
    'sm': '30em',
    'md': '35em',
    'lg': '40em',
    'xl': '50em', // 800px at 1rem
  }
})
```

This configuration would create the following classes:

```css
.line-length-xs {
  max-width: 18em;
}

.line-length-sm {
  max-width: 30em;
}

.line-length-md {
  max-width: 35em;
}

.line-length-lg {
  max-width: 40em;
}

.line-length-xl {
  max-width: 50em;
}
```

Typically, you should look to use the `md` setting for body copy, while `xs` is useful for mobile screens.

### Making it responsive

As per the Tailwind CSS plugin docs, you can pass through variants, such as responsive, hover, focus etc. See below:

```javascript
require('./src/plugins/reading')({
  widths: {
    'xs': '18em', // 300px at 1rem
    'sm': '30em',
    'md': '35em',
    'lg': '40em',
    'xl': '50em', // 800px at 1rem
  },
  variants: ['responsive'],
})
```
