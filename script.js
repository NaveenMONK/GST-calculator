const btn = document.querySelector(".btn");
const gst = document.querySelector(".gst");
const total = document.querySelector(".total");
const error = document.querySelector(".error");
const reset = document.getElementById("reset");
const bill = document.querySelector(".bill");
const rate = document.querySelector(".rate");

const hideError = () => {
  setTimeout(() => {
    error.style.display = "none";
  }, 3000);
};

const calculateGst = () => {
  const bill = document.querySelector(".bill").value;
  const rate = document.querySelector(".rate").value;
  if (bill === "" || rate === "") {
    error.style.display = "block";
    hideError();
  } else if (isNaN(bill)) {
    error.innerHTML = "Enter a number";
    error.style.display = "block";
    hideError();
  } else {
    let gstAmount = bill * rate;
    gstAmount = Math.ceil(gstAmount);
    gst.innerHTML = `Tax Amount :₹${gstAmount}`;

    let totalAmount = Number(bill) + gstAmount;
    total.innerHTML = `Tax Amount:₹${totalAmount}`;
  }
};

btn.addEventListener("click", calculateGst);
reset.addEventListener("click", () => {
  bill.value = "";
  rate.selectedIndex = 0;
  window.location.reload();
});
