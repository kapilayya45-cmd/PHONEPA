let currentPin = "";
let pinPurpose = ""; // 'payment' or 'balance'

function showScreen(screen) {
    // Hide all
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('transfer-screen').style.display = 'none';
    document.getElementById('pin-screen').style.display = 'none';
    document.getElementById('balance-screen').style.display = 'none';

    if(screen === 'transfer') {
        document.getElementById('transfer-screen').style.display = 'block';
    } 
    else if(screen === 'pin') {
        document.getElementById('pin-screen').style.display = 'block';
    }
    else if(screen === 'balance-flow') {
        pinPurpose = "balance";
        document.getElementById('pin-label').innerText = "ENTER PIN TO CHECK BALANCE";
        showScreen('pin');
    }
    else if(screen === 'balance-result') {
        document.getElementById('balance-screen').style.display = 'block';
    }
    else {
        document.getElementById('home-screen').style.display = 'block';
    }
}

function startPaymentFlow() {
    let amt = document.getElementById('payAmount').value;
    if(amt > 0) {
        pinPurpose = "payment";
        document.getElementById('pin-label').innerText = "IDFC FIRST BANK - 8899";
        showScreen('pin');
    } else {
        alert("Enter a valid amount!");
    }
}

function goHome() {
    currentPin = "";
    updateDots();
    document.getElementById('payAmount').value = "";
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
        if(pinPurpose === "payment") {
            new Audio('PhonePay.MP3').play().catch(() => {});
            window.location.href = "loader.html";
        } else {
            // Balance check flow
            showScreen('balance-result');
            currentPin = "";
            updateDots();
        }
    } else {
        alert("Enter 4-digit PIN");
    }
}
