var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.Add = function (num) {
        var num2 = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            num2[_i - 1] = arguments[_i];
        }
        var result = 0;
        num2.forEach(function (element) {
            result = result + element;
        });
        return result + num;
    };
    Calculator.prototype.Subtract = function (num) {
        var num2 = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            num2[_i - 1] = arguments[_i];
        }
        var result = 0;
        num2.forEach(function (element) {
            result = result - element;
        });
        return num + result;
    };
    Calculator.prototype.Divide = function (num, num2) {
        //var result:number = 0;
        return num / num2;
    };
    Calculator.prototype.Multiply = function (num) {
        var num2 = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            num2[_i - 1] = arguments[_i];
        }
        var result = 1;
        num2.forEach(function (element) {
            result = result * element;
        });
        return result * num;
    };
    return Calculator;
}());
var obj = new Calculator();
var r1 = require('readline');
var prompts = r1.createInterface(process.stdin, process.stdout);
prompts.question("\nselect the operation: \n1. Addition \n2. Subtraction \n3. Multiplication \n4. Division\n", function (operation) {
    switch (operation) {
        case "1": {
            console.log(obj.Add(5, 5));
            break;
        }
        case "2": {
            console.log(obj.Subtract(15, 6, 5, 1));
            break;
        }
        case "3": {
            console.log(obj.Multiply(2, 2, 2, 5));
            break;
        }
        case "4": {
            console.log(obj.Divide(10, 2));
            break;
        }
        default: {
            console.log("Invalid choice");
            break;
        }
    }
    process.exit();
});
