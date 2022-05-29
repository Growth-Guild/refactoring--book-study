## 클래스 추출하기 (Extract Class)

### as-is
```javascript
class Person {
    get officeAreaCode() {return this._officeAreaCode;}
    get officeNumber() {return this._officeNumber;}
}
```

### to-be
```javascript
class Person {
    get officeAreaCode() {return this._telephoneNumber.areaCode;}
    get officeNumber() {return this._telephoneNumber.number;}
}

class TelephoneNumber {
    get areaCode() {return this._areaCode;}
    get number() {return this._number;}
}
```

* 클래스는 반드시 명확하게 추상화하고 소수의 주어진 역할만 처리해야 한다.
* 메서드와 데이터가 너무 많은 클래스는 이해하기가 쉽지 않으니 잘 살펴보고 적절히 분리하는 것이 좋다.
* 함께 변경되는 일이 많거나 서로 의존하는 데이터들도 분리한다.
  * 특정 데이터나 메서드 일부를 제거하면 어떤 일이 일어나는지 자문해보면 판단에 도움이 된다.
  * 제거해도 다른 필드나 메서드들이 논리적으로 문제가 없다면 분리할 수 있다는 뜻이다.
* 작은 일부의 기능만을 위해 서브클래스를 만들거나, 확장해야 할 기능이 무엇이냐에 따라 서브클래스를 만드는 방식도 달라진다면 클래스를 나눠야 한다는 신호다.

- - -

### 절차
1. 클래스의 역할을 분리할 방법을 정한다.
2. 분리될 역할을 담당할 클래스를 새로 만든다.
3. 원래 클래스의 생성자에서 새로운 클래스의 인스턴스를 생성하여 필드에 저정한다.
4. 분리될 역할에 필요한 필드들을 새 클래스로 옮긴다. (하나씩 옮길 때마다 테스트한다.)
5. 메서드들도 새 클래스로 옮긴다. 다른 메서드를 호출하기보다는 호출 당하는 일이 많은 저수준 메서드부터 옮긴다. 마찬가지로 하나씩 옮길 때마다 테스트한다.
6. 양쪽 클래스의 인터페이스를 살펴보면서 불필요한 메서드를 제거하고, 이름도 새로운 환경에 맞게 바꾼다.
7. 새 클래스를 외부로 노출할지 정하고, 노출하기로 했다면 새 클래스에 "참조를 값으로 바꾸기"를 적용할지 고민해본다.
