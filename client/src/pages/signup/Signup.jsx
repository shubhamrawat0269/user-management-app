import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import styles from "./Signup.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    setFormData({
      ...formData,
      [id]: value.trim(),
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password) {
      toast.error("Fill out all form field");
      return;
    }

    // Api Call
    const API_URL = `https://user-management-app-z04j.onrender.com/api/auth/sign-up`;
    try {
      setLoader(true);
      const res = await axios.post(API_URL, formData);
      // console.log(res);

      if (res.data.success) {
        setLoader(false);
        toast.success(res.data.message);
        navigate("/");
      }
    } catch (error) {
      // console.log(error);
      setLoader(false);
      toast.error(error.response.data.message);
      setUserSignupData({
        username: "",
        email: "",
        password: "",
      });
    }
  };
  return (
    <div className={styles.signupContainer}>
      <form className={styles.formSection} onSubmit={handleFormSubmit}>
        <h1 className={styles.title}>Sign Up</h1>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="username"
              className="text-lg text-neutral-900"
              value="Username"
            />
          </div>
          <TextInput
            id="username"
            type="text"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Type Username"
          />
          <div className="mb-2 block">
            <Label
              htmlFor="email"
              value="Email"
              className="text-lg text-neutral-900"
            />
          </div>
          <TextInput
            id="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Type Email"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password"
              className="text-lg text-neutral-900"
              value="Password"
            />
          </div>
          <TextInput
            id="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Type Password"
          />
        </div>
        <Button type="submit" className={styles.submitBtn}>
          {loader ? "Loading..." : "Submit"}
        </Button>
        <div className={styles.checkboxItem}>
          Have an account?
          <Link to={"/"} className="text-green-800 font-semibold">
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
