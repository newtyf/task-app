interface Props {
  logo: string;
  action(): void;
}

export const SocialMediaBtn = ({ action, logo }: Props) => {
  return (
    <button
      className='flex border border-black rounded-xl w-full py-2 justify-center'
      onClick={action}
    >
      <img src={logo} alt='login with google' width={30} height={30} />
    </button>
  );
};
