import User from '../Model/userModel.js';
import bcrypt from 'bcryptjs';

export const signUp = async (req, res) => {
  /*****************************Register user route*****************************/
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({
      error: 'Name, Email and password are required for registering user',
    });
  }

  // Check if the email is already exists
  const exist = await User.findOne({ email: email });
  if (exist) {
    return res.status(400).json({
      error: 'Email already exists',
    });
  }

  // Hashed the password

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);
  // Create a new user account
  try {
    const user = await User.create({ name, email, password: hashedPassword });
    // Send the response
    res.status(200).json({
      message: 'User Created!',
      user,
    });
  } catch (error) {
    res.status(500).json({
      error: 'Try again one more time',
    });
  }
};

export const login = async (req, res) => {
  /*****************************Login user route*****************************/
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      error: 'Email and password are required for login',
    });
  }

  // Check if the email is already exists

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({
      error: 'Incorrect email',
    });
  }

  // Check if the password is correct

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(400).json({
      error: 'Incorrect password',
    });
  }

  try {
    res.status(200).json({
      message: 'Login successfull',
      user: { email: user.email, name: user.name, _id: user._id },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};