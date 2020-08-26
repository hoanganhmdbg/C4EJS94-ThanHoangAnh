let quizzes = [
    {
        question: 'How many legs do an optopus has',
        choices: ['1. 4 legs', '2. no legs', '3. 8 legs', '4. 2 legs'],
        rightChoice: 3,
    },
    {
        question: 'Which country is home to the kangaroo',
        choices: ['1. Australia', '2. Autria', '3. New zealand', '4. US'],
        rightChoice: 1,
    },
    {
        question: 'What sweet food made by bees using nectar from flowers?',
        choices: ['1. Bread', '2. Honey', '3. Sugar', '4. Potent'],
        correct: 2,
    },
    {
        question: 'Which fictional detective lived at 221b Baker street',
        choices: ['1. Watson', '2. Sam Spade', '3. Scubidu', '4.Sherlock Holmes'],
        correct: 4,
    }
];
let out = false;
while (true) {
    if (quizzes.length == 0) {
        break;
    }
    let index = Math.floor(Math.random() * quizzes.length);
    let quiz = prompt(`${quizzes[index].question}\n${quizzes[index].choices[0]}\n${quizzes[index].choices[1]}\
\n${quizzes[index].choices[2]}\n${quizzes[index].choices[3]}`);
    if (quiz === null) {
        alert("You out!!");
        out = true;
        break;
    }
    quizzes.splice(index, 1);
}
if (!out) {
    alert("We are out of question:(");
}