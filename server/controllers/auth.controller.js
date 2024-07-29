const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const { authService } = require("../services");

const signup = async (req, res) => {
  try {
    // console.log(req.body);
    const { username, password, email } = req.body;

    const userDetail = await authService.isEmailTaken(email);
    // console.log(userDetail);

    if (userDetail) {
      return res.status(400).json({
        message: "Already Exist User",
      });
    }

    /* decrypt password via bcryptjs & create obj payload */
    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(password, salt);

    const payload = {
      username,
      email,
      password: hashPassword,
    };

    authService.createUser(payload);

    return res.status(200).json({
      message: "User Created Successfully",
      data: payload,
      success: true,
    });
  } catch (error) {
    // console.log(error)
    return res.status(500).json({
      message: error.message || error,
    });
  }
};

const signin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "All Fields are required",
    });
  }

  try {
    const validUser = await authService.isEmailTaken(email);

    if (!validUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return res.status(400).json({
        message: "Invalid password",
      });
    }

    const token = jwt.sign(
      { id: validUser._id },
      "fLrOSTlarlGSeC3xcSmveg3HdXJGXy2QthR5X0BL3oGM76gPYpVfBfetTzjCxrcg"
    );

    const { password: pwd, ...user } = validUser._doc;

    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json({
        success: true,
        data: user,
        message: "Login Successfully",
      });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
    });
  }
};

module.exports = { signup, signin };
