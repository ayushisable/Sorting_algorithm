
 const buttonRan = document.getElementById("button1");
  const buttonSort = document.getElementById("button2");
  const arraycontainer = document.querySelector(".array");
  const algorithmSelector = document.getElementById("sortAlgorithm");
  const arraySize = document.getElementById("arraysize");
  const timeComplexity = document.querySelector(".timecom");
  let functionRun = true;
  // Function to draw the array
  function drawArray(){
    arraycontainer.innerHTML = ''; // Clear previous bars
    array.forEach(value => {
      const bar = document.createElement('div');
      bar.classList.add('bar');
      bar.style.height = `${value}px`;
      arraycontainer.appendChild(bar);
    });
  }
  
  let isComplexityEnabled = true;
  //function to show time complexity
   async function complexitybubbIn(){
    if (!isComplexityEnabled) {
      console.log("Complexity function is disabled.");
      return;
  }
    timeComplexity.style.backgroundColor ='lightblue';
    timeComplexity.innerHTML =`
    <h3>Best-case Time Complexity: <b>O(n)</b></h3>
    <h3>Average case Time complexity: O(n<sup>2</sup>) </h3>
    <h3>Worst-case Time Complexity: O(n<sup>2</sup>) </h3>
  `;
  }
  function complexitySelection(){
    timeComplexity.style.backgroundColor ='lightblue';
    timeComplexity.innerHTML =`
    <h3> Time Complexity: O(n<sup>2</sup>)</h3>
    <h3> Same for all cases Best/Worst/Average </h3>
   
  `;
  }
  function complexityMerge(){
    timeComplexity.style.backgroundColor ='lightblue';
    timeComplexity.innerHTML =`
    <h3>Best-case Time Complexity: O(nlogn)</h3>
    <h3>Average case Time complexity: O(nlogn>) </h3>
    <h3>Worst-case Time Complexity: O(n<sup>2</sup>) </h3>
  `;
  }function complexityQuick(){
    timeComplexity.style.backgroundColor ='lightblue';
    timeComplexity.innerHTML =`
    <h3> Time Complexity: O(nlogn)</h3>
    <h3> Same for all cases Best/Worst/Average </h3>
   
  `;
  }

  // Bubble Sort algorithm with animation
  async function bubbleSort(){
    functionRun =false;
    complexitybubbIn();
    const bars = document.querySelectorAll('.bar');
    for(let i = 0; i < array.length; i++) {
      for(let j = 0; j < array.length - 1 - i; j++) {
        bars[j].style.backgroundColor = 'red';
        bars[j + 1].style.backgroundColor = 'red';
        await new Promise(resolve => setTimeout(resolve, 500));

        if (array[j] > array[j + 1]) {
          // Swap elements
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
          bars[j].style.backgroundColor = 'black';
          // Update the height of bars instead of redrawing the whole array
          bars[j].style.height = `${array[j]}px`;
          bars[j + 1].style.height = `${array[j + 1]}px`;
         
          
          
        }
         // change color after sorting
        bars[j].style.backgroundColor = 'teal';
        bars[j + 1].style.backgroundColor = 'green';
       
         
      }
      if(i===array.length-1){
        bars[0].style.backgroundColor ='green';
      }
    }
   
    
    for(let i=0;i<array.length;i++){
      await new Promise(resolve => setTimeout(resolve, 100));
      bars[i].style.backgroundColor ='teal';
    }
    false;
    functionRun = true ;
  }

  // Selection Sort algorithm with animation
  async function selectionSort(){
    functionRun =false;
    complexitySelection();
    const bars = document.querySelectorAll('.bar');
    for (let i = 0; i < array.length; i++) {
      let minIndex = i;
      bars[minIndex].style.backgroundColor = 'orange'; // Highlight the current element

      await new Promise(resolve => setTimeout(resolve, 500));

      for (let j = i + 1; j < array.length; j++) {
        bars[j].style.backgroundColor = 'red'; // Compare the rest of the array
        await new Promise(resolve => setTimeout(resolve, 500));

        if (array[j] < array[minIndex]) {
          minIndex = j;
        }

        bars[j].style.backgroundColor = 'teal'; // Reset the color
      }

      // Swap if minIndex is different from i
      if (minIndex !== i) {
        [array[i], array[minIndex]] = [array[minIndex], array[i]];

        // Update the height of bars instead of redrawing the whole array
        bars[i].style.height = `${array[i]}px`;
        bars[minIndex].style.height = `${array[minIndex]}px`;
      }

      bars[i].style.backgroundColor = 'green'; // Reset color of sorted element
    }

    for(let i=0;i<array.length;i++){
      await new Promise(resolve => setTimeout(resolve, 100));
      bars[i].style.backgroundColor ='teal';
    }
    functionRun = true;
  }
  // Insertion sort
  async function insertionSort() {
    functionRun =false;
    complexitybubbIn();
    const bars = document.querySelectorAll('.bar');
    
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;

        // Highlight the key element
        bars[i].style.backgroundColor = 'green';
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Compare the key element with the elements on its left
        while (j >= 0 && array[j] > key) {
            // Highlight the current element and the key for comparison
            bars[j].style.backgroundColor = 'red';
            await new Promise(resolve => setTimeout(resolve, 700));

            // Swap the elements
            [array[j], array[j + 1]] = [array[j + 1], array[j]];

            // Update the heights of the bars
            bars[j].style.height = `${array[j]}px`;
            bars[j + 1].style.height = `${array[j + 1]}px`;

            // Move the index to the left
            j--;

            // Reset the color of the swapped element
            if (j >= 0) {
                bars[j].style.backgroundColor = 'red';
            }
        }

        // Set the color of the key element after placing it in the correct position
        bars[j + 1].style.height = `${array[j + 1]}px`;
        bars[j +1].style.backgroundColor = 'red';
    }
    
    for(let i=0;i<array.length;i++){
      await new Promise(resolve => setTimeout(resolve, 200));
      bars[i].style.backgroundColor = 'teal';
    }
    functionRun = true;
}


 // merge sort
  async function mergeSort(array, start = 0, end = array.length - 1) {
    functionRun =false;
    complexityMerge();
    if (start >= end) {
      return;
    }

    const middle = Math.floor((start + end) / 2);

    await mergeSort(array, start, middle); // Sort the left half
    await mergeSort(array, middle + 1, end); // Sort the right half

    await merge(array, start, middle, end); // Merge the two halves
    functionRun =true;
    
  }

   // Merge helper function with animation
  async function merge(array, start, middle, end) {
    const bars = document.querySelectorAll('.bar');
    const left = array.slice(start, middle + 1);
    const right = array.slice(middle + 1, end + 1);
    let i = 0, j = 0, k = start;

    while (i < left.length && j < right.length) {
      bars[k].style.backgroundColor = '#FF5733'; // Highlight current element in main array
      await new Promise(resolve => setTimeout(resolve, 350));

      if (left[i] <= right[j]) {
        array[k] = left[i];
        bars[k].style.height = `${array[k]}px`;
        i++;
      } else {
        array[k] = right[j];
        bars[k].style.height = `${array[k]}px`;
        j++;
      }

      bars[k].style.backgroundColor = '#33C4FF'; // Reset the color
      k++;
    }

    // Copy remaining elements from left array
    while (i < left.length) {
      bars[k].style.backgroundColor = '#FF5733';
      await new Promise(resolve => setTimeout(resolve, 350));

      array[k] = left[i];
      bars[k].style.height = `${array[k]}px`;
      bars[k].style.backgroundColor = '#32CD32'; // Reset the color
      i++;
      k++;
    }

    // Copy remaining elements from right array
    while (j < right.length) {
      bars[k].style.backgroundColor = '#FF5733';
      await new Promise(resolve => setTimeout(resolve, 350));

      array[k] = right[j];
      bars[k].style.height = `${array[k]}px`;
      bars[k].style.backgroundColor = '#33C4FF'; // Reset the color
      j++;
      k++;
    }
    
  }
    

 // Quick Sort algorithm with animation
async function quickSort(arr, left = 0, right = arr.length - 1) {
  functionRun =false;
  complexityQuick();
  // Base case: If left index is greater than or equal to right, the subarray is sorted
  if (left >= right) return;

  // Partition the array and get the pivot index
  const pivotIndex = await partition(arr, left, right);

  // Recursively sort the left part (elements smaller than the pivot)
  await quickSort(arr, left, pivotIndex - 1);

  // Recursively sort the right part (elements greater than the pivot)
  await quickSort(arr, pivotIndex + 1, right);

  functionRun =true;
}

// Partition function with animation and explanation
async function partition(arr, left, right) {
  // The pivot is chosen as the last element in the array (right)
  const pivot = arr[right];

  // Initialize i to one position before the left bound (left - 1)
  let i = left - 1;

  // Loop through the array from left to right-1 (excluding the pivot)
  for (let j = left; j < right; j++) {
    const bars = document.querySelectorAll('.bar');

    // Highlight the current element being checked and the pivot element
    bars[j].style.backgroundColor = 'orange';
    bars[right].style.backgroundColor = 'red';
    
    await new Promise(resolve => setTimeout(resolve, 300));

    // If the current element (arr[j]) is smaller than the pivot, it's time to swap
    if (arr[j] < pivot) {
      i++; // Move the partition index forward
      // Swap arr[i] and arr[j]
      [arr[i], arr[j]] = [arr[j], arr[i]];

      // Update the bar heights after swapping
      bars[i].style.height = `${arr[i]}px`;
      bars[j].style.height = `${arr[j]}px`;
    }

    // Reset the color for the checked element
    bars[j].style.backgroundColor = 'teal';
  }

  // After the loop, place the pivot in its correct sorted position
  // Swap the pivot (arr[right]) with arr[i + 1]
  [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];

  // Update the heights of the bars after swapping the pivot
  const bars = document.querySelectorAll('.bar');
  bars[i + 1].style.height = `${arr[i + 1]}px`;
  bars[right].style.height = `${arr[right]}px`;

  // Highlight the pivot and its correct sorted position
  bars[right].style.backgroundColor = 'teal';
  bars[i + 1].style.backgroundColor = 'green';

  // Add a short delay so users can visually see the swap
  await new Promise(resolve => setTimeout(resolve, 300));

  // Return the index where the pivot was placed
  return i + 1;
}
  
    
let arrlength =20;  // Declare arrlength
let array;  // Declare the array
array = Array.from({ length: arrlength }, () => Math.floor(Math.random() * 250));
drawArray();
arraySize.addEventListener("change", () => {
  const array_size = parseInt(arraySize.value);  // Get the selected array size

  // Set new size and create a new random array of the selected size
  arrlength = array_size;
  array = Array.from({ length: arrlength }, () => Math.floor(Math.random() * 250));  // Generate a new random array
  drawArray();  // Redraw the array with the new size and values
});


// Event listener for the random button (only for randomizing the array's values, not size)
buttonRan.addEventListener("click", () => {
  // Randomize the values in the array without changing its size
  functionRun =true;
  array = Array.from({ length: arrlength }, () => Math.floor(Math.random() * 250));  // Generate a new random array based on arrlength
  drawArray();  // Redraw the array with new values
});

  // Event listener for the sort button
  buttonSort.addEventListener("click", async () => {
    const selectedAlgorithm = algorithmSelector.value;
    console.log(selectedAlgorithm);
    console.log(algorithmSelector.value);
    if (selectedAlgorithm === "bubble"&&functionRun===true) {
      await bubbleSort(); // Call Bubble Sort
      //await complexitybubbIn();
    } else if (selectedAlgorithm === "selection"&&functionRun===true) {
      await selectionSort(); // Call Selection Sort
      //complexitySelection();
    } else if(selectedAlgorithm ==="insertion"&&functionRun===true){
      await insertionSort();
      //complexitybubbIn
  } else if(selectedAlgorithm ==="merge"&&functionRun===true){
    await mergeSort(array);
    //complexityMerge();
  } else if(selectedAlgorithm ==="quick"&&functionRun===true){
    await quickSort(array);
    //complexityQuick();
  }

  });

  // Initial array drawing
  drawArray();




