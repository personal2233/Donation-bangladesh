// Noakhali Donations

document.getElementById('submitDonateNoakhali')
    .addEventListener('click', function (event) {
        event.preventDefault();

        console.log('noakhsli');
        const addDonateNoakhaliText = getInputFieldValueById('inputDonateNoakhali');

        const TotalAmountText = getTextFieldValueById('totalAmount');
        const TotalDonateNoakhaliText = getTextFieldValueById('addedDonateNoakhali');


        

        if (isNaN(addDonateNoakhaliText)) {
            alert('Please Enter Donation Amount');
            return;
        }

        // wrong way to verify. do not try it at your serious website
        if (addDonateNoakhaliText > 0) {
            newAmountBalance = TotalAmountText - addDonateNoakhaliText;
            newDonateBalance = TotalDonateNoakhaliText + addDonateNoakhaliText;

            document.getElementById('totalAmount').innerText = newAmountBalance;
            document.getElementById('addedDonateNoakhali').innerText = newDonateBalance;

            // add to transaction history
            const p = document.createElement('p');
            p.innerText = `Amount Noation: ${newAmountBalance} Tk. Only Noakhali Donation: ${newDonateBalance}`;
            console.log(p);

            // should be a common function
            document.getElementById('transactionContainer').appendChild(p);

        }
        else {
            alert('Failed to add the money Please Enter Donation Amount')
        }

    })
// Fani Donations
document.getElementById('submitDonateFani')
    .addEventListener('click', function (event) {
        event.preventDefault();

        console.log('Fani');
        const addDonateFaniText = getInputFieldValueById('inputDonateFani');

        const TotalAmountText = getTextFieldValueById('totalAmount');

        const TotalDonateFaniText = getTextFieldValueById('addedDonateFani');

        if (isNaN(addDonateFaniText)) {
            alert('Failed to add Donation money');
            return;
        }

        // wrong way to verify. do not try it at your serious website
        if (addDonateFaniText > 0) {
            newAmountBalance = TotalAmountText - addDonateFaniText;
            newDonateBalance = TotalDonateFaniText + addDonateFaniText;

            document.getElementById('totalAmount').innerText = newAmountBalance;
            document.getElementById('addedDonateFani').innerText = newDonateBalance;

            // add to transaction history
            const p = document.createElement('p');
            p.innerText = `Amount Noation: ${newAmountBalance} Tk. Only Fani Donation: ${newDonateBalance}`;
            console.log(p);

            // should be a common function
            document.getElementById('transactionContainer').appendChild(p);
        }
        else {
            alert('Failed to add the money.  Please Enter Donation Amount')
        }

    })
// Quota Donations
document.getElementById('submitDonateQuota')
    .addEventListener('click', function (event) {
        event.preventDefault();

        console.log('quota');
        const addDonateQuotaText = getInputFieldValueById('inputDonateQuota');

        const TotalAmountText = getTextFieldValueById('totalAmount');

        const TotalDonateQuotaText = getTextFieldValueById('addedQuotaDonate');

        if (isNaN(addDonateQuotaText)) {
            alert('Failed to add Donation money');
            return;
        }

        // wrong way to verify. do not try it at your serious website
        if (addDonateQuotaText > 0) {
            newAmountBalance = TotalAmountText - addDonateQuotaText;
            newDonateBalance = TotalDonateQuotaText + addDonateQuotaText;

            document.getElementById('totalAmount').innerText = newAmountBalance;
            document.getElementById('addedQuotaDonate').innerText = newDonateBalance;

            // add to transaction history
            const p = document.createElement('p');
            p.innerText = `Amount Noation: ${newAmountBalance} Tk. Only Quota Donation: ${newDonateBalance}`;
            console.log(p);

            // should be a common function
            document.getElementById('transactionContainer').appendChild(p);
        }
        else {
            alert('Failed to add the money. Please Enter Donation Amount')
        }

    })