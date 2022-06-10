## 질의 함수를 매개변수로 바꾸기 (Replace Query with Parameter)

### as-is
```javascript
targetTemperature(aPlan);

function targetTemperature(aPlan) {
    currentTemperature = thermostat.currentTemperature;
    // ...
}
```

### to-be
```javascript
targetTemperature(aPlan, thermostat.currentTemperature);

function targetTemperature(aPlan, currentTemperature) {
    // ...
}
```

* 전역 변수를 참조하거나 (같은 모듈에 안에서라도) 제거하길 원하는 원소를 참조하는 경우에 해당 참조를 매개변수로 바꿔 해결 할 수 있다.
* 참조를 풀어내는 책임을 호출자로 옮기는 것이다.
* 이런 상황 대부분은 코드의 의존 관계를 바꾸려 할 때 벌어진다.
* 참조 투명하지 않은 원소에 접근하는 모든 함수는 참조 투명성을 잃게 되는데, 이 문제는 해당 원소를 매개변수로 바꾸면 해결된다.
* 질의 함수를 매개변수로 바꾸면 어떤 값을 제공할지를 호출자가 알아내야 한다는 단점이 있다.
  * 결국 호출자가 복잡해진다.

- - -

### 절차
1. 변수 추출하기로 질의 코드를 함수 본문의 나머지 코드와 분리한다.
2. 함수 본문 중 해당 질의를 호출하지 않는 코드들을 별도 함수로 추출한다.
3. 방금 만든 변수를 인라인하여 제거한다.
4. 원래 함수도 인라인한다.
5. 새 함수의 이름을 원래 함수의 이름으로 고쳐준다.
