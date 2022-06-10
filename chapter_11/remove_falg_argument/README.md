## 플래그 인수 제거하기 (Remove Flag Argument)

### as-is
```javascript
function setDimension(name, value) {
    if (name === 'height') {
        this._height = value;
        return;
    }
    if (name === 'width') {
        this._width = value;
        return;
    }
}
```

### to-be
```javascript
function setHeight(value) {this._height = value;}
function setWidth(value) {this._width = value;}
```

* 플래그 인수란 호출되는 함수가 실핼할 로직을 호출하는 쪽에서 선택하기 위해 전달하는 인수다. 예를 들면 아래와 같은 코드이다.
```javascript
function bookConcert(aCustomer, isPremium) {
    if (isPremium) {
        // 프리미엄 예약용 로직
    } else {
        // 일반 예약용 로직
    }
}
```
* 플래그 인수는 호출할 수 있는 함수들이 무엇이 있고 어떻게 해야 하는지를 이해하기 어려워지게 만든다.
* 플래그 인수는 함수들의 기능 차이가 잘 드러나지 않게 만든다.
* boolean 플래그는 코드를 읽는 이에게 뜻을 온전히 전달하지 못한다.
* 함수 하나에서 플래그 인수를 두 개 이상 사용하면 플래그 인수를 써야 하는 합당한 근거가 될 수 있다. 플래그 인수 없이 구현하려면 플래그 인수들의 가능한 조합 수만큼의 함수를 만들어야 하기 때문이다.
* 반대로 플래그 인수가 둘 이상이면 함수 하나가 너무 많은 일을 처리하고 있다는 신호이기도 하다.

- - -

### 절차
1. 매개변수로 주어질 수 있는 값 각각에 대응하는 명시적 함수들을 생성한다.
2. 원래 함수를 호출하는 코드들을 모두 찾아서 각 리터럴 값에 대응되는 명시적 함수를 호출하도록 수정한다.
