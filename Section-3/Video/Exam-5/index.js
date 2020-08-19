let str = 'How many legs does a spdier have?\n\n1.None\n2.4 legs\n3.8 legs\n 4. 12 legs \nAnswer this quiz?';
while (true) {
    let quiz = prompt(str);
    if (Number(quiz) == 1 || Number(quiz) == 2 || Number(quiz) == 4) {
        alert("Good luck next time!!");
    } else if (Number(quiz) == 3) {
        alert("Bravo, you are correct");
        break;
    } else {
        alert("Invalide choice, the answer must be 1, 2, 3 or 4");
    }
}