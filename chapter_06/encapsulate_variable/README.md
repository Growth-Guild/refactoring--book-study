## 변수 캡슐화하기 (Encapsulate variable)

### as-is
```javascript
let defaultOwner = {firstName: "Chul", lastName: "Yun"};
```
### to-be
```javascript
let defaultOwnerData = {firstName: "Chul", lastName: "Yun"};
export function defaultOwner() {return defaultOwnerData}
export function setDefaultOwner(arg) {defaultOwnerData = arg;}
```

* 데이터는 참조하는 모든 부분을 한 번에 바꿔야 코드가 제대로 작동한다.
* 짧은 함수 안의 임시 변수처럼 유효범윅 ㅏ아주 좁은 데이터는 어려울 게 없지만, 유효범위가 넓어질수록 다루기 어려워진다.
* 그래서 접근할 수 있는 범위가 넓은 데이터를 옭길 때는 먼저 그 데이터로의 접근을 독점하는 함수를 만드는 식으로 캡슐화하는 것이 가장 좋은 방법일 때가 많다.
* 데이터 캡슐화는 데이터를 변경하고 사용하는 코드를 감시할 수 있는 확실한 통로가 되어주기 대문에 데이터 변경 전 검증이나 변경 후 추가 로직을 쉽게 끼워넣을 수 있다.
* 데이터의 유효범위가 넓을수록 캡슐화해야 한다.
* 불변 데이터는 가변 데이터보다 캡슐화할 이유가 적다. 변경될 일이 없기 때문에 갱신 전 검증 같은 추가 로직이 필요없기 때문이다.
- - -

### 절차
1. 변수로의 접근과 갱신을 전담하는 캡슐화 함수들을 만든다.
2. 정적 검사를 수행한다.
3. 변수를 직접 참조하던 부분을 모두 적절한 캡슐화 함수 호출로 바꾼다. 하나씩 바꿀 때마다 테스트한다.
4. 변수의 접근 범위를 제한한다.
5. 테스트한다.
6. 변수 값이 레코드라면 레코드 캡슐화하기를 적용할지 고려해본다.
