import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./style/createUser.css";

const CreateUser = () => {
  const { register, handleSubmit } = useForm();
  const [login, setLogin] = useState();
  const navigate = useNavigate();

  const sumbit = (data) => {
    createUser(data);
  };

  const createUser = (data) => {
    const URL = "https://e-commerce-api.academlo.tech/api/v1/users";
    axios
      .post(URL, data)
      .then((res) => setLogin(res.data))
      .catch((err) => console.log(err));
  };

  const handledd = () => {
    if (login) {
      navigate("/login");
    }
  };
  console.log(login);

  return (
    <div className="create-container">
      <form className="create__form" onSubmit={handleSubmit(sumbit)}>
        <h2 className="create__form-title">Create User</h2>

        <div className="create__form-div">
          <label className="create__form-firstName">First Name</label>
          <input
            className="create__form-firstName-input"
            type="text"
            {...register("firstName")}
            required
          />
        </div>

        <div className="create__form-div">
          <label className="create__form-lastName">Last Name</label>
          <input
            type="text"
            className="create__form-lastName-input"
            {...register("lastName")}
            required
          />
        </div>

        <div className="create__form-div">
          <label className="create__form-email">Email</label>
          <input
            type="email"
            className="create__form-email-input"
            {...register("email")}
            required
          />
        </div>

        <div className="create__form-div">
          <label className="create__form-password">Password</label>
          <input
            className="create__form-password-input"
            type="password"
            {...register("password")}
            required
          />
        </div>
        <div className="create__form-div">
          <label className="create__form-phone">Phone -10 characters-</label>
          <input
            type="number"
            className="create__form-phone-input"
            {...register("phone")}
            required
            pattern="^\d{10}$"
          />
        </div>

        <div className="create_form-div create_form-div1">
          <input
            type="text"
            placeholder="oblig: admin"
            className="create__form-role-input"
            {...register("role")}
            value="admin"
            disabled
          />
        </div>
        <div className="create__btn-div">
          <button onClick={handledd} className="create__form-btn">
            Create User
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
