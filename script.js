let currentPin = "";

function showScreen(screen) {
    // Hide all
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('transfer-screen').style.display = 'none';
    document.getElementById('pin-screen').style.display = 'none';
    document.getElementById('balance-screen').style.display = 'none';

    // Show selected
    if(screen === 'transfer') document.getElementById('transfer-screen').style.display = 'block';
    else if(screen === 'pin') {
        if(document.getElementById('payAmount').value > 0) document.getElementById('pin-screen').style.display = 'block';
        else alert("Enter amount!");
    }
    else if(screen === 'balance') document.getElementById('balance-screen').style.display = 'block';
    else document.getElementById('home-screen').style.display = 'block';
}

function goHome() {
    currentPin = "";
    updateDots();
    showScreen('home');
}

function pressKey(num) {
    if (num === 'X') currentPin = currentPin.slice(0, -1);
    else if (currentPin.length < 4) currentPin += num;
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
        new Audio('PhonePay.MP3').play().catch(() => {});
        window.location.href = "loader.html";
    } else alert("Enter 4-digit PIN");
}
