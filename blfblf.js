let b = {
  color: "green",
  width: 2,
  height: 5,
};
console.log(b);
console.log(typeof b);
let f = b;
f.health = 3444;
delete b.color;
const myCity = {
  towns: "Moscow...",
  country: "Russia",
  age: 6000,
  climate: {
    air: "cold",
    df: "df",
    climateoften: "snowy",
    climateseldom: "hot",
  },
};
delete myCity.climate.df;
const l = myCity;
l["color"] = "red";
console.log(myCity);
const i = "run";
const a = {
  color: "blue",
  volume: 300,
};
const q = a;
q[i] = "fast";
console.log(a);
const name = "Maksim";
const id = 4;
const w = {
  name,
  id,
  height: 120,
  width() {
    if (b.color == green) {
      console.log("Зелёный цвет");
    } else b.color == red;
    {
      console.log("красный");
    }
  },
};
console.log(w);
console.log(typeof w);
const nf = "Не знаю что";
const jk = {
  color: "black",
  width: "40",
  height: "500",
};
const ua = {
  width: "599",
  height: "600",
};
console.log(JSON.stringify(ua));
const df = JSON.stringify(ua);
console.log(JSON.parse(df));
