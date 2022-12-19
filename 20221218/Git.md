## Local-side

###### \* Must be done everytime one makes modification.

### 1. 사이트 들어가기

```sh
git init
```

### 2. \* 장바구니에 넣기

```sh
git add .
```

### 3. \* 주문하기

```sh
git commit -m + "Commentary"
```

## Web-side

### 1. 우리집 만들기

깃허브 repository 생성

### 2. 주소 입력하기

```sh
git remote add origin
```

### 3. 받는 사람 입력하기

```sh
git config --global user.name + "GitHub Username"
git config --global user.email + "GitHub Email"
```

### 4. \* 배송하기

```sh
git push origin + "Branch"
```

### 999. 내 주소 확인하기

```sh
git remote -v
```

---

## To Remotely Access

### 1. 초기 접속 시 가져오기

```sh
git clone + "Address"
```

### 2. 재접속 시 최신 버전으로 동기화하기

```sh
git pull origin + "Branch"
```

---

## To Initialize A New Repository

```sh
git init
git add README.md
git commit -m + "First Commit"
git branch -M main
git remote add origin + "Repository URL"
git push -u origin main
```
