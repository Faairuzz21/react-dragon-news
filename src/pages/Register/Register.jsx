import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import Navbar from "../Shared/Navbar";

const Register = () => {

    const {createUser} = useContext(AuthContext)

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    // name and photo
    const name = form.get('name')
    const photo = form.get('photo')
    console.log(name , photo);


    // email and password
    const email = form.get('email')
    const password = form.get('password')
    console.log(email , password);

    // create user
    createUser(email , password)
    .then( result => {
        console.log(result.user)
    })
    .catch(error => {
        console.error(error);
    })
  };

  return (
    <div>
      <div>
        <Navbar></Navbar>
        <h3 className="text-3xl my-10 text-center">Please Register </h3>

        <div>
          <form
            onSubmit={handleRegister}
            className="card-body lg:w-1/2 md:w-3/4 mx-auto"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-accent">Register</button>
            </div>
          </form>
          <p className="text-center mt-4">
            Already have an account{" "}
            <Link to="/login" className="text-blue-700 font-bold">
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
