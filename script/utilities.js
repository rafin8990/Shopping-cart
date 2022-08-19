function updateCaseNumber(isIncrase){
    const inputFieldArea=document.getElementById('case-area')
    const inputFieldString=inputFieldArea.value ;
    const previousInputField=parseInt(inputFieldString);

    let newCaseNumber;

    if(isIncrase===true){
        newCaseNumber=previousInputField+1;
    }
    else{
        newCaseNumber=previousInputField-1;
        
    }
    inputFieldArea.value=newCaseNumber
    return newCaseNumber;

   
}

function updateCasePrice(newCaseNumber){ 

    const totalPrice=newCaseNumber * 59
    const casePriceField=document.getElementById('case-price')
    casePriceField.innerText=totalPrice;
}

function updateProductNumber(isIncrase){
    const inputFieldArea=document.getElementById('product-area')
    const inputFieldString=inputFieldArea.value ;
    const previousInputField=parseInt(inputFieldString);

    let newProductNumber;

    if(isIncrase===true){
        newProductNumber=previousInputField+1;
    }
    else{
        newProductNumber=previousInputField-1;
        
    }
    inputFieldArea.value=newProductNumber
    return newProductNumber;

   
}
function updateProductPrice(newProductNumber){ 

    const totalPrice=newProductNumber * 1219
    const productPriceField=document.getElementById('product-price')
    productPriceField.innerText=totalPrice;
}



function getTextElementById(elementId){

    const getPhoneTotalElement=document.getElementById(elementId)
    const phoneTotalElementString=getPhoneTotalElement.innerText;
    const phoneTotal=parseInt(phoneTotalElementString);

    return phoneTotal;
}

function setTextElementById(elementId , value){
    const currentSubTotal=document.getElementById(elementId)
    currentSubTotal.innerText= value;
}


function calculateSubTotal(){
    const currentPhoneTotal=getTextElementById('product-price') 
    const currentCaseTotal =getTextElementById('case-price')
    const subTotal=currentCaseTotal + currentPhoneTotal;
    setTextElementById('sub-total', subTotal)

    // calculate tax 

    const taxAmountString = (subTotal * 0.1).toFixed(2) ;
    const taxAmount=parseFloat(taxAmountString);
    setTextElementById('tax-amount', taxAmount)

    const totalAmount=subTotal + taxAmount ;
    setTextElementById('final-total',totalAmount)
}