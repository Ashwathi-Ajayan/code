var r1 = require('readline');
var prompts = r1.createInterface(process.stdin, process.stdout);
prompts.question("no of years ", function (exp) {
    var msg = "";
    if (exp < 5) {
        msg = "no";
    }
    else {
        msg = "yes";
    }
    console.log(msg);
    process.exit();
});
