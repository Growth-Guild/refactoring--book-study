## 알고리즘 교체하기 (Substitute Algorithm)

### as-is
```javascript
function foundPerson(people) {
    for (let i = 0; i < people.length; i++) {
        if (people[i] === "Don") {
            return "Don";
        }
        if (people[i] === "John") {
            return "John";
        }
        if (people[i] === "Kent") {
            return "Kent";
        }
    }
    
    return "";
}
```

### to-be
```javascript
function foundPerson(people) {
    const candidates = ["Don", "John", "Kent"];
    return people.find(p => candidates.includes(p)) || '';
}
```

* 어떤 목적을 달성하는 방법은 여러 가지가 있게 마련이다.
* 문제를 더 확실히 이해하고 훨씬 쉽게 해결하는 방법을 발견했을 때 적용한다.
* 내 코드와 똑같은 기능을 제공하는 라이브러리를 발견했을 때도 마찬가지다.
* 이 작업을 수행하려면 반드시 메서드를 가능한 한 잘게 나눴는지 확인해야 한다. 거대하고 복잡한 알고리즘을 교체하는 일은 매우 어렵기 때문에 알고리즘을 간소화하는 작업부터 해야 작업이 쉬워지기 때문이다.

- - -

### 절차
1. 교체할 코드를 함수 하나에 모은다.
2. 이 함수만을 이용해 동작을 검증하는 테스트를 마련한다.
3. 대체할 알고리즘을 준비한다.
4. 정적 검사를 수행한다.
5. 기존 알고리즘과 새 알고리즘의 결과를 비교하는 테스트를 수행한다. 두 결과가 같다면 리팩터링이 끝난다. 그렇지 않다면 기존 알고리즘을 참고해서 새 알고리즘을 테스트하고 디버깅한다.
