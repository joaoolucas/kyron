const prefixes = [
    'Cyber', 'Neon', 'Zero', 'Ghost', 'Data', 'Void', 'Night', 'Glitch', 'Pixel', 'Chrome', 
    'Quantum', 'Neural', 'Binary', 'Crypto', 'Tech', 'Nexus', 'Synth', 'Vector', 'Digital',
    'Plasma', 'Static', 'Circuit', 'Nano', 'Matrix', 'Echo', 'Hyper', 'Omega', 'Alpha',
    'Cyber', 'Flux', 'Nova', 'Pulse', 'Rad', 'Retro', 'Solar', 'Void', 'Wave', 'Zen'
];

const suffixes = [
    'Runner', 'Blade', 'Shadow', 'Punk', 'Wire', 'Sync', 'Drift', 'Pulse', 'Storm', 'Hex',
    'Ghost', 'Mind', 'Flux', 'Code', 'Net', 'Blade', 'Core', 'Edge', 'Flow', 'Grid',
    'Hunter', 'Jack', 'Knight', 'Link', 'Mancer', 'Node', 'Phantom', 'Quest', 'Rage',
    'Slayer', 'Tech', 'Unit', 'Viper', 'Ward', 'X', 'Zero', 'Zone', 'Wraith'
];

const separators = ['_', '-', '.', '/', '\\'];

function generateName() {
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    const separator = separators[Math.floor(Math.random() * separators.length)];
    return `${prefix}${separator}${suffix}`;
}

function addGlitchEffect(element) {
    element.classList.add('glitch');
    setTimeout(() => element.classList.remove('glitch'), 500);
}

function updateStats() {
    const memoryStat = document.querySelector('.memory-stat');
    const cpuStat = document.querySelector('.cpu-stat');
    const status = document.querySelector('.status');
    
    memoryStat.textContent = `${(Math.random() * 100).toFixed(1)} TB`;
    cpuStat.textContent = `${(85 + Math.random() * 15).toFixed(1)}%`;
    
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
    const type = () => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    };
    type();
}

function updateName() {
    const nameElement = document.getElementById('generatedName');
    const newName = generateName();
    const prompts = document.querySelectorAll('.terminal-prompt');
    
    addGlitchEffect(nameElement);
    
    let counter = 0;
    const glitchInterval = setInterval(() => {
        if (counter < 5) {
            nameElement.textContent = Array.from(newName)
                .map(char => Math.random() > 0.5 ? String.fromCharCode(Math.random() * 32 + 65) : char)
                .join('');
            counter++;
            updateStats();
        } else {
            clearInterval(glitchInterval);
            nameElement.textContent = newName;
        }
    }, 50);
}

// Initialize event listeners
document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const glitchAgainBtn = document.getElementById('glitchAgainBtn');
    const buttons = document.querySelectorAll('button');

    generateBtn.addEventListener('click', updateName);
    glitchAgainBtn.addEventListener('click', updateName);
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => addGlitchEffect(button));
    });

    // Start periodic updates
    setInterval(() => {
        const cursors = document.querySelectorAll('.cursor');
        cursors.forEach(cursor => {
            cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
        });
    }, 500);

    setInterval(updateStats, 1000);
}); 