interface Props {
  progress: number;
  color?: string;
}

export const CircleProgressBar = ({ progress, color = "#000" }: Props) => {
  return (
    <div className='relative w-full h-full'>
      <svg className='w-full h-full' viewBox='0 0 100 100'>
        <circle
          className='text-gray-200 stroke-current'
          strokeWidth='10'
          cx='50'
          cy='50'
          r='40'
          fill='transparent'
        ></circle>
        <circle
          className={`${color} progress-ring__circle stroke-current`}
          strokeWidth='10'
          strokeLinecap='round'
          cx='50'
          cy='50'
          r='40'
          fill='transparent'
          strokeDashoffset={400 - (250 * progress) / 100}
        ></circle>

        <text
          x='50'
          y='50'
          fontFamily='Lato'
          fontSize='16'
          fontWeight='bold'
          textAnchor='middle'
          alignmentBaseline='middle'
          fill='#000'
        >
          {progress}%
        </text>
      </svg>
    </div>
  );
};
