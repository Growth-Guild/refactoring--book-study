## 질의 함수와 변경 함수 분리하기 (Separate Query from Modifier)

### as-is
```javascript
function getTotalOutstandingAndSendBill() {
    const result = customer.invoices.reduce((total, each) => each.amount + total, 0);
    sendBill();
    return result;
}
```

### to-be
```javascript
function totalOutstanding() {
    return customer.invoices.reduce((total, each) => each.amount + total, 0);
}
function sendBill() {
    emailGateway.send(formatBill(customer));
}
```

* 외부에서 관찰할 수 있는 겉보기 부수효과가 전혀 없이 값을 반환해주는 함수를 추구해야 한다.
  * 이런 함수는 어느 때건 원하는 만큼 호출해도 아무 문제없다.
  * 후출하는 문장의 위치를 호출하는 함수 안 어디로든 옮겨도 되며 테스트하기도 쉽다.
* 겉보기 부수화가가 있는 함수와 없는 함수는 명확히 구분하는 것이 좋다.
  * 이를 위한 한 가지 방법으로, '질의 함수(읽기 함수)는 모두 부수효과가 없어야 한다'는 규칙을 따르는 것이다.
  * 명령-질의(Command-query separation)라 한다.
* 값을 반환하면서 부수효과도 있는 함수는 상태를 변경하는 부분과 질의하는 부분을 분리한다.
* 이 리팩토링을 마친 후에는 새로 만든 질의 함수와 원래 함수에 (정리해야 할) 중복이 남아 있을 수 있다.

- - -

### 절차
1. 대상 함수를 복제하고 질의 목적에 충실한 이름을 짓는다.
2. 새 질의 함수에서 부수효과를 모두 제거한다.
3. 정적 검사를 수행한다.
4. 원래 함수(변경 함수)를 호출하는 곳을 모두 찾아낸다. 호출하는 곳에서 반환 값을 사용한다면 질의 함수를 호출하도록 바꾸고, 원래 함수를 호출하는 코드를 바로 아래 줄에 새로 추가한다. 하나 수정할 때마다 테스트한다.
5. 원래 함수에서 질의 관련 코드를 제거한다.
6. 테스트한다.
