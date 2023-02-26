import con from "../../../lib/db/config";
import myQuerys from "../../../lib/db/querys";

export default async function getAuctions(req,res){
    if(req.method=="POST"){
        const {selectAuctions}=myQuerys;
        try{
            const response=await con.query(selectAuctions);
            return res.status(200).json({
                status:"ok",
                result:response
            });
        }catch(err){
            return res.status(400).json({
                status:"error",
                error:err
            });
        }
    }
}