// show Donation History Button

function showSectionById(id){
    // hide all the sections
    document.getElementById('showAllDonateContent').classList.add('hidden');

    document.getElementById('transactionSection').classList.add('hidden');
    
    // show the section with the provide id as parameter
    document.getElementById(id).classList.remove('hidden');
}

// Donation calculations

function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    
    return inputNumber;
}


function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

