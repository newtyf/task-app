import { PropsWithChildren } from "react";
import { ReturnButton } from "../components/ReturnButton";

interface Props {}

export const WithoutNabarLayout = ({ children }: PropsWithChildren<Props>) => {
  return (
    <main className='flex flex-col border bg-primary w-screen h-screen max-w-screen-sm mx-auto'>
      <header className='flex justify-between px-4 pt-4'>
        <ReturnButton />
      </header>
      <section className='p-4 flex-1 overflow-y-scroll'>{children}</section>
    </main>
  );
};