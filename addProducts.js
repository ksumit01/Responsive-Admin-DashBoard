// Add the PUT Method on submiting the form
let APIURLPRODUCTS = "https://fine-puce-vulture-garb.cyclic.app/Dfabrica";

async function productData() {
  try {
    let res = await fetch(APIURLPRODUCTS);
    let data = await res.json();
    let productTotalData = data.length;
    totalProducts.innerText = productTotalData;
  } catch (error) {
    console.log(error);
  }
}

// Add an event listener to the form submit button
const form = document.getElementById("add-product-form");
form.addEventListener("submit", async (e) => {
  e.preventDefault(); // prevent form submission
  try {
    const formData = new FormData(form);
    const response = await fetch(APIURLPRODUCTS, {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      // Increment the totalProducts count
      let productTotalData = parseInt(totalProducts.innerText);
      totalProducts.innerText = ++productTotalData;
      // Clear the form
      form.reset();
    }
  } catch (error) {
    console.log(error);
  }
});

productData();
