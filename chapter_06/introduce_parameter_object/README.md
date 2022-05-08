## 매개변수 객체 만들기 (Introduce parameter object)

### as-is
```javascript
function amountInvoiced(startDate, endDate) {/* ... */}
function amountReceived(startDate, endDate) {/* ... */}
function amountOverdue(startDate, endDate) {/* ... */}
```

### to-be
```javascript
function amountInvoiced(aDateRange) {/* ... */}
function amountReceived(aDateRange) {/* ... */}
function amountOverdue(aDateRange) {/* ... */}
```

* 데이터 항목 여러 개가 여러 함수들에 함께 몰려다니는 경우에는 데이터 구조 하나로 모아주는 것이 좋다.
* 데이터 뭉치를 데이터 구조로 묶으면 데이터 사이의 관계가 명확해진다는 이점을 얻는다.
* 매개변수 또한 줄어들고, 같은 데이터 구조를 사용하는 모든 함수가 원소를 참조할 때 항상 똑같은 이름을 사용하기 때문에 일관성도 높여준다.
* 데이터 구조에 담길 데이터에 공통으로 적용되는 동작을 추출해서 함수로 만들면, 이 과정에서 새로 만든 데이터 구조가 문제 영역을 훨씬 간결하게 표현하는 새로운 추상 개념으로 격상되면서, 코드의 개념적인 그림을 다시 그릴 수도 있다.

- - -

### 절차
1. 적당한 데이터 구조가 아직 마련되어 있지 않다면 새로 만든다. 
   * 클래스로 만들면 나중에 동작까지 함께 묶기 좋다.
2. 테스트한다.
3. 함수 서언 바꾸기로 새 데이터 구조를 매개변수로 추가한다.
4. 테스트한다.
5. 함수 호출 시 새로운 데이터 구조 인스턴스를 넘기도록 수정한다. 하나씩 수정할 때마다 테스트한다.
6. 기존 매개변수를 사용하던 코드를 새 데이터 구조의 원소를 사용하도록 바꾼다.
7. 다 바꿨다면 기존 매개변수를 제거하고 테스트한다.
