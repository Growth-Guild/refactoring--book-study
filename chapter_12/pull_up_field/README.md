## 필드 올리기 (Pull Up Field)

### as-is
```java
class Employee { /* ... */ }

class Salesperson extends Employee {
    private String name;
}

class Engineer extends Employee {
    private String name;
}
```

### to-be
```java
class Employee {
    protected String name;
}

class Salesperson extends Employee { /* ... */ }
class Engineer extends Employee { /* ... */ }
```

* 서브클래스들이 독립적으로 개발되었거나 뒤늦게 하나의 계층구조로 리팩토링된 경우라면 일부 기능이 중복되어 있을 때가 있다. 특히 필드가 중복되기 쉽다.
* 이러한 필드들은 이름이 비슷한 게 보통이지만, 항상 그런 것은 아니므로 어떤 일이 벌어지는지를 알아내려면 필드들이 어떻게 이용되는지 분석해봐야 한다.
* 분석 결과 필드들이 비슷한 방식으로 쓰인다고 판단되면 슈퍼클래스로 옮긴다.
* 데이터 중복 선언을 없앨 수 있다.
* 해당 필드를 사용하는 동작을 서브클래스에서 슈퍼클래스로 옮길 수 있다.
* 동적 ㅇ너어 중에는 필드를 클래스 정의에 포함시키지 않는 경우가 많은데, 이런 경우에는 필드를 올리기 전에 반드시 생성자 본문부터 올려야 한다.

- - -

### 절차
1. 후보 필드들을 사용하는 곳 모두가 그 필드들을 똑같은 방식으로 사용하는지 면밀히 살핀다.
2. 필드들의 이름이 각기 다르다면 똑같은 이름으로 바꾼다. (필드 이름 바꾸기)
3. 슈퍼클래스에 새로운 필드를 생성한다.
4. 서브클래스의 필드들을 제거한다.
5. 테스트한다.
