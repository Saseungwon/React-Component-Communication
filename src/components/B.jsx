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
