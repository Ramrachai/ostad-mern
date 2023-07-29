const discountForm = document.getElementById("discountForm")
const purchaseAmount = document.getElementById("purchaseAmount")
const result = document.getElementById("result")



function discountCalculator(totalAmount) {
  let discount = 0;
  let percentage = 0

  if (totalAmount >= 50 && totalAmount < 100) {
    percentage = 5
    discount = totalAmount * (5/100); // 5% discount
  } else if (totalAmount >= 100 && totalAmount < 200) {
    percentage = 10
    discount = totalAmount * (10/100); // 10% discount
  } else if (totalAmount >= 200) {
    percentage = 15
    discount = totalAmount * (15/100); // 15% discount
  }

  const discountedAmount = totalAmount - discount;

  if(purchaseAmount.value) {
  result.innerHTML = `
  <tbody> 
    <tr>
      <td>Total amount:</td>
      <td id="totalAmount">$${totalAmount.toFixed(2)} </td>
    </tr>
    <tr>
      <td>Discount Percent:</td>
      <td id="percent">${percentage}% </td>
    </tr>
    <tr>
      <td>Discount Amount:</td>
      <td id="discountAmount">-$${discount.toFixed(2)} </td>
    </tr>
    <tr>
      <td>Discounted Amount to pay:</td>
      <td id="discountedAmount">$${discountedAmount.toFixed(2)}</td>
    </tr>
  </tbody>
  `
  }

}


discountForm.addEventListener('submit', e =>{
    e.preventDefault()
    if (!purchaseAmount.value){
        alert('Please enter Purchase Amount first')
    }
    let amount = Number(purchaseAmount.value)
    discountCalculator(amount)
})



 
