import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import User from "@/models/user.model";
import { connectDB } from "@/lib/mongodb";

export async function getMe() {
  const token = (await cookies()).get("token")?.value;
  if (!token) return null;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      userId: string;
    };

    await connectDB();
    const user = await User.findById(decoded.userId).lean();

    if (!user) return null;

    return {
      _id: user._id.toString(),
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      email: user.email,
      createdAt: user.createdAt?.toISOString(),
      updatedAt: user.createdAt?.toISOString(),
    };
  } catch {
    return null;
  }
}
