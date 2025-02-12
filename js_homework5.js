
  const services = {
       "Manikur": "60 грн",
        "Pedikur":"80 грн",
        "Massaj lica": "100 грн",
    };
   
services.StrijkаJensk = "200 грн";        // Додаємо нові послуги
services.Okrashivanie = "450 грн";
services.StrijkаMujsk = "150 грн";

delete services.Okrashivanie; // Виделяємо послугу


function price() {
    let total = 0;
    for (let key in services) {
        total += parseInt(services[key]); // parseInt(services[key]) - Перетворює рядок у число, прибираємо зайве "грн"
    }
    return total + " грн";
}

function minPrice() {

    let min = Infinity; // Прирівнюємо до бескінченності, щоб спростите вибір першого значення з services, яке у будь якому випадку буде <Infinity (true)
    for (let key in services) {
             let price = parseInt(services[key]);
     
        min = Math.min (min,price);
          }
    return min + " грн";
  }

function maxPrice() {
    let max = 0;
    for (let key in services) {
            let price = parseInt(services[key]);
     
        max = Math.max (max,price);
          }
    return max + " грн";
  }


console.log("Загальна вартість:", price());
console.log("Мінімальна ціна:", minPrice());
console.log("Максимальна ціна:", maxPrice());
