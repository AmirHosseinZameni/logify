import FormInput from "./components/FormInput";
import Button from "./components/Button";
import GoogleIcon from "./components/GoogleIcon";
import FacebookIcon from "./components/FacebookIcon";
import AppleIcon from "./components/AppleIcon";
import { useState } from "react";


function App() {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  function handleSubmit(e){
    e.preventDefault();
    if(!userName || !password) return
     console.log("Submitted!", { userName, password });
  }
  return (
    <div className="bg-[url('/assets/bg.png')]  w-screen h-screen bg-cover bg-center flex flex-row justify-end ">
      <form
        onSubmit={handleSubmit}
        className="w-134 h-185 bg-[#f9f9f9] mt-auto mb-auto mr-29 rounded-[40px] pt-11 pr-11 pl-11 pb-20"
      >
        <div className="flex flex-row justify-between">
          <h1 className="font-[Poppins] font-regular text-[21px]">
            Welcome to{" "}
            <span className="font-semibold text-[#779341]">LOREM</span>
          </h1>
          <div className="flex flex-col font-[poppins] text-[13px]">
            <a href="#" className="text-[#8D8D8D]">
              No Account?
            </a>
            <a href="#" className="text-[#779341]">
              Sign up
            </a>
          </div>
        </div>
        <h3 className=" font-medium text-[55px]">Sign in</h3>
        <div className=" flex gap-5 mt-10.5">
          <Button
            text="Sign in with google"
            icon={<GoogleIcon className="w-6 h-6" />}
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
            gap-5"
          />
          <div className="flex gap-3.25 ">
            <Button
              className="flex justify-center items-center w-15 h-14 bg-white rounded-[9px]"
              icon={<FacebookIcon className="w-7 h-7" />}
            />
            <Button
              className="flex justify-center items-center w-15 h-14 bg-white rounded-[9px]"
              icon={<AppleIcon className="w-7 h-7" />}
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
          <a href="#" className="text-[#4285F4]">
            Forgot Password
          </a>
          <input
            type="submit"
            className="font-[Poppins] font-medium text-[16px] bg-[#779341] text-white w-59 h-14 rounded-[10px] cursor-pointer"
            value="Sign in"
          />
        </div>
      </form>
    </div>
  );
}



export default App;
