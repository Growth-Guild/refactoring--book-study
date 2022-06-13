## 서브클래스 제거하기 (Remove Subclass)

### as-is
```javascript
class Person {
    get genderCode() {return 'X';}
}
class Male extends Person {
    get genderCode() {return 'M';}
}
class Female extends Person {
    get genderCode() {return 'F';}
}
```

### to-be
```javascript
class Person {
    get genderCode() {
        return this._genderCode;
    }
}
```

* 서브클래싱은 원래 데이터 구조와는 다른 변종을 만들거나 종류에 따라 동작이 달라지게 할 수 있는 유용한 메커니즘이다.
* 시스템이 성장함에 따라 서브클래스는 다른 모듈로 이동하거나 완전히 사라지기도 하면서 가치가 바래기도 한다.
* 더 이상 쓰이지 않는 서브클래스는 불필요한 내용을 이해하느라 에너지를 낭비하게 한다.

---

### 절차
1. 서브클래스의 생성자를 팩토리 함수로 바꾼다.
   * 생성자를 사용하는 측에서 데이터 필드를 이용해 어떤 서브클래스를 생성할지 결정한다면 그 결정 로직을 슈퍼클래스의 팩토리 메서드에 넣는다.
2. 서브클래스의 타입을 검사하는 코드가 있다면 그 검사 코드에 '함수 추출하기'와 '함수 옮기기'를 차례로 적용하여 슈퍼클래스로 옮긴다. 하나 변경할 때마다 테스트한다.
3. 서브클래스의 타입을 나타내는 필드를 슈퍼클래스에 만든다.
4. 서브클래스를 참조하는 메서드가 방금 만든 타입 필드를 이용하도록 수정한다.
5. 서브클래스를 지운다.
6. 테스트한다.
