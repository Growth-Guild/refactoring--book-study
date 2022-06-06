## 중첩 조건문을 보호 구문으로 바꾸기 (Replace Nested Conditional with Guard Clauses)

### as-is
```javascript
function getPayAmount() {
    let result;
    if (isDead)
        result = deadAmount()
    else {
        if (isSeparated)
            result = separatedAmount();
        else {
            if (isRetired)
                result = retiredAmount();
            else
                result = normalPayAmount();
        }
    }
    return result;
}
```

### to-be
```javascript
function getPayAmount() {
    if (isDead) return deadAmount();
    if (isSeparated) return separatedAmount();
    if (isRetired) return retiredAmount();
    return normalPayAmount();
}
```

* 조건문은 참인 경로와 거짓인 경로 모두 정상 동작으로 이어지는 형태와, 한쪽만 정상인 형태다.
* 두 형태는 의도하는 바가 다르므로 그 의도가 코드에 드러나야 한다. 두 경로 모두 정상 동작이라면 if와 else 절을 사용한다.
* 한쪽만 정상이라면 비정상 조건을 if에서 검사한 다음, 조건이 참이면(비정상이면) 함수에서 빠져나온다. 이 형태를 흔히 보호 구문이라고 한다.

- - -

### 절차
1. 교체해야 할 조건 중 가장 바깥 것을 선택하여 보호 구문으로 바꾼다.
2. 테스트한다.
3. 1~2 과정을 필요한 만큼 반복한다.
4. 모든 보호 구문이 같은 결과를 반환한다면 보호 구문들의 조건식을 통합한다.
