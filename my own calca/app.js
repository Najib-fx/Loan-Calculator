//Selecting UI variables
const UIamount = document.querySelector('.amount');
const UIinterest = document.querySelector('.interest')
const UIyears = document.querySelector('.years')

//Selecting the  calculate button
document.querySelector('.Calculate').addEventListener('click',function(e) {
    document.querySelector('#calculatedAmount').innerHTML = UIamount.value
    document.querySelector('#calculatedInterest').innerHTML = UIinterest.value * UIamount.value / 100 /12
    document.querySelector('#estimatedYears').innerHTML = UIyears.value * 12
    e.preventDefault();
})
