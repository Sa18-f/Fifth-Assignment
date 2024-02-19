const allBtn = document.getElementsByClassName('select-btn');
let count = 0;
for(const btn of allBtn){
    btn.addEventListener('click', function(event){
        count = count + 1;
        const selectedSeat = event.target.innerText;
        if(count > 4){
            document.getElementsByClassName('select-btn').disabled = true;
            alert("You can not book anymore");
            return;
        }
        // console.log(selectedSeat);
        // const selectedSeatContainer = document.getElementById('selected-seat-container');
        // const p = document.createElement('p');
        // p.innerText = selectedSeat;
        // const p2 = document.createElement('p');
        // p2.innerText = "Economy";
        // const p3 = document.createElement('p');
        // p3.innerText = "550";
        // selectedSeatContainer.appendChild(p);
        // selectedSeatContainer.appendChild(p2);
        // selectedSeatContainer.appendChild(p3);
        const selectedSeatContainer = document.getElementById('selected-seat-container');
        const div = document.createElement('div');
        div.classList.add( 'flex', 'justify-between', 'items-center', 'my-3');
        const seatSerial = document.createElement('p');
        seatSerial.innerText = selectedSeat;
        const classType = document.createElement('p');
        classType.innerText = 'Economy';
        const price = document.createElement('p');
        price.innerText = "550";
        // console.log(typeof price);
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


        event.target.style.backgroundColor = "#1DD100";

        // totalCost('total-cost', parseInt(price));
        setInnerText('cart-count', count);
    })
}
// function totalCost(id, value){
//     const totalCost = document.getElementById(id).innerText;
//     const convertedTotalCost = parseInt(totalCost);
//     const sum = convertedTotalCost + parseInt(value);
//     setInnerText('total-cost', sum);
// }
function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}
const couponCodeBtn = document.getElementById('apply-btn');
couponCodeBtn.addEventListener('click', function(){
    const couponField = document.getElementById('input-field').value;
    console.log(couponField);
    // const couponCode = couponField.split(" ").join('').toUpperCase();
    if(couponField === "NEW15"){
        const totalPriceDisplay = document.getElementById('total-price').innerText;
        console.log(typeof totalPriceDisplay);
        const totalPrice = count * 550;
        totalPriceDisplay.textContent = `${totalPrice}`;
        const discountedPrice = totalPriceDisplay * 0.15;
        console.log(discountedPrice); 
        const grandTotal = document.getElementById('grand-total');
        grandTotal.textContent = totalPrice - discountedPrice;    
    }
    else if(couponField === "Couple 20"){
        const totalPriceDisplay = document.getElementById('total-price').innerText;
        console.log(typeof totalPriceDisplay);
        const totalPrice = count * 550;
        totalPriceDisplay.textContent = `${totalPrice}`;
        const discountedPrice = totalPriceDisplay * 0.2;
        console.log(discountedPrice); 
        const grandTotal = document.getElementById('grand-total');
        grandTotal.textContent = totalPrice - discountedPrice;
        // document.getElementById('input-field').hidden = true;
        // couponField.disabled = true;
        // console.log(couponCodeBtn);
    }
    else{
        alert("Invalid Coupon Code");
    }
    document.getElementById('input-field').hidden = true;
})

