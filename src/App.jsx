import "./App.css";
import Use from "./components/use/Use.jsx";
import Action from "./components/action/Action.jsx";
import UseActionState from "./components/useActionState/UseActionState.jsx";
import UseOptimistic from "./components/useOptimistic/UseOptimistic.jsx";
import { useEffect, useState } from "react";

// react compiler의 역할은
// 1. JSX를 React.createElement 호출로 변환
// 2. 여러 최적화 작업 수행
//   - 불필요한 렌더링 방지
//   - 메모이제이션
//  - 코드 분할
// 3. 최신 자바스크립트 기능을 구형 브라우저에서도 동작하도록 변환
// 4. 개발자 도구와 통합
// 5. 에러 메시지 개선
// 6. 타입 검사 지원 (TypeScript와 함께 사용 시)
// 이러한 역할을 통해 React 컴포넌트가 효율적이고 호환성 있게 동작하도록 돕습니다.

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  console.log("App is rendering");

  const aObject = {a:'a', text};
  useEffect(() => {
    console.log('useEffect Called');
  }, [aObject]);

  return (
    <div className="app">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <Text text={text} />

      {/* <Use /> */}
      {/* <Action /> */}
      {/* <UseActionState /> */}
      {/* <UseOptimistic /> */}
    </div>
  );
}

const Text = ({text}) => {
  console.log("Text is rendering");
  return <div>{text}</div>;
};

export default App;
