//denle un css aca chido...
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Select from 'react-select'
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid } from "@mui/material";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

export default function FormBetConfig() {

    //USESTATES
    const [info, setInfo] = useState("Determines the privacy of the auction. Choose to make it public or private.");
    const [info2, setInfo2] = useState("Do you want to enable the scheduled auction options?");
    const [optSelected, setOptSelected] = useState(false);
    const [checked, setChecked] = useState(false);

    //VARS
    const options = [
        { value: 'Private', label: 'Private Acuction' },
        { value: 'Public', label: 'Public Acuction' }
    ]
    const { publikey } = useWallet();

    //START HANDLERS
    const handleChangeSelect = ({ value }) => {
        //console.log(value);
        if (value == "Private") {
            setInfo("Private auctions are characterized by generating a code which you can share with the users you want.");
            setOptSelected(true);
        } else {
            setInfo("Public auctions are notorious for not offering a permit code. Anyone who finds the auction will be able to join. You can remove participants during the waiting room.");
            setOptSelected(false);
        }
    }

    const handleSubmitForm = async (event) => {
        event.preventDefault();
        if (checked) {//habilito las opciones de subasta programada
            await axios.post("/api/testApi/submitAuction", {
                schedule: {
                    date: event.target.date.value,
                    hour: event.target.hour.value,
                },
                max: event.target.max.value,
                strBid: event.target.strBid.value,
                desc: event.target.desc.value,
                type: optSelected,
                adminUser: publikey
            }).then(() => {
                toast.success(`¡Subasta correctamente publicada!`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            })
                .catch(error => {
                    toast.error(`UPS! Something went wrong. Error: ${error}`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    })
                })
            //console.log(data);
        }
    }

    const handleChangeCheckBox = () => {
        setChecked(!checked);
    };


    useEffect(() => {
        if (checked) {
            setInfo2("");
        } else {
            setInfo2("Do you want to enable the scheduled auction options?");
        }
    }, [checked]);

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <form onSubmit={handleSubmitForm} className='max-w-xl bg-gray-10 shadow-md rounded py-2 px-4'>
                <h1 className="text-4xl text-purple-10 py-8 text-center">Auction Config</h1>
                {/* <hr /> */}
                {info2}
                <label>Auction titl</label>
                <h1><input type="checkbox" onChange={handleChangeCheckBox} /><strong>Date config</strong></h1>
                <DateConfigOptions mark={checked} className='pb-8'></DateConfigOptions>
                <h1 className="py-5"><strong>Product Config</strong></h1>
                {/**AQUI VA LA SUBIDA DEL NFT */}
                <h1><strong>Auction</strong></h1>
                <label>Maximum number of participants: </label><input className="mb-5 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="number" min="2" id="auction-min" name="max" placeholder="default: 2" /><br />
                <label>Privacy of the Auction.</label>
                <Select className="bg-gray-200 appearance-none border-2 border-gray-200 rounded" options={options} onChange={handleChangeSelect}></Select>
                {info}
                <br />
                <label><strong>Starting bid: </strong></label>
                <input className="mb-5 bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="number" id="auction-str-bid" name="strBid" placeholder="Participants must bet an amount greater than or equal to this amount" />
                <br />
                <label><strong>Description about the auction</strong></label>
                <br />
                <textarea name="desc" className="mb-5 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                <br />
                <button type="submit" className="bg-purple-20 hover:bg-purple-10 text-white font-bold py-2 px-4 rounded">Crear Subasta</button>
            </form>
        </>
    )
}

const DateConfigOptions = ({ mark }) => {
    const validateDate = (event) => {
        const startDate = new Date(event.target.value);
        const dateNow = new Date();

        if (startDate < dateNow) {
            const [year, month, day] = event.target.value.split("-");
            if (
                dateNow.getFullYear() != year ||
                dateNow.getMonth() + 1 != JSON.parse(month.replace("0", "")) ||
                dateNow.getDate() != day
            ) {
                toast.error('ERROR FECHA INVALIDA', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                event.target.value = "dd/mm/aaaa"
            }
        }
    }
    if (mark) {
        return (
            <>
                <Grid container spacing={2} sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: 1,
                    paddingBottom: 1,
                    // textAlign: 'right',
                }}>
                    <Grid item >
                        <Typography>
                            Auction date:
                        </Typography>
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="date" id="auction-date" name="date" onChange={validateDate} />
                    </Grid>
                    <Grid item>
                        <Typography>
                            Auction start hour:
                        </Typography>
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="time" id="auction-hour" name="hour" />
                    </Grid>
                </Grid>
                {/* <table className="table-auto">
                    <tr>
                        <td>
                            <label>Auction date</label>
                        </td>
                        <td>
                            <input type="date" id="auction-date" name="date" onChange={validateDate} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Auction start hour: </label>
                        </td>
                        <td>
                            <input type="time" id="auction-hour" name="hour" />
                        </td>
                    </tr>
                </table> */}
            </>
        )
    } else {
        return (
            <></>
            // <table>
            //     <tr>
            //         <td>
            //             <label>Auction date</label>
            //         </td>
            //         <td>
            //             <input type="date" id="auction-date" name="date" onChange={validateDate} disabled />
            //         </td>
            //     </tr>
            //     <tr>
            //         <td>
            //             <label>Auction start hour: </label>
            //         </td>
            //         <td>
            //             <input type="time" id="auction-hour" name="hour" disabled />
            //         </td>
            //     </tr>
            // </table>
        )
    }
}