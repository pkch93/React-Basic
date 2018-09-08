# Redux 사용하기

## Redux 핵심 요소들

 1. 스토어

  redux는 어떤 컴포넌트의 상태를 redux store를 통해 관리한다. 이 때, store는 어플리케이션 외부에 존재하기 때문에 부모 컴포넌트가 props로 자식 컴포넌트의 상태를 변화시키는 것보다 훨씬 덜 복잡하게 상태를 관리 할 수 있다.

  따라서, redux를 쓰기 위해서는 store를 생성해야한다.

  > 보통 하나의 Application에는 한 개의  store를 만든다.

  > createStore(reducer function) 으로 스토어 객체를 만들 수 있다.

  2. subscribe(f)

    subscribe 함수는 store에게 상태가 변화하면 실행할 함수를 전달해주는 방법이다.

  3. dispatch(action)

    dispatch는 상태를 변화시키고자 할 때 사용하는 함수이다. 파라미터로 action 객체를 전달하여 redux store를 생성할 때 전달한 reducer 함수를 불러온다.

  4. reducer(currentState, action)

    reducer함수는 dispatch 함수를 통해 받은 action객체를 보고 state를 바꾸는 함수이다.

    state가 바뀌면 listener라는 함수가 발동하여 해당 컴포넌트에 상태가 바꼈음을 알려준다. 이 때, 상태가 바꿘 것을 컴포넌트는 알았기 때문에 리렌더링을 실행한다.

  5. connect 함수 - react-redux 라이브러리 내부 함수

  connect 함수는 redux 내부의 state와 dispatch 함수를 Component의 props로 보내는 역할을 한다.

  connect 함수를 사용할 때는 mapStateToProps(state를 props로 변환하여 component에 전달)와 mapDispatchToProps(action function을 props로 변환하여 component에 전달)을 사용할 수 있다.

2018.09.02

react Appliaction에 redux를 사용하는 방법학습

## Presentational 컴포넌트와 Container 컴포넌트

위 두 컴포넌트는 리덕스를 사용하는 프로젝트에서 자주 사용하는 구조이다. 전자는 Dumb, 후자는 Smart라고도 불린다.

- ## Presentational 컴포넌트

  Presentational 컴포넌트는 오직 뷰만을 담당한다. 이 안에는 DOM엘리먼트, Style을 가지며 Presentational 컴포넌트나 Container 컴포넌트를 가지고 있을 수도 있다.

  하지만 해당 컴포넌트는 Redux 스토어에 직접 접근할 수 없으며 props를 이용해야만 접근할 수 있다.

  또한 대부분의 경우 state를 가지고 있지 않으며, 설사 가지고 있더라도 UI 관련된 state를 가진다.(데이터에 관련된것 X)

  주로 함수형 컴포넌트로 만든다.

- ## Container 컴포넌트

Presentational 컴포넌트와 Container 컴포넌트들을 관리하는 용도로 쓴다.

내부에 DOM 엘리먼트가 직접적으로 사용되는 경우는 없다. 사용되더라도 감싸는 용도로만 사용한다. 마찬가지로 Presentational 컴포넌트에 Style을 정의하므로 Container 컴포넌트에는 정의하면 안된다.

state를 가지고 있을 때가 많으며, 리덕스에 직접적으로 접근할 수 있다.

> 페이지, 리스트, 헤더, 사이드바, props가 여러 컴포넌트를 거치는 경우 컨테이너로 구성한다.

2018.09.08

  - immutable.js

  자바스크립트 상에서 불변성의 데이터를 다루는 것을 도와주는 라이브러리 (by Facebook)

### Immutable.js의 기본

  - Map

    객체 대신 사용되는 데이터 구, 이는 Javascript 내부에 있는 Map과는 다르다.

```
  var Map = Immutable.Map;

  var data = Map({
    a:1,
    b:2
  })
```

위와 같이 Map 함수 안에 객체를 넣어서 호출하면 Immutable한 객체를 만들 수 있다.

단, 이렇게 만든 객체는 일반 객체가 아니므로 JS 객체로 바꾸어 다뤄야한다.

이 때, 사용하는 함수가 toJS() 함수이다. Immutable 객체에 toJS() 함수를 사용하면 자바스크립트 객체로 변환된다.

    * Immutable 객체에서 데이터 다루기

      1. 특정 키의 값 불러오기

        get('키값')을 이용하여 파라미터로 전달한 특정 키의 값을 불러올 수 있다.

      2. 깊숙한 값 불러오기

        getIn() 함수를 이용한다.

```
  var fromJS = Immutable.fromJS;
  var data = fromJS({
    a: 1,
    b: 2.
    c: {
      d: 3,
      e: 4
    }
  });
```

        data가 위와 같은 구조를 이루는 Immutable 객체라고 가정하자.

        이 때, getIn(['c', 'd'])를 호출하면 3이라는 값을 반환한다.

      3. 값 설정하기

        값 설정에는 set('키값', 값) 함수를 이용한다. 첫 번째 파라미터에 키값을, 두 번째 파라미터에 키값에 대응하는 값을 입력한다.

> 이 때, set을 한다고 해서 data가 변하는 것은 아니다. 주어진 변화를 적용한 새 Map을 만들어준다.

      4. 깊숙한 값 설정하기

        setIn()을 사용한다. getIn과 마찬가지로 ['c', 'd']와 같은 key값을 설정하고 두 번째 파라미터에 키값에 대응하는 값을 입력한다.

      5. 여러 개의 값 설정하기

        merge는 최상위에서 여러 개의 값을 설정하는 방법,
        mergeIn은 그 하위 단계에서 여러 개의 값을 설정하는 방법이다.

```
  var newData1 = data.merge({a:10, b:10});
  var newData2 = data.mergeIn(['c'], {d: 10, e: 10});
```

        mergeIn 대신 setIn을 Chaining하여 여러번 써도 가능하다.

> 성능상으로 setIn을 여러번 하는 것이 빠르다!

    * List

      List는 배열 대신에 사용하는 데이터 구조이다. 배열과 동일하게 map, filter, sort, push, pop 함수를 내장하고 있다. 이 함수들이 실행되면 또 다른 List를 반환한다.

      1. 생성하기

```
  var List = Immutable.List;
  var list = List([0,1,2,3,4,5]);
```

        위와 같이 List를 사용할 수 있다.

        만약 객체들의 배열이라면 List를 생성할 때 element로 넣어야 추후 get, set 등을 할 수 있다.

```
  var List = Immutable.List;
  var Map = Immutable.Map;
  var fromJS = Immutable.fromJS;

  var list = List([
    Map({value: 1}),
    Map({value: 2})
  ]);

  var list2 = fromJS([
    {value: 1},
    {value: 2}
  ]);
```

        2. 값 읽어오기

          n번째 element를 읽을 때는 get(n)으로 읽을 수 있다.

          만약 n번째 element가 객체라면 getIn()으로 읽어올 수 있다.

          예를 들어 n번째 element의 value 값을 읽을 때는 list.getIn([n, "value"]); 로 읽을 수 있다.

        3. 값 수정하기

          n번째 아이템을 수정할때는 set, setIn을 이용한다.
          또한, update를 이용하여 수정도 가능하다.
          update는 보통 기존값을 참조해야 할 때 편리하게 사용가능하다.

```
  var newList = list.update(1,
    item => item.set("value", item.get("value") * 5)
  );
```

        4. 값 추가하기

          값을 추가할 때는 2가지 방법을 사용할 수 있다. 바로 push()와 unshift()이다.

          push()는 List의 맨 뒤에, unshift는 List의 맨 앞에 추가하는 함수이다.

        5. 아이템 제거하기

          제거 시에는 delete(index), pop()을 이용할 수 있다.
          delete는 파라미터로 들어온 index의 값을 제거한다. pop()은 맨 뒤에 있는 값을 제거해준다.

        6. 크기 가져오기

          List의 크기는 size를 이용한다.
          비어있는지 확인은 isEmpty()를 이용하여 비어있는지 여부를 확인할 수 있다.

## Ducks 구조

Ducks는 Reducer 파일 안에 액션타입과 액션 생성자 함수를 함께 넣어서 관리하고 모듈로 부른다.

Ducks의 최상단에는 액션타입을 지정한다.

그리고 리듀서를 정의하여 export default로 내보낸다.

마찬가지로 액션생성자 또한 export를 이용하여 내보낸다.

이 때, Ducks에서 따라야할 규칙은 액션타입을 만들때 `npm-module-or-app/reducer/ACTION_TYPE`의 형태를 갖춰야한다.
(NPM 모듈이 아니라면 reducer/ACTION_TYPE의 형식도 무방)


## redux-actions를 통한 쉬운 액션관리

redux-actions에는 `createAction`과 `handleActions`가 있다. 이들 함수는 redux의 액션들을 관리하는데 유용한 기능을 제공해준다.

### createAction

```
export const increment = (index) => ({
  type: types.INCREMENT,
  index
});
```

앞서 액션생성자를 위와 같이 만들었다. 이를 createAction을 이용하면 자동화하여 만들 수 있다.

```
export increment = createAction(types.INCREMENT);
```

다만, 위 코드에서는 파라미터에 대한 정보를 찾을 수 없다. 이를 해결하기 위해서는 액션에 `payload`라는 속성을 설정하여 파라미터를 받을 수 있도록 한다.

이를 통해 액션이 갖고 있을 변수를 payload로 통일하여 액션 생성을 자동화 할 수 있도록 만들어준다. 다만, 액션생성자로 필요한 파라미터가 무엇인지 코드만 봐서는 모르므로 주석을 작성해주어야한다.

### handleActions

handleActions는 첫 번째 파라미터로 `액션에 따라 실행할 함수를 가지는 객체`를, 두 번째 파라미터로 `초기 상태 값`을 가진다.

```
export default const reducer = handleActions({
  INCREMENT: (state, action) => ({
    counter: state.counter + action.payload
  }),
  DECREMENT: (state, action) => ({
    counter: state.counter - action.payload
  }),
}, {counter: 0});
```
