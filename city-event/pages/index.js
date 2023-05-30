import { use, useState } from "react";

const index = () => {

  const [input, setInput] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`/api/set_task`, { task: input })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <form >
        <input type="text" className="w-[150] bg-orange-200 " onChange={(e) => setInput(e.target.value)} />
        <button onSubmit={handleSubmit} type="submit">submit</button>
      </form>

    </>
  );
}

export default index;