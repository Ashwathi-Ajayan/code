interface iCalculator{
    Add(num:number,...num2:number[]): number;
    Subtract(num:number,...num2:number[]): number;
    Multiply(num:number,...num2:number[]): number;
    Divide(firstNumber?: number, secondNumber?: number): number;
}

class Calculator implements iCalculator{

    constructor(){

    }
    

    public Add(num:number, ...num2:number[]) {
        var result:number = 0;
        num2.forEach(element=>{
            result=result+element;
        });
        return result+num;
    }

    public Subtract(num:number, ...num2:number[]) {
        var result:number = 0;
        num2.forEach(element=>{
            result=result-element;
        });
        return num+result;
    }

    public Divide(num:number, num2:number) {
        //var result:number = 0;
        
        return num/num2;
    }

    public Multiply(num:number, ...num2:number[]) {
        var result:number = 1;
        num2.forEach(element=>{
            result=result*element;
        });
        return result*num;
    }
}

let obj=new Calculator();



var r1=require('readline');
var prompts=r1.createInterface(process.stdin,process.stdout);
prompts.question("\nselect the operation: \n1. Addition \n2. Subtraction \n3. Multiplication \n4. Division\n",function(operation) { 
    switch(operation){
   case "1":{ console.log(obj.Add(5,5))

      break; 
   } 
   case "2": { 
    console.log(obj.Subtract(15,6,5,1)) 
      break; 
   } 
   case "3": {
    console.log(obj.Multiply(2,2,2,5)) 
      break;    
   } 
   case "4": { 
    console.log(obj.Divide(10,2)) 
      break; 
   }  
   default: { 
      console.log("Invalid choice"); 
      break;              
   } }
   process.exit();
});