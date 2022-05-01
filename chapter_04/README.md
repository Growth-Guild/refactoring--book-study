# 테스트 구축하기

- - -

### 자가 테스트 코드의 가치
* 모든 테스트를 완전히 자동화하고 그 결과까지 스스로 검사하게 만드는 것이 좋다.
* 테스트 스위트는 강력한 버그 검출 도구로, 버그를 찾는 데 걸리는 시간을 대폭 줄여준다.
* 테스트를 작성하다보면 구현보다 인터페이스에 집중하게 된다.
* 자주 테스트하고, 작성 중인 코드는 최소한 몇 분 간격으로 테스트하고, 적어도 하루에 한 번은 전체 테스트를 돌려보는 것이 좋다.

- - -

### 테스트 추가하기
* 테스트는 위험 요인을 중심으로 작성해야 한다.
* 테스트의 목적은 어디까지나 현재 혹은 향후에 발생하는 버그를 찾는 데 있다.
* 완벽하게 만드느라 테스트를 수행하지 못하느니, 불완전한 테스트라도 작성해 실행하는 게 낫다.
* 일반 코드와 마찬가지로 테스트 코드에서도 중복은 의심해봐야 한다.
* 아래와 같이 테스트끼리 상호작용하게 하는 공유 픽스처를 생성해서는 안된다.
```javascript
describe('province', function () {
    const asia = new Province(sampleProvinceData());    // 이렇게 하면 안된다.
    it('shortfall', function () {
        expect(asia.shortfall).equal(5);
    });

    it('profit', function() {
        expect(asia.profit).equal(230);
    })
});
```
* 위 코드는 asia 객체의 내용을 수정하면 테스트를 실행하는 순서에 따라 결과가 달라지게 된다.
* 아래와 같이 beforeEach 구문으로 테스트 바로 전에 실행되어 초기화하여 모든 테스트들을 독립적으로 구성해야 한다.
```javascript
describe('province', function () {
    let asia;
    beforeEach(function() {
        asia = new Province(sampleProvinceData());
    });
    
    it('shortfall', function () {
        expect(asia.shortfall).equal(5);
    });

    it('profit', function() {
        expect(asia.profit).equal(230);
    })
});
```

### 픽스처 수정하기
* 일반적으로 it 구문 하나당 검증도 하나씩만 하는 게 좋다.
* 앞쪽 검증을 통과하지 못하면 나머지 검증은 실행해보지 못하고 테스트가 실패하게 되는데, 실패 원인을 파악하는 데 유용한 정보를 놓치기 쉽기 때문이다.

#### 경계 조건 검사하기
* 의도한대로 사용하는 상황만 테스트하는 것보다는 이 범위를 벗어나 문제가 생길 가능성이 있는 경계 조건을 생각해보고 그 부분을 집중적으로 테스트하는 것이 좋다.
