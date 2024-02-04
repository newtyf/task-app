interface Props {
  color: string;
  icons: string;
  title: string;
  total: number;
}

export const ChipStatus = ({ color, icons, title, total }: Props) => {
  return (
    <div className={`flex items-center ${color} flex-grow rounded-xl p-3`}>
      <p className='bg-gray-600 bg-opacity-30 rounded-full w-10 h-10 flex items-center justify-center mr-2'>
        <i className={`${icons} text-[20px] mb-[2px] text-white`}></i>
      </p>
      <div>
        <p className='font-bold'>{title}</p>
        <p className='text-xs font-light'>{total} tasks</p>
      </div>
    </div>
  );
};
