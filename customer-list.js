// const API = "https://jsonplaceholder.typicode.com/posts";

// DOM
let customers = document.querySelector(".customer__list");
let tableBody = document.querySelector("#table-customerList tbody");
getAllCustomerList();

async function getAllCustomerList() {
  const response = await fetch("http://localhost:9000/api/mhdata/customerList");
  const data = await response.json();
  console.log(data);
  showCustomerList(data.data);
}

function showCustomerList(data) {
  let dataHTML = "";
  for (let i = 0; i < data.length; i++) {
    let customer = data[i];
    // console.log(customer);

    // let customerTag = document.createElement("div"); // Node

    dataHTML += `
      <tr>
        <th scope="row">${customer.name}</th>
        <td>${customer.phone}</td>
        <td>${customer.email}</td>
        <td>${customer.location}</td>
        <td>${customer.source}</td>
        <td>${customer.type}</td>
        <td>${customer.businessName}</td>
        <td>${customer.businessID}</td>
        <td>${customer.foundedDate}</td>
        <td>${customer.dayCreated}</td>
        <td>${customer.dayModified}</td>
      </tr>
    `;
    // customerTag.innerHTML = customerHTML;
    console.log(dataHTML);
    // customers.appendChild(customerTag);
  }

  console.log(tableBody);
  tableBody.innerHTML = dataHTML;
}
