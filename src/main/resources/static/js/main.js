import {showElement, showSchlossplatz, showStuttgartResults, hideStuttgartResults, hideElement} from './control.js';
import {initializeApp} from './init.js';
import {initializeComponents} from './components.js';


document.addEventListener('DOMContentLoaded', async () => {
    await initializeComponents();
    initializeApp();
});


window.showElement = showElement;
window.hideElement = hideElement;