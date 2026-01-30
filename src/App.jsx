function App() {
  return (
    <div className="bg-[url('/assets/bg.png')]  w-screen h-screen bg-cover bg-center flex flex-row justify-end ">
      <form
        action=""
        className="w-134 h-185 bg-white mt-auto mb-auto mr-29 rounded-[40px] pt-11 pr-11 pl-11 pb-20"
      >
        <div className="flex flex-row justify-between">
          <h1 className="font-[Poppins] font-regular text-[21px]">
            Welcome to{" "}
            <span className="font-semibold text-[#779341]">LOREM</span>
          </h1>
          <div className="flex flex-col font-[poppins] text-[13px]">
            <a href="#" className="text-[#779341]">
              No Account?
            </a>
            <a href="#">Sign up</a>
          </div>
        </div>

        <h3 className="font-medium text-[55px]">Sign in</h3>
      </form>
    </div>
  );
}

export default App;
