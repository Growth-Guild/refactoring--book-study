## 매개변수를 질의 함수로 바꾸기 (Replace Parameter with Query)

### as-is
```javascript
availableVacation(anEmployee, anEmployee.grade);

function availableVacation(anEmployee, grade) {
    // 연휴 계산...
}
```

### to-be
```javascript
availableVacation(anEmployee);

function availableVacation(anEmployee) {
    const grade = anEmployee.grade;
    // 연휴 계산...
}
```

* 매개변수 목록은 함수의 변동 요인을 모아놓은 곳이다. 즉, 함수의 동작에 변화를 줄 수 있는 일차적인 수단이다.
* 피호출 함수가 스스로 쉽게 결정할 수 있는 값을 매개변수로 건네는 것도 일종의 중복이다.
* 매개변수를 제거하면 피호출 함수에 원치 않는 의존성이 생길 때는 매개변수를 질의 함수로 바꾸지 말아야 한다. 즉, 해당 함수가 알지 못했으면 하는 프로그램 요소에 접근해야 하는 상황을 만들 때다.
* 제거하려는 매개변수의 값을 다른 매개변수에 질의해서 얻을 수 있다면 질의 함수로 바꿀 수 있다.
* 대상 함수가 참조 투명해야 한다.
* 참주 토명이란 '함수에 똑같은 값을 건네면 항상 똑같이 동작한다'는 뜻이다.

- - -

### 절차
1. 필요하다면 대상 매개변수의 값을 계산하는 코드를 별도 함수로 추출해놓는다.
2. 함수 본문에서 대상 매개변수로의 참조를 모두 찾아서 그 매개변수의 값을 마들어주는 표현식을 참조하도록 바꾼다. 하나 수정할 때마다 테스트한다.
3. 함수 선언 바꾸기로 대상 매개변수를 없앤다.
