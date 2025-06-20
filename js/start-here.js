$("document").ready(function(){
    $('.seasons a').click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        var season = $(this).attr("href");//contents of href attribute of this element
        // alert(season);



  // Function to change the season's content
    switch (season) {
      case "Spring":
        $("html").css("background-color", "#2B7129");
        $("#logo").attr("src", "images/spring.gif")
        $("#wear").attr("src", "images/spring-wear.jpg")
        $("h3#banner").text("Enjoy the season of bloom with these colorful pieces!");
        break;
  
      case "Summer":
        $("html").css("background-color", "#EBA52B");
        $("#logo").attr("src", "images/summer.gif")
        $("#wear").attr("src", "images/summer-wear.jpg")
        $("h3#banner").text("Enjoy the sun and keep cool with these looks!");
        break;
  
      case "Fall":
        $("html").css("background-color", "#A81124");
        $("#logo").attr("src", "images/fall.gif").attr("alt", "Fall Logo");
        $("#wear").attr("src", "images/fall-wear.jpg").attr("alt", "Fall Wear");
        $("h3#banner").text("Enjoy the colorful leaves with these new pieces!");
        break;
  
      case "Winter":
        $("html").css("background-color", "#005393");
        $("#logo").attr("src", "images/winter.gif").attr("alt", "Winter Logo");
        $("#wear").attr("src", "images/winter-wear.jpg").attr("alt", "Winter Wear");
        $("h3#banner").text("Winter gear is here to keep you warm!");
        break;
  
      default:
        $("html").css("background-color", "#ccc");
        $("#logo").attr("src", "images/four-seasons.gif")
        $("#wear").attr("src", "images/300x400.png")
        $("h3#banner").text("Outfitter for All Seasons!");
    }
});
});
