let names = ["Bence", "Viki", "Vivi"];

$("h1").css({color: "red"});

names.forEach(function (name){
    $("ul").append(name);
})

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };

  $("body").append(
    "<h1>Added with javascript<h1>"
);

  $("body").append(
      "<p>This block was added using JavaScript's jQuery library. How awesome!</p>"
  );


 