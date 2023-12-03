var userArray = [];
var rankingTableBody = document.getElementById("ranking-table-body");

// Populating userArray
for (var i = 0; i < localStorage.length; i++) {
  // Getting the keys
  var userKey = localStorage.key(i);

  if (userKey != "debug" && userKey != "loglevel") {
    // Converting from JSON to objects
    var user = JSON.parse(localStorage.getItem(userKey));

    // Adding the objects to user array
    userArray.push(`${user.score}-${user.name}`);
  }
}

// Function to sort the user array in descending order
const sortArrayDescendingOrder = (arr) => {
  const length = arr.length;

  // Bubble Sort
  for (var i = 0; i < length; i++) {
    for (var j = 0; j < length - i - 1; j++) {
      // Retrieving the score from the user's array
      var num1 = parseInt(arr[j].split("-")[0]);
      var num2 = parseInt(arr[j + 1].split("-")[0]);

      // Checking if num1 is less than num2
      if (num1 < num2) {
        // Swapping
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
};

sortArrayDescendingOrder(userArray);

const populateRankingTable = () => {
  // Adding rows in ranking table body
  var rowClassName = "text-xl transition-all duration-200 ease-in-out";
  var headerClassName = "py-3";

  // Create table row
  for (var i = 0; i < userArray.length; i++) {
    var row = document.createElement("tr");
    row.className = rowClassName;

    var userName = userArray[i].split("-")[1];
    var userScore = userArray[i].split("-")[0];

    var content = [`${i + 1}`, userName, userScore];

    // Creating table header
    for (var j = 0; j < 3; j++) {
      var th = document.createElement("th");
      th.className = headerClassName;
      th.textContent = content[j];
      row.appendChild(th);
    }

    // Adding the row to the table
    rankingTableBody.appendChild(row);
  }
};

populateRankingTable();
