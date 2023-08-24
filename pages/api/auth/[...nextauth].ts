import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const findUser = await client?.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        if (!findUser) {
          throw new Error(
            "이메일 및 패스워드가 일치하지 않습니다. 확인 후 다시 로그인 해주세요."
          );
        }

        if (findUser?.password !== credentials?.password) {
          throw new Error(
            "이메일 및 패스워드가 일치하지 않습니다. 확인 후 다시 로그인 해주세요."
          );
        } else {
          return { email: findUser?.email, name: findUser?.name };
        }
      },
    }),
  ],
  secret: process.env.SECRET,
  pages: { signIn: "/enter" },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return url;
    },
  },
});
