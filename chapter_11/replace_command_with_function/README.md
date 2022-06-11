## 명령을 함수로 바꾸기 (Replace Command with Function)

### as-is
```javascript
class ChargeCalculator {
    constructor(costomer, usage) {
        this._customer = customer;
        this._usage = usage;
    }
    execute() {
        return this._customer.rate * this._usage;
    }
}
```

### to-be
```javascript
function charge(customer, usage) {
    return customer.rate * usage;
}
```

* 명령 객체는 큰 연산 하나를 여러 개의 작은 메서드로 쪼개고 필드를 이용해 쪼개진 메서듣끼리 정보를 공유할 수 있다.
* 명령은 그저 함수를 하나 호출해 정해진 일을 수행하는 용도로 주로 쓰인다.
* 만약 로직이 크게 복잡하지 않다면 명령 객체는 장점보다 단점이 크니 평범한 함수로 바꿔주는 것이 낫다.

- - -

### 절차
1. 명령을 생성하는 코드와 명령의 실행 메서드를 호출하는 코드를 함께 함수로 추출한다.
2. 명령의 실행 함수가 호출하는 보조 메서드를 각각을 인라인한다.
3. 함수 선언 바꾸기를 적용하여 생성자의 매개변수 모두를 명령의 실행 메서드로 옮긴다.
4. 명령의 실행 메서드에서 참조하는 필드들 대신 대응하는 매개변수를 사용하게끔 바꾼다. 하나씩 수정할 때마다 테스트한다.
5. 생성자 호출과 명령의 실행 메서드 호출을 호출자(대체 함수) 안으로 인라인한다.
6. 테스트한다.
7. '죽은 코드 제거하기'로 명령 클래스를 없앤다.
