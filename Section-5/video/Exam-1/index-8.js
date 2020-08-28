let quizzes = [
    {
        question: 'How many legs do an optopus has',
        choices: ['4 legs', 'no legs', '8 legs', '2 legs'],
        rightChoice: '8 legs',
    },
    {
        question: 'Which country is home to the kangaroo',
        choices: ['Australia', 'Autria', 'New zealand', 'US'],
        rightChoice: 'Australia',
    },
    {
        question: 'What sweet food made by bees using nectar from flowers?',
        choices: ['Bread', 'Honey', 'Sugar', 'Potent'],
        rightChoice: 'Honey',
    },
    {
        question: 'Which fictional detective lived at 221b Baker street',
        choices: ['Watson', 'Sam Spade', 'Scubidu', 'Sherlock Holmes'],
        rightChoice: 'Sherlock Holmes',
    }
];
let count = 0;
while(true){
    if(quizzes.length == 0){
        break;
    }
    let index = Math.floor(Math.random() * quizzes.length);
    let str = '';
    let indexRightChoice;
    let i1 = 1;
    while(true){      
        if(quizzes[index].choices.length == 0){
            break;
        }
        let i = Math.floor(Math.random() * quizzes[index].choices.length);
        str +=`${i1}. ` + quizzes[index].choices[i] + '\n';
        if(quizzes[index].choices[i] == quizzes[index].rightChoice){
            indexRightChoice = i1;
        }
        i1++;
        quizzes[index].choices.splice(i,1);
    }
    let quizz = prompt(`${quizzes[index].question} \n ${str}`);
    if(quizz === null){
        alert("You out!!");
        break;
    }
    if(Number(quizz) == indexRightChoice){
        count++;
    }
    quizzes.splice(index,1);
}
alert(`you answered correctly ${count}`);