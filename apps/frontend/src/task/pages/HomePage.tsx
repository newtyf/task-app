import { useEffect, useState } from "react";

export const HomePage = () => {
  const [tasks, settasks] = useState<[]>();

  useEffect(() => {
    const getTask = async () => {
      const payload = {
        email: "test2@gmail.com",
        password: "testpassword",
      };

      const login = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const jwt = await login.json();

      console.log(jwt);

      const res = await fetch("http://localhost:3000/tasks", {
        headers: {
          Authorization: `Bearer ${jwt.access_token}`,
        },
      });
      const data = await res.json();

      console.log(data);
      settasks(data);
    };

    getTask();

    return () => {};
  }, []);

  return (
    <>
      {tasks &&
        tasks.map((i) => (
          <p className='ml-3 text-2xl font-bold' key={i.created}>
            {i.title}
          </p>
        ))}
    </>
  );
};
