import FormInput from "../components/FormInput";
import Button from "../components/Button";
import GoogleIcon from "../components/GoogleIcon";
import FacebookIcon from "../components/FacebookIcon";
import AppleIcon from "../components/AppleIcon";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!userName || !password) return;
    console.log("Submitted!", { userName, password });
    setUserName("");
    setPassword("");
  }
  return (
    <div className="bg-[url('/assets/bg.png')]  w-screen h-screen bg-cover bg-center flex flex-row justify-end max-xs:w-screen max-xs:h-full max-xs:bg-cover max-xs:bg-left max-xs:pt-19.5 max-xs:pb-14.5">
      <form
        onSubmit={handleSubmit}
        className="w-134
          h-185
        bg-[#f9f9f9]
          mt-auto
          mb-auto 
          mr-29 
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
            <span className="font-semibold text-[#779341] ">LOREM</span>
          </h1>
          <div className="flex flex-col font-[poppins] text-[13px]">
            <a href="#" className="text-[#8D8D8D]">
              No Account?
            </a>

            <Link to="/Register" className="text-[#779341] ">
              Sign up
            </Link>
          </div>
        </div>
        <h3 className=" font-medium text-[55px] max-xs:text-[40px]">Sign in</h3>
        <div className=" flex gap-5 mt-10.5 max-xs:gap-3">
          <Button
            text="Sign in with google"
            icon={<GoogleIcon className="w-6 h-6 max-xs:w-4.5 max-xs:h-4.5" />}
            className="bg-[#E9F1FF]
          text-[#4285F4]
            text-[16px]
            font-regular
            w-75
            h-14
            pl-8
            rounded-[9px]
            flex
            justify-start
            items-center
            gap-5
            max-xs:text-[12px]
            max-xs:w-45
            max-xs:gap-3
            max-xs:pl-4.5
            max-xs:pr-4.5
            
            "
          />
          <div className="flex gap-3.25 max-xs:gap-2">
            <Button
              className="flex justify-center items-center w-15 h-14 bg-white rounded-[9px] max-xs:w-9 max-xs:h-13.75"
              icon={
                <FacebookIcon className="w-7 h-7  max-xs:w-4.5 max-xs:h-4.5" />
              }
            />
            <Button
              className="flex justify-center items-center w-15 h-14 bg-white rounded-[9px] max-xs:w-9 max-xs:h-13.75"
              icon={<AppleIcon className="w-7 h-7 max-xs:w-4.5 max-xs:h-4.5" />}
            />
          </div>
        </div>
        <FormInput
          label="Enter your username or email address"
          className="flex flex-col gap-3 mt-13"
          placeHolder="Username or email address"
          type="text"
          value={userName}
          onChange={setUserName}
        />
        <FormInput
          label="Enter your Password"
          className="flex flex-col gap-3 mt-9.5"
          placeHolder="Password"
          type="password"
          value={password}
          onChange={setPassword}
        />
        <div className="flex flex-col items-end gap-11 mt-3">
          <a href="#" className="text-[#4285F4] max-xs:text-[11px]">
            Forgot Password
          </a>
          <input
            type="submit"
            className="font-[Poppins] font-medium text-[16px] bg-[#779341] text-white w-59 h-14 rounded-[10px] cursor-pointer  max-xs:w-37.25"
            value="Sign in"
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
