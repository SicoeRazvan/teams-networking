function displayTeams(teams) {
  var teamsHtml = "";
  teams.forEach(function (teams) {
    teamsHtml += `<tr>
        <td>${teams.group}</td> 
        <td>${teams.members}</td> 
        <td>${teams.projectName}</td>  
        <td> 
          <a href ="${teams.projectUrl}">open</a> 
        </td>
        <td>
            <a href="#">delete</a>
            <a href="#">update</a>
        </td>
     </tr>`;
  });

  document.querySelector("table tbody").innerHTML = teamsHtml;

  // for (var i = 0; i < teams.length; i++) {
  //   td.innerHTML +=
  //   `<tr>
  //   <td>${teams[i].group}</td>
  //   <td>${teams[i].members}</td>
  //   <td>${teams[i].projectName}</td>
  //   <td> ${teams[i].projectUrl} </td>
  //   <td><a href="#">delete</a>
  //   <a href="#">update</a>
  //   </td>
  //   </tr>`;
  // }
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
