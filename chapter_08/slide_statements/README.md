## 문장 슬라이드하기 (Slide Statements)

### as-is
```javascript
const pricingPlan = retrievePricingPlan();
const order = retreiveOrder();
let charge;
const chargePerUnit = pricingPlan.unit;
```

### to-be
```javascript
const pricingPlan = retrievePricingPlan();
const chargePerUnit = pricingPlan.unit;
const order = retreiveOrder();
let charge;
```

* 관련된 코드들이 가까이 모여 있다면 이해하기가 더 쉽다.
* 하나의 데이터 구조를 이용하는 문장들은 한데 모여 있어야 좋다.

- - -

### 절차
1. 코드 조각을 이동할 목표 위치를 찾는다. 코드 조각의 원래 위치와 목표 위치 사이의 코드들을 훑어보면서, 조각을 모으고 나면 동작이 달라지는 코드가 있는지 살핀다. 다음과 같은 간섭이 있다면 리팩토링을 포기한다.
   * 코드 조각에서 참조하는 요소를 선언하는 문장 앞으로는 이동할 수 없다.
   * 코드 조각을 참조하는 요소의 뒤로는 이동할 수 없다.
   * 코드 조각에서 참조하는 요소를 수정하는 문장을 건너뛰어 이동할 수 없다.
   * 코드 조각이 수정하는 요소를 참조하는 요소를 건너뛰어 이동할 수 없다.
2. 코드 조각을 원래 위치에서 잘라내어 목표 위치에 붙여 넣는다.
3. 테스트한다.
