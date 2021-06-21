function compute()
{
    var principal = document.getElementById("principal");
    if(principal.value<=0){
        alert("Enter a positive number");
        principal.focus();
        return false;
    }    
    rate = document.getElementById("Rate").value;
    years = document.getElementById("years").value;
    interest = principal.value*years*rate/100;  
    d = new Date();
    fullyear = d.getFullYear() + parseInt(years);
    document.getElementById('result').innerHTML = "If you deposit "+ "<span class='highlight'>"+principal.value+"</span>"+",at an interest rate of "+ "<span class='highlight'>"+rate+"</span>"+".You will receive an amount of "+"<span class='highlight'>"+ interest + "</span>"+",in the year " +"<span class='highlight'>"+fullyear+"</span>";
    return true;
}

function updateSlider()
{
    rate = document.getElementById("Rate").value;
    document.getElementById('rate').innerHTML = rate+"%";
}
