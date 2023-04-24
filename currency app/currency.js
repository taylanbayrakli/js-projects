
// step-4) 

class Currency {
    constructor() {
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=yooCm9s3jJAmynF3bMobbq3TW8keQZ9SYOdEDGmo&base_currency="
    }

    //step-5)

    async convert(amount, from, to) {
        const res = await fetch(`${this.url}${from}`);
        const data = await res.json();
        const final = amount * data.data[to];
        return final;
    }
}
