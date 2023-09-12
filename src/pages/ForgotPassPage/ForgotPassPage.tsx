import ForgotPassForm from "./components/ForgotPassForm";
import logo from "../../assets/Shikshya-dark.svg";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import illustration2 from "../../assets/illustration2.svg";
import {
  forgetPasswordSchema,
  forgetPasswordSchemaInterface,
} from "../../types/form.schema";
import { yupResolver } from "@hookform/resolvers/yup";

const ForgotPassPage = () => {
  const leftVariant = {
    hidden: {
      x: -100,
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

  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm<forgetPasswordSchemaInterface>({
    resolver: yupResolver(forgetPasswordSchema),
  });

  const submitHandler = (data: forgetPasswordSchemaInterface) => {
    clearErrors();
    reset();
  };

  return (
    <div className="flex h-screen w-full">
      <div className="flex flex-col justify-between items-center w-1/2 flex-grow">
        <div className="flex w-full justify-center md:justify-end py-6 px-10 border border-b-gray-200">
          <img src={logo} alt="logo of shikshya" width={"130px"} />
        </div>
        <ForgotPassForm
          register={register}
          handleSubmit={handleSubmit}
          isLoading={false}
          submitHandler={submitHandler}
          errors={errors}
        />
        <div className="flex w-full h-20 justify-center border border-t-gray-300"></div>
      </div>
      <motion.div
        variants={leftVariant}
        initial={"hidden"}
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
          src={illustration2}
        />
      </motion.div>
    </div>
  );
};

export default ForgotPassPage;
