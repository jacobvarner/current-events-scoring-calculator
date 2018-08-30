var score = new Object();

function setLetter(letterIn) {
  score.letter = letterIn;

  clearOptions("flow-analysis-option");
  var selectedElement = document.getElementById(
    "flow-" + letterIn.toLowerCase()
  );
  selectedElement.style.backgroundColor = "#cccccc";

  calculateScore();
}

function clearOptions(className) {
  var flowOptions = document.getElementsByClassName(className);
  for (var i = 0; i < flowOptions.length; i++) {
    flowOptions[i].style.backgroundColor = "white";
  }
}

function clearScoresheet() {
  document.getElementById("late-checkbox").checked = false;
  clearOptions("flow-analysis-option");
  clearOptions("sea-turtle-option");
  clearFlexibilityBonus();
  var inputs = document.getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = 0;
  }
  score = new Object();
  calculateScore();
}

function clearFlexibilityBonus() {
  var elements = document.getElementsByClassName("flexibility-option");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.background = "white";
    elements[i].style.color = "black";
  }
  document.getElementById("flexibility-score").innerHTML = "0";
}

function toggleLate() {
  var checkbox = document.getElementById("late-checkbox");
  score.late = checkbox.checked;

  calculateScore();
}

function setSeaTurtleBonus(bonusIn) {
  score.seaTurtleBonus = bonusIn;

  clearOptions("sea-turtle-option");
  var selectedElement = document.getElementById("turtle-bonus-" + bonusIn);
  selectedElement.style.backgroundColor = "#cccccc";

  calculateScore();
}

function updateCollected(itemType) {
  var itemElement = document.getElementById("collected-" + itemType);
  var itemValue = parseInt(itemElement.value);
  var minNumber;

  if (itemType === "turtles" || itemType === "duckies") {
    if (itemValue > parseInt(itemElement.max)) {
      itemElement.style.background = "#ff7272";
    } else {
      itemElement.style.background = "white";
      score[itemType + "Collected"] = itemValue;

      calculateScore();
    }
  }

  if (itemType === "microplastics") {
    minNumber = 8;
  } else {
    minNumber = 4;
  }

  if (itemValue > parseInt(itemElement.max)) {
    itemElement.style.background = "#ff7272";
  } else {
    itemElement.style.background = "white";
    score[itemType + "Collected"] = itemValue;

    calculateScore();
  }
}

function updateCompleted(itemType) {
  var itemElement = document.getElementById("completed-" + itemType);
  var itemValue = parseInt(itemElement.value);
  if (itemValue > parseInt(itemElement.max)) {
    itemElement.style.background = "#ff7272";
  } else {
    itemElement.style.background = "white";
    score[itemType + "Completed"] = itemValue;

    calculateScore();
  }
}

function updateInstalled(itemType) {
  var itemElement = document.getElementById("installed-" + itemType);
  var itemValue = parseInt(itemElement.value);
  if (itemValue > parseInt(itemElement.max)) {
    itemElement.style.background = "#ff7272";
  } else {
    itemElement.style.background = "white";
    score[itemType + "Installed"] = itemValue;

    calculateScore();
  }
}

function calculateScore() {
  var totalScore = 0;
  var currentFlowAnalysis = 0;
  if (
    (score.late === false || score.hasOwnProperty("late") === false) &&
    score.hasOwnProperty("letter")
  ) {
    currentFlowAnalysis = 150;
    totalScore += currentFlowAnalysis;
    updateScore(totalScore);
  } else {
    totalScore += currentFlowAnalysis;
    updateScore(totalScore);
  }

  var scoreCansInstalled = 0;
  var score8ozInstalled = 0;
  var score16ozInstalled = 0;
  var score1LInstalled = 0;
  var scoreMicroplasticsInstalled = 0;

  var scoreCansCompleted = 0;
  var score8ozCompleted = 0;
  var score16ozCompleted = 0;
  var score1LCompleted = 0;
  var scoreMicroplasticsCompleted = 0;

  var scoreCansCollected = 0;
  var score8ozCollected = 0;
  var score16ozCollected = 0;
  var score1LCollected = 0;
  var scoreMicroplasticsCollected = 0;
  var scoreDuckiesCollected = 0;
  var scoreTurtlesCollected = 0;

  if (score.hasOwnProperty("cansInstalled")) {
    scoreCansInstalled = parseInt(score.cansInstalled) * 100;
    scoreCansCompleted += parseInt(score.cansInstalled) * 25;
    scoreCansCollected += parseInt(score.cansInstalled) * 40;
  }
  if (score.hasOwnProperty("8ozInstalled")) {
    score8ozInstalled = parseInt(score["8ozInstalled"]) * 100;
    score8ozCompleted += parseInt(score["8ozInstalled"]) * 25;
    score8ozCollected += parseInt(score["8ozInstalled"]) * 40;
  }
  if (score.hasOwnProperty("16ozInstalled")) {
    score16ozInstalled = parseInt(score["16ozInstalled"]) * 100;
    score16ozCompleted += parseInt(score["16ozInstalled"]) * 25;
    score16ozCollected += parseInt(score["16ozInstalled"]) * 40;
  }
  if (score.hasOwnProperty("1LInstalled")) {
    score1LInstalled = parseInt(score["1LInstalled"]) * 100;
    score1LCompleted += parseInt(score["1LInstalled"]) * 25;
    score1LCollected += parseInt(score["1LInstalled"]) * 40;
  }
  if (score.hasOwnProperty("microplasticsInstalled")) {
    scoreMicroplasticsInstalled =
      parseInt(score["microplasticsInstalled"]) * 100;
    scoreMicroplasticsCompleted +=
      parseInt(score["microplasticsInstalled"]) * 50;
    scoreMicroplasticsCollected +=
      parseInt(score["microplasticsInstalled"]) * 40;
  }

  totalScore =
    totalScore +
    scoreCansInstalled +
    score8ozInstalled +
    score16ozInstalled +
    score1LInstalled +
    scoreMicroplasticsInstalled;
  updateScore(totalScore);

  if (score.hasOwnProperty("cansCompleted")) {
    scoreCansCompleted += parseInt(score.cansCompleted) * 25;
    scoreCansCollected += parseInt(score.cansCompleted) * 40;
  }
  if (score.hasOwnProperty("8ozCompleted")) {
    score8ozCompleted += parseInt(score["8ozCompleted"]) * 25;
    score8ozCollected += parseInt(score["8ozCompleted"]) * 40;
  }
  if (score.hasOwnProperty("16ozCompleted")) {
    score16ozCompleted += parseInt(score["16ozCompleted"]) * 25;
    score16ozCollected += parseInt(score["16ozCompleted"]) * 40;
  }
  if (score.hasOwnProperty("1LCompleted")) {
    score1LCompleted += parseInt(score["1LCompleted"]) * 25;
    score1LCollected += parseInt(score["1LCompleted"]) * 40;
  }
  if (score.hasOwnProperty("microplasticsCompleted")) {
    scoreMicroplasticsCompleted +=
      parseInt(score["microplasticsCompleted"]) * 50;
    scoreMicroplasticsCollected +=
      parseInt(score["microplasticsCompleted"]) * 40;
  }

  totalScore =
    totalScore +
    scoreCansCompleted +
    score8ozCompleted +
    score16ozCompleted +
    score1LCompleted +
    scoreMicroplasticsCompleted;
  updateScore(totalScore);

  if (score.hasOwnProperty("cansCollected")) {
    scoreCansCollected += parseInt(score.cansCollected) * 10;
  }
  if (score.hasOwnProperty("8ozCollected")) {
    score8ozCollected += parseInt(score["8ozCollected"]) * 10;
  }
  if (score.hasOwnProperty("16ozCollected")) {
    score16ozCollected += parseInt(score["16ozCollected"]) * 10;
  }
  if (score.hasOwnProperty("1LCollected")) {
    score1LCollected += parseInt(score["1LCollected"]) * 10;
  }
  if (score.hasOwnProperty("microplasticsCollected")) {
    scoreMicroplasticsCollected +=
      parseInt(score["microplasticsCollected"]) * 5;
  }
  if (score.hasOwnProperty("duckiesCollected")) {
    scoreDuckiesCollected = parseInt(score["duckiesCollected"]) * 10;
  }
  if (score.hasOwnProperty("turtlesCollected")) {
    scoreTurtlesCollected = parseInt(score["turtlesCollected"]) * 10;
  }

  if (
    score.hasOwnProperty("seaTurtleBonus") &&
    score.hasOwnProperty("turtlesCollected") &&
    score.turtlesCollected > 0
  ) {
    switch (score.seaTurtleBonus) {
      case "8oz":
        score8ozCollected *= 2;
        break;
      case "16oz":
        score16ozCollected *= 2;
        break;
      case "1L":
        score1LCollected *= 2;
        break;
      case "Microplastic":
        scoreMicroplasticsCollected *= 2;
        break;
    }
  }

  totalScore =
    totalScore +
    scoreCansCollected +
    score8ozCollected +
    score16ozCollected +
    score1LCollected +
    scoreMicroplasticsCollected +
    scoreDuckiesCollected +
    scoreTurtlesCollected;
  updateScore(totalScore);

  var flexibilityBonus = 0;

  var count = 0;
  if (score.hasOwnProperty("cansInstalled") && scoreCansInstalled != 0) {
    count++;
  }
  if (score.hasOwnProperty("8ozInstalled") && score8ozInstalled != 0) {
    count++;
  }
  if (score.hasOwnProperty("16ozInstalled") && score16ozInstalled != 0) {
    count++;
  }
  if (score.hasOwnProperty("1LInstalled") && score1LInstalled != 0) {
    count++;
  }

  clearFlexibilityBonus();

  if (
    count === 4 &&
    score.hasOwnProperty("microplasticsInstalled") &&
    scoreMicroplasticsInstalled != 0
  ) {
    flexibilityBonus += 400;
    document.getElementById(
      "flexibility-score"
    ).innerHTML = flexibilityBonus.toString();
    document.getElementById("flexibility-option-C").style.background =
      "#008CC1";
    document.getElementById("flexibility-option-C").style.color = "white";
  }
  if (count >= 1 && scoreMicroplasticsInstalled != 0) {
    flexibilityBonus += 200;
    document.getElementById(
      "flexibility-score"
    ).innerHTML = flexibilityBonus.toString();
    document.getElementById("flexibility-option-B").style.background =
      "#008CC1";
    document.getElementById("flexibility-option-B").style.color = "white";
  }
  if (count >= 2) {
    flexibilityBonus += 200;
    document.getElementById(
      "flexibility-score"
    ).innerHTML = flexibilityBonus.toString();
    document.getElementById("flexibility-option-A").style.background =
      "#008CC1";
    document.getElementById("flexibility-option-A").style.color = "white";
  }

  totalScore += flexibilityBonus;
  updateScore(totalScore);
}

function updateScore(totalScore) {
  document.getElementById("total-score").innerHTML = totalScore.toString();
}
