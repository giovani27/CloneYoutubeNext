import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
const options = {
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorizationUrl:
        'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
    }),
  ],
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60,

  },
  jwt: {
       secret: process.env.JWT_SECRET 
  }

  // A database is optional, but required to persist accounts in a database
  // database: process.env.DATABASE_URL,
};

export default (req, res) => NextAuth(req, res, options);
