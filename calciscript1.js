let op1 = "", op2 = "", opr = "";

function clearScreen() {
    document.getElementById("result").value = "";
}

function display(value) {
    let result = document.getElementById("result");

    // If the value is an operator
    if (["+", "-", "*", "/"].includes(value)) {

        // Allow negative number at start
        if (result.value === "" && value === "-") {
            result.value = value;
            return;
        }

        // Prevent operator if no number yet
        if (result.value === "")
            return;

        op1 = result.value;
        opr = value;
        clearScreen();
        return;
    }

    // For numbers
    result.value += value;
}

function displaydot() {
    let result = document.getElementById("result");
    if (!result.value.includes(".")) {
        result.value += ".";
    }
}

function calculate() {
    let result = document.getElementById("result");

    if (!op1 || !opr)
        return;

    op2 = result.value;

    if (opr === "/" && op2 === "0") {
        result.value = "Division By Zero";
    } else {
        result.value = eval(op1 + opr + op2);
    }
}
