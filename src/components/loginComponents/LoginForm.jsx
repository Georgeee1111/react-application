import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "../generalComponents/Box";
import InputField from "../generalComponents/InputField";
import Button from "../generalComponents/Button";
import Checkbox from "../generalComponents/Checkbox";

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "" || password === "") {
      setError("Username and Password required!");
    } else if (username === "user" && password === "admin") {
      navigate("/");
    } else {
      setError("Incorrect username or password");
    }
  };

  return (
    <div className="flex justify-center items-center h-full mt-[12rem]">
      <Box className=" h-auto p-6">
        <form onSubmit={handleSubmit}>
          <InputField
            label="Username"
            id="username"
            name="username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputField
            label="Password"
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Checkbox label="Remember Me" id="checkbox" />
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex justify-center items-center h-full mt-[2rem]">
            <Button type="submit">Sign in</Button>
          </div>
        </form>
      </Box>
    </div>
  );
};

export default LoginForm;
