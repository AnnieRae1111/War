//creat a class to hold the entire deck and it's functions. 
//OOP 
const SUITS = ['♥','♦','♠', '♣'] 
const VALUES= ['A','2', '3', '4','5','6','7','8', '9','10','J','Q','K']
let masterDeck = []
const mixedDeck = []
console.log(masterDeck)
let player1cards =[]   //array for each player's deck of 26
let player2cards=[]   //array for each player's deck of 26. Create a function that splits the deck into 
                        //these two arrays 

function resetDeck(){
    masterDeck.splice(0,masterDeck.length)
    mixedDeck.splice(0,mixedDeck.length)
}    //reseting the decks. Include this in startGame function so I always start with fresh deck)


function createDeck (){
    SUITS.flatMap(
        (suit) => { 
            VALUES.map(     //mapping over suits and values and combining them all to one array
                (value) => {
                    let card = value + suit
                    // console.log(card)
                    masterDeck.push(card) //(pushing each card, back to the masterDeck array)
                
                }
            )
    
        }
    )
}
createDeck()


// console.log(masterDeck)

//make a class to render out the cards? 

//---------THIS WORKS----------//
// function shuffleTheDeck(){
//     let shuffleDeck = [...masterDeck] //copying the masterDeck into the shuffleDeck
//     let shuffledCards = shuffleDeck.sort(() => Math.random()-.5);
//     // console.log(shuffleDeck)
//     return shuffledCards

// }
// console.log(shuffleTheDeck())
// //---------THIS WORKS----------//

// function shuffleTheDeck(){
//     let shuffleDeck = [...masterDeck]
//     for(let i = shuffleDeck.length - 1; i>0; i--){
//         let j = Math.floor(Math.random()* (i +1))
//         [shuffleDeck[i], shuffleDeck[j]] = [shuffleDeck[j], shuffleDeck[i]]
        
//     }
//     // console.log(shuffleDeck)
// }

function shuffleTheDeck(){
    let shuffleDeck = [...masterDeck]
    for(let i=0; i<shuffleDeck.length; i++){
        const tempCard= shuffleDeck[i];
        const randomIndex = Math.floor(Math.random() * 52);
        // shuffleDeck[i] = shuffleDeck[randomIndex]
        let x = shuffleDeck[i]
        shuffleDeck[i]=shuffleDeck[randomIndex]
        shuffleDeck[randomIndex] = x
        shuffleDeck[randomIndex] = tempCard
        console.log(shuffleDeck)

    }
}


console.log(shuffleTheDeck())



function startGame(){    ///this will go at bottom 
resetDeck()
createDeck()
mixedDeck.push(...shuffleDeck()) //spread operator pushes new shuffleDeck into mixedDeck
console.log(mixedDeck) 

}


// startGame()


