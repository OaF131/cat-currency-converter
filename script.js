 async function convertCurrency() {
            const amount = document.getElementById("amount").value;
            const fromCurrency = document.getElementById("from-currency").value;
            const toCurrency = document.getElementById("to-currency").value;
            const resultField = document.getElementById("result");
            
            if (amount <= 0) {
                resultField.textContent = "Please enter a valid amount!";
                return;
            }
            
            try {
                const response = await fetch("https://api.exchangerate-api.com/v4/latest/" + fromCurrency);
                const data = await response.json();
                const rate = data.rates[toCurrency];
                const convertedAmount = (amount * rate).toFixed(2);
                resultField.textContent = `Result: ${convertedAmount} ${toCurrency}`;
            } catch (error) {
                resultField.textContent = "Error loading exchange rate!";
            }
        }
        
        function swapCurrencies() {
            let fromCurrency = document.getElementById("from-currency");
            let toCurrency = document.getElementById("to-currency");
            let temp = fromCurrency.value;
            fromCurrency.value = toCurrency.value;
            toCurrency.value = temp;
        }