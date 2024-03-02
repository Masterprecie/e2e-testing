import { useNavigate } from "react-router-dom";
import "../App.css";
import { useForm } from "react-hook-form";

export const Home = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const handleLogin = (data) => {
    console.log(data);
    navigate("/success");
  };
  return (
    <div>
      <h1 className="heading">Register</h1>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="form-input">
          <input
            // data-cy="first-name-input"
            type="text"
            placeholder="First Name"
            id="first_name"
            name="first_name"
            {...register("first_name", {
              required: {
                value: true,
                message: "First Name is required",
              },
            })}
          />
          <p id="error-first-name" className="error">
            {errors.first_name?.message}
          </p>
        </div>
        <div className="form-input">
          <input
            // data-cy="last-name-input"
            type="text"
            placeholder="Last Name"
            id="last_name"
            name="last_name"
            {...register("last_name", {
              required: {
                value: true,
                message: "Last Name is required",
              },
            })}
          />
          <p id="error-last-name" className="error">
            {errors.last_name?.message}
          </p>
        </div>

        <button id="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
