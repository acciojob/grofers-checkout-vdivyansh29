// const getSumBtn = document.createElement("button");
// getSumBtn.append("Get Total Price");
// document.body.appendChild(getSumBtn);

// const getSum = () => {
// //Add your code here
// 	
// };

// getSumBtn.addEventListener("click", getSum);

const prices = element.querySelectorAll(".prices");
let totalAmount = 0;

for(let i=0; i<prices.length; i++){
	totalAmount += parseInt(prices[i].innerText)
}

const row = document.creatElement("tr");
const td = document.createElement("td");

td.innerHTML = `Total Price : ${totalAmount}`
td.colSpan = 2

row.appendChild(td)
document.getElementById("fruites-table").appendChild(row)



