import mongoose from "mongoose";

const mongoUrl = process.env.MONGO_URL;

const db = async () => {
  if (!mongoUrl) throw new Error("No mongoURL provided");

  await mongoose.connect(mongoUrl).then((mongoose) => {
    return mongoose;
  });
};

export { db };
