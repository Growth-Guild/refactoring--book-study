## 파생 변수를 질의 함수로 바꾸기 (Replace Derived Variable with Query)

### as-is
```javascript
class Discount {
    get discountedTotal() {return this._discountedTotal;}
    set discount(aNumber) {
        const old = this._discount;
        this._discount = aNumber;
        this._discountTotal += old - aNumber;
    }
}
```

### to-be
```javascript
class Discount {
    get discountedTotal() {return this._baseTotal - this._discount;}
    set discount(aNumber) {this._discount = aNumber;}
}
```

* 가변 데이터는 한 쪽 코드에서 수정한 값이 연쇄 효과를 일으켜 다른 쪽 코드에 원인을 찾기 어려운 문제를 야기할 수 있다.
* 가변 데이터는 유효 범위를 가능한 한 좁혀야 한다.
* 피연산자 데이터가 불변이라면 계산 결과도 일정하므로 불변으로 만들 수 있다. 따라서 새로운 데이터 구조를 생성하는 변형 연산이라면 계산 코드를 대체할 수 있더라도 그대로 두는 것이 좋다.

- - -

### 절차
1. 변수 값이 갱신되는 지점을 모두 찾는다. 필요하다면 '변수 쪼개기'를 활용하여 각 갱신 지점에서 변수를 분리한다.
2. 해당 변수의 값을 계산해주는 함수를 만든다.
3. 해당 변수가 사용되는 모든 곳에 assertion을 추가하여 함수의 계산 결과가 변수의 값과 같은지 확인한다.
   * 필요하면 '변수 캡슐화하기'를 적용하여 assertion이 들어갈 장소를 마련해준다.
4. 테스트한다.
5. 변수를 읽는 코드를 모두 함수 호출로 대체한다.
6. 테스트한다.
7. 변수를 선언하고 갱신하는 코드를 '죽은 코드 제거하기'로 없앤다.
