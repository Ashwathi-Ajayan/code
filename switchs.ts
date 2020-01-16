//var grade:string = "A"; 
var r1=require('readline');
var prompts=r1.createInterface(process.stdin,process.stdout);
var grade;
prompts.question("select one",function(grade) { 
    switch(grade){
   case "A": { 
      console.log("Excellent"); 
      break; 
   } 
   case "B": { 
      console.log("Good"); 
      break; 
   } 
   case "C": {
      console.log("Fair"); 
      break;    
   } 
   case "D": { 
      console.log("Poor"); 
      break; 
   }  
   default: { 
      console.log("Invalid choice"); 
      break;              
   } }
   process.exit();
});