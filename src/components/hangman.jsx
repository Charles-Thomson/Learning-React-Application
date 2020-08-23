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

class hangman extends Component {
    
    state = {  
        word: "",
        hiddenWord: "",
        attempts: 0,
        maxAttempts: 5

    }
    
    render() { 
        var well={
            boxShadow:"1px 1px 1px #9E9E9E",
            marginLeft: "10px",
            marginTop:"19px",
        }
        
        
        return (
            
        <div style={dialogStyles}>
        <h1>Hang Man</h1>
        <br></br>
            <div>
                <button onClick={this.generateWord} className="btn btn-sm m-2 btn-dark" >Start</button>
                <br></br>
                <span className="m-2" >The word is: {this.showWord()} </span>
                <br></br>
                <span className="m-2" >The  Hidden word is: {this.showHiddenWord()} </span>    
            </div>   

            <div>
                <span className="m-2" >Number of failed attempts: {this.showAttempts()} </span>
                <br></br>
                <span className="m-2" >Maximum failed attempts: {this.showMaxAttempts()} </span>
            </div>
        
            <div>
                <input id="guessField" style={well} className="text-center" type="text" />
                <button onClick={this.makeGuess} className="btn btn-sm m-2 btn-dark" >Guess</button>
            </div>
        </div>
        );
    }

    // Show .state vars 
    showWord(){return this.state.word;}

    showHiddenWord(){return this.state.hiddenWord;}

    showAttempts(){return this.state.attempts;}

    showMaxAttempts(){return this.state.maxAttempts}

    // Generate and hide the word
    generateWord = () =>{
        var randomWords = require('random-words');
        let holderWord = randomWords();

        let hidingWord = '*'.repeat(holderWord.length); // Generate string of * of len holder word
        this.setState({word: holderWord, hiddenWord: hidingWord, attempts: 0});    
    }

    incrementAttempts = () =>{
        this.setState({attempts: this.state.attempts + 1});
        this.checkFailState();
    }

    checkFailState(){
        const { attempts , maxAttempts } = this.state;
        if (attempts === maxAttempts - 1 ) return alert("game over - you lost")
    }

    makeGuess = () =>{
        let { word, hiddenWord } = this.state;
        let guess = document.getElementById('guessField').value;

        let wordArray = word.split("");
        let updatedHiddenWord = hiddenWord.split("");

        if (wordArray.includes(guess)){
            for(let i = 0; i<wordArray.length ;i++){
                if(wordArray[i] === guess){ updatedHiddenWord[i] = wordArray[i];}
            }
        }
        else this.incrementAttempts();
        
        updatedHiddenWord = updatedHiddenWord.join(""); // Use join over toString()
        this.setState({hiddenWord: updatedHiddenWord}); // Update the state 
    }

}
 
export default hangman;