# 20230101

## 시계 만들기

### 1. setInterval(A, B) ( f )

특정 함수를 정해진 시간마다 반복적으로 실행한다.

```js
// 기본 함수 세팅
function everySec() {
  consol.log("1 second");
}

// 실행할 함수 & 초*1000을 곱해 넣어주기
setInterval(everySec, 1000);
```

### 2. setTimeout(A, B) ( f )

페이지 로딩 이후 정해진 시간에 특정 함수를 실행한다.

```js
// 기본 함수 세팅
function afterThreeSec() {
  consol.log("3 second");
}

// 실행할 함수 & 초*1000을 곱해 넣어주기
setInterval(afterThreeSec, 3000);
```

### 3. Date ( m )

시간과 관련된 내장 객체로, 다양한 기능이 있다.

```js
// 시간을 담을 빈 변수를 만들기
const A = new Date();

// 빈 변수에 현재 시간/분/초를 담기
A.getHours();
A.getMinutes();
A.getSeconds();
```

### 4. String(ELEMENT) ( o )

데이터를 string 타입으로 변환한다.

```js
// 변수 만들기
const A = 5;

// 변수를 객체로 감싸기
String(A);
```

### 5. [STRING].padStart(a, b) ( m )

특정 문자에 패딩 문자를 추가해 지정된 글자수를 맞추는 기능이다.

```js
// 변수 만들기
const A = "1";

// 최소 글자수와 패딩 문자를 지정하기
A.padstart(3, "0");
```

## 문장 가져오기

###### engExpression array 만들기 ( 내용, 뜻 ) → Math.random() 로 랜덤 숫자 만들기 → Math.floor() 로 소숫점 숫자 떼기 → .length() 로 engExpression 갯수 가져오기 → engExpression 에 숫자 붙이기 → engExpression 호출하기

### 1. Math ( o )

숫자와 관련된 객체

### 2. Math.random() ( m )

```js
// 0과 1 사이의 숫자를 랜덤으로 호출하기
Math.random();

// 10을 곱해 정수로 변환하기
Math.random() * 10;
```

### 3. Math.floor(A) ( m )

```js
// 담은 숫자의 소숫점 이하 자리수를 없애 내림하기
Math.floor(A);

// 비슷한 원리로, round & ceil 이 있고, 각각 반올림 & 올림하기
Math.round(A);
Math.ceil(A);
```

### 4. array 사용법

```js
// 기본 array 세팅
const N = 0;
const A = ["a", "b", "c"];

// n 번째 값 가져오기
A[N];

// array 가 객체 타입일 때, n 번째의 값을 key 별로 가져오기
const n = 0;
const A = [
  { ALPHABET: "a", NUMBER: 1 },
  { ALPHABET: "b", NUMBER: 2 },
  { ALPHABET: "c", NUMBER: 3 },
];
const RESULT = A[n];
RESULT.ALPHABET;
RESULT.NUMBER;
```

### 5. [ARRAY].length ( m )

array 의 갯수를 카운트한다.

```js
// 기본 array 세팅
const A = ["a", "b", "c"];

// array 내 데이터의 갯수를 카운트하기
A.length;
```

# 230103

## 이미지 뿌려주기

###### 이미지 array 만들기 → Math.floor & Math.random & .lenght 사용해 이미지에 번호 붙이기 → createElement 이용해 img 태그 생성하기 → .src 사용해 이미지 경로 넣기 → body에 appendChild 사용해 html 에 삽입하기

### 1. [DOCUMENT].createElement("A") ( f )

ELEMENT 하위에 img 태그를 생성한다.

```js
ELEMENT.createElement("img");
```

### 2. [DOCUMENT].appendChild("A") ( f )

ELEMENT 안에 img 를 삽입한다.

```js
ELEMENT.appendChild("img");
```

### 3. [IMAGE].src = "DIR/IMAGE-SRC.jpg"

이미지 태그에 src 값을 추가한다.

```js
// 기본 image 세팅
const img = document.querySelector("img");

// image 에 소스 URL 추가하기
img.src = "A/B.jpg";
```

# 230107

## To-Do 리스트 세팅하기

##### 리스트를 입력할 form & input 만들기 → 리스트 ul 만들기 → submit handler : 리프레쉬 막기, 입력된 값을 변수에 저장, input 비우기

### 1. event.preventDefault() ( f )

function 생성 시, event 를 인자로 지정한 상태에서 사용하면 event 의 다양한 정보를 확인할 수 있다.

```js
// 기본 function 세팅
function A(event) {
  // event의 기본 동작을 멈추기
  event.preventDefault();
}
```

### 2. [DOCUMENT].addEventListener("[EVENT]", FUNCTION) ( f )

괄호 안에 submit, scroll, keyup, keydown, mouseover, click, drag, drop 등의 이벤트와 실행할 함수명을 적어 사용한다.

```js
// 기본 function 세팅
function A() {
  console.log("Listen to a click event on");
}

// 클릭 액션에 Event Listener 생성하기
ELEMENT.addEventListener("click", A);
```

# 2301097

## To-Do 리스트 표시하기

##### submit 된 toDoItem 를 화면에 가져오는 함수를 만들어 submit 이벤트애 포함시키기 → createElement, innerText, appendChild 사용해 toDoItem 을 li > span 헝태로 생성하기

## To-Do 리스트를 화면에서 삭제하기

##### item 리스트 옆에 X 버튼 만들기 - addEventListner, event.target.parentEliment, [ ELIMENT ].remove() 사용해 삭제 기능 구현하기

### 1. event.target.parentEliment() ( f )

이벤트가 발생한 타겟을 기준으로 상위 eliment를 찾는다.

```js
// 기본 DOM 세팅
const div = document.createElement("div");
const btn = document.createElement("button");

div.appendChild("btn");

// function 세팅
function A(event) {
  console.log(event.target.parentEliment);
}

// 클릭 이벤트 세팅
btn.addEventListener("click", A);
```

### 2. [ ELEMENT ].remove() ( f )

ELEMENT 를 삭제한다.

```js
// 기본 DOM 세팅
const div = document.createElement("div");

// 삭제
div.remove();
```

# 230114

## To-Do 리스트를 Local Storage 에 저장하기

##### array 만들고 item 생성 시 array 에 push 하기 → JSON.stringify 이용해 localStorage.setItem 이용해 localStorage 에 저장하기

### 1. [ ARRAY ].push() ( m )

array 에 값을 추가한다.

```js
// 기본 array 세팅
const A = [];

// array 에 값 추가하기
A.push("a");
```

### 2. localStorage

Local Storage 를 이용한다.

```js
// 기본 세팅
const USER = "Kijai";

// 값 저장하기
localStorage.setItem("user", USER);

// 값 불러오기
localStorage.getItem("user");

// 값 제거하기
localStorage.removeItem("user");
```

### 3. JSON.stringify()

array 를 문자화해 Local Storage 에 저장할 수 있게 한다.

```js
// array 세팅
const A = [1, 2];

// array 를 문자화하기
JSON.stringify(A);
```

# 230115

## 저장된 To-Do 리스트 불러오기

##### localStorage 를 사용해 todos array 를 호출하기 → 값이 있을 시 JSON.parse, forEach 를 이용해 각각의 값을 화면에 표시하기

### 1. JSON.parse()

문자화한 array 를 복구하기

```js
// array 세팅
const A = [1, 2];

// array 를 문자화하기
JSON.stringify(A);

// 문자화된 array 를 복구하기
JSON.parse(A);
```

### 2. [ ARRAY ].forEach()

array 내 각 항목에 함수 실행하기

```js
// array 세팅
const A = [1, 2];

// function 세팅
function consoleLog() {
  console.log();
}

// forEach 실행
A.forEach(consoleLog);
```
