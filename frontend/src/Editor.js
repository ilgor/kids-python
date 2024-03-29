function Editor() {
  return (
    <>
      <h3>Try This</h3>
      <form>
        <textarea id="yourcode" cols="40" rows="10">
          import turtle t = turtle.Turtle() t.forward(100) print "Hello World"
        </textarea>
        <br />
        <button type="button" onclick="runit()">
          Run
        </button>
      </form>
      <pre id="output"></pre>
      <div id="mycanvas"></div>
    </>
  );
}

function outf(text) {
  var mypre = document.getElementById("output");
  mypre.innerHTML = mypre.innerHTML + text;
}

function builtinRead(x) {
  if (
    Sk.builtinFiles === undefined ||
    Sk.builtinFiles["files"][x] === undefined
  )
    throw "File not found: '" + x + "'";
  return Sk.builtinFiles["files"][x];
}

// Here's everything you need to run a python program in skulpt
// grab the code from your textarea
// get a reference to your pre element for output
// configure the output function
// call Sk.importMainWithBody()
function runit() {
  var prog = document.getElementById("yourcode").value;
  var mypre = document.getElementById("output");
  mypre.innerHTML = "";
  Sk.pre = "output";
  Sk.configure({ output: outf, read: builtinRead });
  (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = "mycanvas";
  var myPromise = Sk.misceval.asyncToPromise(function () {
    return Sk.importMainWithBody("<stdin>", false, prog, true);
  });
  myPromise.then(
    function (mod) {
      console.log("success");
    },
    function (err) {
      console.log(err.toString());
    }
  );
}
