export default function Lab4(){
    //lab4_1
    const triangularNumbers = [];
    for (let n = 1; n <= 10; n++) {
      const triangularNumber = (n * (n + 1)) / 2;
      triangularNumbers.push(triangularNumber);
    }
  
    const outputString = triangularNumbers.join('  ');
    //lab4_2
    function generateRandomArray(length, min, max) {
        const randomArray = [];
        for (let i = 0; i < length; i++) {
          const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
          randomArray.push(randomNumber);
        }
        return randomArray;
      }

      const randomArray = generateRandomArray(15,1,100);


      function findMinAndSwap(array) {
        // Знаходимо індекс мінімального елементу
        let minIndex = 0;
        for (let i = 1; i < array.length; i++) {
          if (array[i] < array[minIndex]) {
            minIndex = i;
          }
        }
      
        // Поміняємо місцями мінімальний елемент та останній елемент
        const temp = array[minIndex];
        array[minIndex] = array[array.length - 1];
        array[array.length - 1] = temp;
      
        return array;
      }

      //Lab4_3
      function calculateAverageAndCount(array, A) {
        let sum = 0;
        let count = 0;
        let countLessThanA = 0;
      
        for (let i = 0; i < array.length; i++) {
          if (array[i] !== 0) {
            sum += array[i];
            count++;
      
            if (i % 2 === 0 && array[i] <= A) {
              countLessThanA++;
            }
          }
        }
    
        const average = sum / count;
        return { average, countLessThanA };
      }
      const A = 25;
      const { average, countLessThanA } = calculateAverageAndCount(randomArray, A);
    
    //Lab4_4
      
   const fruits=['apple','pineapple','mango','melon','grape'];
   const citrus=['orange','lemon','lime'];
   //clone not reference
   let mangoArray = [...fruits];  
   const newFruites = ['pear', 'cherry', 'plum', 'raspberry', 'strawberry'];
    const mangoIndex = mangoArray.indexOf("mango");
      mangoArray.splice(mangoIndex + 1, 0, ...newFruites);
    
    
    
      return(
        <div>
            <p>Lab 4_1 :</p>
            <pre>{outputString}</pre>
            <p>Lab 4_2</p>
            <span>Random array:</span>
            <pre>{randomArray.join("  ")}</pre>
            <span>Swap smallest element with last one</span>
            <pre>{findMinAndSwap(randomArray).join("  ")}</pre>
            <p>Lab 4_3</p>
            <pre>Avarage: {average}   Less then A ({A}) : {countLessThanA}</pre>
            <p>Lab 4_4</p>
            <div style={{display:"flex", paddingInlineStart:"20px", flexDirection:"column", gap:"4px"}}>
                 <p>масив fruits</p>
                 <pre>{fruits.join("  ")}</pre>
                 <p>масив citrus</p>
                 <pre>{citrus.join("  ")}</pre>
                 <p>масив fruits, в якому після mango вставлено: pear, cherry, plum, raspberry, strawberry</p>
                 <pre>{mangoArray.join("  ")}</pre>
                 <p>масив fruits, в якому видалено останні 3 елементи</p>
                 <pre>{fruits.slice(0, -3).join("  ")}</pre>
                 <p>виведіть відсортований в алфавітному порядку масив fruits</p>
                 <pre>{fruits.sort().join("  ")}</pre>
                 <p>виведіть масив fruits у зворотному алфавітному порядку</p>
                 <pre>{fruits.sort().reverse().join("  ")}</pre>
                 <p>виведіть масив fruits, відсортований за довжиною слів.</p>
                 <pre>{fruits.sort((a,b)=>a.length - b.length).join("  ")}</pre>

            </div>
       
        </div>
    )
}


