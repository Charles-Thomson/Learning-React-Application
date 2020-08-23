import React, { Component } from 'react';


const dialogStyles = {
    width: '500px',
    maxWidth: '100%',
    margin: '0 auto',
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    zIndex: '999',
    backgroundColor: '#eee',
    padding: '10px 20px 40px',
    borderRadius: '8px',
    disply: 'flex',
    flexDirection: 'column'

};

class sCalculator extends Component {
    state = {
        validOperators: new Set('+-*/'),
        result: "",
        invalidEquation: false

    }
    render() { 
        return (
            <div style={dialogStyles}>
                <div>
                    <h1>Suffix Calculator</h1>
                </div>

                <div>
                    <p>Welcome to the suffix calculator - please enter equations in the suffix form i.e + 22 22</p>
                </div>

                <div>
                    <input id="equationField" className="text-center m-2" type="text" />
                    <button onClick={this.formatEquation} className="btn btn-sm m-2 btn-dark" >Calculate</button>
                    
                </div>
                <div>
                    <span className="m-2">The result is:  {this.state.result} </span>
                    {this.state.invalidEquation && <span className="badge badge-danger">Invalid Equation</span>}
                    
                </div>
            </div>
          );
    }

    formatEquation = () =>{
        const { invalidEquation} = this.state;
        this.setState({invalidEquation: false});
        
        let equationResult = this.processEquation();
        if(invalidEquation === false ){
            this.setState({result: equationResult});
        } 
        
    }


    processEquation = () =>{
        const { validOperators, invalidEquation }=this.state; // get the valid operators
        let stack = [];
        
        let equation = document.getElementById('equationField').value; // Get the input 
        let equationArray = equation.split(" "); //Split and reverse input equation
        equationArray = equationArray.reverse();

        for(let element in equationArray){
            // Returns false if the string elemnt contains a valid int
            if(isNaN(equationArray[element]) === false ){
                stack.push(equationArray[element])

            }else if(validOperators.has(equationArray[element])){
                var operator = equationArray[element];
                var valueA = Number(stack.pop());
                var valueB = Number(stack.pop());
                
                // Calculate and push result onto the start of the stack
                stack.unshift(this.carryOutOperation(operator, valueA, valueB));

            }else this.setInvalidEquation(); 
        }
        let equationResult = stack.toString();
        return equationResult    
    }

    setInvalidEquation = () =>{ this.setState({invalidEquation: true })}

    carryOutOperation = (operator, valueA, valueB) =>{
        switch(operator){
        case '+':
            return valueA + valueB;
        case '-':
            return valueA - valueB;
        case '*':
            return valueA * valueB;
        case '/':
            return valueA / valueB;        
    }
}

}
 
export default sCalculator;