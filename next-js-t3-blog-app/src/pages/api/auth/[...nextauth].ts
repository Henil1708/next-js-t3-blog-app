import NextAuth from "next-auth";
import { authOptions } from "henil/server/auth";

export default NextAuth(authOptions);
