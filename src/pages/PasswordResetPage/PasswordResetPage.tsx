import PasswordResetForm from "./components/PasswordResetForm";

const PasswordResetPage = () => {
  return (
    <div className="flex h-screen w-full">
      <div className="flex justify-center items-center w-1/2 flex-grow">
        <PasswordResetForm />
      </div>
      <div className="hidden md:flex w-1/2 flex-grow">
        <img src={""} />
      </div>
    </div>
  );
};

export default PasswordResetPage;
