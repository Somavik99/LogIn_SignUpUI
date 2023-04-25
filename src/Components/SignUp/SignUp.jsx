import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./SignUp.css";

const SignUp = () => {
  const [UserInput, setUserInput] = useState({
    uName: "",
    eMail: "",
    pass: "",
    conPass: "",
  });

  const [StoreData, setStoreData] = useState([]);

  const userRegex = new RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,24}/
  );

  const emailRegex = new RegExp(
    "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
  );
  const passRegex = new RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,24}/
  );

  const SignUpFomSubmit = () => {
    const { uName, eMail, pass, conPass } = UserInput;

    if (!uName.match(userRegex)) {
      toast.error(" ", {
        position: "top-center",
      });
    } else if (!eMail.match(emailRegex)) {
      toast.error(" ", {
        position: "top-center",
      });
    } else if (!pass.match(passRegex)) {
      toast.error(" ", {
        position: "top-center",
      });
     console.alert("Enter valid password");
    } else if (conPass !== pass) {
      toast.error(" ", {
        position: "top-center",
      });
    } else {
      localStorage.setItem(
        "SignUpInfo",
        JSON.stringify([...StoreData, UserInput])
      );
      setStoreData();
      console.log("SignedUp");
    }
  };

  const SignUpInputChange = (e) => {
    const { name, value } = e.target;
    setUserInput(() => {
      return { ...UserInput, [name]: value };
    });
  };

  const HandleSignUpSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="Container">
      <div className="SignUpContainer">
        <h1 className="h1">SignUp</h1>
        <form action="" className="SignUpForm" onSubmit={HandleSignUpSubmit}>
          <div className="userName">
            <label
              htmlFor=""
              style={{
                background: "transparent",
                margin: "3px",
                padding: "5px",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              User Name
            </label>
            <div>
              <input
                type="text"
                name="uName"
                placeholder="Username..."
                value={UserInput.uName}
                onChange={SignUpInputChange}
                style={{
                  margin: "3px",
                  padding: "5px",
                  height: "50px",
                  width:"300px",
                  background: "rgba(232, 232, 232, 0.397)",
                  borderRadius: "8px",
                }}
              />
              <ToastContainer
                style={{ height: "20px", width: "20px" }}
                limit={1}
              />
            </div>
          </div>
          <div className="Email">
            <label
              htmlFor=""
              style={{
                background: "transparent",
                margin: "3px",
                padding: "5px",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              Email
            </label>
            <div>
              <input
                type="email"
                name="eMail"
                placeholder="Email..."
                value={UserInput.eMail}
                onChange={SignUpInputChange}
                style={{
                  
                  margin: "3px",
                  padding: "5px",
                  height: "50px",
                  width:"300px",
                  background: "rgba(232, 232, 232, 0.397)",
                  borderRadius: "8px",
                }}
              />
              <ToastContainer
                style={{ height: "20px", width: "20px" }}
                limit={1}
              />
            </div>
          </div>
          <div className="Pass">
            <label
              htmlFor=""
              style={{
                background: "transparent",
                margin: "3px",
                padding: "5px",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              Password
            </label>
            <div>
              <input
                type="password"
                name="pass"
                placeholder="Password..."
                value={UserInput.pass}
                onChange={SignUpInputChange}
                style={{
                  margin: "3px",
                  padding: "5px",
                  height: "50px",
                  width:"300px",
                  background: "rgba(232, 232, 232, 0.397)",
                  borderRadius: "8px",
                }}
              />
              <ToastContainer
                style={{ height: "20px", width: "20px" }}
                limit={1}
              />
            </div>
          </div>
          <div className="cPass">
            <label
              htmlFor=""
              style={{
                background: "transparent",
                margin: "3px",
                padding: "5px",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              Confirm Password
            </label>
            <div>
              <input
                type="password"
                name="conPass"
                placeholder="Confirm Password..."
                value={UserInput.conPass}
                onChange={SignUpInputChange}
                style={{
                  margin: "3px",
                  padding: "5px",
                  height: "50px",
                  width:"300px",
                  background: "rgba(232, 232, 232, 0.397)",
                  borderRadius: "8px",
                }}
              />
              <ToastContainer
                style={{ height: "20px", width: "20px" }}
                limit={1}
              />
            </div>
          </div>
          <div className="btnSubmit">
            <button type="submit" className="btn" onClick={SignUpFomSubmit}>
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
