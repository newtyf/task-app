import { PropsWithChildren } from "react";

interface Props {
  title: string;
}

export const AuthLayout = ({ children, title }: PropsWithChildren<Props>) => {
  return (
    <main className='flex flex-col bg-white w-screen h-screen p-6 max-w-screen-sm mx-auto'>
      {/* <header className='my-3'>
        <button className='font-bold px-3 py-2 border rounded-lg bg-gray-50 '>
          {"<"}
        </button>
      </header> */}
      <article className='flex flex-col flex-grow'>
        <h1 className='text-2xl font-bold mb-3'>{title}</h1>
        {children}
      </article>
    </main>
  );
};
