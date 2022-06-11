## 수정된 값 반환하기 (Return Modified Value)

### as-is
```javascript
let totalAscent = 0;
calculateAscent();

function calculatgeAscent() {
    for (let i = 1; i < points.length; i++) {
        const verticalChange = points[i].elevation - points[i - 1].elevation;
        totalAscent += (verticalChange > 0) ? verticalChange: 0;
    }
}
```

### to-be
```javascript
const totalAscent = calculateAscent();

function calculateAscent() {
    let result = 0;
    for (let i = 0; i < points.length; i++) {
        const verticalChange = points[i].elevation - points[i - 1].elevation;
        result += (verticalChange > 0) ? verticalChange : 0;
    }
    return result;
}
```

* 데이터가 어떻게 수정되는지를 추적하는 일은 코드에서 이해하기 가장 어려운 부분 중 하나다.
* 데이터가 수정된다면 그 사실을 명확히 알려주어서, 어느 함수가 무슨 일을 하는지 쉽게 알 수 있게 하는 일은 중요하다.
* 변수를 갱신하는 함수라면 수정된 값을 반환하여 호출자가 그 값을 변수에 담아두도록 한다. 이 방식은 호출자 코드를 읽을 때 변수가 갱신될 것임을 분명히 인지하게 한다.
  * 해당 변수의 값을 단 한 번만 정하면 될 때 유용하다.
* 값 하나를 계산한다는 분명한 목적이 있는 함수들에게는 효과적이고, 반대로 값 여러 개를 갱신하는 함수에는 효과적이지 않다.
* '함수 옮기기'의 준비 작업으로 적용하기 좋은 리팩토링이다.

- - -

### 절차
1. 함수가 수정된 값을 반환하게 하여 호출자가 그 값을 자신의 변수에 저장하게 한다.
2. 테스트한다.
3. 피호출 함수 안에 반환할 값을 가리키는 새로운 변수를 선언한다.
4. 테스트한다.
5. 계산이 선언과 동시에 이뤄지도록 통합한다.
6. 테스트한다.
7. 피호출 함수의 변수 이름을 새 역할에 어울리도록 바꿔준다.
8. 테스트한다.
