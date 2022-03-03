const calculateInterest = () => {
    const principal = document.getElementById("principal").value;
    const interest = document.getElementById("interest").value;
    const years = document.getElementById("years").value;
    const interestGain = principal * years * interest / 100;
    const year = new Date().getFullYear() + parseInt(years);
    const result = document.getElementById("result").innerHTML =
        `If you deposit <span style="background-color:yellow;">${principal}</span><br/>
        at an interest rate of <span style="background-color:yellow;">${interest}</span><br/>
        you will receive an amount of <span style="background-color:yellow;">${interestGain}</span><br/>
        in the year <span style="background-color:yellow;">${year}</span>`;

    if (principal == 0 || principal < 0) {
        alert("Please enter a positive number!");
        principal.focus();
    }
}

const updateRate = () => {
    const interestRate = document.getElementById("interest").value;
    document.getElementById("interest_val").innerHTML = `${interestRate}%`;
    console.log(interestRate);
}