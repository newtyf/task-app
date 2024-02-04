import { ChipStatus } from "../components/ChipStatus";
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
        <header className='flex items-center'>
          <img
            src='/user.png'
            alt=''
            className='rounded-full aspect-square w-14 mr-2'
          />
          <div>
            <h1 className='font-extrabold text-2xl'>Hi, Bruce 👋</h1>
            <p className='text-xs text-gray-400'>
              Your daily adventures starts now
            </p>
          </div>
        </header>
        <article className='grid grid-cols-2 gap-4 mt-4'>
          <ChipStatus
            color='bg-blue-400'
            icons='bi bi-arrow-repeat'
            title='On going'
            total={10}
          />
          <ChipStatus
            color='bg-yellow-400'
            icons='bi bi-clock'
            title='In progress'
            total={21}
          />

          <ChipStatus
            color='bg-[#54c1c4]'
            icons='bi bi-file-earmark-check'
            title='On going'
            total={10}
          />
          <ChipStatus
            color='bg-lava-200'
            icons='bi bi-file-earmark-excel'
            title='On going'
            total={10}
          />
        </article>
        <article></article>
      </TasksLayout>
    </>
  );
};
