function Car(name, model, characteristics, price, paramsIssue, AutoNumber, InsuranceNumber)
{
    this.name = name;
    this.model = model;
    this.characteristics = characteristics;
    this.price = price;
    this.paramsIssue = paramsIssue;
    this.AutoNumber = "";
    this.InsuranceNumber = "";
}

Car.prototype.name = function()
{
    return "Name: " + this.name;
}

Car.prototype.model = function()
{
    return "Model: " + this.model;
}

Car.prototype.characteristics = function()
{
    return "HP: " + this.hp + "hp" +
    "\nColor: " + this.color +
    "\Engine: " + this.engine + "cm^3"
    "\nMaxSpeed: " + this.MaxSpeed+ "km/h" +
    "\n0-100km/h: " + this.acceleration + "sec";
}

Car.prototype.price = function()
{
    return "Price: " + this.price;
}

Car.prototype.paramsIssue = function()
{
    return "YearIssue: " + this.yearissue +
    "\nCountryIssue: " + this.countryissue;

}

Car.prototype.AutoNumber = function()
{
    return "AutoNumber: " + this.AutoNumber;
}

Car.prototype.AutoNumber = function(AutoNumber)
{
    this.AutoNumber += AutoNumber;
}

Car.prototype.InsuranceNumber = function()
{
    return "InsuranceNumber: " + this.InsuranceNumber;
}

Car.prototype.InsuranceNumber = function(InsuranceNumber)
{
    this.InsuranceNumber += InsuranceNumber;
}

let deeed =
{
    name: "jiguli",
    model: "kopeyka",
    characteristics:
    {
        hp: "64",
        color: "orange",
        engine: "1198",
        MaxSpeed: "140",
        acceleration: "22"
    },
    price: 500,
    paramsIssue:
    {
        yearissue: 1985,
        countryissue: "Russia"
    }
}

let jiguli = new Car(name, model, characteristics, price, paramsIssue, AutoNumber, InsuranceNumber);
jiguli_starogo_deda.setAutoNumber("1234ded-5");
jiguli_starogo_deda.setInsuranceNumber("998765445");
console.log(jiguli_starogo_deda.getname());
console.log(jiguli_starogo_deda.getmodel());
console.log(jiguli_starogo_deda.getcharacteristics());
console.log(jiguli_starogo_deda.getprice());
console.log(jiguli_starogo_deda.getparamsissue());