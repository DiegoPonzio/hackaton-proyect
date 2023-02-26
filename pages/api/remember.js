import withSession from "../../lib/remember"

export default withSession(async (req, res) => {
    switch (req.method) {
        case "GET":
            try {
                await saveSession({ message: "Has been loged" }, req)
                return res.status(200).json({ message: "Acepted", result: "OK", status: 200 })
            } catch (error) {
                return res.status(400).json({ message: 'Bad request', result: err, status: 400 })
            }

        default:
            return res.status(400).json({ message: "Bad request" })
    }
})

async function saveSession(message, request) {
    request.session.set("remember", message);
    await request.session.save();
}