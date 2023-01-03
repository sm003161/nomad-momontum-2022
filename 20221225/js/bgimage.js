// 이미지 array 만들기
const imgArray = [ "0.jpg", "1.jpg", "2.jpg", "3.jpg" ];

// 이미지에 번호 붙이기
const imgName = imgArray[Math.floor(Math.random() * imgArray.length)];

// img 태그 생성하기
const imgTag = document.createElement("img");

// 이미지 src 경로 넣기
imgTag.src = `img/${imgName}`;

// HTML 에 삽입하기
document.body.appendChild(imgTag);