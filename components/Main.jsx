import Image from "next/image"
import { useState } from "react"
import logo from "../public/logo.png"
import Router from 'next/router'
import axios from "axios"
import { NotificationManager, NotificationContainer } from "react-notifications"

const Main = () => {
    const [ selected, setSelected ] = useState(false)

    const handlerPropost = async e => {
        if(!selected) {
            Router.replace('/')
        } else {
            console.log("entro");
            const res = await axios.get('/api/remember')
            .then( () => Router.replace('/') )
            .catch( () => NotificationManager.error("Hay un problema :(", "Error!") )
        }        
    }

    return (
        <div className="flex justify-center items-center w-full h-full p-8 gap-4 text-2xl pl-20">
            <NotificationContainer />
            <div className="w-1/2">
                <div className="flex flex-col">
                    <div className=" text-purple-10 font-bold text-8xl pb-7">
                        Acceder
                    </div>
                    <div className="">
                        NetBet
                    </div>
                    <div className="pb-7">
                        El mejor Lugar para subastar tus NFTs
                    </div>
                    <div className="pb-2">
                        <div class="flex items-center">
                            <input id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={ () => setSelected(!selected)} />
                            <label for="checked-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Recuerdame!</label>
                        </div>
                    </div>
                    <div>
                        <button className="rounded-xl bg-purple-10 w-44 h-16" onClick={handlerPropost}>Comienza ya!</button>
                    </div>
                </div>
            </div>
            <div className="w-1/2 flex justify-center items-center">
                <Image src={logo} className={"w-3/4 h-3/4"} />
            </div>
        </div>
    )
}

export default Main