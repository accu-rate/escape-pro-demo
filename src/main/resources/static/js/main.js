import {showStuttgart, showSchlossplatz} from './control.js';
import {initializeApp} from './init.js';
import {initializeComponents} from './components.js';


document.addEventListener('DOMContentLoaded', async () => {
    await initializeComponents();
    initializeApp();
});


window.showStuttgart = showStuttgart;
window.showSchlossplatz = showSchlossplatz;