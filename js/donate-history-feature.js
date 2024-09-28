


document.getElementById('donationBtnClick')
    .addEventListener('click', function () {
        console.log('show donate btn');
        showSectionById('showAllDonateContent');
        console.log('donate');
    });

document.getElementById('historyBtnClick')
    .addEventListener('click', function () {
        console.log('show history btn');
        showSectionById('transactionSection');
        console.log('history');
    });
