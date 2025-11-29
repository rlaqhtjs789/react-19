import React, { useOptimistic, useState } from "react";

// useOptimistic는 낙관적 UI 업데이트를 구현하는 데 사용됩니다.
// 서버 응답을 기다리지 않고 UI를 즉시 업데이트하여 사용자 경험을 향상시킵니다.
// 서버 요청이 실패할 경우 롤백 메커니즘을 제공하여 데이터 일관성을 유지합니다.

function submitTitle(formData) {
  return new Promise((resolve, reject) => {
    const updatedTitle = formData.get("title");
    setTimeout(() => {
      const n = Math.random();
      if (n < 0.75) {
        resolve(updatedTitle);
      } else {
        reject("Error");
      }
    }, 5000);
  });
}

const UseOptimistic = () => {
  const [title, setTitle] = useState("title");
  const [optimisticTitle, setOptimisticTitle] = useOptimistic(title);
  const [error, setError] = useState(null);
  const pending = title !== optimisticTitle;
  const handleSubmit = async (formData) => {
    setError(null);
    setOptimisticTitle(formData.get("title"));
    try {
      const updatedTitle = await submitTitle(formData);
      setTitle(updatedTitle);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div>
      <h2>{optimisticTitle}</h2>
      <p>{pending && "Updating..."}</p>
      <form action={handleSubmit}>
        <input type="text" name="title" />
        <button type="submit" disabled={pending}>
          Submit
        </button>
      </form>

      <div>{error && error}</div>
    </div>
  );
};

export default UseOptimistic;
