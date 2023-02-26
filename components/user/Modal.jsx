import { AiOutlineUserAdd, AiOutlineFileAdd, AiOutlineAppstore } from "react-icons/ai"
import Link from "next/link"
import { WalletModalButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { useWallet } from "@solana/wallet-adapter-react"
import { GoLaw } from 'react-icons/go'
import { useContext } from "react"
import selectedItem from "../../lib/homeHooks"
import { AiFillHome } from "react-icons/ai"


const Modal = () => {
    const ctx = useContext(selectedItem)
    const { mySelectedItem, setMySelectedItem } = ctx

    const { publicKey } = useWallet()

    return (
        <div id="drawer-navigation" className="fixed z-40 h-screen p-4 w-80 pt-24" tabIndex="-1" aria-labelledby="drawer-navigation-label">
            <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase">Menu</h5>
            {/*<button type="button" data-drawer-dismiss="drawer-navigation" aria-controls="drawer-navigation" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center" onClick={ () => setClose(!close)} >
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    <span className="sr-only">Close menu</span>
                </button>*/} 
                {/* aqui en el menu se puede poner la parte del logo y nombre  */}
            <div className="py-4">
                <ul className="space-y-2">
                    <li>
                        <div className="flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-gray-500 cursor-pointer" onClick={ () => setMySelectedItem(0)}>
                            <AiFillHome className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                            <span className="ml-3">Home</span>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-gray-500 cursor-pointer" onClick={ () => setMySelectedItem(2)}>
                            <AiOutlineAppstore className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                            <span className="flex-1 ml-3 whitespace-nowrap">Mis NFT</span>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center p-2 text-base font-normal cursor-pointer text-white rounded-lg hover:bg-gray-500" onClick={ () => setMySelectedItem(3)} >
                            <GoLaw className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                            <span className="flex-1 ml-3 whitespace-nowrap">Crear Subasta</span>
                        </div>
                    </li>
                    {/* <li>
                        <div className="flex items-center p-2 text-base font-normal cursor-pointer text-gray-900 rounded-lg hover:bg-gray-100" >
                            <AiOutlineUserAdd className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                            <span className="flex-1 ml-3 whitespace-nowrap">Agregar Alumno</span>
                        </div>
                    </li> */}
                    <li>
                        <div className="cursor-pointer p-2">
                            {publicKey && <WalletMultiButton className="bg-purple-20" />}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Modal