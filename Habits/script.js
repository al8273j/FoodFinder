var factList = [
  "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><ul><li>Eat a variety of vegetables, especially dark green, red, and orange vegetables (3 or more servings a day).</li><br><li>Use vegetable oils instead of solid fats.</li><br><li>Drink alcholic beverages in moderation.</li><br><li>Restrict sodas and other sugar-added drinks that are high in calories.</li><br><li>Reduce daily intake of salt or sodium.</li><br><li>Drink fat-free or low-fat milk and eat low-fat dairy products.</li><br><li>Eat whole-grain,high-fiber breads and cereals (3 to 6 servings a day).</li><br><li>Eat 2 or more servings of fruit a day.</li><br><li>Choose a fiber filled-diet.</li>","<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><ul><li>When you get thirsty opt for water instead of sugary drinks.</li><br><li>Do not skip breakfast.</li><br><li>Include fermented foods in your diet.</li><br><li>Eat 2 to 3 servings of low-mercury non-fried fish every week.</li><br><li>Swap out highly processed meat for fresher options</li><br><li>Choose BPA-free canned foods</li><br><li>Limit fried foods.</li><br><li>Choose leaner cuts of beef.</li><br><li>Give yourself proper portions."
];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}