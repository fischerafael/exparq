import mongoose from "mongoose";

const mongoUrl = process.env.MONGO_URL;

const db = () => {
  if (!mongoUrl) throw new Error("No mongoURL provided");

  mongoose.connect(mongoUrl).then((mongoose) => {
    return mongoose;
  });
};

export { db };
