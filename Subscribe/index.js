const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterBtn = document.getElementById("masterBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = `You are SUBSCRIBED!`;
    }
    else{
        subResult.textContent = `You are NOT subscribed`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with VISA`;
    }
    else if(masterBtn.checked){
        paymentResult.textContent = `You are paying with MASTERCARD`;
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = `You are paying with PAYPAL`;
    }
    else{
        paymentResult.textContent = `You must select a payment method`;
    }
}