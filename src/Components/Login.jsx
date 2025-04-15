import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({ name: "",  password: "" });
  const navigate = useNavigate();

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onLogin = (e) => {
    e.preventDefault();

    if (!user.name || !user.password) {
      alert("Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }


    if (
      (user.name === "Oybek" && user.password === "123456") ||
    
        user.password === "123456")
    {
      localStorage.setItem("authousToken", JSON.stringify(user));
      navigate("/dashboards"); 
    } else {
      alert("Noto‘g‘ri login yoki parol!");
    }
  };

  return (
    <div className="bg-black relative z-0 min-h-screen flex items-center justify-center">
      <div className="antClen"></div>
      <div className="rounded-2xl bg-amber-50/10 backdrop-blur-xs">
        <form
          onSubmit={onLogin}
          className=" text-white  z-10 max-w-[500px] p-8  shadow-2xl text-center"
        >
          <h1 className="font-extrabold text-3xl py-5 mb-4 text-red-500">
            Login <span className="text-white">Here</span>
          </h1>
          <div className="text-start w-[270px] lg:w-[340px] flex flex-col gap-2">
            <label htmlFor="name">Username:</label>
            <input
              className="w-full p-3 mb-4 rounded-lg border-2 border-red-500 focus:outline-none focus:ring-2 focus:ring-gray-300 shadow-md"
              type="text"
              name="name"
              value={user.name}
              onChange={handleInput}
              placeholder="Ismingiz"
            />
          </div>

          <div className="text-start flex flex-col gap-2">
            <label htmlFor="password">Password:</label>
            <input
              className="w-full p-3 mb-6 rounded-lg border-2 border-red-500 focus:outline-none focus:ring-2 shadow-md"
              type="password"
              name="password"
              value={user.password}
              onChange={handleInput}
              placeholder="Parolingiz"
            />
          </div>

          {/* Submit tugmasi */}
          <button
            type="submit"
            className="bg-black cursor-pointer font-semibold text-white hover:bg-red-500 px-6 py-3 rounded-xl w-full transition duration-300"
          >
            Log in
          </button>


        </form>
      </div>
    </div>
  );
};

export default Login;
