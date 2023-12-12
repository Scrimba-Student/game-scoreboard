let AwayResult = 0;
      let HomeResult = 0;
      let homeScoreSeven = 7;
      let awayScoreSeven = 7;
      let homeScoreThree = 3;
      let awayScoreThree = 3;
      let homeScoreNine = 9;
      let awayScoreNine = 9;

      document.getElementById("addSevenHome").textContent = homeScoreSeven;
      document.getElementById("addSevenAway").textContent = awayScoreSeven;
      document.getElementById("addThreeHome").textContent = homeScoreThree;
      document.getElementById("addThreeAway").textContent = awayScoreThree;
      document.getElementById("addNineHome").textContent = homeScoreNine;
      document.getElementById("addNineAway").textContent = awayScoreNine;

      let sumHome = document.getElementById("homeResult");
      let sumAway = document.getElementById("awayResult");

      function add7home() {
        HomeResult += homeScoreSeven;
        sumHome.textContent = HomeResult;
      }

      function add3home() {
        HomeResult += homeScoreThree;
        sumHome.textContent = HomeResult;
      }

      function add9home() {
        HomeResult += homeScoreNine;
        sumHome.textContent = HomeResult;
      }

      function add7away() {
        AwayResult += awayScoreSeven;
        sumAway.textContent = AwayResult;
      }

      function add3away() {
        AwayResult += awayScoreThree;
        sumAway.textContent = AwayResult;
      }

      function add9away() {
        AwayResult += awayScoreNine;
        sumAway.textContent = AwayResult;
      }