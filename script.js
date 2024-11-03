// script.js

// Initialize variables
let farming = false;
let coinsEarned = 0;
let farmingInterval;

// Start Farming function
function startFarming() {
    farming = true;
    document.getElementById("claim-coins").disabled = false;

    // Hide the Start Farming button after the first click
    const startButton = document.getElementById("start-farming");
    startButton.disabled = true;
    startButton.style.display = "none"; 

    // Start or restart the farming interval
    farmingInterval = setInterval(() => {
        coinsEarned += 0.000001; // Earn 0.000001 coins every 3 seconds
        document.getElementById("claim-coins").textContent = `Claim $MRX (${coinsEarned.toFixed(6)})`;
    }, 3000); // 3000 milliseconds = 3 seconds
}

// Claim Coins and restart farming automatically
document.getElementById("claim-coins").addEventListener("click", () => {
    if (farming) {
        // Claim the coins
        let totalCoins = parseFloat(document.getElementById("total-earn").textContent) || 0;
        totalCoins += coinsEarned;
        document.getElementById("total-earn").textContent = totalCoins.toFixed(6);
        
        // Reset earned coins display
        document.getElementById("claim-coins").textContent = "Claim $MRX";
        coinsEarned = 0;
    }
});

// Show or hide wallet options when the Airdrop button is clicked
document.getElementById("airdrop").addEventListener("click", () => {
    const walletOptions = document.getElementById("wallet-options");
    walletOptions.style.display = walletOptions.style.display === "block" ? "none" : "block";
});

// Connect to TON Wallet
document.getElementById("connect-ton-wallet").addEventListener("click", () => {
    alert("Connecting to TON Wallet...");
    // Implement actual TON Wallet connection logic here
    setTimeout(() => {
        alert("TON Wallet connected successfully!");
        document.getElementById("wallet-options").style.display = "none"; // Close options after connecting
    }, 2000); // Simulating a 2 second connection delay
});

// Close wallet options when clicking outside
window.onclick = function(event) {
    if (!event.target.matches('#airdrop')) {
        const walletOptions = document.getElementById("wallet-options");
        if (walletOptions.style.display === "block") {
            walletOptions.style.display = "none";
        }
    }
};

// Start farming on button click
document.getElementById("start-farming").addEventListener("click", startFarming);
