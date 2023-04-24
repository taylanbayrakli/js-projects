
// step-1) getting elements 

const amountInput = document.querySelector(".amount");
const from = document.querySelector("#from");
const to = document.querySelector("#to");
const resultInput = document.querySelector(".result");

//! step-1 end

// step-6)
const currency = new Currency();
//! step-6 end)


// step-2) listener
run();

function run() {
    amountInput.addEventListener("input", convert)
}

//! step-2 end

// step-3) function

function convert() {

    const amount = Number(amountInput.value.trim());
    const fromVal = from.options[from.selectedIndex].textContent;
    const toVal = to.options[to.selectedIndex].textContent;
    //! step-3 end


    // step-7)

    currency
        .convert(amount, fromVal, toVal)
        .then((result) => {
            resultInput.value = result.toFixed(3);
        });

}