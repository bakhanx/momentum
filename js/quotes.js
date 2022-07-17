const quotes = [
    {
        quote : "The road to success and the road to failure are almost exactly the same.",
        author : "Colin R. Davis",
        qutoe_kor : "성공으로 가는 길과 실패로 가는 길을 거의 같다.",
    },
    {
        quote : "It is better to fail in originality than to succeed in imitation.",
        author : "Herman Melville",
        qutoe_kor : "창의적으로 실패하는 것이 모방해서 성공하는 것보다 낫다.",
    },
    {
        quote : "Success is walking from failure to failure with no loss of enthusiasm.",
        author : "Winston Churchill",
        qutoe_kor : "성공이란 열정을 잃지 않고 실패에서 실패로 걸어가는 것이다.",
    },
    {
        quote : "All progress takes place outside the comfort zone.",
        author : "Michael John Bobak",
        qutoe_kor : "모든 성과는 요령을 피우지 않을 때 생긴다.",
    },
    {
        quote : "Success usually comes to those who are too busy to be looking for it.",
        author : "Henry David Thoreau",
        qutoe_kor : "성공은 주로 성공을 찾느라 바쁜 사람들에게 찾아온다.",
    },
    {
        quote : "The way to get started is to quit talking and begin doing.",
        author : "Walt Disney",
        qutoe_kor : "무언가를 시작하려면 말은 멈추고 행동해야 한다.",
    },   
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const toggleBtn = document.getElementById("btn-language");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
let isKor = false;

let FooterWord = ()=>{
    quote.innerHTML = todayQuote.quote;
    author.innerHTML = todayQuote.author;
}

const handleToggle = ()=>{
    isKor = !isKor;
    quote.innerHTML = isKor ? todayQuote.qutoe_kor : todayQuote.quote;
    toggleBtn.innerHTML = isKor ? "한국어" : "English"
}

toggleBtn.addEventListener('click',handleToggle);
FooterWord();