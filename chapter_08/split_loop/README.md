## 반복문 쪼개기 (Split Loop)

### as-is
```javascript
let averageAge = 0;
let totalSalary = 0;
for (const p of people) {
    averageAge += p.age;
    totalSalary += p.salary;
}
averageAge = averageAge / totalSalary;
```

### to-be
```javascript
let totalSalary = 0;
for (const p of people) {
    totalSalary += p.salary;
}

let averageAge = 0;
for (const p of people) {
    averageAge += p.age;
}
averageAge = averageAge / people.length;
```

* 두 일을 한꺼번에 처리할 수 있다는 이유로 반복문 하나에 두 가지 일을 수행하는 경우가 있다.
* 이 경우 반복문을 수정해야 할 때마다 두 가지 일 모두 잘 이해하고 진행해야 한다.
  * 반대로 각각의 반복문으로 분리하면 수정할 동작 하나만 이해하면 된다.
* 반복문을 분리하면 사용하기 쉬워진다. 한 가지 값만 계산하는 반복문이라면 그 값만 곧바로 반환할 수 있다.
  * 반대로 여러 일을 수행하는 반복문은 값을 반환하려면 구조체나 지역 변수를 활용해야 한다.
* '반복문 쪼개기'는 서로 다른 일들이 하나의 함수에서 이뤄지고 있다는 신호일 수도 있다. 그래서 '함수 추출하기'와 연이어 수행하는 일이 잦다.
* 반복문을 두 번 실행한다는 점에서 불편함을 느낄 수 있지만 리팩터링과 최적화를 구분해야 한다.

- - -

### 절차
1. 반복문을 복제해 두 개로 만든다.
2. 반복문이 중복되어 생기는 부수효과를 파악해서 제거한다.
3. 테스트한다.
4. 완료됐으면, 각 반복문을 함수로 추출할지 고려해본다.
