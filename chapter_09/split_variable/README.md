## 변수 쪼개기 (Split Variable)

### as-is
```javascript
let temp = 2 * (height + width);
console.log(temp);
temp = height * width;
console.log(temp);
```

### to-be
```javascript
const perimeter = 2 * (height + width);
console.log(perimeter);
const area = height * width;
console.log(area);
```

* 변수에는 값을 단 한 번만 대입해야 한다.
* 대입이 두 번 이상 이뤄진다면 여러 가지 역할을 수행한다는 신호다. 역할이 둘 이상인 변수는 쪼개야 한다.
* 반복문의 루프 변수와 같이 한 번 돌 때마다 값이 바뀌는 수집 변수(collecting variable)은 예외다.

- - -

### 절차
1. 변수를 선언한 곳과 처음 대입하는 곳에서 변수 이름을 바꾼다.
   * 수집 변수는 쪼개서는 안된다.
2. 가능하면 불변으로 선언한다.
3. 변수에 두 번째로 값을 대입하는 곳 앞까지 모든 참조(변수가 쓰인 곳)를 새로운 변수 이름으로 바꾼다.
4. 두 번째 대입 시 변수를 원래 이름으로 다시 선언한다.
5. 테스트한다.
6. 반복한다. 매 반복에서 변수를 새로운 이름으로 선언하고 다음번 대입 때까지의 모든 참조를 새 변수명으로 바꾼다. 이 과정을 마지막 대입까지 반복한다.
