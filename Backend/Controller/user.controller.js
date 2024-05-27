import User from '../Model/userModel.js';
import bcrypt from 'bcryptjs';

export const signUp = async (req, res) => {
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
