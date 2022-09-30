import React, { useState } from 'react';

function Counter() {
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(prevNumber => prevNumber + 1); // setNumber(number +1) 에서 함수형으로 업데이트!
    }
    const onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1); //함수형으로 넘겨주면 상태값 변경을 배치로 처리함!
    }
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;