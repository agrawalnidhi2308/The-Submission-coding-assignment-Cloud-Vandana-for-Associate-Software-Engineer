function bubbleSortDescending(arr) {
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] < arr[j + 1]) {
          // Swap the elements if they are in the wrong order
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
  
  const originalArray = [5, 2, 9, 1, 5, 6];
  bubbleSortDescending(originalArray);
  
  console.log(originalArray); // Output: [9, 6, 5, 5, 2, 1]