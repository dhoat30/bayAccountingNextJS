import cookie from 'cookie'
import axios from 'axios'
async function handler(req, res) {
    if (req.method === 'POST') {
        const user = await axios.post("https://inspiry.co.nz/wp-json/jwt-auth/v1/token",
            {
                username: req.body.username,
                password: req.body.password
            }).then(response => {
                return response
            }).catch(err => {
                return err.response.status
            })

        if (user === 403) {
            res.status(403).json({ message: "Email or password is incorrect" })
        }
        res.setHeader('Set-Cookie', cookie.serialize('inpiryAuthToken', user.data.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            sameSite: "strict",
            maxAge: 162000,
            path: "/"
        }))
        res.json({ message: user.data.token })

    }

    else {
        const response = await fetch(`https://inspiry.co.nz/wp-json/wp/v2/pages?slug=contact`)
        const data = await response.json()
        // const data = JSON.stringify(response)
        res.status(200).json({ data: data })
    }
}

export default handler
