class ctrlCreateEq extends ctrlChooseCategory{

    
    constructor(eq, cat) {  
        super(cat);
        this.equation = eq;
        
    }

    

    getEquation(){
        return this.equation;
     }

     getAnswer(){
        return this.answer;
     }
 
     setEquation(equation){
         this.equation = equation;
     }

     setAnswer(answer){
        this.answer = answer;
    }

    validateEq(){
        var category = super.getCategory();

        const myEquation = this.equation.split(" ");


        if(category == "1"){
            if(this.equation.includes("+") || this.equation.includes("-"))
            {if(myEquation[0] < 101 && myEquation[0] >= 0 && myEquation[2] < 101 && myEquation[2] >= 0 && myEquation.length == 3)
                {this.calculateEq(this.equation);}
                else{return alert("INVALID EQUATION | Range 0-100");}
             }
             else{return alert("Please Enter Equation");}
        }
        
        else if(category == "2"){
            if(this.equation.includes("+") || this.equation.includes("-"))
            {if(myEquation[0] < 1001 && myEquation[0] >= 0 && myEquation[2] < 1001 && myEquation[2] >= 0 && myEquation.length == 3)
                {this.calculateEq(this.equation);}
                else if(myEquation[0] < 1001 && myEquation[0] >= 0 && myEquation[2] < 1001 && myEquation[2] >= 0 && myEquation[4] < 1001 && myEquation[4] >= 0 && myEquation.length == 5 && myEquation[3] == myEquation[1])
                {this.calculateEq(this.equation);}
                else{return alert("INVALID EQUATION | Range 0-1000");}
             }
             else if(this.equation.includes("*"))
             {
                {if(myEquation[0] < 10 && myEquation[0] >= 0 && myEquation[2] < 10 && myEquation[2] >= 0 && myEquation.length == 3)
                    {this.calculateEq(this.equation);}
                    else{return alert("INVALID EQUATION | Range 0-9");}
                 }
             }
             
             else if(this.equation.includes("/"))
             {
                {if(myEquation[0] <= 1000 && myEquation[0] >= 1 && myEquation[2] <= 10 && myEquation[2] >= 1 && myEquation.length == 3)
                    {this.calculateEq(this.equation);}
                    else{return alert("INVALID EQUATION | Range 1-1000/1-9");}
                 }
             }
             else{return alert("Please Enter Equation");}
        }

        else if(category == "3"){
            if(this.equation.includes("+") || this.equation.includes("-"))
            {if(myEquation[0] < 10001 && myEquation[0] >= 0 && myEquation[2] < 10001 && myEquation[2] >= 0 && myEquation.length == 3)
                {this.calculateEq(this.equation);}
                else if(myEquation[0] < 10001 && myEquation[0] >= 0 && myEquation[2] < 10001 && myEquation[2] >= 0 && myEquation[4] < 10001 && myEquation[4] >= 0 && myEquation.length == 5)
                {this.calculateEq(this.equation);}
                else{return alert("INVALID EQUATION | Range 0-10000 | Max 2 Operators");}
             }
             else if(this.equation.includes("*"))
             {
                {if(myEquation[0] < 10000 && myEquation[0] >= 0 && myEquation.length == 3 && myEquation[2] >= 0){
                    if(myEquation[2] <= 10 || myEquation[2] == 100 || myEquation[2] == 1000)
                    {this.calculateEq(this.equation);}
                }
                    else{return alert("INVALID EQUATION | Range 0-9999 X 0-10,100,1000");}
                 }
             }
             
             else if(this.equation.includes("/"))
             {
                {if(myEquation[0] <= 10000 && myEquation[0] >= 0 && myEquation.length == 3 && myEquation[2] >= 0){
                    if(myEquation[2] <= 10 || myEquation[2] == 100 || myEquation[2] == 1000)
                    {this.calculateEq(this.equation);}
                    
                 }
                 else{return alert("INVALID EQUATION | Range 1-10000/0-10,100,1000");}
                }
             }
             else{return alert("Please Enter Equation");}
        }
        else{return alert("Please Choose Category");}

    }

    calculateEq(eq) {
      var category = super.getCategory();
      var ans = math.evaluate(eq);
      var remain = 0;
      const myEquation = this.equation.split(" ");
        if(category=="2"){
           remain = myEquation[0]%myEquation[2];
        }
      this.validateAns(ans,remain);
    }

    validateAns(ans,remain){
        var category = super.getCategory();
        if(category == "1" && ans < 101 && ans >= 0){this.dispResult(ans,remain);}
        else if(category == "2" && ans < 1001 && ans >= 0){this.dispResult(ans.toFixed(1),remain);}
        else if(category == "3" && ans < 10001 && ans >= 0){this.dispResult(ans.toFixed(2),remain);}
        else{
            if(category == "1"){return alert("INVALID ANSWER | Range 0-100");}
            else if(category == "2"){return alert("INVALID ANSWER | Range 0-1000");}
            else if(category == "3"){return alert("INVALID ANSWER | Range 0-10000");}
        }
    }

    dispResult(ans,remain){
        const myEquation = this.equation.split(" ");
        document.getElementById("result").value = ans;
        if(myEquation[1] == "/" && this.category == "2"){document.getElementById("result").value = math.floor(ans) + " Remainder "+remain;}
        
    }

    

}