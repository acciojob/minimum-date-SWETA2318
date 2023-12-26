function minDate(dates) {
  // Create a copy of the array to avoid modifying the original array
  const datesCopy = [...dates];

  // Sort the array of dates in ascending order
  datesCopy.sort();

  // Return the first element (minimum date) in the sorted array
  return datesCopy[0];
}

// Test examples
console.log(minDate(["2023/03/01", "2023/03/02", "2023/03/03"])); // "2023/03/01"
console.log(minDate(["2023/01/01", "2023/02/02", "2022/12/31"])); // "2022/12/31"console.log("Minimum date:", result);alert(minDate(dates));
