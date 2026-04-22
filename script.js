function showScreen(screen) {
    document.getElementById('home-screen').style.display = 'none';
    if(screen === 'transfer') {
        document.getElementById('transfer-screen').style.display = 'block';
    } else if(screen === 'balance') {
        document.getElementById('balance-screen').style.display = 'block';
    } else if(screen === 'wallet') {
        alert("Wallet Balance: ₹0.00");
        goHome();
    }
}

function goHome() {
    document.getElementById('transfer-screen').style.display = 'none';
    document.getElementById('balance-screen').style.display = 'none';
    document.getElementById('home-screen').style.display = 'block';
}

function executePayment() {
    const amt = document.getElementById('payAmount').value;
    if(amt > 0) {
        let audio = new Audio('PhonePay.MP3');
        audio.play().catch(() => console.log("Sound played"));
        setTimeout(() => { window.location.href = "loader.html"; }, 800);
    } else {
        alert("Please enter a valid amount");
    }
}
