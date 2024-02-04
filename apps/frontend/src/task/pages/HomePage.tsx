import { TasksLayout } from "../layout/TasksLayout";

export const HomePage = () => {
  // useEffect(() => {
  //   const getTask = async () => {
  //     const payload = {
  //       email: "test2@gmail.com",
  //       password: "testpassword",
  //     };

  //     const login = await fetch("http://localhost:3000/auth/login", {
  //       method: "POST",
  //       body: JSON.stringify(payload),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const jwt = await login.json();

  //     console.log(jwt);

  //     const res = await fetch("http://localhost:3000/tasks", {
  //       headers: {
  //         Authorization: `Bearer ${jwt.access_token}`,
  //       },
  //     });
  //     const data = await res.json();

  //     console.log(data);
  //     settasks(data);
  //   };

  //   getTask();

  //   return () => {};
  // }, []);

  return (
    <>
      <TasksLayout>
        <h1>Hi, Bruce 👋</h1>
      </TasksLayout>
    </>
  );
};
