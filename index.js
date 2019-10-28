// Code your solutions in this file
let thankyoumessages = []
function writeCards(names,events){
    for (let i = 0; i < names.length; i++) {
        thankyoumessages.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`)
    }
    return thankyoumessages
}

function countDown(){
    let countup = 0;
    while (countup < 11) {
      console.log(countup++);
    }
}

// 'Thank you, Lisa, for the wonderful surprise gift!'