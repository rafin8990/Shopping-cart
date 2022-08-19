document.getElementById('btn-product-plus').addEventListener('click', function(){
    const newProductNumber =  updateProductNumber(true) 
    updateProductPrice(newProductNumber) 
   calculateSubTotal();
})

document.getElementById('btn-product-minus').addEventListener('click', function(){
    const newProductNumber =  updateProductNumber(false)
    updateProductPrice(newProductNumber)
    calculateSubTotal();
})