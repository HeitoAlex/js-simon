const playElement = document.querySelector('button');
const divRandomElement = document.getElementById('numeri-random');
const divUserElement = document.getElementById('numeri-utente');
const divResults = document.getElementById('risultati')
const numerToRemember = numberGenerator();
const rememberedNumber = guess();

playElement.addEventListener('click', function(){

    divGenerator()
    let timerSecond = Number.parseInt((30), 10);

    const timer = setInterval(function(){
        timerSecond--;
        console.log(timerSecond);
        if (timerSecond <= 0){
            clearInterval(timer);
            spanElement.classList.add('hide');
        }
        
    }, 1000);

    setTimeout(guess, 30000);

        divUserElement.appendChild(userNumber);
        divResults.appendChild(getMatch(numerToRemember, rememberedNumber));
})





// FUNCTIONS

function numberGenerator(){
    let numbers = [];
    while(numbers.length < 5){
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        numbers.push(randomNumber);
    }
    return numbers;
}

function divGenerator(){

    let spanElement = document.createElement('span');
        spanElement.classList.add('square');
        spanElement.classList.add('centered');
        spanElement.append(numerToRemember);
    
        divRandomElement.appendChild(spanElement);

}   

function guess(){
    let userNumber = [];
    for (i = 0; i < 5; i++){
        let guessNumbers = Number.parseInt(prompt('Quali numeri ricordi?'), 10);
        userNumber.push(guessNumbers);
    }
    
    return userNumber;
}

function getMatch(elementA, elementB) {
    let matches = [];

    for ( let j = 0; j < elementA.length; j++ ) {
        for ( let e = 0; e < elementB.length; e++ ) {
            if ( elementA[j] === elementB[e] ) 
                matches.push( elementA[j] );
        }
    }
    return matches;
}