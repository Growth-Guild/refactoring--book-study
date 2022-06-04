## 매직 리터럴 바꾸기 (Replace Magic Literal)

### as-is
```javascript
function potentialEnergy(mass, height) {
    return mass * 9.81 * height;
}
```

### to-be
```javascript
const STANDARD_GRAVITY = 9.81;
function potentialEnergy(mass, height) {
    return mass * STANDARD_GRAVITY * height;
}
```

* 매직 리터럴이란 소스 코드에 존재하는 일반적인 리터럴 값을 말한다.
* 특정 리터럴에 의미를 부여하여 다른 개발자들로 하여금 해당 값이 어떤 의미를 나타내는지 인지할 수 있다면 바꾼다. const ONE = 1 과 같은 의미없는 선언은 의미가 없으므로 과용하지 말아야 한다.
* 상수가 특별한 비교 로직에 주로 쓰이는 경우에는 aValue === MAIL_GENDER 과 같이 표현하기 보다 isMail(aValue)와 같이 표현하는 것도 고려해본다.
* 리터럴이 함수 하나에서만 쓰이고 그 함수가 맥락 정보를 충분히 제공하여 헷갈릴 일이 없다면 상수로 바꿔 얻는 이득이 줄어들 수 있다.

- - -

### 절차
1. 상수를 선언하고 매직 리터럴을 대입한다.
2. 해당 리터럴이 사용되는 곳을 모두 찾는다.
3. 찾은 곳 각각에서 리터럴이 새 상수와 똑같은 의미로 쓰였는지 확인하고, 같은 의미라면 상수로 대체한 후 테스트한다.
