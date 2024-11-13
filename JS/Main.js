var Qouets = [
    {
        Name: "Oscar Wilde",
        Quote: "“Be yourself; everyone else is already taken.”",
    },
    {
        Name: "Marilyn Monroe",
        Quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    },
    {
        Name: " Frank Zappa",
        Quote: "“So many books, so little time.”",
    },
    {
        Name: "Albert Einstein",
        Quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    },
    {
        Name: "Marcus Tullius Cicero",
        Quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    },
    {
        Name: "Mae West",
        Quote: "“You only live once, but if you do it right, once is enough.”",
    },
    {
        Name: "Mahatma Gandhi",
        Quote: "“Be the change that you wish to see in the world.”",
    },
    {
        Name: "Mark Twain",
        Quote: "“If you tell the truth, you don't have to remember anything.”",
    },
    {
        Name: " Elbert Hubbard",
        Quote: "“A friend is someone who knows all about you and still loves you.”",
    },
    {
        Name: "Oscar Wilde",
        Quote: "“Always forgive your enemies; nothing annoys them so much.",
    },
    {
        Name: "Mahatma Gandhi",
        Quote: "“Live as if you were to die tomorrow. Learn as if you were to live forever”",
    },


]
// Math.random() // eturns a random number between 0 and 1:
// Math.round(x) //returns the nearest integer:

// var  Num =Math.round(Math.random()*Qouets.length)

function RandomText() {

    do {
        var Num = Math.round(Math.random() * Qouets.length)
        console.log(Num);
        document.getElementById("Qoute").innerHTML=Qouets[Num].Quote;
        document.getElementById("name").innerHTML=Qouets[Num].Name;

    }
    while (True);


}