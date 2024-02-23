let container1 = document.querySelector(".container1");
let container2 = document.querySelector(".payment");
let paymentbutton = document.querySelector(".paymentbutton");
paymentbutton.addEventListener("click", () => {
  let container1 = document.querySelector(".container1");
  let container2 = document.querySelector(".payment");
  container1.style.display = "none";
  container2.style.display = "inline";
});
let paytm= document.querySelector("#paytm");
let phonepe= document.querySelector("#phonepe");
let googlepay= document.querySelector("#Googlepay");

paytm.addEventListener("click",()=>{
    let scanerpaytm=document.querySelector(".scanerpaytm");
    let scanerphonepe=document.querySelector(".scanerphonepe");
    let scanergooglepay=document.querySelector(".scanergooglepay");
    scanerpaytm.style.display="inline";
    scanerphonepe.style.display="none";
    scanergooglepay.style.display="none";

})

phonepe.addEventListener("click",()=>{
    let scanerpaytm=document.querySelector(".scanerpaytm");
    let scanerphonepe=document.querySelector(".scanerphonepe");
    let scanergooglepay=document.querySelector(".scanergooglepay");
    scanerpaytm.style.display="none";
    scanerphonepe.style.display="inline";
    scanergooglepay.style.display="none";

})
googlepay.addEventListener("click",()=>{
    let scanerpaytm=document.querySelector(".scanerpaytm");
    let scanerphonepe=document.querySelector(".scanerphonepe");
    let scanergooglepay=document.querySelector(".scanergooglepay");
    scanerpaytm.style.display="none";
    scanerphonepe.style.display="none";
    scanergooglepay.style.display="inline";

})
