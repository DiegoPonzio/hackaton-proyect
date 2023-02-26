import con from "../../../lib/db/config";
import myQuerys from "../../../lib/db/querys";
import { format } from "mysql2"

export default async function submitAuction(req, res) {
    if (req.method == "POST") {
        const { schedule, max, strBid, desc, type, adminUser } = req.body;
        console.log(req.body);
        const { insertAuction, insertScheduledAuction } = myQuerys
        if (schedule) {
            try {
                const query = format(insertAuction, [
                    adminUser, max, type, desc, strBid
                ])
                const [{ insertId }] = await con.query(query)
                const query2 = format(insertScheduledAuction, [
                    schedule.hour, schedule.date, insertId
                ]);
                const response = await con.query(query2);
                return res.status(200).json({
                    status: "ok",
                    result: response
                })
            } catch (error) {
                res.status(400).json({ status: "error", error: error });
            }




            /*
            con.query(myQuerys.insertAuction, [adminUser, max, type, desc, strBid], (err, result) => {
                if (err) return res.json({ status: "error", error: err });
                else {
                    con.query(myQuerys.insertScheduledAuction, [schedule.hour, schedule.date, result.insertId], (err, result) => {
                        if (err) return res.json({ status: "error", error: err });
                        else {
                            return res.json({
                                status: "ok",
                                response: result
                            })
                        }
                    });
                }
            });
             */


        } else {

        }
    } else {
        return res.status(400).json({
            status: "bad request"
        })
    }

}