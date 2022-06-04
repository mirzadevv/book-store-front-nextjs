import { useState, useContext } from "react";
import Link from "next/link";
import styles from "../../styles/pages/account/account.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  /*
  this error handling is not suitable for using toastify, It's suitable when wee keep errors inside an object and use it below the inputs
  const [errors, setErrors] = useState({});

  function handleErrors() {
    const errors = {};
    if (formData.email.trim() === "") errors.email = "Email is required";
    if (formData.password.trim() === "")
      errors.password = "Password is required";
    return Object.keys(errors).length === 0 ? null : errors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errors = handleErrors();
    setErrors(errors || {});
    if (errors) return;
    console.log("submitted");
  }
  */

  function handleErrors() {
    if (formData.email.trim() === "" || formData.password.trim() === "") {
      toast.error("You need to fill all fields");
      return true;
    } else {
      return false;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errors = handleErrors();
    if (!errors) {
      console.log("submitted");
    }
  }

  function handleChange(e) {
    const newFormData = { ...formData };
    newFormData[e.currentTarget.name] = e.currentTarget.value;
    setFormData(newFormData);
  }

  return (
    <div className={styles.login}>
      <ToastContainer />
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1>Login</h1>
        <div className={styles.inputContainer}>
          <input
            type="email"
            className={styles.input}
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <div className={styles.inputContainer}>
          <input
            type="password"
            className={styles.input}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </div>
        <button className={styles.button}>Login</button>
        <p>
          Don't have an account?
          <Link href="/account/register">
            <a> Register</a>
          </Link>
        </p>
      </form>
    </div>
  );
}
