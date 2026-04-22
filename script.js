function startPayment() {
    const amount = document.getElementById('enterAmount').value;
    
    if(amount === "" || amount <= 0) {
        alert("Please enter a valid amount");
        return;
    }

    // Play PhonePe Sound (Make sure PhonePay.MP3 is in same folder)
    let audio = new Audio('PhonePay.MP3');
    audio.play().catch(e => console.log("Audio play failed"));

    // Move to Loader
    setTimeout(() => {
        window.location.href = "loader.html";
    }, 500);
}
