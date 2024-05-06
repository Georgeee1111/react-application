import Box from "../generalComponents/Box";
import InputField from "../generalComponents/InputField";
import Button from "../generalComponents/Button";
import ButtonGradient from "../../assets/svg/ButtonGradient";
const SignUp = () => {
  return (
    <>
      <div className="flex justify-center items-center h-full mt-[12rem]">
        <Box className="w-96 h-auto p-6">
          <form>
            <InputField
              label="Email"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
            />
            <InputField
              label="Username"
              id="username"
              name="username"
              type="text"
              placeholder="Enter your username"
            />
            <InputField
              label="Password"
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
            />
            <div className="flex justify-center items-center h-full mt-[2rem]">
              <Button type="submit">Sign Up</Button>
            </div>
          </form>
        </Box>
        <ButtonGradient />
      </div>
    </>
  );
};

export default SignUp;
