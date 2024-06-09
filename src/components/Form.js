import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import "./form.css";

const fetchCountries = async () => {
  const response = await axios.get("https://restcountries.com/v3.1/all");
  return response.data
    .map((country) => ({
      name: country.name.common,
      code: country.cca3,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
};

const Form = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const {
    data: countries,
    isLoading,
    error,
  } = useQuery("countries", fetchCountries);

  useEffect(() => {
    if (error) {
      console.error("Error fetching countries:", error);
    }
  }, [error]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error Loading Countries.</div>;

  const onSubmitWithReset = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmitWithReset)}>
      {/*.....................................COUNTRY DIVISION...........................*/}
      <div className="mb-3">
        <label htmlFor="country" className="form-label">
          COUNTRY
        </label>
        <select
          id="country"
          className="form-select"
          {...register("country", { required: "Required Field" })}
        >
          <option value="">Select a country</option>
          {countries.map((country) => (
            <option key={country.code} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
        {errors.country && (
          <div className="text-danger">{errors.country.message}</div>
        )}
      </div>

      {/* .........................................ROLE DIVISION............................... */}
      <div className="mb-3">
        <label htmlFor="role" className="form-label">
          SELECT ROLE
        </label>
        <select
          id="role"
          className="form-select"
          {...register("role", { required: "Required Field" })}
        >
          <option value="">Select a role</option>
          <option value="Role 1">Role 1</option>
          <option value="Role 2">Role 2</option>
          <option value="Role 3">Role 3</option>
        </select>
        {errors.role && (
          <div className="text-danger">{errors.role.message}</div>
        )}
      </div>

      {/* .......................SUPERVISOR.................. */}
      <div>
        <label htmlFor="supervisor" className="form-label">
          SUPERVISOR
        </label>
        <select
          id="supervisor"
          className="form-select"
          {...register("supervisor", { required: "Required Field" })}
        >
          <option value="">Select a Supervisor</option>
          <option value="sup1">Supervisor 1</option>
          <option value="sup2">Supervisor 2</option>
          <option value="sup3">Supervisor 3</option>
        </select>
      </div>

      {/* .......................FIRST NAME.................. */}
      <div className="name">
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            FIRST NAME
          </label>
          <input
            type="text"
            id="firstName"
            className="form-control"
            {...register("firstName", { required: "Required Field" })}
          />
          {errors.firstName && (
            <div className="text-danger">{errors.firstName.message}</div>
          )}
        </div>

        {/* .......................LAST NAME.................. */}
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            LAST NAME
          </label>
          <input
            type="text"
            id="lastName"
            className="form-control"
            {...register("lastName", { required: "Required Field" })}
          />
          {errors.lastName && (
            <div className="text-danger">{errors.lastName.message}</div>
          )}
        </div>
      </div>

      {/* .......................MOBILE CODE.................. */}
      <div className="mobile">
        <div className="mb-3">
          <label htmlFor="mobileCode" className="form-label">
            MOBILE CODE
          </label>
          <select
            id="mobileCode"
            className="form-select"
            {...register("mobileCode", { required: "Required Field" })}
          >
            <option value="">Select a mobile code</option>
            <option value="966">966</option>
            <option value="971">971</option>
            <option value="91">91</option>
          </select>
          {errors.mobileCode && (
            <div className="text-danger">{errors.mobileCode.message}</div>
          )}
        </div>

        {/* .......................MOBILE NUMBER.................. */}
        <div className="mb-3">
          <label htmlFor="mobileNumber" className="form-label">
            MOBILE NUMBER
          </label>
          <input
            type="number"
            id="mobileNumber"
            className="form-control"
            {...register("mobileNumber", {
              required: "Required Field",
              valueAsNumber: true,
            })}
          />
          {errors.mobileNumber && (
            <div className="text-danger">{errors.mobileNumber.message}</div>
          )}
        </div>
      </div>

      {/* .......................EMAIL.................. */}
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          EMAIL
        </label>
        <input
          type="email"
          id="email"
          className="form-control"
          {...register("email", { required: "Required Field" })}
        />
        {errors.email && (
          <div className="text-danger">{errors.email.message}</div>
        )}
      </div>

      {/* .......................CARD LOAD LIMIT.................. */}
      <div className="mb-3">
        <label htmlFor="cardLoadLimit" className="form-label">
          CARD LOAD LIMIT
        </label>
        <input
          type="number"
          id="cardLoadLimit"
          className="form-control"
          {...register("cardLoadLimit", {
            required: "Required Field",
            valueAsNumber: true,
          })}
        />
        {errors.cardLoadLimit && (
          <div className="text-danger">{errors.cardLoadLimit.message}</div>
        )}
      </div>

      {/* .......................PAYMENT LIMIT.................. */}
      <div className="mb-3">
        <label htmlFor="paymentLimit" className="form-label">
          PAYMENT LIMIT
        </label>
        <input
          type="number"
          id="paymentLimit"
          className="form-control"
          {...register("paymentLimit", {
            required: "Required Field",
            valueAsNumber: true,
          })}
        />
        {errors.paymentLimit && (
          <div className="text-danger">{errors.paymentLimit.message}</div>
        )}
      </div>
      <div className="buttons">
        <button type="submit" className="btn btn-primary">
          +Add User
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => window.location.reload()}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Form;
