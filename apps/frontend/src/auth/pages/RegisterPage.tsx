import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title='Create account 👋'>
      <p className='text-sm text text-gray-600 mb-3'>
        Please register on our Strecmline. you continue using our service,
      </p>
      <form>
        <input
          type='text'
          placeholder='Jhon Doe'
          className='field'
          autoComplete='true'
          required
        />
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
        <label htmlFor='conditions' className='flex items-center mt-3'>
          <input
            className='mr-3 w-5 h-5'
            type='checkbox'
            id='conditions'
            required
          />
          <a
            href='http://'
            target='_blank'
            rel='noopener noreferrer'
            className='underline text-sm text-gray-400'
          >
            I agree to privacy policy & terms
          </a>
        </label>
        <button
          className='w-full bg-red-500 text-white font-bold rounded-xl p-4 mt-4'
          type='submit'
        >
          Continue
        </button>
      </form>
      <footer className='text-center mt-auto'>
        <p className='text-sm font-medium'>
          Already have an account?
          <Link className='ml-1 underline text-red-400' to={"/auth/login"}>
            Sign in instead
          </Link>
        </p>
      </footer>
    </AuthLayout>
  );
};
