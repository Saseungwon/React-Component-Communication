## Component communication

컴포넌트 간 통신하기

#### 하위 컴포넌트 변경

A.jsx

```jsx
import { useState } from "react";

export default function A() {
  const [value, setValue] = useState("아직 안 바뀜");

  return (
    <div>
      <B value={value} />
      <button onClick={click}>E의 값을 바꾸기</button>
    </div>
  );

  function click() {
    setValue("E의 값을 변경");
  }
}

function B({ value }) {
  // A의 value 받기
  return (
    <div>
      <p>여긴 B </p>
      {/* A의 value C에게 주기 */}
      <C value={value} />
    </div>
  );
}

function C({ value }) {
  // B의 value 받기
  return (
    <div>
      <p>여긴 C</p>
      {/* B의 value D에게 주기 */}
      <D value={value} />
    </div>
  );
}

function D({ value }) {
  // C의 value 받기
  return (
    <div>
      <p>여긴 D</p>
      {/* C의 value E에게 주기 */}
      <E value={value} />
    </div>
  );
}

function E({ value }) {
  // D의 value 받기
  return (
    <div>
      <p>여긴 E</p>
      {/* 값 변경 */}
      <h3>{value}</h3>
    </div>
  );
}
```

<br>

#### 상위 컴포넌트 변경

B.jsx

```jsx
import { useState } from "react";

export default function B() {
  const [value, setValue] = useState("아직 안 바뀜");

  return (
    <div>
      <p>{value}</p>
      <C setValue={setValue} />
    </div>
  );
}

function C({ setValue }) {
  return (
    <div>
      <p>여긴 C</p>
      <D setValue={setValue} />
    </div>
  );
}

function D({ setValue }) {
  return (
    <div>
      <p>여긴 D</p>
      <E setValue={setValue} />
    </div>
  );
}

function E({ setValue }) {
  return (
    <div>
      <p>여긴 E</p>
      <F setValue={setValue} />
    </div>
  );
}

function F({ setValue }) {
  return (
    <div>
      <p>여긴 F</p>
      <button onClick={click}>클릭</button>
    </div>
  );

  function click() {
    setValue("B의 값을 변경");
  }
}
```
