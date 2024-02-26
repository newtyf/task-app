import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  id?: string;
}

export const TaskCard = ({ id, children }: PropsWithChildren<Props>) => {
  const navigate = useNavigate();

  const onNavigateToTask = () => {
    if (id) {
      return navigate(id);
    }
  };

  return (
    <button
      onClick={onNavigateToTask}
      className='border-2 border-black rounded-xl w-full flex items-center justify-between p-4 my-4'
      style={{ boxShadow: "4px 4px 0px 0px black" }}
    >
      {children}
    </button>
  );
};
