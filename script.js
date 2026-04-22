// Screens ni control chese function
function showScreen(screenType) {
    // Mundu anni screens hide cheyali
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('transfer-screen').style.display = 'none';
    document.getElementById('balance-screen').style.display = 'none';

    // Click chesina screen ni matrame chupinchali
    if(screenType === 'transfer') {
        document.getElementById('transfer-screen').style.display = 'block';
    } 
    else if(screenType === 'balance') {
        document.getElementById('balance-screen').style.display = 'block';
    }
    else if(screenType === 'wallet') {
        alert("PhonePe Wallet Balance: ₹0.00");
        goHome(); // Thirigi home ki velladaniki
    }
}

// Home screen ki thirigi velladaniki
function goHome() {
    document.getElementById('transfer-screen').style.display = 'none';
    document.getElementById('balance-screen').style.display = 'none';
    document.getElementById('home-screen').style.display = 'block';
}

// Payment trigger cheyadaniki
function executePayment() {
    const amt = document.getElementById('payAmount').value;
    if(amt > 0) {
        // Sound Play
        let audio = new Audio('PhonePay.MP3');
        audio.play().catch(e => console.log("Sound error:", e));
        
        // Loader ki vellu
        setTimeout(() => { 
            window.location.href = "loader.html"; 
        }, 800);
    } else {
        alert("Please enter a valid amount!");
    }
}
