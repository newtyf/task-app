interface Props {
  color: string;
  icons: string;
  title: string;
  total: number;
}

export const ChipStatus = ({ color, icons, title, total }: Props) => {
  return (
    <div className={`flex flex-wrap items-center ${color} flex-grow rounded-xl p-3`}>
      <div className='bg-gray-600 bg-opacity-30 rounded-full w-10 h-10 flex items-center justify-center mr-2'>
        <i className={`${icons} text-[20px] mb-[2px] text-white`}></i>
      </div>
      <div>
        <p className='font-bold'>{title}</p>
        <p className='text-xs font-light'>{total} tasks</p>
      </div>
    </div>
  );
};
