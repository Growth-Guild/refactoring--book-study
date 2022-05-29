## 중개자 제거하기 (Remove Middle Man)

### as-is
```javascript
manager = aPerson.manager;

class Person {
    get manager() {return this.department.manager;}
}
```

### to-be
```javascript
manager = aPerson.department.manager;
```

* "위임 숨기기"의 반대되는 리팩터링이다.
* 클라이언트가 위임 객체의 또 다른 기능을 사용하고 싶을 대마다 서버에 위임 메서드를 추가해야 한다.
* 이렇게 기능을 추가하다 보면 서버 클래스는 그저 중개자 역할로 전락하여, 차라리 클라이언트가 위임 객체를 직접 호출하는 게 나을 수 있다.

- - -

### 절차
1. 위임 객체를 얻는 게터를 만든다.
2. 위임 메서드를 호출하는 클라이언트가 모두 이 게터를 거치도록 수정한다. 하나씩 바꿀 때마다 테스트한다.
3. 모두 수정했다면 위임 메서드를 삭제한다.
