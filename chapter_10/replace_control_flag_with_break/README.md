## 제어 플래그를 탈출문으로 바꾸기 (Replace Control Flag with Break)

### as-is
```javascript
for (const p of people) {
    if (!found) {
        if (p === '조커') {
            sendAlert();
            found = true;
        }
    }
}
```

### to-be
```javascript
for (const p of people) {
    if (p === '조커') {
        sendAlert();
        break;
    }
}
```

* 제어 플래그란 코드의 동작을 변경하는 데 사용하는 변수를 말하며, 어딘가에서 값을 계산해 제어 플래그에 설정한 후 다른 어딘가의 조건문에서 검사하는 형태로 쓰인다.
* 리팩터링으로 충분히 간소화할 수 있음에도 복잡하게 작성된 코드에서 흔히 나타난다.

- - -

### 절차
1. 제어 플래그를 사용하는 코드를 함수로 추출할지 고려한다.
2. 제어 플래그를 갱신하는 코드 각각을 적절한 제어문(return, break, continue)으로 바꾼다. 하나 바꿀 때마다 테스트한다.
3. 모두 수정했다면 제어 플래그를 제거한다.
