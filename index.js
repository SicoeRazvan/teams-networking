function getTeamHtml(team) {
  return `
    <tr>
      <td>${team.promotion}</td> 
      <td>${team.members}</td> 
      <td>${team.name}</td>  
      <td> 
        <a href ="${team.url}">open</a> 
      </td>
      <td>
          <a href="#">delete</a>
          <a href="#">update</a>
      </td>
    </tr>`;
}

function displayTeams(teams) {
  var teamsHtml = teams.map(function (team) {
    return getTeamHtml(team);
  });
  document.querySelector("table tbody").innerHTML = teamsHtml.join("");
}

function loadTeams() {
  fetch("./data/teams.json")
    .then((r) => r.json())
    .then((teams) => {
      displayTeams(teams);
    });  
}

function $(selector){
  return document.querySelector(selector);
}

function submitForm(e) {
  e.preventDefault();
  const promotion = $("input[name=promotion]").value;
  const members = $("input[name=members]").value;
  const name = $("input[name=name]").value;
  const url = $("input[name=url]").value;

  var team = {
    promotion: promotion,
    members: members,
    name: name,
    url: url
  };

  console.warn("submit", JSON.stringify(team));
}

function initEvents() {
  const form = document.getElementById("editForm");
  form.addEventListener("submit", submitForm);
}

loadTeams();
initEvents();
