import { Link } from 'react-router-dom';
import image from '../../assets/assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const SignUp = () => {

    const {createUser} = useContext(AuthContext)

    

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name,email,password)
        
        createUser(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error =>console.log(error))

    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="m-32 w-1/2">
                    <img src={image} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="SignUp" />
                        </div>
                    </form>
                    <p className='text-center mb-3'>Already have an account? please! <Link className='text-blue-500' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;