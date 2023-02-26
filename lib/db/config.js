import { createPool } from "mysql2/promise";

const con = createPool({
    database: "railway",
    host: "containers-us-west-194.railway.app",
    password: "ZeZAW7yX7OInFjGK5p9g",
    port: 6029,
    user: "root",
});

export default con;

/**
 * 
create database betnet9;
use betnet9;
create table Auctions(
    auctionId int auto_increment,
    auctionCreator varchar() not null,
    
)
 * 
 */