import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {
  const { emailSingIn, googleSignIn, gitHubSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || location.state?.from?.from || '/';
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    emailSingIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        form.reset()
        navigate(from, { replace: true });
      })
      .catch(error => {
        setErrorMessage(error.message);
      })
  }

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleGitHubSignIn = () => {
    gitHubSignIn()
      .then(result => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <>
      <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
      
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold mb-5">Login now!</h1>
        <p className='text-3xl font-semibold w-72'>Explore our website for food product news, trending recipe news and chefs magical dishes.</p>
      </div>
      
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-pink-100">
      <div className="card-body">
      <div className="text-center mx-auto p-5 md:p-10 form-control w-full max-w-sm">
        <form onSubmit={handleLogin} className='mb-3'>
          <h3 className='text-3xl mb-5'></h3>
          <span className="label-text  text-lg pb-4">Enter your Email</span>
          <input type="email" placeholder="Your E-mail" name='email' className="input input-bordered w-full max-w-xs  mb-3" required />
          <span className="label-text text-lg ">Enter your password</span>
          <input type="password" placeholder="Your Password" name='password' className="input input-bordered w-full max-w-xs mb-3" required />
          {
            errorMessage && (
              <div className='border border-red-400 rounded-lg w-2/3 mx-auto text text-red-600 m-2 '>
                {
                  (!errorMessage) ? '' :
                    errorMessage === 'Firebase: Error (auth/wrong-password).' ?
                      <p>Wrong password. Please try again.</p> :
                      errorMessage === 'Firebase: Error (auth/user-not-found).' ?
                        <p>User not found. Please check your email and try again.</p> :
                        <p>`An error occurred. Please try again later.`</p>
                }
              </div>
            )
          }
          <button className="btn btn-primary text-red-800">Login</button>
        </form>
        <div className='text-center text-lg'>
          <p>Or Login with</p>
          <button onClick={handleGoogleSignIn} className='mr-2'><FaGoogle className='text-4xl text-red-400' /></button>
          <button onClick={handleGitHubSignIn}><FaGithub className='text-4xl text-red-400' /></button>
        </div>
        <div>
          <p>Want to create an account?
            <br />
            <Link to='/access/signup'
              state={{ from: from }}
            >
              <span className='underline decoration-1'>Sign up</span>
            </Link>
          </p>
        </div>
        </div>
        </div>
      </div>
     </div>
    </div>
    </>
  );
};

export default Login;

