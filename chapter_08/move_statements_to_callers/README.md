## 문장을 호출한 곳으로 옮기기 (Move Statements to Callers)

### as-is
```javascript
emitPhotoData(outStream, person.photo);

function emitPhotoData(outStream, photo) {
    outStream.write(`<p>제목: ${photo.title}</p>\n`);
    outStream.write(`<p>위치: ${person.photo.location}</p>\n`);
}
```

### to-be
```javascript
emitPhotoData(outStream, person.photo);
outStream.write(`<p>위치: ${person.photo.location}</p>\n`);

function emitPhotoData(outStream, photo) {
    outStream.write(`<p>제목: ${photo.title},/P.\n`);
}
```

* 코드베이스의 기능 범위가 달라지면 추상화의 경계도 변하게 되는데, 이는 초기에는 응집도 높고 한 가지 일만 수행하던 함수가 둘 이상의 일을 하게 될 수도 있다는 뜻이다.
* 여러 곳에서 사용하던 기능이 일부 호출자에게는 다르게 동작하도록 바뀌어야 하는 경우가 있다.

- - -

### 절차
1. 호출자가 한두 개뿐이고 피호출 함수도 간단한 단순한 상황이면, 피호출 함수의 처음(혹은 마지막)줄들을 잘라내어 호출자들로 복사해 넣는다. 테스트를 통과하면 리팩토링은 끝난다.
2. 더 복잡한 상황에서는 이동하지 않기를 원하는 모든 문장을 함수로 추출한 다음 검색하기 쉬운 임시 이름을 지어준다.
3. 원래 함수를 인라인한다.
4. 추출된 함수의 이름을 원래 함수의 이름으로 변경한다.
