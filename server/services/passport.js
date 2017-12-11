const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

const callbackURL = "/auth/google/callback";

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: callbackURL
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("Access token ", accessToken);
      console.log("Refresh token ", refreshToken);
      console.log("Profle ", profile);
      console.log("Done ", done);
    }
  )
);
