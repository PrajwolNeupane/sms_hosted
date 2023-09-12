import { useMutation } from "react-query";
import { useLogin } from "../../features/endpoints/service/auth";
import LoginForm from "./components/LoginForm";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Shikshya-dark.svg";
import { ToastContainer, toast } from "react-toastify";
import { AxiosError } from "axios";
import showToast from "../../utils/toast";
import { ResponseType } from "../../constants/enum";
import illustration1 from "../../assets/illustration1.svg";
import { motion } from "framer-motion";
import { loginSchemaInterface, loginSchema } from "../../types/form.schema";
import { yupResolver } from "@hookform/resolvers/yup";

const LoginPage = () => {
  const { mutateAsync: loginAsync, isLoading } = useMutation({
    mutationFn: (body: loginSchemaInterface) => useLogin(body),
    retry: false,
  });
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    reset,
  } = useForm<loginSchemaInterface>({
    resolver: yupResolver(loginSchema),
  });

  const useToast = (message: String) => toast.error(message);

  const submitHandler = async (data: loginSchemaInterface) => {
    try {
      const response = await loginAsync(data);
      if (response) {
        reset();
        clearErrors();
        showToast("Login Success", ResponseType.SUCCESS);
        localStorage.setItem("access_token", response.access);
        navigate("/");
      }
    } catch (err) {
      const error = err as AxiosError;
      if (error.response?.status === 401) {
        useToast("Invalid Credentials");
      }
      if (error.response?.status === 500) {
        useToast("Server Error");
      }
    }
  };

  const rightVariant = {
    hidden: {
      x: 100,
      opacity: 0,
      overflow: "hidden",
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "linear",
        stiffness: "10",
        velocity: "0.5",
      },
    },
  };
  return (
    <>
      <div className="flex h-screen w-full">
        <motion.div
          initial={"hidden"}
          variants={rightVariant}
          animate={"visible"}
          className="hidden md:flex w-1/2 flex-grow bg-primary"
        >
          <motion.img
            initial={{ y: 0 }}
            animate={{
              y: [-20, 0, -20],
              transition: {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
            src={illustration1}
          />
        </motion.div>
        <div className="flex flex-col justify-between items-center w-1/2 flex-grow">
          <div className="flex w-full justify-center md:justify-start py-6 px-10 border border-b-gray-200">
            <img src={logo} alt="logo of shikshya" width={"130px"} />
          </div>
          <LoginForm
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            submitHandler={submitHandler}
            isLoading={isLoading}
          />
          <div className="flex w-full h-20 justify-center border border-t-gray-300"></div>
        </div>
      </div>
      <ToastContainer
        closeOnClick={true}
        pauseOnHover={true}
        autoClose={1000}
      />
    </>
  );
};

export default LoginPage;
