(function () {
  var game = window.EIGHTH_SEA || {};

  function setPressed(group, active) {
    group.forEach(function (button) { button.setAttribute("aria-pressed", button === active ? "true" : "false"); });
  }

  var advantageButtons = Array.from(document.querySelectorAll("[data-advantage]"));
  var advantageResult = document.getElementById("advantage-result");
  advantageButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      setPressed(advantageButtons, button);
      var value = game.advantages[button.dataset.advantage];
      if (advantageResult && value) advantageResult.innerHTML = "<strong>" + value.name + " — " + value.line + "</strong><p>" + value.detail + "</p>";
    });
  });

  var encounterReadout = document.getElementById("encounter-readout");
  var encounterActions = document.getElementById("encounter-actions");
  var encounterIndex = 0;
  function renderEncounter() {
    if (!encounterReadout || !encounterActions) return;
    var stage = game.encounters[encounterIndex];
    encounterReadout.innerHTML = "<h3>" + stage.title + "</h3><p>" + stage.text + "</p>";
    encounterActions.innerHTML = "";
    stage.actions.forEach(function (label, index) {
      var button = document.createElement("button");
      button.className = "btn";
      button.textContent = (index + 1) + ". " + label;
      button.addEventListener("click", function () {
        if (index === 2 && encounterIndex < 4) {
          encounterReadout.innerHTML = "<h3>VOYAGE CONTINUES</h3><p>You refuse the engagement. The sail diminishes astern and another day opens ahead.</p>";
          encounterActions.innerHTML = '<button class="btn" id="encounter-reset">Sight another ship</button>';
          document.getElementById("encounter-reset").addEventListener("click", function () { encounterIndex = 0; renderEncounter(); });
        } else if (encounterIndex < game.encounters.length - 1) {
          encounterIndex += 1;
          renderEncounter();
        } else {
          encounterReadout.innerHTML = "<h3>PRIZE TAKEN</h3><p>The fluyt joins your wake. Eight sailors transfer as prize crew; your flotilla grows and slows.</p>";
          encounterActions.innerHTML = '<button class="btn" id="encounter-reset">Return to Sail Ho</button>';
          document.getElementById("encounter-reset").addEventListener("click", function () { encounterIndex = 0; renderEncounter(); });
        }
      });
      encounterActions.appendChild(button);
    });
  }
  renderEncounter();

  var shipGrid = document.getElementById("ship-grid");
  if (shipGrid && game.ships) {
    game.ships.forEach(function (ship) {
      var card = document.createElement("article");
      card.className = "ship-card";
      card.innerHTML = '<h3>' + ship.name + '</h3><span class="tag">up to ' + ship.guns + ' guns</span><span class="tag">' + ship.cargo + ' tons</span><p>' + ship.note + '</p><small>Handling</small><div class="meter"><span style="width:' + (ship.handling * 20) + '%"></span></div><small>Toughness</small><div class="meter"><span style="width:' + (ship.toughness * 20) + '%"></span></div>';
      shipGrid.appendChild(card);
    });
  }

  var yourShip = document.getElementById("your-ship");
  var targetShip = document.getElementById("target-ship");
  [yourShip, targetShip].forEach(function (select) {
    if (!select || !game.ships) return;
    game.ships.forEach(function (ship) {
      var option = document.createElement("option"); option.value = ship.id; option.textContent = ship.name; select.appendChild(option);
    });
  });
  if (yourShip) yourShip.value = "sloop";
  if (targetShip) targetShip.value = "galleon";
  var compareButton = document.getElementById("compare-ships");
  var compareResult = document.getElementById("ship-result");
  if (compareButton) compareButton.addEventListener("click", function () {
    var mine = game.ships.find(function (s) { return s.id === yourShip.value; });
    var target = game.ships.find(function (s) { return s.id === targetShip.value; });
    var wind = document.getElementById("wind").value;
    var maneuver = mine.handling - target.handling + (wind === "upwind" ? 1 : 0);
    var warning = target.guns >= mine.guns * 2 ? "One clean enemy broadside may end the fight." : "You can survive a mistake, but not many.";
    var plan = maneuver >= 2 ? "Use your turn rate to stay off the broadside, rake the stern, foul the rig, then board." : maneuver >= 0 ? "Fight for the weather gauge, trade only at advantage, and close after weakening crew or sails." : "You are the less agile ship. Force a gun duel, protect your stern, and do not let the target dictate range.";
    compareResult.innerHTML = "<strong>" + mine.name + " versus " + target.name + "</strong><p>" + plan + " " + warning + "</p>";
  });

  var portSelect = document.getElementById("target-port");
  if (portSelect && game.ports) game.ports.forEach(function (port) { var o = document.createElement("option"); o.value = port.id; o.textContent = port.name; portSelect.appendChild(o); });
  var conquestButton = document.getElementById("plan-conquest");
  var conquestResult = document.getElementById("conquest-result");
  if (conquestButton) conquestButton.addEventListener("click", function () {
    var port = game.ports.find(function (p) { return p.id === portSelect.value; });
    var force = Number(document.getElementById("landing-force").value);
    var approach = document.getElementById("approach").value;
    var advantage = force / Math.max(1, port.garrison) + (port.unrest * .08) - (port.fort * .12);
    var verdict = advantage > 1.35 ? "A decisive conquest is plausible." : advantage > .85 ? "A raid is plausible; conquest will require a clever break." : "A direct assault is likely to be repulsed.";
    var advice = approach === "sabotage" ? "Exploit local unrest, spike guns, and open a gate before committing the main body." : approach === "blockade" ? "Starve the defenses of money, food, and reinforcements before landing." : approach === "land" ? "Avoid the harbor batteries, use terrain, and force the garrison to leave its walls." : "The forts must be suppressed before boats enter their killing water.";
    conquestResult.innerHTML = "<strong>" + port.name + " — " + verdict + "</strong><p>" + advice + " Victory can install a power's governor, restore local rule, create a Freewake protectorate, or sack and depart.</p>";
  });

  var filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var group = button.dataset.filterGroup;
      var peers = filterButtons.filter(function (b) { return b.dataset.filterGroup === group; });
      setPressed(peers, button);
      var filter = button.dataset.filter;
      document.querySelectorAll("[data-category]").forEach(function (card) {
        if (card.dataset.filterGroup !== group) return;
        var categories = card.dataset.category.split(" ");
        card.dataset.hidden = !(filter === "all" || categories.includes(filter));
      });
    });
  });

  var mapButtons = Array.from(document.querySelectorAll("[data-map-port]"));
  var mapReadout = document.getElementById("map-readout");
  mapButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var port = game.ports.find(function (p) { return p.id === button.dataset.mapPort; });
      if (port && mapReadout) mapReadout.innerHTML = "<strong>" + port.name + " · " + port.wealth + "</strong><p>" + port.note + " Starting garrison: about " + port.garrison + "; fort strength " + port.fort + "/5.</p>";
    });
  });

  var copyButton = document.getElementById("copy-command");
  if (copyButton) copyButton.addEventListener("click", function () {
    navigator.clipboard.writeText('load "*",8,1').then(function () { copyButton.textContent = "Copied. READY."; });
  });
})();
