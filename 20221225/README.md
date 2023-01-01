# 20230101

## 시계 만들기

### 1. setInterval(a, b) ( f )

```js
// 특정 함수를 정해진 시간마다 반복적으로 실행한다.
setInterval(실행할 함수, 초*1000);
```

### 2. setTimeout(a, b) ( f )

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

### 5. [string].padStart(a, b) ( m )

```js
// 특정 문자를 가져올 때 최소 글자수에 맞춰 패딩 문자를 추가하는 기능이다.
const A = "sample"
A.padstart(최소 글자수, 패딩 문자)
```

## 문장 가져오기

###### \* Phrases array 만들기 ( 내용, 뜻 ) → Math.random() 로 랜덤 숫자 만들기 → Math.floor() 로 소숫점 숫자 떼기 → .length() 로 quotes 갯수 가져오기 → quotes 에 숫자 붙이기 → quotes 호출하기

### 1. Math ( o )

숫자와 관련된 객체

### 2. Math.random() ( m )

```js
// 0과 1 사이에 랜덤 숫자를 만든다.
Math.random();

// 10을 곱해 정수로 변환한다.
Math.random() * 10;
```

### 3. Math.floor(a) ( m )

```js
// 담은 숫자의 소숫점 이하 자리수를 없애 내림한다.
Math.floor(a);

// 비슷한 원리로, round & ceil 이 있고, 각각 반올림 & 올림한다.
Math.round(a);
Math.ceil(a);
```

### 4. [array].length

```js
// array 의 갯수를 숫자로 가져온다.
const A = ["a", "b", "c"];
A.length;
```

### 5. array 사용법

```js
// n 번째 값 가져오기
const n = 0;
const A = ["a", "b", "c"];
A[n];

// array 가 객체 타입일 때, n 번째의 값을 key 별로 가져오기
const n = 0;
const A = [
  { alphabet: "a", number: 1 },
  { alphabet: "b", number: 2 },
  { alphabet: "c", number: 3 },
];
const result = A[n];
result.alphabet;
result.number;
```
