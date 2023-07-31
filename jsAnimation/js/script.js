const heading = document.querySelector('#heading');

// proparty: start, end
const keyframes = {
    opacity: [0, 1],
    // translate: ['0 50px', 0],
    rotate: ['x 360deg', 0],
};

const colorChange = {
    color: ['#f66', '#fc2', '#0c6', '#0bd']
};

const key = {
    color: ['transparent', '#fff'],
    backgroundPosition: ['100% 0', '0 0'],
};

const options = {
    duration: 1000,
    easing: 'ease',
};

const colorOptions = {
    duration: 1000,
    direction: 'alternate',
    iterations: Infinity,
};

// heading.animate(keyframes, 2000);
// heading.animate(keyframes, options);
// heading.animate(colorChange, colorOptions);
heading.animate(key, options);