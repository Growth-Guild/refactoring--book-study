## 조건문 분해하기 (Decompose Conditional)

### as-is
```javascript
if (!aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd))
    charge = quantity * plan.summerRate;
else
    charge = quantity * plan.regularRate + plan.regularServiceCharge;
```

### to-be
```javascript
if (summer())
    charge = summerCharge();
else
    charge = regularCharge();
```

* 복잡한 조건부 로직은 프로그램을 복잡하게 만드는 가장 흔한 원흉에 속한다.
* 조건을 검사하고 그 결과에 따른 동작을 표현한 코드는 무슨 일이 일어나는지는 이야기해주지만 '왜' 일어나는지는 제대로 말해주지 않을 때가 많은 것이 문제다.
* 코드를 부위별로 분해한 다음 해체된 코드 덩어리들을 각 덩어리의 의도를 살린 이름의 함수 호출로 바꾸면 전체적인 의도가 더 잘 드러난다.

- - -

### 절차
1. 조건식과 그 조건식에 딸린 조건절 각각을 함수로 추출한다.
