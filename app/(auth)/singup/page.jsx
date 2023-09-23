import SignUpForm from './Registrasi';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const SignUp = async () => {
  const session = await getServerSession(authOptions);

  if (session) redirect('/');

  return (
    <div className='w-full'>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
