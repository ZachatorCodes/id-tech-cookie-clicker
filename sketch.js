window.onload = (e) => {
  (doubleValueButton.onclick = doubleValueButtonClicked),
    (addingClickValue.onclick = addingClickValueClicked),
    (clickathon.onclick = clickathonClicked);
};

var clickathonCurve = 0;
var clickathonActive = false;
var scorePosition = 150;
var cpsPosition = 150;
var clickathonMin = 800;
var clickathonMax = 1200;
var clickathonTrigger = generateRandNum(clickathonMax, clickathonMin);
var doubleValuePurchased = false;
var doubleValuePrice = 10;
var addingClickValuePurchased = false;
var addingClickPrice = 20;
var passiveIncome = 0;
var clickathonPurchased = false;
var score = 1200;
var clickBonus = 1;
var fontSizeScore = 150;
var doubleValueButton = document.getElementById("button1");
var addingClickValue = document.getElementById("button2");
var clickathon = document.getElementById("button3");
var clickathonDisplay = document.getElementById("clickathonParagraph");
var scoreDisplay = document.getElementById("scoring");
var cpsDisplay = document.getElementById("cps");

function handleClick() {
  score += clickBonus;
  scoreDisplay.innerHTML = "Score = " + score;
  
  if (scoreDisplay.getBoundingClientRect().width > 600) {
    fontSizeScore -= 10;
    scoreDisplay.style.fontSize = `${fontSizeScore}px`;
  }

  checkUpgrade();
  console.log("Score:", score);
  console.log("Clickathon Active:", clickathonActive);
  console.log("Clickathon Trigger:", clickathonTrigger);
  console.log("Clickathon Purchased:", clickathonPurchased);

  if (
    score >= clickathonTrigger &&
    clickathonPurchased === true &&
    clickathonActive === false
  ) {
    clickathonActive = true;
    clickathonDisplay.innerHTML = "CLICKATHON!!!";
    clickBonus *= 8;
    clickathonCurve += 0.1;
    setTimeout(endClickathon, 25000);
  }
}

function checkUpgrade() {
  cpsDisplay.innerHTML = "CPS = " + passiveIncome;
  if (score >= doubleValuePrice) {
    doubleValueButton.style.backgroundColor = "green";
    doubleValueButton.disabled = false;
  } else {
    doubleValueButton.disabled = true;
    doubleValueButton.style.backgroundColor = "red";
  }
  if (score >= addingClickPrice) {
    addingClickValue.style.backgroundColor = "green";
    addingClickValue.disabled = false;
  } else {
    addingClickValue.disabled = true;
    addingClickValue.style.backgroundColor = "red";
  }
  if (score >= 500 && clickathonPurchased == false) {
    clickathon.style.backgroundColor = "green";
    clickathon.disabled = false;
  } else {
    clickathon.disabled = true;
  }
}

/*if(score>=10){
  var store = document.querySelector(':root');
  function changeScorePosition() {
    store.style.setProperty('--scorePosition', '--scorePosition')-=30px*/

function generateRandNum(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

function cookiesPerSec() {
  score += passiveIncome;
  scoreDisplay.innerHTML = "Score = " + score;
  checkUpgrade();
}

function endClickathon() {
  clickathonActive = false;
  clickBonus /= 8;
  clickathonDisplay.innerHTML = "";
  clickathonMin *= 10 + clickathonCurve;
  clickathonMax *= 10 + clickathonCurve;
  clickathonTrigger = generateRandNum(clickathonMax, clickathonMin);
}

//doubleValueButton.onclick=doubleValueButtonClicked
function doubleValueButtonClicked() {
  score -= doubleValuePrice;
  scoreDisplay.innerHTML = "Score = " + score;
  clickBonus *= 2;
  doubleValuePurchased = true;
  doubleValuePrice *= 10;
  doubleValueButton.style.backgroundColor = "red";
  checkUpgrade();
}

//addingClickValue.onclick=addingClickValueClicked
function addingClickValueClicked() {
  score -= addingClickPrice;
  scoreDisplay.innerHTML = "Score = " + score;
  addingClickValuePurchased = true;
  addingClickPrice *= 10;
  addingClickValue.style.backgroundColor = "red";
  addingClickValue.innerHTML = "x2 cookies per second";
  if (passiveIncome == 0) {
    passiveIncome += 2;
    setInterval(cookiesPerSec, 1000);
  } else {
    passiveIncome *= 2;
  }
  checkUpgrade();
  clickathon.onclick = clickathonClicked;
}

function clickathonClicked() {
  console.log(clickathon.disabled);
  score -= 500;
  scoreDisplay.innerHTML = "Score = " + score;
  clickathonPurchased = true;
  checkUpgrade();
  console.log(clickathon.disabled);
}
