import nextAuth, { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import db from "@/libs/db";

const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password", placeholder: "********" }
      },
      async authorize(credentials) {
        console.log('Credenciales: ', credentials);
        if(!credentials) {
          return null;
        }

        const userFound = await db.user.findUnique({
          where: {
            email: credentials.email
          }
        });

        if(!userFound) {
          throw new Error('Credenciales incorrectas');
        }

        const matchPassword = userFound.password === credentials.password;
        if(!matchPassword) throw new Error('Credenciales incorrectas');

        return {
          id: userFound.id.toString(),
          name: userFound.username,
          email: userFound.email
        }
      }
    })
  ],
  pages: {
    signIn: '/auth/login'
  }
}

const handler = nextAuth(authOptions);

export { handler as GET, handler as POST }