import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState();

  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/login", {
        email: email,
        password: password,
      });
      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <section className="hero has-background-grey-light is-success is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4-desktop">
              <form onSubmit={signIn} className="box">
                <p className="has-text-centered">{msg}</p>
                <div className="field mt-5">
                  <div className="has-text-centered">
                    <strong>LOGIN</strong>
                  </div>
                  <label className="label mt-5">Email</label>
                  <div className="controls">
                    <input
                      type="text"
                      className="input"
                      placeholder="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Password</label>
                  <div className="controls">
                    <input
                      type="password"
                      className="input"
                      placeholder="*****"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <button className="button is-info is-fullwidth">Login</button>
                </div>
                <p class="help mt-5">
                  Dont have an account?{" "}
                  <b>
                    <Link to="/register">Click here to register </Link>
                  </b>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
