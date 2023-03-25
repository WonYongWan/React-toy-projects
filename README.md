# TIP
- [공백문자 확인](#공백문자-확인)
- [고유한 id값을 제공하는 라이브러리](#고유한-id값을-제공하는-라이브러리)
- [React Icons 라이브러리](#react-icons-라이브러리)

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