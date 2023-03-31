// Add the PUT Method on submiting the form
let APIURLPRODUCTS = "https://dfabrica-data-app.onrender.com/products";
let totalProducts = document.getElementById("totalProducts");
//fetching the data to priint the total number of items
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
// fetch("https://dfabrica-data-app.onrender.com/products", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     name: "Test2 from JavaScript code",
//     image1:
//       "https://images.bewakoof.com/t1080/women-s-rose-solid-puffer-jackets-498989-1665663674-6.jpg",
//     image2:
//       "https://images.bewakoof.com/t1080/women-s-rose-solid-puffer-jackets-498989-1665663658-3.jpg",
//     image3:
//       "https://images.bewakoof.com/t1080/women-s-rose-solid-puffer-jackets-498989-1665663669-5.jpg",
//     image4:
//       "https://images.bewakoof.com/t1080/women-s-rose-solid-puffer-jackets-498989-1665663664-4.jpg",
//     "price-inr": 3499,
//     "price-usd": 44,
//     "price-pound": 35,
//     discount: 70,
//     description:
//       "[`Relaxed fit - Fits just right, not too tight not too loose`,`100% Nylon fabric is strong, durable and lightweight.`]",
//     sex: "F",
//     category: "Winterwear",
//     stock: 31,
//     size: "[S,M,L,XL,XXL]",
//     rating: 3.9,
//     color: "pink",
//     // ... other properties
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     // Handle the response data here
//     console.log(data); // This should log the newly created item with its ID
//   })
//   .catch((error) => {
//     // Handle any errors here
//     console.error(error);
//   });

const form = document.getElementById("add-product-form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent form submission

  // console.log(formData);

  fetch(APIURLPRODUCTS, {
    method: "POST",
    body: JSON.stringify({
      name: form.elements["name"].value,
      image1: form.elements["image1"].value,
      image2: form.elements["image2"].value,
      image3: form.elements["image3"].value,
      image4: form.elements["image4"].value,
      "price-inr": form.elements["price-inr"].value,
      "price-usd": form.elements["price-usd"].value,
      "price-pound": form.elements["price-pound"].value,
      discount: form.elements["discount"].value,
      description: form.elements["description"].value,
      sex: form.elements["sex"].value,
      category: form.elements["category"].value,
      stock: form.elements["stock"].value,
      size: form.elements["size"].value,
      rating: form.elements["rating"].value,
      color: form.elements["color"].value,
    }),
  })
    .then((response) => {
      console.log(response);
      if (response.ok) {
        // Increment the totalProducts count
        let productTotalData = parseInt(totalProducts.innerText);
        totalProducts.innerText = ++productTotalData;

        // Clear the form
        // form.reset();
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

productData();
