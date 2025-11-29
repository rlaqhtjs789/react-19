import React, { Suspense, use, cache } from "react";

// 19버전에서 새로 추가된 use 관련 훅들을 모아두는 컴포넌트
// use훅의 역활: 주로 비동기 데이터를 가져오는 역할

const getText = cache(async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('hello');
    }, 2000);
  });
});

// 컴포넌트 외부에서 promise를 생성합니다.
const textPromise = getText();

const TextItem = () => {
  let trueOrNot = true;
  let text = 'default text';

  if(trueOrNot) {
    text = use(textPromise);
  }

  return <h2>{text}</h2>
}

const Use = () => {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <TextItem />
    </Suspense>
  );
}

export default Use;