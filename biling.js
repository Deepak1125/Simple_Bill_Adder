let buttons = document.querySelectorAll(".select button");
let itmcount = document.querySelectorAll(".count");
let ol = document.querySelector(".list");
let payDiv = document.getElementById("pay");
let gtc = document.querySelector(".gtc");
let calculateTotal = () => {
    let total = 0;
    document.querySelectorAll(".list li").forEach(item => {
        total += parseInt(item.textContent.split('$')[1]);
    });
    gtc.addEventListener("click",()=>{
        setTimeout(()=>{
            payDiv.innerHTML = `<h2>$${total}</h2>`;
        },750);
    })
};

buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        let count = parseInt(itmcount[index].textContent);
        itmcount[index].textContent = ++count;

        let itemDiv = btn.parentElement.parentElement;
        let itemName = itemDiv.querySelector('h3').textContent.split(' ')[0];
        let itemCost = itemDiv.querySelector('.cost').textContent;

        let list = document.createElement("li");
        list.textContent = `${itemName} - $${itemCost}`;
        ol.appendChild(list);

        calculateTotal();
    });
});