## 조건식 통합하기 (Consolidate Conditional Expression)

### as-is
```javascript
if (anEmployee.seniority < 2) return 0;
if (anEmployee.monthsDisabled > 12) return 0;
if (anEmployee.isPartTime) return 0;
```

### to-be
```javascript
if (isNotEligibleForDisability()) return 0;

function isNotEligibleForDisability() {
    return ((anEmployee.seniority > 2)
        || (anEmployee.monthsDisabled > 12)
        || (anEmployee.isPartTime));
}
```

* 비교하는 조건은 다르지만 그 결과로 수행하는 동작이 같은 코드는 하나로 통합하는 것이 낫다.
* 여러 조각으로 나뉜 조건들을 하나로 통합함으로써 내가 하려는 일이 더 명확해진다.
  * 나눠서 순서대로 비교해도 같지만, 읽는 사람은 독립된 검사들이 우연히 함께 나열된 것으로 오해할 수 있다.
* 이 작업이 '함수 추출하기'까지 이어질 가능성이 높다. 복잡한 조건식을 함수로 추출하면 코드의 의도가 훨씬 분명하게 드러나는 경우가 많다.
* 하나의 검사라고 생각할 수 없는 독립된 검사들인 경우에는 이 리팩터링을 해서는 안된다.

- - -

### 절차
1. 해당 조건식들 모두에 부수효과가 없는지 확인한다.
   * 부수효과가 있다면 조건식들에 '질의 함수와 변경함수 분리하기'를 먼저 적용한다.
2. 조건문 두 개를 선택하여 두 조건문의 조건식들을 논리 연산자로 결합한다.
3. 테스트한다.
4. 조건이 하나만 남을 때까지 2~3 과정을 반복한다.
5. 하나로 합쳐진 조건식을 함수로 추출할지 고려해본다.
