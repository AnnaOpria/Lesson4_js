const services = {
  Strijka: 300,
  Farbuvannya: 545,
  Manikur: 900,
  Masazh: 1200,

  price() {
    let total = 0;
    for (let key in this) {
      if (typeof this[key] === "number") {
        total += this[key];
      }
    }
    return total;
  },

  minPrice() {
    let min = null;
    for (let key in this) {
      if (min===null || this[key] < min) {
        min = this[key];
      }
    }
    return min;
  },

  maxPrice() {
    let max = null;
    for (let key in this) {
      if (max===null || this[key] > max) {
        max = this[key];
      }
    }
    return max;
  }
};
services.KrioSauna=4500;
console.log("Загальна вартість:", services.price());
console.log("Мінімальна ціна:", services.minPrice());
console.log("Максимальна ціна:", services.maxPrice());



  
//   // const services = {
//   //      "Manikur": "60 грн",
//   //       "Pedikur":"80 грн",
//   //       "Massaj lica": "100 грн",
//   // }
   
// // services.StrijkаJensk = "200 грн";        // Додаємо нові послуги
// // services.Okrashivanie = "450 грн";
// // services.StrijkаMujsk = "150 грн";

// // delete services.Okrashivanie; // Видаляємо послугу

// function price() {
//     let total = 0;
//     for (let key in services) {
//         total += parseInt(services[key]); // parseInt(services[key]) - Перетворює рядок у число, прибираємо зайве "грн"
//     }
//     return total + " грн";
// }

// function minPrice() {

//     let min = Infinity; // Прирівнюємо до бескінченності, щоб спростите вибір першого значення з services, яке у будь якому випадку буде <Infinity (true)
//     for (let key in services) {
//              let price = parseInt(services[key]);
     
//         min = Math.min (min,price);
//           }
//     return min + " грн";
//   }

// function maxPrice() {
//     let max = 0;
//     for (let key in services) {
//             let price = parseInt(services[key]);
     
//         max = Math.max (max,price);
//           }
//     return max + " грн";
//   }