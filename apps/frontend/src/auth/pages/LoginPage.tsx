import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { SocialMediaBtn } from "../components/SocialMediaBtn";

export const LoginPage = () => {
  return (
    <AuthLayout title='Login 👋'>
      <p className='text-sm text text-gray-600 mb-3'>
        Login with your user to see your task and organize your day
      </p>
      <form>
        <input
          type='email'
          placeholder='brucewayne@gmail.com'
          className='field'
        />
        <input
          type='password'
          placeholder='🌌🌌🌌🌌🌌🌌🌌'
          className='field'
          autoComplete='true'
          required
        />
        <button
          className='w-full bg-lava-200 text-white font-bold rounded-xl p-4 mt-4'
          type='submit'
        >
          Ingresar
        </button>
      </form>
      <div id='divider' className='flex w-full items-center mt-4'>
        <span className='block w-full h-[2px] bg-gray-400'></span>
        <span className='w-16 text-center bg-white'>or</span>
        <span className='block w-full h-[2px] bg-gray-400'></span>
      </div>
      <div id='social-login' className='flex mt-4 justify-around gap-3'>
        <SocialMediaBtn action={() => {console.log("login google")}} logo='/icons/google_g_icon.svg' />
        <SocialMediaBtn action={() => {console.log("login apple")}} logo='/icons/apple_icon.svg' />
        <SocialMediaBtn action={() => {console.log("login facebook")}} logo='/icons/facebook_icon.svg' />
      </div>
      <footer className='text-center mt-auto'>
        <p className='text-sm font-medium'>
          Do you have not an account?
          <Link className='ml-1 underline text-red-400' to={"/auth/register"}>
            Register here!
          </Link>
        </p>
      </footer>
    </AuthLayout>
  );
};
