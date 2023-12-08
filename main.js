var arrayOfQuotes = [
    {
        'author': '― Oscar Wilde',
        'quote': '“Be yourself; everyone else is already taken.”'
    },
    {
        'author': '― Epictetus',
        'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {
        'author': '― Marcus Tullius Cicero',
        'quote': '“A room without books is like a body without a soul.”'
    },
    {
        'author': '― Mae West',
        'quote': '“You only live once, but if you do it right, once is enough.”'
    },
    {
        'author': '― Nelson Mandela',
        'quote': '“In three words I can sum up everything I\'ve learned about life: it goes on.”'
    },
    {
        'author': '― Elbert Hubbard',
        'quote': '“A friend is someone who knows all about you and still loves you.”'
    },
    {
        'author': '― Oscar Wilde',
        'quote': '“To live is the rarest thing in the world. Most people exist, that is all.”'
    },
    {
        'author': '― Martin Luther King ',
        'quote': '“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”'
    },
    {
        'author': '― Stephen Chbosky, The Perks of Being a Wallflower',
        'quote': '“We accept the love we think we deserve.”'
    },
    {
        'author': '― Ralph Waldo Emerson',
        'quote': '“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”'
    },
];
var quote =document.getElementById("quote")
var quoteAuthor =document.getElementById("quoteauthor")
var usedQuotesIndices = [];

function getQuote() {
    if (usedQuotesIndices.length === arrayOfQuotes.length) {
        usedQuotesIndices = [];
    }
    var randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * arrayOfQuotes.length);
    } while (usedQuotesIndices.includes(randomIndex));

    usedQuotesIndices.push(randomIndex);
    quote.innerHTML = `${arrayOfQuotes[randomIndex].quote}`;
    quoteAuthor.innerHTML = `${arrayOfQuotes[randomIndex].author}`;
}