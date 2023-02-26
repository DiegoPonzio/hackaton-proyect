import Modal from "./user/Modal"
import selectedItem from "../lib/homeHooks"
import { useState } from "react"
import Balance from "./user/Balance";
import WalletSearch from "./WalletSearch";
import AuctionsList from "./AuctionsList";
import FormBetConfig from "../pages/test/BetDynamic";

const Drawer = ({ children }) => {
    const [mySelectedItem, setMySelectedItem] = useState(0)

    return (
        <div className="flex h-screen w-screen">
            <div className="w-80 h-screen">
                <selectedItem.Provider value={{ mySelectedItem, setMySelectedItem }}>
                    <Modal />
                </selectedItem.Provider>
            </div>
            <div className="w-4/5 pt-24">
                <div className="p-4 grid place-items-center">
                    {mySelectedItem === 0 && (
                        <div className="p-2 mt-2 text-white">
                            <AuctionsList />
                        </div>
                    )}
                    {mySelectedItem === 2 && (
                        <div className="p-4">
                            <WalletSearch/>
                        </div>
                    )}
                    {mySelectedItem == 3 && (
                        <div className="p-4">
                            <FormBetConfig />
                        </div>
                    )}
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Drawer