import {useState,useEffect} from "react";
import CardNft from "./Card"
import { RiAuctionFill } from "react-icons/ri"
import axios from "axios";
import PruebaComp from "./PruebaComp";

const AuctionsList = () => {
    //fetch de las subastas
    const [auctions,setAuctions]=useState([]);
    const getAuctions=async()=>{
        const {data}=await axios.post("/api/testApi/getAuctions");
        console.log(data.result[0]);
        setAuctions(data.result[0]);
    }
    useEffect(()=>{
        getAuctions();
    },[])
    return (
        <div className="flex flex-col">
            <div className="flex p-2 pb-7 text-2xl">
                <RiAuctionFill />
                <span className="pl-2">Subastas:</span>
            </div>    
            <div>
                {/* aqui se iteran las subastas existentes  */}
                <PruebaComp info={auctions}/>
            </div>
        </div>
    )
}

export default AuctionsList