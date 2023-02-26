const myQuerys={
    insertAuction:'insert into auctions(adminUser,maxPeopleAllowed,privateAuction,auctionDesc,initialAmount) values(?,?,?,?,?);',
    insertScheduledAuction:'insert into scheduledAuction(auctionHour,auctionDate,auctionId) values(?,?,?);',
    selectAuctions: 'select * from auctions'
    
}

export default myQuerys;