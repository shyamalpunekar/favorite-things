$(document).ready(function(){
  $("#user-info").submit(function(event){

    event.preventDefault();
      var show = $("#show").val();
      var star = $("#star").val();
      var color =$("#color").val();
      var animal =$("#animal").val();
      var character =$("#character").val();


      var favorites = [show, star, color, animal];
      alert(favorites);
      alert(favorites[2]);
      alert(favorites.push("black"));

      $("#one").text(favorites[1]);
      $("#two").text(favorites[2]);
      $("#favorite-things").show();
  });

});
