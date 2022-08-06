function getTeamHtml(team){
  return `<tr>
        <td>${team.group}</td> 
        <td>${team.members}</td> 
        <td>${team.projectName}</td>  
        <td> 
          <a href ="${team.projectUrl}">open</a> 
        </td>
        <td>
            <a href="#">delete</a>
            <a href="#">update</a>
        </td>
     </tr>`;
}

function displayTeams(teams) {
  var teamsHtml = "";
  teams.forEach(function (team) {
    teamsHtml += getTeamHtml(team);
  });

  document.querySelector("table tbody").innerHTML = teamsHtml;
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

loadTeams();
