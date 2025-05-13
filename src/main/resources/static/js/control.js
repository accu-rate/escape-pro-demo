export function showStuttgart() {
    const section = document.getElementById('stuttgart');
    section.classList.remove('hidden');

}

export function showStuttgartResults() {
    const section = document.getElementById('stuttgart-results');
    section.classList.remove('hidden');

}

export function hideStuttgartResults() {
    const section = document.getElementById('stuttgart-results');
    section.classList.add('hidden');

}

export function showFanwalkResults() {
    const section = document.getElementById('fanwalk-results');
    section.classList.remove('hidden');

}

export function hideFanwalkResults() {
    const section = document.getElementById('fanwalk-results');
    section.classList.add('hidden');

}


export function showElement(elementId) {
    const section = document.getElementById(elementId);
    section.classList.remove('hidden');
}


export function hideElement(elementId) {
    const section = document.getElementById(elementId);
    section.classList.add('hidden');
}

export function showSchlossplatz() {
    const section = document.getElementById('schlossplatz');
    section.classList.remove('hidden');
}