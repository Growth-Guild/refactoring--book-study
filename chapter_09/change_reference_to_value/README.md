## 참조를 값으로 바꾸기 (Change Reference to Value)

### as-is
```javascript
class Product {
    applyDiscount(arg) {this._price.amount -= arg;}
}
```

### to-be
```javascript
class Product {
    applyDiscount(arg) {
        this._price = new Money(this._price.amount - arg, this._price.currency);
    }
}
```

* 필드를 값으로 다룬다면 내부 객체의 클래스를 수정하여 값 객체로 만들 수 있다.
* 값 객체는 불변이기 때문에 자유롭게 활용하기 좋다.
* 불변 데이터는 외부에 전달되어도 그 값이 바뀌어서 생기는 예상치 못한 문제로부터 자유롭게 해준다.
* 값 객체는 분산 시스템과 동시성 시스템에서 유용하다.
* 객체를 여러 객체에서 공유하여, 공유 객체의 값이 변경되었을 때 이를 관련 객체에 모두에게 알려줘야 한다면 공유 객체를 참조로 다루어야 한다. 즉, '참조를 값으로 바꾸기' 리팩토링 적용을 하면 안된다.

- - -

### 절차
1. 후보 클래스가 불변인지, 혹은 불변이 될 수 있는지 확인한다.
2. 각각의 세터를 하나씩 제거한다.
3. 이 값 객체의 필드들을 사용하는 동치성 비교 메서드를 만든다.
