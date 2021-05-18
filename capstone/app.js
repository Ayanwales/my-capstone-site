const name1 = document.querySelector("#name");
const email = document.querySelector("#e-mail");
const number = document.querySelector("#number"); 
const form1 = document.querySelector("#form1");
const form2 = document.querySelector("#form2");
const form3 = document.querySelector("#form3");
const output1 = document.querySelector("#output1");
const output2 = document.querySelector("#output2");
const output3 = document.querySelector ("#output3");
const pattern1 = "[A-Za-z0-9]+"
const pattern2 = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const pattern3 = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/

const totalPaid = document.querySelector(".Totalpaid");
const cartItem = document.querySelector(".cart-items")
const cartContinue = document.querySelector(".continue");
const cartBtn = document.querySelector(".cart-btn");
const cartDom = document.querySelector(".CART");
const cartOverlay = document.querySelector(".cart-overlay");
const checkout = document.querySelector(".checkout");

const buttonCounters = document.querySelectorAll(".button1")
const amountValue = document.querySelector(".amount1");
const buttonCounters2 = document.querySelectorAll(".button2")
const amountValue2 = document.querySelector(".amount2");
const buttonCounters3 = document.querySelectorAll(".button3")
const amountValue3 = document.querySelector(".amount3");
const buttonCounters4 = document.querySelectorAll(".button4")
const amountValue4 = document.querySelector(".amount4");
const buttonCounters5 = document.querySelectorAll(".button5")
const amountValue5 = document.querySelector(".amount5");
const buttonCounters6 = document.querySelectorAll(".button6")
const amountValue6 = document.querySelector(".amount6");

const remove1 = document.querySelector(".remove1");
const remove2 = document.querySelector(".remove2");
const remove3 = document.querySelector(".remove3");
const remove4 = document.querySelector(".remove4");
const remove5 = document.querySelector(".remove5");
const remove6 = document.querySelector(".remove6");

const row1 = document.querySelector(".row1");
const row2 = document.querySelector(".row2");
const row3 = document.querySelector(".row3");
const row4 = document.querySelector(".row4");
const row5 = document.querySelector(".row5");
const row6 = document.querySelector(".row6");

const cart1 = document.querySelector(".cart1");
const cart2 = document.querySelector(".cart2");
const cart3 = document.querySelector(".cart3");
const cart4 = document.querySelector(".cart4");
const cart5 = document.querySelector(".cart5");
const cart6 = document.querySelector(".cart6");

const itemAmount1 = document.querySelector(".items-amount1");
const itemAmount2 = document.querySelector(".items-amount2");
const itemAmount3 = document.querySelector(".items-amount3");
const itemAmount4 = document.querySelector(".items-amount4");
const itemAmount5 = document.querySelector(".items-amount5");
const itemAmount6 =  document.querySelector(".items-amount6");

const customer_name = document.querySelector(".customer_name");
const cartSummary = document.querySelector(".cartsummary");

const rowA = document.querySelector(".rowA")
const rowB = document.querySelector(".rowB")
const rowC = document.querySelector(".rowC")
const rowD = document.querySelector(".rowD")
const rowE = document.querySelector(".rowE")
const rowF = document.querySelector(".rowF")

const amount1 = document.querySelector(".amounts1")
const amount2 = document.querySelector(".amount2")
const amount3 = document.querySelector(".amount3")
const amount4 = document.querySelector(".amount4")
const amount5 = document.querySelector(".amount5")
const amount6 = document.querySelector(".amount6")
const summaryBtn = document.querySelector(".summaryBtn")

/*variables*/
let count = 1;
let amount = 0;
let cartNumber = 0;
let tempTotal = 0;
let totalTempTotal = 0;
let itemsTotal = 0;
let grandTotal = 0;

/* Input */
  name1.addEventListener("click",function(){
    name1.select();
    name1.focus();
     
     if(name1.value == ""){
       form1.classList.remove("valid");
       form1.classList.remove("invalid")
       output1.innerText ="Please enter your name"
       output1.style.color = "red"
       name1.style.border = "3px solid red"
     }
      else if(name1.value.match(pattern1)){
       form1.classList.add("valid");
       form1.classList.remove("invalid")
       output1.innerText = "";
       name1.style.border = "5px solid green"
     }
    });

  email.addEventListener("click",function(){
       email.select();
       email.focus();

     if(email.value == ""){
       form2.classList.remove("valid");
       form2.classList.remove("invalid")
       output2.innerText = "Please enter an email";
       output2.style.color = "red"
       email.style.border = "3px solid red"
     }  
     else if(email.value.match(pattern2)){
      form2.classList.add("valid");
      form2.classList.remove("invalid");
      output2.innerText = "";
      email.style.border= "5px solid green";
     }
    else{
       form2.classList.remove("valid");
       form2.classList.add("invalid");
       output2.innerText = "Invalid email";
      output2.style.color = "red";
      email.style.border = "3px solid red";
     }
  });

  number.addEventListener("click",function(){
       number.select();
       number.focus();
   if(number.value == ""){
     output3.innerText ="please enter your phone number"
     output3.style.color = "red"
     number.style.border = "3px solid red"
   }
   else if(number.value.match(pattern3)){
    form3.classList.add("valid");
    form3.classList.remove("invalid");
    output3.innerText = "";
    number.style.border = "5px solid green";
   }
   else if(number.value.length < number.value.match(pattern3).length){
    output3.innerText = "phone number cannot be less than 11";
    output3.style.color = "red";
    number.style.border = "3px solid red";
   }
  else{
     form3.classList.remove("valid");
     form3.classList.add("invalid");
     output3.innerText = "phone number can only be numbers";
    output3.style.color = "red";
    number.style.border = "3px solid red";
   }
  });
  
  /* Reload*/
summaryBtn.addEventListener("click", function(){
    setTimeout("location.reload(true);", 2000)

})


cartBtn.addEventListener("click",function(){
    //console.log(cartDom.classList);
       cartDom.classList.add("showCart");
});
cartContinue.addEventListener("click",function(){
        cartDom.classList.remove("showCart");
});

/*Adding and Removing of items from the cart*/
remove1.addEventListener("click", function(){
  row1.classList.remove("item");
  cart1.textContent = "ADD TO CART"
  cart1.style.backgroundColor = "#ff7a00"
  cartNumber -= 1;
  cartItem.innerText = cartNumber; 
  tempTotal = 800000 * amountValue.textContent;
  totalTempTotal = tempTotal;
  grandTotal -= totalTempTotal; 
  totalPaid.innerText = grandTotal;
})
cart1.addEventListener("click", function(){
  cartDom.classList.add("showCart");
  row1.classList.add("item")
  cart1.textContent = "REMOVE FROM CART"
  cart1.style.backgroundColor = "#ffcd9e"
  cartNumber += +1;
  cartItem.innerText = cartNumber;  
  tempTotal = 800000 * amountValue.textContent;
  totalTempTotal = tempTotal;
  grandTotal += totalTempTotal
  totalPaid.innerText = grandTotal;
  rowA.classList.add("summary");
})
remove2.addEventListener("click", function(){
  row2.classList.remove("item");
  cart2.textContent = "ADD TO CART"
  cart2.style.backgroundColor = "#ff7a00";
  cartNumber -= 1;
  cartItem.innerText = cartNumber;
  tempTotal = 250000 * amountValue2.textContent;
  totalTempTotal = tempTotal;
  grandTotal -= totalTempTotal;
  totalPaid.innerText = grandTotal;
})
cart2.addEventListener("click", function(){
  cartDom.classList.add("showCart");
  row2.classList.add("item")
  cart2.textContent = "REMOVE FROM CART"
  cart2.style.backgroundColor = "#ffcd9e"
  cartNumber += +1;
  cartItem.innerText = cartNumber;
  tempTotal = 250000 * amountValue2.textContent;
  totalTempTotal = tempTotal;
  grandTotal += totalTempTotal
  totalPaid.innerText = grandTotal;
  rowB.classList.add("summary");
})
remove3.addEventListener("click", function(){
  row3.classList.remove("item");
  cart3.textContent = "ADD TO CART"
  cart3.style.backgroundColor = "#ff7a00";
  cartNumber -= 1;
  cartItem.innerText = cartNumber;
  tempTotal = 500000 * amountValue3.textContent;
  totalTempTotal = tempTotal;
  grandTotal -= totalTempTotal;
  totalPaid.innerText = grandTotal;
})
cart3.addEventListener("click", function(){
  cartDom.classList.add("showCart");
  row3.classList.add("item")
  cart3.textContent = "REMOVE FROM CART"
  cart3.style.backgroundColor = "#ffcd9e"
  cartNumber += +1;
  cartItem.innerText = cartNumber;
  tempTotal = 500000 * amountValue3.textContent;
  totalTempTotal = tempTotal;
  grandTotal += totalTempTotal
  totalPaid.innerText = grandTotal;
  rowC.classList.add("summary");
})
remove4.addEventListener("click", function(){
  row4.classList.remove("item");
  cart4.textContent = "ADD TO CART"
  cart4.style.backgroundColor = "#ff7a00"
  cartNumber -= 1;
  cartItem.innerText = cartNumber;
  tempTotal = 800000 * amountValue4.textContent;
  totalTempTotal = tempTotal;
  grandTotal -= totalTempTotal;
  totalPaid.innerText = grandTotal;
})
cart4.addEventListener("click", function(){
  cartDom.classList.add("showCart");
  row4.classList.add("item")
  cart4.textContent = "REMOVE FROM CART"
  cart4.style.backgroundColor = "#ffcd9e"
  cartNumber += +1;
  cartItem.innerText = cartNumber;
  tempTotal = 800000 * amountValue4.textContent;
  totalTempTotal = tempTotal;
  grandTotal += totalTempTotal
  totalPaid.innerText = grandTotal;
  rowD.classList.add("summary");
})
remove5.addEventListener("click", function(){
  row5.classList.remove("item");
  cart5.textContent = "ADD TO CART"
  cart5.style.backgroundColor = "#ff7a00";
  cartNumber -= 1;
  cartItem.innerText = cartNumber;
  tempTotal = 300000 * amountValue5.textContent;
  totalTempTotal = tempTotal;
  grandTotal -= totalTempTotal;
  totalPaid.innerText = grandTotal;
})
 cart5.addEventListener("click", function(){
  cartDom.classList.add("showCart");
  row5.classList.add("item")
  cart5.textContent = "REMOVE FROM CART"
  cart5.style.backgroundColor = "#ffcd9e"
  cartNumber += +1;
  cartItem.innerText = cartNumber;
  tempTotal = 300000 * amountValue5.textContent;
  totalTempTotal = tempTotal;
  grandTotal += totalTempTotal
  totalPaid.innerText = grandTotal;
  rowE.classList.add("summary");
})
remove6.addEventListener("click", function(){
  row6.classList.remove("item");
  cart6.textContent = "ADD TO CART"
  cart6.style.backgroundColor = "#ff7a00";
  cartNumber -= 1;
  cartItem.innerText = cartNumber;
  tempTotal = 100000 * amountValue6.textContent;
  totalTempTotal = tempTotal;
  grandTotal -= totalTempTotal;
  totalPaid.innerText = grandTotal;
})
cart6.addEventListener("click", function(){
  cartDom.classList.add("showCart");
  row6.classList.add("item")
  cart6.textContent = "REMOVE FROM CART"
  cart6.style.backgroundColor = "#ffcd9e"
  cartNumber += +1;
  cartItem.innerText = cartNumber;
  tempTotal = 100000 * amountValue.textContent;
  totalTempTotal = tempTotal;
  grandTotal += totalTempTotal
  totalPaid.innerText = grandTotal;
  rowF.classList.add("summary");
})


/* increment and decrement buttons of the cart */
buttonCounters.forEach(function(buttonCounter){
  buttonCounter.addEventListener("click", function(e) {
    const styles = e.currentTarget.classList;
    // console.log(styles)
    if(styles.contains("decrease")){
      tempTotal = 800000 * --amountValue.textContent;
       itemAmount1.innerText = tempTotal;
       totalTempTotal = tempTotal;
       totalPaid.innerText =  (totalTempTotal + grandTotal) - 800000;
       itemsTotal = amountValue.textContent;
       amount1.innerText = itemsTotal;
       //cartItem.innerText = itemsTotal;
      count--;
    }else if (styles.contains("increase")) {
      tempTotal = 800000 * ++amountValue.textContent;
       itemAmount1.innerText = tempTotal;
       totalTempTotal = tempTotal;
       totalPaid.innerText = (totalTempTotal + grandTotal) - 800000;
       itemsTotal = amountValue.textContent;
       amount1.innerText = itemsTotal;
       //cartItem.innerText = itemsTotal;
       count++;
    }
    if(count < 1){
      alert("You cannot have less than 1 item. If you wish to remove the item click remove")
    }
      amountValue.textContent = count;
      
    });
  })
  buttonCounters2.forEach(function(buttonCounter){
    buttonCounter.addEventListener("click", function(e) {
      const styles = e.currentTarget.classList;
      //console.log(styles)
      if(styles.contains("decrease")){
        tempTotal = 250000 * --amountValue2.textContent;
        itemAmount2.innerText = tempTotal;
        totalTempTotal = tempTotal;
         totalPaid.innerText = (tempTotal + grandTotal) - 250000;
         itemsTotal = amountValue2.textContent;
         //cartItem.innerText = itemsTotal;
         amount2.innerText =  itemsTotal; 
        count--;
      }else if (styles.contains("increase")) {
        tempTotal = 250000 * ++amountValue2.textContent;
         itemAmount2.innerText = tempTotal; 
         totalTempTotal = tempTotal;
         totalPaid.innerText = (tempTotal + grandTotal) - 250000;
         itemsTotal = amountValue2.textContent;
         //cartItem.innerText = itemsTotal;
         amount2.innerText = itemsTotal;
         count++;
      }
      if(count < 1){
        alert("You cannot have less than 1 item. If you wish to remove the item click remove")
      }
        amountValue2.textContent = count;
      })
    })
    buttonCounters3.forEach(function(buttonCounter){
      buttonCounter.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList;
        //console.log(styles)
        if(styles.contains("decrease")){
          tempTotal = 500000 * --amountValue3.textContent;
          itemAmount3.innerText = tempTotal;
          totalTempTotal = tempTotal;
         totalPaid.innerText = (tempTotal + grandTotal) - 500000;
           itemsTotal = amountValue3.textContent;
           //cartItem.innerText = itemsTotal;
           amount3.innerText = itemsTotal;
          count--;
        }else if (styles.contains("increase")) {
          tempTotal = 500000 * ++amountValue3.textContent;
          itemAmount3.innerText = tempTotal;
          totalTempTotal = tempTotal;
          totalPaid.innerText = (tempTotal + grandTotal) - 500000;
           itemsTotal = amountValue3.textContent;
           //cartItem.innerText = itemsTotal;
           amount3.innerText = itemsTotal;
           count++;
        }
        if(count < 1){
          alert("You cannot have less than 1 item. If you wish to remove the item click remove")
        }
          amountValue3.textContent = count;
        })
      })
      buttonCounters4.forEach(function(buttonCounter){
        buttonCounter.addEventListener("click", function(e) {
          const styles = e.currentTarget.classList;
          //console.log(styles)
          if(styles.contains("decrease")){
            tempTotal = 800000 * --amountValue4.textContent;
            itemAmount4.innerText = tempTotal;
            totalTempTotal = tempTotal;
            totalPaid.innerText = (tempTotal + grandTotal) - 800000;
             itemsTotal = amountValue4.textContent;
             //cartItem.innerText = itemsTotal;
             amount4.innerText = itemsTotal;
            count--;
          }else if (styles.contains("increase")) {
            tempTotal = 800000 * ++amountValue4.textContent;
            itemAmount4.innerText = tempTotal;
            totalTempTotal = tempTotal;
            totalPaid.innerText = (tempTotal + grandTotal) - 800000;
             itemsTotal = amountValue4.textContent;
             //cartItem.innerText = itemsTotal;
             amount4.innerText = itemsTotal;
             count++;
          }
          if(count < 1){ 
            alert("You cannot have less than 1 item. If you wish to remove the item click remove")
          }
            amountValue4.textContent = count;
          })
        })
        buttonCounters5.forEach(function(buttonCounter){
          buttonCounter.addEventListener("click", function(e) {
            const styles = e.currentTarget.classList;
            //console.log(styles)
            if(styles.contains("decrease")){
              tempTotal = 300000 * --amountValue5.textContent;
              itemAmount5.innerText = tempTotal;
              totalTempTotal = tempTotal;
              totalPaid.innerText = (tempTotal + grandTotal) - 300000;
               itemsTotal = amountValue5.textContent;
               //cartItem.innerText = itemsTotal;
               amount5.innerText = itemsTotal;
              count--;
            }else if (styles.contains("increase")) {
              tempTotal = 300000 * ++amountValue5.textContent;
              itemAmount5.innerText = tempTotal;
              totalTempTotal = tempTotal;
              totalPaid.innerText = (tempTotal + grandTotal) - 300000;
               itemsTotal = amountValue5.textContent;
               //cartItem.innerText = itemsTotal;
               amount5.innerText = itemsTotal;
               count++;
            }
            if(count < 1){
              alert("You cannot have less than 1 item. If you wish to remove the item click remove")
            }
              amountValue5.textContent = count;
            }) 
          })
          buttonCounters6.forEach(function(buttonCounter){
            buttonCounter.addEventListener("click", function(e) {
              const styles = e.currentTarget.classList;
              //console.log(styles)
              if(styles.contains("decrease")){
                tempTotal = 100000 * --amountValue6.textContent;
                itemAmount6.innerText = tempTotal;
                totalTempTotal = tempTotal;
                totalPaid.innerText = (tempTotal + grandTotal) - 100000;
                itemsTotal = amountValue6.textContent;
                 //cartItem.innerText = itemsTotal;
                 amount6.innerText = itemsTotal;
                count--;
              }else if (styles.contains("increase")) {
                tempTotal = 100000 * ++amountValue6.textContent;
                itemAmount6.innerText = tempTotal;
                totalTempTotal = tempTotal;
                totalPaid.innerText = (tempTotal + grandTotal) - 100000;
                 itemsTotal = amountValue6.textContent;
                 //cartItem.innerText = itemsTotal;
                 amount6.innerText = itemsTotal;
                 count++;
              }
              if(count < 1){
                alert("You cannot have less than 1 item. If you wish to remove the item click remove")
              }
                amountValue6.textContent = count;
              })
            });

            /*PayStack Integration*/
checkout.addEventListener("click", function payWithPaystack(){

  let handler = PaystackPop.setup({
    key: 'pk_test_0ce05cb6a7329e731217b9d784facef75a68486d', // Replace with your public key
    email: email.value,
    amount: document.querySelector(".Totalpaid").innerText* 100,
    ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    // label: "Optional string that replaces customer email"
    onClose: function(){
      alert('Window closed.');
    },
    callback: function(response){
      //let message = 'Payment complete! Reference: ' + response.reference;
      //alert(message);
      //showSummary()
      cartSummary.classList.add("showcart1") ;
      cartDom.classList.remove("showCart");
      if(cartSummary.classList.contains("showcart1")){
        customer_name.textContent = name1.value
       }
    }
  });
  handler.openIframe();
})
