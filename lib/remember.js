import { withIronSession } from "next-iron-session"

export default function withSession(handler) {
    return withIronSession(handler, {
        password: 'cookie_super_secreta_que_nadie_conoce16', //verdad?
        cookieName: 'RememberCookie',
        cookieOptions: {
            // esto se puede ocupar en modo de desarrollo donde no ocupamos https
            secure: process.env.NODE_ENV === "production"
        }
    })
}