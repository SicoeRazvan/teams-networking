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
    .then(function (response) {
      return response.json();
    })
    .then(function (teams) {
      displayTeams(teams);
    });
}

function $(selector){
  return document.querySelector(selector);
}

function submitForm(e) {
  e.preventDefault();
  var promotion = $("input[name=promotion]").value;
  var members = $("input[name=members]").value;
  var name = $("input[name=name]").value;
  var url = $("input[name=url]").value;

  var team = {
    promotion: promotion,
    members: members,
    name: name,
    url: url
  };

  console.warn("submit", JSON.stringify(team));
}

function initEvents() {
  var form = document.getElementById("editForm");
  form.addEventListener("submit", submitForm);
}

loadTeams();
initEvents();
