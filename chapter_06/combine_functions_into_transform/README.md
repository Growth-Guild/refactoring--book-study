## 여러 함수를 변환 함수로 묶기 (Combine functions into transform)

### as-is
```javascript
function base(aReading) { /* ... */ }
function taxableCharge(aReading) { /* ... */ }
```

### to-be
```javascript
function enrichReading(argReading) {
    const aReading = _.cloneDeep(argReading);
    aReading.baseCharge = base(aReading);
    aReading.taxableCharge = taxableCharge(aReading);
    return aReading;
}
```

* 데이터를 입력받아서 여러 가지 정보를 도출할 때, 이 정보가 사용되는 곳마다 같은 로직이 반복되면 한 곳에 모아두는 것이 좋다.
* 한 곳에 모아두면 갱신을 일관된 장소에서 처리할 수 있고 로직 중복도 막을 수 있다.
* 이 리팩터링 대신 여러 함수를 클래스로 묶기로 처리해도 된다. 둘 중 어느 것을 적용해도 좋다.
  * 둘 사이에는 중요한 차이가 하나 있는데, 원본 데이터가 코드 안에서 갱신될 때는 클래스로 묶는 편이 훨씬 낫다. 변환 함수로 묶으면 가공한 데이터를 새로운 레코드에 저장하므로, 원본 데이터가 수정되면 일관성이 깨질 수 있기 때문이다.
* 여러 함수를 한 곳에 묶는 이유는 도출 로직이 중복되는 것을 피하기 위함이다.

- - -

### 절차
1. 변환할 레코드를 입력받아서 값을 그대로 반환하는 변환 함수를 만든다.
   * 이 작업은 대체로 깊은 복사로 처리해야 한다.
2. 묶을 함수 중 함수 하나를 골라서 본문 코드를 변환 함수로 옮기고, 처리 결과를 레코드에 새 필드로 기록한다. 그런 다음 클라이언트 코드가 이 필드를 사용하도록 수정한다.
   * 로직이 복잡하면 함수 추출하기부터 한다.
3. 테스트한다.
4. 나머지 관련 함수도 위 과정에 따라 처리한다.
