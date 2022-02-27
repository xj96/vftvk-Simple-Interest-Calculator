function compute() {
    const principal = document.getElementById("principal").value;
    const rate = document.getElementById("rate").value;
    const years = document.getElementById("years").value;
    const interest = principal * years * rate / 100;
    const year = new Date().getFullYear()+parseInt(years);
}

function updateRate() {
    const rateVal = document.getElementById("rate").value;
    document.getElementById("rateval").innerText=rateVal
}
        