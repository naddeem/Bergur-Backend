import app from "./app.js";
import { connectDB } from "./config/database.js";
// import Razorpay from "razorpay";

// export const instance = new Razorpay({
//   key_id: process.env.RAZORPAY_API_KEY,
//   key_secret: process.env.RAZORPAY_API_SECRET,
// });
connectDB();
app.get("/", (req, res, next) => {
  res.send("<h1>Server is working</h1>");
});
app.listen(process.env.PORT, () =>
  
);
