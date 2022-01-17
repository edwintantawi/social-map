import { nanoid } from 'nanoid';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

import { getEnv } from '../config/index.js';
import { User } from '../models/Users.model.js';

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (userId, done) => {
  const user = await User.findOne({ where: { id: userId } });

  done(null, user.dataValues);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: getEnv('GOOGLE_CLIENT_ID'),
      clientSecret: getEnv('GOOGLE_CLIENT_SECRET'),
      callbackURL: '/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, cb) => {
      const users = await User.findOrCreate({
        where: { googleId: profile.id },
        defaults: {
          id: `user-${nanoid(16)}`,
          displayName: profile.displayName,
          photo: profile.photos[0].value,
        },
      });

      cb(null, users[0].dataValues);
    }
  )
);

export { passport };
