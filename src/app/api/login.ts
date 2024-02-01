import { withIronSessionApiRoute } from "iron-session/next";

let pw = process.env.COOKIE_PASSWORD;
if (pw === undefined) {
  console.warn("COOKIE_PASSWORD is null, using `password`.")
  pw = "password";
}

export default withIronSessionApiRoute(
  async function loginRoute(req, res) {
    // get user from database then:
    req.session.user = {
      id: 230,
      admin: true,
    };
    await req.session.save();
    res.send({ ok: true });
  },
  {
    cookieName: "animetracker",
    password: pw,
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  },
);
