import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

import prisma from '@/app/libs/prisma';
// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},

      async authorize(credentials) {
        const { username, password } = credentials;

        try {
          const users = await prisma.user.findUnique({
            where: {
              username: username,
            },
          });
          if (!users) {
            return null;
          }

          const passwordMatch = await bcrypt.compare(password, users.password);

          if (!passwordMatch) {
            return null;
          }

          return users;
        } catch (error) {
          console.log('Error: ', error);
        }
        // return user;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
