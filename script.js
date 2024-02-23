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
function handleRedirect() {
    // Check if WhatsApp is installed
    if (isWhatsAppInstalled()) {
      return true; // Allow the link to proceed
    } else {
      // WhatsApp is not installed, handle fallback
      alert("WhatsApp is not installed. Please install the app to share.");
      // Optionally, redirect the user to a web page with similar functionality
      // window.location.href = "https://www.example.com";
      return false; // Prevent the link from proceeding
    }
  }

  function isWhatsAppInstalled() {
    // Try to open WhatsApp's custom URL scheme
    var url = "whatsapp://send?text=test";
    var isInstalled = false;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false); // Synchronous request
    xhr.send();

    if (xhr.status == 200) {
      isInstalled = true;
    }

    return isInstalled;
  }