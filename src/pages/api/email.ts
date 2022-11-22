import type { NextApiRequest, NextApiResponse } from 'next'
import ses from 'node-ses'

const key = process.env.SES_ACCESS_KEY || ''
const secret = process.env.SES_SECRET_ACCESS_KEY || ''
const region = process.env.SES_REGION || ''
const emailAddress = process.env.SES_EMAIL || ''

const client = ses.createClient({
    key,
    secret,
    amazon: `https://email.${region}.amazonaws.com`,
})

const email = (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        res.setHeader('Content-Type', 'application/json')

        let message =
            '<h1 style="font-family: Verdana; font-weight: bold;">Details can be found below:</h1>'

        for (const [key, value] of Object.entries(JSON.parse(req.body))) {
            message += `<div style="padding: 1rem; padding-left: 0; font-family: Verdana;"><span style="font-weight: bold; text-transform: uppercase;">${key}:</span> <span style="text-decoration: none;">${value}</span></div>`
        }

        client.sendEmail(
            {
                to: emailAddress,
                from: emailAddress,
                subject: 'Rolled Sleeves New Contact Form Submission!',
                message: message,
            },
            (err) => {
                if (!err) {
                    res.statusCode = 200
                    res.end(JSON.stringify({ message: 'Success' }))
                } else {
                    res.statusCode = 500
                    res.end(JSON.stringify({ message: 'Server Error' }))
                }
            },
        )
    } else {
        res.statusCode = 400
        res.end(JSON.stringify({ message: 'Post Requests Only' }))
    }
}

export default email
