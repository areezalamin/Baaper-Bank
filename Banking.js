document.getElementById('deposite-button').addEventListener('click', function(){
    const depositeButton = document.getElementById('deposite-input');
    const depositeButtonValueText = depositeButton.value;
    const depositeButtonValueNumber = parseFloat(depositeButtonValueText)

    const depositeAmount = document.getElementById('deposite-amout')
    const previousDepositeAmountText = depositeAmount.innerText;
    const previousDepositeAmountNumber = parseFloat(previousDepositeAmountText)
    const newDepositeAmount =depositeButtonValueNumber + previousDepositeAmountNumber;
    depositeAmount.innerText = newDepositeAmount;


    const totalDepositeAmount = document.getElementById('total-amount')
    const previousTotalDepositeAmountText = totalDepositeAmount.innerText;
    const previousTotalDepositeAmountNumber = parseFloat(previousTotalDepositeAmountText);
    const newTotalDepositeAmount = previousTotalDepositeAmountNumber + depositeButtonValueNumber;
    totalDepositeAmount.innerText = newTotalDepositeAmount;


    depositeButton.value = '';
    
})


document.getElementById('withdrow-button').addEventListener('click', function(){
    const withdrowButton = document.getElementById('withdrow-input');
    const withdrowButtonValueText = withdrowButton.value;
    const withdrowButtonValueNumber = parseFloat(withdrowButtonValueText)

    const withdrowAmount = document.getElementById('withdraw-amount')
    const previouswithdrowAmountText = withdrowAmount.innerText;
    const previouswithdrowAmountNumber = parseFloat(previouswithdrowAmountText)
    const newwithdrowAmount =withdrowButtonValueNumber + previouswithdrowAmountNumber;
    withdrowAmount.innerText = newwithdrowAmount;


    const totalwithdrowAmount = document.getElementById('total-amount')
    const previousTotalwithdrowAmountText = totalwithdrowAmount.innerText;
    const previousTotalwithdrowAmountNumber = parseFloat(previousTotalwithdrowAmountText);
    const newTotalwithdrowAmount = previousTotalwithdrowAmountNumber - withdrowButtonValueNumber;
    totalwithdrowAmount.innerText = newTotalwithdrowAmount;


    withdrowButton.value = '';
    
})