# TIP
- [공백문자 확인](#공백문자-확인)
- [고유한 id값을 제공하는 라이브러리](#고유한-id값을-제공하는-라이브러리)
- [React Icons 라이브러리](#react-icons-라이브러리)
- [useState의 초기값 전달(함수)](#usestate의-초기값-전달함수)

## 공백문자 확인
```jsx
// 내가 작성한 공백문자 제거 로직
let flag = 0;
for(let i of text) if(i.charCodeAt() === 32) flag++;
if(text.length === flag) return;

// 강의에서 작성한 공백문자 제거 로직
if(text.trim().length === 0) return;
```

## 고유한 id값을 제공하는 라이브러리
[uuid](https://www.npmjs.com/package/uuid)

```
// install
npm install uuid
```

```jsx
// import
import {v4 as uuidv4} from 'uuid';

// use
onAdd({id: uuidv4(), text: text, status: 'active'});

// key check => react developer tools => Components
```

## React Icons 라이브러리
[React Icons](https://react-icons.github.io/react-icons)

```
// install
npm install react-icons --save
```

```jsx
// import
import { FaBeer } from 'react-icons/fa'; // FaBeer의 접두사 fa를 'react-icons/fa' 명시

// use
<button onClick={handleDelete}><FaTrashAlt/></button>
```

## useState의 초기값 전달(함수)
```jsx
// useState는 컴포넌트가 리렌더 될때마다 다시 호출되며 초기값을 다시 전달 받는다.
// 만약 useState 내부적으로 저장된 값이 있다면 초기값을 무시하고 내부적으로 사용하고 있는 값을 사용하게 된다.
// 이때 초기값이 함수를 호출해서 어떤 데이터를 읽어오는 것이라면 함수가 호출될때마다 데이터를 다시 읽어온다.
// 하지만 다시 가져온 데이터를 사용하지 않고 내부적으로 저장된 값을 사용할 것이다.
// 그러나 계속 네트워크나 파일에서 불필요하게 데이터를 일어오는 일이 발생할 것이다.
const [todos, setTodos] = useState(readTodosFromLocalStroage());

// 이를 방지하기 위해 함수를 호출하는 경우라면 콜백함수로 감싸주면 된다.
// 그러면 컴포넌트가 리렌더 될때마다 함수를 호출하는 것이 아니라 함수 자체를 전달하게 된다.
// 즉 내부적으로 초기값이 필요할때만 전달한 함수를 호출하여 데이터를 전달받게 된다.
const [todos, setTodos] = useState(() => readTodosFromLocalStroage());


function readTodosFromLocalStroage() {
  // const [todos, setTodos] = useState(readTodosFromLocalStroage());일 경우 console 계속 찍힘.
  console.log('readTodosFromLocalStroage');
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : []; 
}
```