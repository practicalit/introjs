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