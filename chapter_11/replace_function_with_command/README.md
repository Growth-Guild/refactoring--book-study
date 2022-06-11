## 함수를 명령으로 바꾸기 (Replace Function with Command)

### as-is
```javascript
function score(candidate, medicalExam, scoringGuide) {
    let reulst = 0;
    let healthLevel = 0;
    // ...
}
```

### to-be
```javascript
class Scorer {
    constructor(candidate, medicalExam, scoringGuide) {
        this._candidate = candidate;
        this._medicalExam = medicalExam;
        this._scoringGuide = scoringGuide;
    }
    
    execute() {
        this._result = 0;
        this._healthLevel = 0;
        // ...
    }
}
```

* 함수를 그함수만을 위한 객체 안으로 캡슐화하면 더 유용해지는 상황이 있다.
* 이런 객체를 '명령 객체' 또는 단순히 '명령(Command)'라고 한다.
* 명령 객체의 대부분은 메서드 하나로 구성되며, 이 메서드를 요청해 실행하는 것이 이 객체의 목적이다.
* 명령은 되돌리기 같은 보조 연산을 제공할 수 있으며, 수명주기를 더 정밀하게 제어하는 데 필요한 매개변수를 만들어주는 메서드도 제공할 수 있다.
* 상속과 훅을 이용해 사용자 맞춤형으로 만들 수도 있다.
* 객체는 지원하지만 일급 함수를 지원하지 않는 프로그래밍 언어를 사용할 때는 명령을 이용해 일급 함수의 기능 대부분을 흉내 낼 수 있다.
* 중첩 함수를 지원하지 않는 언어에서도 메서드와 필드를 이용해 복잡한 함수를 잘게 쪼갤 수 있고, 이렇게 쪼갠 메서드들을 테스트와 디버깅에 직접 이용할 수 있다.

- - -

### 절차
1. 대상 함수의 기능을 옮길 빈 클래스를 만든다. 클래스 이름은 함수 이름에 기초해 짓는다.
2. 방금 생성한 빈 클래스로 함수를 옮긴다.
   * 리팩토링이 끝날 때까지는 원래 함수를 전달 함수 역할로 남겨둔다.
   * 명령 관련 이름은 사용하는 프로그래밍 언어의 명명규칙을 따른다. 규칙이 따로 없다면 'execute'나 'call' 같이 명령의 실행 함수에 흔히 쓰이는 이름을 사용한다.
3. 함수의 인수들 각각은 명령의 필드로 만들어 생성자를 통해 설정할지 고민해본다.
