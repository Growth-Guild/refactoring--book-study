## 단계 쪼개기 (Split phase)

### as-is
```javascript
const orderData = orderString.split(/\s+/);
const productPrice = priceList[orderData[0].split("-")[1]];
const orderPrice = parseInt(orderData[1]) * productPrice;
```

### to-be
```javascript
const orderRecord = parseORder(order);
const orderPrice = price(orderRecord, priceList);

function parseOrder(aString) {
    const values = aString.split(/\s+/);
    return ({
        productID: values[0].split("-")[1],
        quantity: parseInt(value[1]),
    });
}
function price(order, priceList) {
    return order.quantity * priceList[order.productID];
}
```

* 서로 다른 두 대상을 한꺼번에 다루는 코드를 발견하면 각각을 별개 모듈로 나누어서 두 대상을 동시에 생각할 피료 없이 하나에만 집중할 수 있도록 한다.
* 이렇게 분리하는 간편한 방법 중 하나는 동작을 연이은 두 단계로 쪼개는 것이다.
* 각 단계는 자신만의 문제에만 집중하기 때문에 나머지 단계에 관해서는 자세히 몰라도 이해할 수 있다.
* 다른 단계로 볼 수 있는 코드 여영ㄱ들이 서로 다른 데이터와 함수를 사용한다면 단계 쪼개기에 적합하다는 뜻이다.

- - -

### 절차
1. 두 번째 단계에 해당하는 코드를 독립 함수로 추출한다.
2. 테스트한다.
3. 중간 데이터 구조를 만들어서 앞에서 추출한 함수의 인수로 추가한다.
4. 테스트한다.
5. 추출한 두 번째 단계 함수의 매개변수를 하나씩 검토한다. 그중 첫 번째 단계에서 적용되는 것은 중간 데이터 구조로 옮긴다. 하나씩 옮길 때마다 테스트한다.
6. 첫 번째 단계 코드를 함수로 추출하면서 중간 데이터 구조를 반환하도록 한다.
