const quizzes = {
    Python: [
        {
            question: "What is the output of print(2 ** 3)?",
            options: ["8", "6", "9", "4"],
            answer: "8",
        },
        {
            question: "Which of the following is a Python data type?",
            options: ["int", "str", "list", "All of the above"],
            answer: "All of the above",
        }
    ],
    Java: [
        {
            question: "Which keyword is used to create a class in Java?",
            options: ["class", "create", "function", "object"],
            answer: "class",
        },
        {
            question: "Which of the following is not a primitive data type in Java?",
            options: ["int", "boolean", "String", "char"],
            answer: "String",
        }
    ],
    C: [
        {
            question: "What does 'C' in C language stand for?",
            options: ["Code", "Class", "Compile", "C language"],
            answer: "Compile",
        },
        {
            question: "Which of the following is a valid variable declaration in C?",
            options: ["int 1var;", "int var1;", "int var 1;", "int *var;"],
            answer: "int var1;",
        }
    ],
    "C++": [
        {
            question: "Which of the following is a valid declaration of a pointer in C++?",
            options: ["int *ptr;", "int ptr*;", "int &ptr;", "int ptr;"],
            answer: "int *ptr;",
        },
        {
            question: "What is the output of cout << 'Hello' << endl;",
            options: ["Hello", "Hello\n", "Hello;", "None of the above"],
            answer: "Hello",
        }
    ],
    "Computer Networks": [
        {
            question: "Which protocol is used to send email?",
            options: ["FTP", "SMTP", "HTTP", "DNS"],
            answer: "SMTP",
        },
        {
            question: "What does IP stand for?",
            options: ["Internet Protocol", "Interconnected Protocol", "Internal Protocol", "Internet Provider"],
            answer: "Internet Protocol",
        }
    ]
};

function createCards() {
    const cardContainer = document.getElementById('cardContainer');
    for (const lang in quizzes) {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerText = lang;
        card.onclick = () => loadQuiz(lang);
        cardContainer.appendChild(card);
    }
}

function loadQuiz(language) {
    const quizContainer = document.getElementById('quizContainer');
    quizContainer.innerHTML = '';
    quizzes[language].forEach((quizItem, index) => {
        const questionElement = document.createElement('div');
        questionElement.className = 'question';
        questionElement.innerHTML = `
            <p>${index + 1}. ${quizItem.question}</p>
            ${quizItem.options.map((option) => `
                <label>
                    <input type="radio" name="question${index}" value="${option}">
                    ${option}
                </label>
            `).join('')}
        `;
        quizContainer.appendChild(questionElement);
    });

    quizContainer.style.display = 'block';
    document.getElementById('submitButton').style.display = 'block';
    document.getElementById('result').innerHTML = '';
}

function submitQuiz() {
    let score = 0;
    const selectedLanguage = Object.keys(quizzes).find(lang => document.querySelector(`input[name="question0"]`));
    const answers = quizzes[selectedLanguage].map((quizItem, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        return selectedOption ? selectedOption.value : null;
    });

    answers.forEach((answer, index) => {
        if (answer === quizzes[selectedLanguage][index].answer) {
            score++;
        }
    });

    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `You scored ${score} out of ${quizzes[selectedLanguage].length}.<br>`;

    quizzes[selectedLanguage].forEach((quizItem, index) => {
        resultContainer.innerHTML += `${index + 1}. Correct Answer: ${quizItem.answer}<br>`;
    });
}

createCards();
