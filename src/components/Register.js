import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [gender, setGender] = useState("Male");
  const [phone, setPhone] = useState("");

  const [msg, setMsg] = useState();

  const navigate = useNavigate();

  const addUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/user", {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
        gender: gender,
        phone: phone,
      });
      navigate("/");
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
              <form onSubmit={addUser} className="box">
                <p className="has-text-centered">{msg}</p>
                <div className="field mt-5">
                  <div className="has-text-centered">
                    <strong>REGISTER</strong>
                  </div>
                  <label className="label">Name</label>
                  <div className="controls">
                    <input type="text" className="input" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Email</label>
                  <div className="controls">
                    <input type="text" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Password</label>
                  <div className="controls">
                    <input type="password" className="input" placeholder="*****" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Confirm Password</label>
                  <div className="controls">
                    <input type="password" className="input" placeholder="*****" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Phone Number</label>
                  <div className="controls">
                    <input type="text" className="input" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Gender</label>
                  <div className="control">
                    <div className="select is-fullwidth">
                      <select value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field mt-5">
                  <button className="button is-info is-fullwidth" type="submit">
                    Register
                  </button>
                </div>
                <p class="help mt-5">
                  Already have an account?{" "}
                  <b>
                    <Link to="/">Click here to login </Link>
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

export default Register;
