import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
  },
  email: {
    type: String,
    required: [true, "Please add a email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Pelase enter a password"],
  },
});
const userDBModel = mongoose.model("User", userSchema);
export default userDBModel;
