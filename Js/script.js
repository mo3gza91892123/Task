let num_one = document.querySelectorAll("#one")
let num_two = document.querySelectorAll("#two")
let num_three = document.querySelectorAll("#three")
let num_four = document.querySelectorAll("#four")
let num_faive = document.querySelectorAll("#faive")
num_one.forEach(element =>{
    element.innerHTML = 100000;
});
num_two.forEach(element =>{
    element.innerHTML = 25;
});
num_three.forEach(element =>{
    element.innerHTML = 50;
});
num_four.forEach(element =>{
    element.innerHTML = 70000;
});
num_faive[0].innerHTML = num_three[0].innerHTML - num_two[0].innerHTML //هامش الرابح
num_faive[1].innerHTML = (num_two[1].innerHTML / num_three[1].innerHTML) * 100 + "%" //معدل هامش الربح
let prsant = parseInt(num_faive[1].innerHTML.replace('%',''));
num_faive[2].innerHTML = num_one[2].innerHTML / num_faive[0].innerHTML //حجم التعادل
num_faive[3].innerHTML = num_one[3].innerHTML / prsant * 100  // قيمة التعادل
num_faive[4].innerHTML = (parseInt(num_one[4].innerHTML) + parseInt(num_four[4].innerHTML)) / num_faive[0].innerHTML //حجم المبيعات
num_faive[5].innerHTML = (parseInt(num_one[5].innerHTML) + parseInt(num_four[5].innerHTML)) / prsant * 100  // قيمة المبيعات
