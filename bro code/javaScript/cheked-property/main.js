// .cheked = property that determines the checked state of an 
//           HTML checkbox or radio button element


const myCheckBox = document.getElementById('myCheckbox');
const visaBtn = document.getElementById('visaBtn');
const masterBtn = document.getElementById('masterBtn');
const paypalBtn = document.getElementById('paypalBtn');
const submitBtn = document.getElementById('submit');
const paraResult = document.getElementById('subResult');
const paraPay = document.getElementById('paymentResult');

submitBtn.addEventListener('click', () => {

    if (myCheckBox.checked) {
        paraResult.textContent = `You are subscribed`;
    } else {
        paraResult.textContent = `You are NOT subscribed`;
    }

    if(visaBtn) {
        paraPay.textContent = `You are paying with Visa`;
    }
    else if(masterBtn) {
        paraPay.textContent = `You are paying with MasterCard`;
    }
    else if(paypalBtn) {
        paraPay.textContent = `You are paying with Paypal`;
    } else {
        paraPay.textContent = `You must select a payment type`;
    }
});