import { PropsWithChildren } from "react";
import { Navbar } from "../components/Navbar";

interface Props {}

export const TasksLayout = ({ children }: PropsWithChildren<Props>) => {
  return (
    <main className='flex flex-col border bg-primary w-screen h-screen max-w-screen-sm mx-auto'>
      <section className='p-4 flex-1 overflow-y-scroll'>{children}</section>
      <Navbar />
    </main>
  );
};
