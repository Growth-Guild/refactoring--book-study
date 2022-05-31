## 필드 옮기기 (Move Field)

### as-is
```javascript
class Customer {
    get plan() {return this._plan;}
    get discountRate() {return this._discountRate;}
}
```

### to-be
```javascript
class Customer {
    get plan() {return this._plan};
    get discountRate() {return this.plan.discountRate;}
}
```

* 주어진 문제에 적합한 데이터 구조를 활용하면 동작 코드는 자연스럽게 단순하고 직관적으로 짜여진다.
* 데이터 구조를 잘못 선택하면 이해하기 어려운 코드가 만들어지는 데서 그치지 않고, 데이터 구조 자체도 그 프로그램이 어떤 일을 하는지 파악하기 어렵게 한다.
* 함수에 항상 함께 건네지는 데이터 조각들은 상호 관계가 명확하게 드러나도록 한 레코드에 담는 게 가장 좋다.
* 한 레코드를 변경하려 할 때 다른 레코드의 필드까지 변경해야 한다면 필드위 위치가 잘못되었다는 신호다.

- - -

### 절차
1. 소스 필드가 캡슐화되어 있지 않다면 캡슐화한다.
2. 테스트한다.
3. 타깃 객체에 필드(와 접근자 메서드들)를 생성한다.
4. 정적 검사를 수행한다.
5. 소스 객체에서 타깃 객체를 참조할 수 있는지 확인한다.
6. 접근자들이 타깃 필드를 사용하도록 수정한다.
7. 테스트한다.
8. 소스 필드를 제거한다.
9. 테스트한다.
