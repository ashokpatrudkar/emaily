const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const keys = require("./config/keys");

const app = express();

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

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

app.get("/auth/google/callback", passport.authenticate("google"));

const PORT = process.env.PORT || 5000;

app.listen(PORT);
