let totalCustomer = document.getElementById("totalCustomers");
let totalProducts = document.getElementById("totalProducts");

let APIURLUSERS = "";
let APIURLPRODUCTS = "https://dfabrica-data-app.onrender.com/products";
// let producrTotalData;
// let userTotalData;
async function productData() {
  try {
    let res = await fetch(APIURLPRODUCTS);
    let data = await res.json();
    let producrTotalData = data.length;
    // console.log(producrTotalData);
    totalProducts.innerText = producrTotalData;
  } catch (error) {
    console.log(error);
  }
}
productData();
userData();
async function userData() {
  try {
    let res = await fetch(APIURLUSERS);
    let data = await res.json();
    let userTotalData = data.length;
    // console.log(userTotalData);
    totalCustomer.innerText = userTotalData;
  } catch (error) {
    console.log(error);
  }
}

// console.log(producrTotalData, userTotalData);
