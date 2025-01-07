const prefixes = ['Cyber', 'Neon', 'Zero', 'Ghost', 'Data', 'Void', 'Night', 'Glitch', 'Pixel', 'Chrome'];
const suffixes = ['Runner', 'Blade', 'Shadow', 'Punk', 'Wire', 'Sync', 'Drift', 'Pulse', 'Storm', 'Hex'];
const separators = ['_', '-', '.', '/', '\\'];

function generateName() {
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    const separator = separators[Math.floor(Math.random() * separators.length)];
    return `${prefix}${separator}${suffix}`;
}

function addGlitchEffect(element) {
    element.classList.add('glitch');
    setTimeout(() => {
        element.classList.remove('glitch');
    }, 500);
}

function updateName() {
    const nameElement = document.getElementById('generatedName');
    const newName = generateName();
    addGlitchEffect(nameElement);
    
    // Create glitch effect by rapidly changing text
    let counter = 0;
    const glitchInterval = setInterval(() => {
        if (counter < 5) {
            nameElement.textContent = Array.from(newName)
                .map(char => Math.random() > 0.5 ? String.fromCharCode(Math.random() * 32 + 65) : char)
                .join('');
            counter++;
        } else {
            clearInterval(glitchInterval);
            nameElement.textContent = newName;
        }
    }, 50);
}

document.getElementById('generateBtn').addEventListener('click', updateName);
document.getElementById('glitchAgainBtn').addEventListener('click', updateName);

// Add hover glitch effect to buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => addGlitchEffect(button));
}); 