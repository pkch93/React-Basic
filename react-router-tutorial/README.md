# React-Router-Tutorial

react-router는 클라이언트 사이드에서 이뤄지는 라우팅을 간단하게 도와주는 라이브러리이다.
(다만, 공식 라이브러리가 아닌 써드파티 라이브러리)
또한, 서버 사이드 렌더링도 도와주는 도구들도 같이 사용할 수 있다. 이 react-router는 react-native에서도 사용가능하다.

## NODE_ENV 설정

코드를 불러올 때 `"../components/파일명"` 으로 불러오는 코드를 `"components/파일명"`으로 불러 올 수 있도록 프로젝트의 루트경로를 성정하는 방법.

## BrowserRouter? HashRouter?

BrowserRouter는 서버에서 다양한 요청들을 처리해야 할 때 필요한 Router이다.

반면, HashRouter의 경우는 Static file들을 다룰때 보통 사용한다.

따라서, 보통은 BrowserRouter가 선호된다.

## Router 내부의 exact?

Router 내부에 exact가 있으면 주어진 경로와 정확히 맞아 떨어져야만 설정한 컴포넌트를 보여준다.

```
  Home 컴포넌트의 경로가 "/"이고 About은 "/about"이다.
  만약, Home에 exact가 없다면 "/about"을 통해 About 컴포넌트를 요청할 경우 "/about" 안에도 "/"이 있기 때문에 Home과 About 컴포넌트가 같이 나타나게 된다.
```

exact를 사용하지 않고 해결하는 방법으로는 `<Switch>`컴포넌트를 사용하는 방법이 있다. 라우트들을 `<Switch>`안에 감싸면 매칭되는 첫 번째 라우트만 보여주고 나머지는 보여주지 않는다.

이 때, 주의할 점은 `비교할 라우트`를 위에 작성해야한다는 것이다.

## 라우트 파라미터 읽기

라우트 경로에 특정 값을 넣는 방법으로는 2가지가 있다.
params와 query가 그 두 가지 방법이다.

라우트로 설정한 컴포넌트는 3가지의 props를 전달받는다.

  1. history : 이 객체를 통해 push, replace를 이용해서 다른 경로로 이동하거나 앞 뒤 페이지로 전환할 수 있다.

  2. location : 이 객체는 현재 경로에 대한 정보를 지니고 있고 URL쿼리 정보도 가지고 있다.

  3. match : 이 객체에는 어떤 라우트에 메칭되어 있는지에 대한 정보가 있다. 또한, params(/about/:name 형식)의 정도를 가지고 있다.

### params

라우트 경로에 특정 값을 넣기 위한 params를 사용하기 위해서는 path에 `"/about/:name"`과 같이 `:params명`을 경로에 붙여준다.

### URL 쿼리

쿼리를 해석하기 위해서 자체적으로 구현할 수도 있지만 라이브러리를 사용하는 것이 간편하다.

```
  yarn add query-string
```

위와 같이 라이브러리를 설치하여 쿼리 문자열을 파싱할 수 있다.

## 라우트 이동하기

### Link 컴포넌트

앱 내부에서 다른 라우트로 이동할 때는 `<a>`로 이동하면 안된다. 이 경우는 새로고침을 해버리기 때문이다.

따라서, 그 대안으로 Link 컴포넌트를 사용해야한다. Link는 페이지를 새로 불러오는걸 막고, 원하는 라우트로 화면 전환을 해준다.

### NavLink 컴포넌트

NavLink 컴포넌트는 Link와 비슷하다. 다만, 설정한 URL이 활성화되면 특정 스타일 혹은 클래스를 지정할 수 있다는 점이 차이점이다.

스타일을 지정하려면 `activeStyle`을 클래스를 설정하려면 `activeClassName`를 설정한다.

## Route 속의 Route

react-router가 버전 4가 되면서 Route 내부에 Route를 설정하는 방식이 달라졌다.

이전 버전에서는 `Route` 내부에 props.children 자리에 다른 컴포넌트를 넣는 형식이었다. 따라서, 모든 라우트는 최상위에서 설정해야했다.

하지만 버전 4가 되면서 props.children을 사용하지 않고 라우트에서 보여주는 컴포넌트 내부에 또 Route를 사용할 수 있다.

```
※ 참고
react-router-dom : 브라우저에서 사용되는 리액트 라우터
cross-env : 프로젝트에서 NODE_PATH를 사용하여 절대경로로 파일을 불러오기 위해 환경 변수 설정 시 OS마다 방식이 다르므로 공통적인 방법으로 설정하게 해주는 라이브러리
```
> Velopert님의 블로그 게시글을 참고한 코드입니다.
> (https://velopert.com/3417)
