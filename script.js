let currentPin = "";

function showScreen(screen) {
    // Hide all screens
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('transfer-screen').style.display = 'none';
    document.getElementById('pin-screen').style.display = 'none';
    document.getElementById('balance-screen').style.display = 'none';

    // Show selected
    if(screen === 'transfer') document.getElementById('transfer-screen').style.display = 'block';
    if(screen === 'pin') {
        const amt = document.getElementById('payAmount').value;
        if(amt > 0) document.getElementById('pin-screen').style.display = 'block';
        else { alert("Enter amount first!"); goHome(); }
    }
    if(screen === 'balance') document.getElementById('balance-screen').style.display = 'block';
}

function goHome() {
    showScreen('home-screen');
    document.getElementById('home-screen').style.display = 'block';
    currentPin = "";
    updateDots();
}

function pressKey(num) {
    if (num === 'X') {
        currentPin = currentPin.slice(0, -1);
    } else if (currentPin.length < 4) {
        currentPin += num;
    }
    updateDots();
}

function updateDots() {
    for (let i = 1; i <= 4; i++) {
        const dot = document.getElementById(`dot-${i}`);
        if (i <= currentPin.length) dot.classList.add('filled');
        else dot.classList.remove('filled');
    }
}

function verifyPin() {
    if (currentPin.length === 4) {
        let audio = new Audio('PhonePay.MP3');
        audio.play().catch(() => {});
        window.location.href = "loader.html";
    } else {
        alert("Enter 4-digit PIN");
    }
}
