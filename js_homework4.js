    function checkProbabilityTheory(count) {
        let evenCount = 0;
        let oddCount = 0;
        if (count<100){
             let t1=count;
              console.log(t1);
              return console.log("Число не відповідає необхіодному діапазону! Спробуйте ще раз ввести значення від 100 - 1000 !");

       }
else{
    if (count>1000){
        let t2=count;
         console.log(t2);
         return console.log("Число не відповідає необхіодному діапазону! Спробуйте ще раз ввести значення від 100 - 1000 !");


}}
      
        for (let i = 0; i < count; i++) {           // Генеруємо випадкове число від 100 до 1000 включно
          const randomNumber = Math.floor(Math.random() * (1000-100+1) + 100);
      
            if (randomNumber % 2 === 0) {// Перевіряємо, чи число парне
            evenCount++;
          } else {
            oddCount++;
          } 
                  
        }
      const evenPercentage1 = (evenCount/ count ) * 100;
      const evenPercentage2 = (oddCount / count ) * 100;


        console.log("Введене число: " + count);
        console.log("_____________________");
        console.log("Кільткість парних чисел: " + evenCount);
        console.log("Кількість НЕ парних чисел: " + oddCount);
        console.log("_____________________");
      
        console.log("Відсоткове відношення НЕ парних до парних: " + (evenPercentage1).toFixed(1) + "%");
        console.log("Відсоткове відношення парних до НЕ парних: " + (evenPercentage2).toFixed(1) + "%");
        console.log("_____________________");
      }

    //   checkProbabilityTheory(1002);
      checkProbabilityTheory(100);
    //   checkProbabilityTheory(650);