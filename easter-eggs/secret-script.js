const USERNAME = String.fromCharCode(97, 100, 109, 105, 110);
const PASSWORD = atob('cGFzc3dvcmQxMjM=');

const terminalOutput = document.getElementById('terminal-output');
const terminalInput = document.getElementById('terminal-input');
const terminalPrompt = document.getElementById('terminal-prompt');
const cursor = document.getElementById('cursor');

let inputBuffer = '';
let step = 0;
let isPasswordInput = false;

terminalOutput.innerHTML =
    'Welcome to the terminal.<br>Please enter your username:';

document.addEventListener('keydown', handleKeyDown);

function handleKeyDown(event) {
    if (event.key.length === 1) {
        inputBuffer += event.key;
        if (isPasswordInput) {
            terminalInput.textContent += '*';
        } else {
            terminalInput.textContent += event.key;
        }\
    } else if (event.key === 'Backspace') {
        inputBuffer = inputBuffer.slice(0, -1);
        terminalInput.textContent = terminalInput.textContent.slice(0, -1);
    } else if (event.key === 'Enter') {
        processInput();
    }
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function processInput() {
    let input = inputBuffer.trim();
    terminalOutput.innerHTML += `<br>${terminalPrompt.textContent}${terminalInput.textContent}`;
    terminalInput.textContent = '';
    inputBuffer = '';
    if (step === 0) {
        if (input === USERNAME) {
            terminalOutput.innerHTML += `<br>Please enter your password:`;
            isPasswordInput = true;
            step = 1;
        } else {
            terminalOutput.innerHTML += `<br>Invalid username. Please try again:<br>`;
        }
    } else if (step === 1) {
        if (input === PASSWORD) {
            terminalOutput.innerHTML += `<br>Access Granted! Welcome, ${USERNAME}.`;
            startLoadingBar();
        } else {
            terminalOutput.innerHTML += `<br>Invalid password. Please try again:<br>`;
        }
    }
    terminalPrompt.textContent = 'root/> ';
    isPasswordInput = step === 1;
}

function startLoadingBar() {
    document.removeEventListener('keydown', handleKeyDown);
    document.getElementById('terminal-input-area').style.display = 'none';

    document.getElementById('overlay').style.display = 'flex';

    let loadingBarElement = document.getElementById('loading-bar');
    let loadingBarLength = 15;
    let loadingBarArray = new Array(loadingBarLength).fill('-');
    let loadingBarDisplay = `[${loadingBarArray.join('')}]`;
    loadingBarElement.textContent = `Loading: ${loadingBarDisplay}`;

    let progress = 0;
    let loadingInterval = 6000 / loadingBarLength;

    let loadingTimer = setInterval(() => {
        if (progress < loadingBarLength) {
            loadingBarArray[progress] = '#';
            loadingBarDisplay = `[${loadingBarArray.join('')}]`;
            loadingBarElement.textContent = `Loading: ${loadingBarDisplay}`;
            progress++;
        } else {
            loadingBarElement.textContent = `Loading: SUCCESS`;
            loadingBarElement.classList.add('loading-success');
            clearInterval(loadingTimer);
            setTimeout(() => {
                setTimeout(() => {
                    window.location.href = '/timer.html';
                }, 1000);
            }, 0);
        }
    }, loadingInterval);
}
