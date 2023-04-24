import { useState } from "react";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [formSubmit, setFormSubmit] = useState({
    userName: "",
    pass: "",
  });

  const FormChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormSubmit(() => {
      return { ...formSubmit, [name]: value };
    });
  };

  const emailRegex = new RegExp(
    "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
  );
  const passRegex = new RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,24}/
  );

  const FormSubmitHandler = (e) => {
    e.preventDefault();
  };

  const LoginForm = () => {
    const { userName, pass } = formSubmit;

    if (!userName.match(emailRegex)) {
      toast.error(" ", {
        position: "top-center",
      });
    } else if (!pass.match(passRegex)) {
      toast.error("", {
        position: "top-center",
      });
    } else {
      console.log("LoggedIn", userName, pass);
    }
  };

  return (
    <div className="container">
      <div className="login-container">
        <h1 className="h1">LogIn </h1>
        <form action="" className="login-form" onSubmit={FormSubmitHandler}>
          <div className="user">
            <label
              htmlFor=""
              style={{ margin: "3px", padding: "5px", fontSize: "20px", fontWeight:"600" }}
            >
              Username or Email
            </label>
            <div>
              <input
                type="text"
                value={formSubmit.userName}
                name="userName"
                placeholder="User..."
                onChange={FormChangeHandler}
                style={{ margin: "3px", padding: "5px", height: "50px", background: "rgba(232, 232, 232, 0.397)", borderRadius:"8px"   }}
              />
              <ToastContainer style={{ height: "20px", width: "20px" }} limit={1} />
            </div>
          </div>

          <div className="password">
            <label
              htmlFor=""
              style={{ margin: "3px", padding: "5px", fontSize: "20px" , fontWeight:"600"}}
            >
              Password
            </label>
            <div>
              <input
                type="password"
                name="pass"
                value={formSubmit.pass}
                placeholder="password..."
                onChange={FormChangeHandler}
                style={{ margin: "3px", padding: "5px", height: "50px" , background: "rgba(232, 232, 232, 0.397)", borderRadius:"8px"}}
              />
              <ToastContainer style={{ height: "20px", width: "20px" }} limit={1}/>
            </div>
          </div>

          <div className="btnSubmit">
            <button className="btn" type="submit"  onClick={LoginForm}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
