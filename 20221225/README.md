# 20230101

## 시계 만들기

### 1. setInterval(A, B) ( f )

```js
// 특정 함수를 정해진 시간마다 반복적으로 실행한다.
setInterval(실행할 함수, 초*1000);
```

### 2. setTimeout(A, B) ( f )

```js
// 페이지 로딩 이후 정해진 시간에 특정 함수를 실행한다.
setInterval(실행할 함수, 초*1000);
```

### 3. Date ( m )

```js
// 시간과 관련된 내장 객체로, 먼저 시간을 담을 빈 변수를 만들어 사용한다.
const A = new Date();

// 빈 변수에 현재 시간/분/초를 담는다.
A.getHours();
A.getMinutes();
A.getSeconds();
```

### 4. String ( o )

```js
// 이 객체로 감싸면 string 타입으로 변환한다.
const A = 5;
String(A);
```

### 5. [STRING].padStart(a, b) ( m )

```js
// 특정 문자를 가져올 때 최소 글자수에 맞춰 패딩 문자를 추가하는 기능이다.
const A = "sample"
A.padstart(최소 글자수, 패딩 문자)
```

## 문장 가져오기

###### engExpression array 만들기 ( 내용, 뜻 ) → Math.random() 로 랜덤 숫자 만들기 → Math.floor() 로 소숫점 숫자 떼기 → .length() 로 engExpression 갯수 가져오기 → engExpression 에 숫자 붙이기 → engExpression 호출하기

### 1. Math ( o )

숫자와 관련된 객체

### 2. Math.random() ( m )

```js
// 0과 1 사이에 랜덤 숫자를 만든다.
Math.random();

// 10을 곱해 정수로 변환한다.
Math.random() * 10;
```

### 3. Math.floor(A) ( m )

```js
// 담은 숫자의 소숫점 이하 자리수를 없애 내림한다.
Math.floor(A);

// 비슷한 원리로, round & ceil 이 있고, 각각 반올림 & 올림한다.
Math.round(A);
Math.ceil(A);
```

### 4. [ARRAY].length ( m )

```js
// array 의 갯수를 숫자로 가져온다.
const A = ["a", "b", "c"];
A.length;
```

### 5. array 사용법

```js
// n 번째 값 가져오기
const N = 0;
const A = ["a", "b", "c"];
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

# 230103

## 이미지 뿌려주기

###### 이미지 array 만들기 → Math.floor & Math.random & .lenght 사용해 이미지에 번호 붙이기 → createElement 이용해 img 태그 생성하기 → .src 사용해 이미지 경로 넣기 → body에 appendChild 사용해 html 에 삽입하기

### 1. [DOCUMENT].createElement("A") ( f )

```js
// ELEMENT 하위에 img 태그를 생성한다.
ELEMENT.createElement("img");
```

### 2. [DOCUMENT].appendChild("A") ( f )

```js
// ELEMENT 안에 img 를 삽입한다.
ELEMENT.appendChild("img");
```

### 3. [IMAGE].src = "DIR/IMAGE-SRC.jpg"

```js
// 이미지 태그에 src 값을 추가한다.
const img = document.querySelector("img");
img.src = "A/B.jpg";
```

# 230107

## To-Do 리스트 세팅하기

##### 리스트를 입력할 form & input 만들기 → 리스트 ul 만들기 → submit handler : 리프레쉬 막기, 입력된 값을 변수에 저장, input 비우기

### 1. event.preventDefault() ( f )

```js
// function 생성 시, event 를 인자로 지정한 상태에서 사용한다.
function A(event) {
  event.preventDefault();
}
```

### 2. [DOCUMENT].addEventListener("[EVENT]", FUNCTION) ( f )

```js
// 괄호 안에 submit, scroll, keyup, keydown, mouseover, click, drag, drop 등의 이벤트와 실행할 함수명을 적어 사용한다.
function A() {
  console.log("Listen to a click event on");
}

ELEMENT.addEventListener("click", A);
```

## To-Do 리스트 표시하기

##### submit 된 toDoItem 를 화면에 가져오는 함수를 만들어 submit 이벤트애 포함시키기 → createElement, innerText, appendChild 사용해 toDoItem 을 li > span 헝태로 생성하기
