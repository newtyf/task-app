import { useNavigate } from "react-router-dom";

export const ReturnButton = () => {

  const navigate = useNavigate()


  const onNavigateBack = () => {
    navigate(-1)
  };
  return (
    <button onClick={onNavigateBack} className='font-bold px-3 py-2 border rounded-lg bg-gray-200 '>
      {"<"}
    </button>
  );
};
