$(document).ready(function () {

    // variables for win, lose and total

    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    //variables for counter/timer
    var count = 45;
    var intervalId;

    var questions = [{
        question: "In Aladdin, what is the name of Jasmine’s pet tiger? ",
        choices: ["Raja", "Tiger", "Stripes", "Abu"],
        correctAnswer: "Raja"
    },
    {
        question: "In Beauty and the Beast, how many eggs does Gaston eat for breakfast? ",
        choices: ["6 Dozen", "3 Dozen", "1 Dozen", "5 Dozen"],
        correctAnswer: "5 Dozen"
    },
    {
        question: "In the Lion King, where does Mufasa and his family live?  ",
        choices: ["Amazing Rock", "Pride Rock", "Strong Rock", "Outlands"],
        correctAnswer: "Pride Rock"
    },
    {
        question: "Who is the nurse maid to the children in Peter Pan? ",
        choices: ["Nanna the German Shepard", "Nanna the Saint Bernard", "Nanna the Beagle", "Nanna the Scottish Terrier"],
        correctAnswer: "Nanna the Saint Bernard"
    },
    {
        question: "How many daughters does King Triton from The Little Mermaid have? ",
        choices: ["7", "5", "11", "3"],
        correctAnswer: "7"
    },
    {
        question: "What was the name of the whale in Pinocchio? ",
        choices: ["Gepetto", "Jiminy", "Monstro", "Figaro"],
        correctAnswer: "Monstro"
    },
    {
        question: "What name isn’t one of the three good fairies from Sleeping Beauty? ",
        choices: ["Flora", "Iridessa", "Fauna", "Merryweather "],
        correctAnswer: "Iridessa"
    },
    {
        question: "Before Mickey Mouse, what Disney character was suggested to be the Sorcerer’s Apprentice in Fantasia? ",
        choices: ["Donald", "Dopey", "Grumpy", "Goofey"],
        correctAnswer: "Dopey"
    }];


    function showQuestions() {

    }

    // $('#correct-answers').text(correct);
    // $('#incorrect-answers').text(incorrect);
    // $('#unanswered').text(unanswered);

    // Start Button 

    $("#start").on('click', function () {
        timer();
        showQuestions();

    });

    // timer function
    function timer() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    //function to make timer go down
    function decrement() {

        count--;

        $("#timer").html("<h2>" + count + "</h2>");

        if (count === 0) {
            stop();
        }
    }

    //function to stop the timer
    function stop() {

        clearInterval(intervalId);
    }




    function rightAnswers() {

    }

    function wrongAnswers() {


    }


    function results() {


        rightAnswers();

        $('#correct-answers').text(correct);

        wrongAnswers();

        $('#incorrect-answers').text(incorrect);
    }


});

