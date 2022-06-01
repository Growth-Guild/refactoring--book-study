## 인라인 코드를 함수 호출로 바꾸기 (Replace Inline Code with Function Call)

### as-is
```javascript
let appliesToMass = false;
for(const s of states) {
    if (s === 'MA') appliesToMass = true;
}
```

### to-be
```javascript
appliesToMass = states.includes('MA');
```

* 함수는 여러 동작을 하나로 묶어주고, 그 함수의 이름이 코드의 동작 방식보다는 목적을 말해주기 때문에 함수를 활용하면 코드를 이해하기 쉬워진다.
* 함수는 중복을 없애는 데도 효과적이다.
* 이미 존재하는 함수와 똑같은 일을 하는 인라인 코드를 발견하면 해당 코드르 함수 호출로 대체할 수 있을지 고민해본다.
  * 기존 함수의 코드를 수정하더라도 인라인 코드의 동작이 바뀌지 않아야 한다.
* 라이브러리가 제공하는 함수로 대체할 수 있다면 훨씬 좋다.
* '함수 추출하기'와 이번 리팩터링의 차이는 인라인 코드를 대체할 함수가 이미 존재하느냐 여부다.

- - -

### 절차
1. 인라인 코드를 함수 호출로 대체한다.
2. 테스트한다.
