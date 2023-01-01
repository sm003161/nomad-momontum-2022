/* OVERVIEW
1. engExpression array 만들기 ( 내용, 뜻 )
2. Math.random() 로 랜덤 숫자 만들기
3. Math.floor() 로 소숫점 숫자 떼기
4. .length() 로 engExpression 갯수 가져오기
5. engExpression 에 숫자 붙이기
3. engExpression 호출하기
*/

const sentences = document.querySelector("span#sentences");
const meanings = document.querySelector("span#meanings");

const engExpression = [
    {
        s: "I just winged it.",
        m: "그건 그냥 즉흥적으로 했어."
    },
    {
        s: "It's kind of bittersweet.",
        m: "좀 시원 섭섭해."
    },

    {
        s: "I'm at a loss for words.",
        m: "(어이가 없어서) 말이 안나오네."
    },

    {
        s: "We went the extra mile.",
        m: "우리는 한층 더 노력했어."
    },

    {
        s: "We cry wolf a lot.",
        m: "우리는 거짓말을 많이 해."
    },

    {
        s: "I cancelled them.",
        m: "난 그들을 지지하는 것을 철회했어."
    },

    {
        s: "I was swamped with work.",
        m: "일하느라 정신 없이 바빴어."
    },

    {
        s: "That's (as) cheap as chips.",
        m: "그거 겁나 쌈."
    },

    {
        s: "Make yourself at home.",
        m: "네 집처럼 편하게 있어."
    },

    {
        s: "Take it or leave it.",
        m: "하든지 말든지 해."
    }
]

const todaysSentence = engExpression[Math.floor(Math.random() * engExpression.length)];

sentences.innerText = todaysSentence.s;
meanings.innerText = todaysSentence.m;