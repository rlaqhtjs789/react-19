import React, { useActionState } from "react";

// useActionState hook은 비동기 액션과 상태 관리를 결합(한방에 관리가능)
// useActionState hook 역시 form 태그에서만 사용 가능

async function updateName(name) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return name;
}

const UseActionState = () => {
  const [name, updateNameAction, isPending] = useActionState(
    async (previousName, formData) => {
      const newName = await updateName(formData.get("name"));
      return newName;
    }
  )

  return (
    <form action={updateNameAction}>
      Current Name is {name}
      <input type="text" name="name" />
      <button type="submit">
        {isPending ? "Updating..." : "Update"}
      </button>
    </form>
  )
};

export default UseActionState;
