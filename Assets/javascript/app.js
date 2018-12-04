
/*
 
Click to Start
Timer begins at 60 seconds and countdown
Player goes through all 10 questions
player can only guess one answer per question
Once completed, player submit's answers
HTML is updated with users score
Score includes: time spent, answers correct, and answers wrong */

// --------------------------------------------------------------- 

var questions = [{
    ques: "What happens at the end of the movie",
    ans: ["Deckard escapes the city with Rachel", "The Tyrell Corp. collapses", "Blackout", "A new model of Nexus emerges"],
    name: "end",
    correct: "Deckard escapes the city with Rachel",
    divClass: ".end"
},
{
    ques: "Who was the leader of the rogue Nexus-6 replicants?",
    ans: ["Jean Paul Sartre", "Roy Batty", "Aristotle", "Dash Rendar"],
    name: "leader",
    correct: "Roy Batty",
    divClass: ".leader"
},
{
    ques: "What piece of the human body is show repeatably in the film?",
    ans: ["An eye", "A face", "A foot", "A fist"],
    name: "body",
    correct: "An eye",
    divClass: ".body"
},
{
    ques: "What was Harrison Ford's character's name?",
    ans: ["John McEnroe", "Rick Deckard", "Ilie Nastase", "Steve Prefontaine"],
    name: "name",
    correct: "Rick Deckard",
    divClass: ".name"
},
{
    ques: "What is the Tyrell Corporation's motto?",
    ans: ["'In God We Trust'", "'Esse quam videri'", "'More Human Than Human' ", "'Live Free or Die'"],
    name: "motto",
    correct: "'More Human Than Human'",
    divClass: ".motto"
},
{
    ques: "The chess game played by Sebastian and Tyrell is inspired by a real-life game, played by...",
    ans: ["Deep Blue - Kasparov", "Fischer - Steinitz", "Ageitos - Karpov", "Anderssen - Kieseritzky"],
    name: "chessgame",
    correct: "Anderssen - Kieseritzky",
    divClass: ".chessgame"
},
{
    ques: "The police use flying cars as their means of transport. What are these cars called?",
    ans: ["Spinners", "Jets", "SSV Normandy", "Tie Fighters"],
    name: "cars",
    correct: "Spinners",
    divClass: ".cars"
},
{
    ques: "Blade Runner' is based in a short history called 'Do Androids Dream of Electric Sheep' by...",
    ans: ["Isaac Asimov", "Arthur C. Clarke", "Philip K. Dick", "Michelle Foucault"],
    name: "philip",
    correct: "Philip K. Dick",
    divClass: ".philip"
},
{
    ques: "What is the name of the corporation that created the Replicants?",
    ans: ["George Soros", "EA Games", "The Tyrell Corporation", "Hillary's email server"],
    name: "tyrell",
    correct: "The Tyrell Corporation",
    divClass: ".tyrell"
},
{
    ques: "What story is 'Blade Runner' based on?",
    ans: ["Do Androids Dream of Electric Sheep?", "Little House on the Prairie", "Gone with the Wind", "A Tale of Two Cities"],
    name: "androids",
    correct: "Do Androids Dream of Electric Sheep?",
    divClass: ".androids"
}
] // end questions object

var labels = ["first", "second", "third", "forth"];

// click to start then display quesions
var startGame = $("#start-btn").on('click', function() {
$(this).parent().hide();
$('.container').show();
countdown(60);
questionDisplay();
});

// function for displaying questions
var questionDisplay = function() {
$(".questions :not('#sub-but')").empty();
// loops through the 10 questions 
for (var j = 0; j < 10; j++) {
$('.questions').prepend('<div class="' + questions[j].name + '"></div>');
$(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
// loops through answers for each radio button
for (var i = 0; i <= 3; i++) {
    $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
}
$('.questions').prepend('<hr />');
}
}


// function for countdown timer
var countdown = function(seconds) {

var timer = setInterval(function() {
seconds = seconds - 1;
$("#time-remain").html(seconds);

if (seconds <= 0) {
    $('.container').fadeOut(500);
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

    // loop through correctArray & radioName to match html elements & answers
    for (var i = 0; i < 10; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
            console.log("this is correct! number:" + i)
        } else {
            wrongAnswers++;
            console.log("this is wrong! number:" + i)
        };
    }
    $('#correctTimesUp').append(correctAnswers);
    // display wrongAnswers
    $('#wrongTimesUp').append(wrongAnswers);
    $('#timesUp').fadeIn(1000).show();

    // alert("Times Up!");
    clearInterval(timer);
    return;
}
}, 1000);

// click event for submit button to stop timer
$('#sub-but').on('click', function() {
clearInterval(timer);
})
}; // end countdown


// function to grade quiz once submit button is clicked
var gradeQuiz = $('#sub-but').on('click', function() {

var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;

// loop through correctArray & radioName to match html elements & answers
for (var i = 0; i < 10; i++) {

if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

    correctAnswers++;
} else {
    wrongAnswers++;
};
};

// once submit is clicked...
// tests
// stop timer
countdown();
// fade out questions
$('.container').fadeOut(500);
// show answerScreen
$('#answerScreen').show();
// display correctAnswers
$('#correctScreen').append(correctAnswers);
// display wrongAnswers
$('#wrongScreen').append(wrongAnswers);

}); // end gradeQuiz