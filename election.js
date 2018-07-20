document.addEventListener("DOMContentLoaded", function() {

var finalvotesButton = document.getElementById('finalVotes');
var uList = document.getElementById('ul');
var listName = document.createElement('li');




 finalvotesButton.addEventListener('click', function() {
      $.ajax({
          url:'https://bb-election-api.herokuapp.com',
          method:'GET',
     }).done(function(responseData) {
          responseData.candidates.forEach(function(candidate) {
               var candidateName = document.createElement('h2');
               var candidateVotesResults = document.createElement('h3');
               candidateName.innerHTML = candidate.name;
               candidateVotesResults.innerHTML = ' Final Results: ' + candidate.votes
               listName.append(candidateName)
               listName.append(candidateVotesResults)


          })

          uList.append(listName);
          
     }).fail( function(responseData) {
                  console.log("ERROR");
                  result.innerHTML = "";
                  var error = document.createElement('h2');
                  error.innerHTML = "Whoops, something went wrong...";
                  result.appendChild(error);
               });


})


 // })



});
