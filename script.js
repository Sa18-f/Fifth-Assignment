const allBtn = document.getElementsByClassName('select-btn');
let count = 0;
for (const btn of allBtn) {
    btn.addEventListener('click', function (event) {
        const selectedSeat = event.target.innerText;
        if (count < 4) {
            btn.setAttribute("disabled", true);
        }
        if (count >= 4) {
            for (const btn of allBtn) {
                btn.setAttribute('disabled', true)
            }
            alert("You can not book anymore");
            return;
        }
        count = count + 1;
        const selectedSeatContainer = document.getElementById('selected-seat-container');
        const div = document.createElement('div');
        div.classList.add('flex', 'justify-between', 'items-center', 'my-3');
        const seatSerial = document.createElement('p');
        seatSerial.innerText = selectedSeat;
        const classType = document.createElement('p');
        classType.innerText = 'Economy';
        const price = document.createElement('p');
        price.innerText = "550";
        div.appendChild(seatSerial);
        div.appendChild(classType);
        div.appendChild(price);
        selectedSeatContainer.appendChild(div);
        // available seat part
        const availableSeatsDisplay = document.getElementById('available-seat');
        availableSeatsDisplay.textContent = 16 - count;
        //total price
        const totalPriceDisplay = document.getElementById('total-price');
        const totalPrice = count * 550;
        totalPriceDisplay.textContent = `${totalPrice}`;
        // grand total
        const grandTotalDisplay = document.getElementById('grand-total');
        grandTotalDisplay.textContent = `${totalPrice}`;

        event.target.style.backgroundColor = "#1DD100";


        setInnerText('cart-count', count);
    })
}
function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}
const couponCodeBtn = document.getElementById('apply-btn');
couponCodeBtn.addEventListener('click', function () {
    const couponField = document.getElementById('input-field').value;
    console.log(couponField);
    if (couponField === "NEW15") {
        const totalPriceDisplay = document.getElementById('total-price').innerText;
        const totalPrice = count * 550;
        totalPriceDisplay.textContent = `${totalPrice}`;

        const discountedPrice = totalPriceDisplay * 0.15;
        console.log(discountedPrice);
        const grandTotal = document.getElementById('grand-total');
        grandTotal.textContent = totalPrice - discountedPrice;
        document.getElementById('input-field').hidden = true;
        document.getElementById('apply-btn').hidden = true;   
    }
    else if (couponField === "Couple 20") {
        const totalPriceDisplay = document.getElementById('total-price').innerText;
        const totalPrice = count * 550;
        totalPriceDisplay.textContent = `${totalPrice}`;
        const discountedPrice = totalPriceDisplay * 0.2;
        console.log(discountedPrice);
        const grandTotal = document.getElementById('grand-total');
        grandTotal.textContent = totalPrice - discountedPrice;
        document.getElementById('input-field').hidden = true;
        document.getElementById('apply-btn').hidden = true;
    }
    else {
        alert("Invalid Coupon Code");
    }
})

