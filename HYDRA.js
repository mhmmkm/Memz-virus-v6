function hydra() {
  var hydrawin = window.open("", "", "width=350, height=150");
  hydrawin.document.write("<link href='https://fonts.googleapis.com/css?family=Noto+Sans' rel='stylesheet'>");
  hydrawin.document.write("<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'>")
  hydrawin.document.write("<style>body{font-family: 'Noto Sans', sans-serif; text-align: center;}</style>");
  hydrawin.document.write("<h1>Hydra.exe</h1> <p>Cut off a head, two more will take its place...</p>");
  hydrawin.document.write("<button class='btn' onclick='window.close();'>OK</button>")
  hydrawin.addEventListener("beforeunload", function(){
    hydran();
    hydrone();
  });
}

function hydran() {
  var hydrawing = window.open("", "", "width=350, height=150");
  hydrawing.document.write("<link href='https://fonts.googleapis.com/css?family=Noto+Sans' rel='stylesheet'>");
  hydrawing.document.write("<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'>")
  hydrawing.document.write("<style>body{font-family: 'Noto Sans', sans-serif; text-align: center;}</style>");
  hydrawing.document.write("<h1>Hydra.exe</h1> <p>Cut off a head, two more will take its place...</p>");
  hydrawing.document.write("<button class='btn' onclick='window.close();'>OK</button>")
  hydrawing.addEventListener("beforeunload", function(){
    hydra();
    hydrone();
  });
}

function hydrone() {
  var hydrawine = window.open("", "", "width=350, height=150");
  hydrawine.document.write("<link href='https://fonts.googleapis.com/css?family=Noto+Sans' rel='stylesheet'>");
  hydrawine.document.write("<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'>")
  hydrawine.document.write("<style>body{font-family: 'Noto Sans', sans-serif; text-align: center;}</style>");
  hydrawine.document.write("<h1>Hydra.exe</h1> <p>Cut off a head, two more will take its place...</p>");
  hydrawine.document.write("<button class='btn' onclick='window.close();'>OK</button>")
  hydrawine.addEventListener("beforeunload", function(){
    hydra();
    hydran();
  });
}
