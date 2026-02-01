import FormInput from "../components/FormInput";
import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [userNumber, setUserNumber] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!userName || !password) return;
    console.log("Submitted!", { userName, password });
    setUserName("");
    setPassword("");
    setUser("");
    setUserNumber("");
  }
  return (
    <div className="bg-[url('/assets/bg.png')]  w-screen h-screen bg-cover bg-center flex flex-row justify-end max-xs:w-screen max-xs:h-full max-xs:bg-cover max-xs:bg-left max-xs:pt-19.5 max-xs:pb-14.5 ">
      <form
        onSubmit={handleSubmit}
        className="w-134
         h-185 
         bg-[#f9f9f9] 
         mt-auto mb-auto mr-29 
         rounded-[40px] 
         pt-11 pr-11 pl-11 pb-20
          max-xs:w-81.5 
          max-xs:pt-11 
          max-xs:pr-6.75 
          max-xs:pl-6.75 
          max-xs:pb-10 
          max-xs:m-auto
          max-xs:backdrop-blur-[1px]
        max-xs:bg-white/70
         "
      >
        <div className="flex flex-row justify-between max-xs:w-68">
          <h1 className="font-[Poppins] font-regular text-[21px] max-xs:text-[16px]">
            Welcome to{" "}
            <span className="font-semibold text-[#779341]">LOREM</span>
          </h1>
          <div className="flex flex-col font-[poppins] text-[13px] max-xs:max-w-19">
            <a href="#" className="text-[#8D8D8D]">
              Have an account?
            </a>
            <Link to="/login" className="text-[#779341]">
              Sign in
            </Link>
          </div>
        </div>
        <h3 className=" font-medium text-[55px] max-xs:text-[40px]">Sign up</h3>

        <FormInput
          label="Enter your username or email address"
          className="flex flex-col gap-3 mt-13"
          placeHolder="Username or email address"
          type="text"
          value={userName}
          onChange={setUserName}
        />
        
        <div className="flex gap-4.75 mt-8.75" >
          <FormInput
            label="User name"
            className=""
            inputClassName="max-xs:max-w-32.5"
            placeHolder="User name"
            type="text"
            value={user}
            onChange={setUser}

          />
          <FormInput
            label="Contact Number"
            className="max-xs:max-w-32.5"
            inputClassName="max-xs:max-w-32.5 "
            placeHolder="Contact Number"
            type="number"
            value={userNumber}
            onChange={setUserNumber}
          />
        </div>
        <FormInput
          label="Enter your Password"
          className="flex flex-col gap-3 mt-9.5"
          placeHolder="Password"
          type="password"
          value={password}
          onChange={setPassword}
        />
        <div className="flex flex-col items-end gap-11 mt-3">
          <a href="#" className="text-[#4285F4]">
            Forgot Password
          </a>
          <input
            type="submit"
            className="font-[Poppins] font-medium text-[16px] bg-[#779341] text-white w-59 h-14 rounded-[10px] cursor-pointer max-xs:w-37.25"
            value="Sign in"
          />
        </div>
      </form>
    </div>
  );
}

export default Register;
