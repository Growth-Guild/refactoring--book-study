## 클래스 인라인하기 (Inline Class)

### as-is
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

### to-be
```javascript
class Person {
    get officeAreaCode() {return this._officeAreaCode;}
    get officeNumber() {return this._officeNubmer;}
}
```

* "클래스 추출하기"를 거꾸로 돌리는 리팩터링이다.
* 역할을 옮기는 리팩터링을 하고나서 특정 클래스에 남는 역할이 거의 없을 때 적용한다.
* 두 클래스의 기능을 지금과는 다르게 배분하고 싶을 때도 클래스를 인라인한다. 클래스를 하나로 합친 다음 새로운 클래스로 추출하는게 더 쉬울 수도 있기 때문이다.

- - -

### 절차
1. 소스 클래스의 각 public 메서드에 대응하는 메서드들을 타깃 클래스에 생성한다. 이 메서드들은 단순히 작업을 소스 클래스로 위임해야 한다.
2. 소스 클래스의 메서드를 사용하는 코드를 모두 타킷 클래스의 위임 메서드를 사용하도록 바꾼다. 하나씩 바꿀 때마다 테스트한다.
3. 소스 클래스의 메서드와 필드를 모드 타킷 클래스로 옮긴다. 마찬가지로 하나씩 옮길 때마다 테스트한다.
4. 소스 클래스를 삭제한다.
