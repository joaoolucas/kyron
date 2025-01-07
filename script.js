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

function updateStats() {
    const memoryStat = document.querySelector('.memory-stat');
    const cpuStat = document.querySelector('.cpu-stat');
    const status = document.querySelector('.status');
    
    // Random memory usage
    memoryStat.textContent = `${(Math.random() * 100).toFixed(1)} TB`;
    
    // Random CPU usage
    cpuStat.textContent = `${(85 + Math.random() * 15).toFixed(1)}%`;
    
    // Randomly flicker status
    if (Math.random() > 0.9) {
        status.textContent = 'UNSTABLE';
        status.style.color = '#ff0000';
        setTimeout(() => {
            status.textContent = 'OPERATIONAL';
            status.style.color = '#00ff00';
        }, 200);
    }
}

function typeWriterEffect(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

function updateName() {
    const nameElement = document.getElementById('generatedName');
    const newName = generateName();
    addGlitchEffect(nameElement);
    
    // Add terminal-style text before generation
    const prompts = document.querySelectorAll('.terminal-prompt');
    typeWriterEffect(prompts[prompts.length - 1], '> Generating new identity...');
    
    // Create glitch effect by rapidly changing text
    let counter = 0;
    const glitchInterval = setInterval(() => {
        if (counter < 5) {
            nameElement.textContent = Array.from(newName)
                .map(char => Math.random() > 0.5 ? String.fromCharCode(Math.random() * 32 + 65) : char)
                .join('');
            counter++;
            updateStats(); // Update stats during glitch
        } else {
            clearInterval(glitchInterval);
            nameElement.textContent = newName;
            typeWriterEffect(prompts[prompts.length - 1], '> Ready for name generation_');
        }
    }, 50);
}

// Add cursor blink effect
setInterval(() => {
    const cursors = document.querySelectorAll('.cursor');
    cursors.forEach(cursor => {
        cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
    });
}, 500);

// Update stats periodically
setInterval(updateStats, 1000);

document.getElementById('generateBtn').addEventListener('click', updateName);
document.getElementById('glitchAgainBtn').addEventListener('click', updateName);

// Add hover glitch effect to buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => addGlitchEffect(button));
}); 