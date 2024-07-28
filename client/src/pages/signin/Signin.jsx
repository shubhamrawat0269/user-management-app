import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import styles from "./Signin.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, Label, TextInput } from "flowbite-react";
import { handleSignin } from "../../store/slices/userSlice";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    setFormData({
      ...formData,
      [id]: value.trim(),
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Fill out all form field");
      return;
    }

    // Api Call

    const API_URL = `${import.meta.env.VITE_BACKEND_URL}/api/auth/sign-in`;
    try {
      setLoader(true);
      const res = await axios.post(API_URL, formData);
      // console.log(res);

      if (res.data.success) {
        setLoader(false);
        dispatch(handleSignin(res.data));
        toast.success(res.data.message);
        navigate("/");
      }
    } catch (error) {
      // console.log(error);
      setLoader(false);
      toast.error(error.response.data.message);
      setUserSignupData({
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className={styles.signinContainer}>
      <form className={styles.formSection} onSubmit={handleFormSubmit}>
        <h1 className={styles.title}>Sign In</h1>
        <div>
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
          Don't have an account?
          <Link to={"/sign-up"} className="text-green-800 font-semibold">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signin;
