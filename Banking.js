function forInput(inputId){
    const depositeButton = document.getElementById(inputId);
    const depositeButtonValueText = depositeButton.value;
    const depositeButtonValueNumber = parseFloat(depositeButtonValueText)

    depositeButton.value = '';

    return depositeButtonValueNumber;

}


function forAmount(amountId, depositeButton) {
    const depositeAmount = document.getElementById(amountId)
    const previousDepositeAmountText = depositeAmount.innerText;
    const previousDepositeAmountNumber = parseFloat(previousDepositeAmountText)
    const newDepositeAmount = depositeButton + previousDepositeAmountNumber;
    depositeAmount.innerText = newDepositeAmount;
    
    return newDepositeAmount;

}


document.getElementById('deposite-button').addEventListener('click', function(){
    const depositeButton = forInput('deposite-input');

    if (depositeButton >0) {
        forAmount('deposite-amout', depositeButton);
        forAmount('total-amount', depositeButton);
    }
    // console.log(depositeButton)
    // const depositeButtonValueText = depositeButton.value;
    // const depositeButtonValueNumber = parseFloat(depositeButtonValueText)

    // const depositeAmount = forAmount('deposite-amout')
    // const previousDepositeAmountText = depositeAmount.innerText;
    // const previousDepositeAmountNumber = parseFloat(previousDepositeAmountText)
    // const newDepositeAmount = depositeButton + previousDepositeAmountNumber;
    // depositeAmount.innerText = newDepositeAmount;

    


    // const totalDepositeAmount = document.getElementById('total-amount')
    // const previousTotalDepositeAmountText = totalDepositeAmount.innerText;
    // const previousTotalDepositeAmountNumber = parseFloat(previousTotalDepositeAmountText);
    // const newTotalDepositeAmount = previousTotalDepositeAmountNumber + depositeButton ;
    // totalDepositeAmount.innerText = newTotalDepositeAmount;

    
    
    
})


document.getElementById('withdrow-button').addEventListener('click', function(){
    const withdrowButton = forInput('withdrow-input');

    if (withdrowButton > 0) {

        forAmount('withdraw-amount', withdrowButton)

        const totalwithdrowAmount = document.getElementById('total-amount')
        const previousTotalwithdrowAmountText = totalwithdrowAmount.innerText;
        const previousTotalwithdrowAmountNumber = parseFloat(previousTotalwithdrowAmountText);
        const newTotalwithdrowAmount = previousTotalwithdrowAmountNumber - withdrowButton;
        totalwithdrowAmount.innerText = newTotalwithdrowAmount;
        
    }
    // const withdrowButtonValueText = withdrowButton.value; 
    // const withdrowButtonValueNumber = parseFloat(withdrowButtonValueText)

    // const withdrowAmount = document.getElementById('withdraw-amount')
    // const previouswithdrowAmountText = withdrowAmount.innerText;
    // const previouswithdrowAmountNumber = parseFloat(previouswithdrowAmountText)
    // const newwithdrowAmount = withdrowButton + previouswithdrowAmountNumber;
    // withdrowAmount.innerText = newwithdrowAmount;




    // forAmount('total-amount', withdrowButton)
    
})