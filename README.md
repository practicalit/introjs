# Intro.js Tutorial

Intro.js allows the user to have a wizard or steped navigation to the site

## Installation

Go to [intro js site](https://introjs.com/docs/getting-started/install) and get the js and css files needed.

You can also do from the node as well.

```bash
bower install intro.js --save
```

## Usage

```javascript
const stepIntro = introJs();
stepIntro.setOptions({
    steps: [
        {
            intro: "Showing around"
        },
        {
            element: '#step1',
            intro: 'This is where you begin'
        },
        {
            element: '#step2',
            intro: 'And make sure you do understand this'
        },
        {
            element: '#step3',
            intro: 'Though optional step, you need this as well.'
        }
    ]
});

stepIntro.start();
```