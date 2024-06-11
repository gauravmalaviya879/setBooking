import React, { useContext } from 'react'
import { Contexcreate } from '../contex/TicketContex'
import { useNavigate } from 'react-router-dom';

export default function Seatpage() {

    let { seats, setSeats, total, setTotal, book, setBook } = useContext(Contexcreate);

    let nav = useNavigate();

    let bookticket = (seet, arr, chek) => {
        let newarr = [...seats];
        let totalval = 0;
        if (!chek) {
            console.log(newarr);
            newarr[arr] = newarr[arr].map((det) => {
                if (det.id == seet)
                    det.book = !det.book;
                return det;
            })
            let filter0 = newarr[0].filter((det) => {
                if (det.book && det.booked === false) {
                    totalval += det.price
                    return det.book;
                }
                return false;
            })
            let filter1 = newarr[1].filter((det) => {
                if (det.book && det.booked === false) {
                    totalval += det.price
                    return det.book;
                }
                return false;
            })
            let filter2 = newarr[2].filter((det) => {
                if (det.book && det.booked === false) {
                    totalval += det.price
                    return det.book;
                }
                return false;
            })
            setTotal(totalval)
            setBook([...filter0, ...filter1, ...filter2]);
            console.log([...filter0, ...filter1, ...filter2]);
            setSeats(newarr);
        }
    }

    return (
        <>
            <h1 className='text-center text-lg font-bold'>Seat Page (click on seet to book and remove that)</h1>

            <h1 className='text-center text-lg font-bold'>Price : 150</h1>

            <div className='grid grid-cols-10 gap-5 p-5'>
                {
                    seats[0].map((detail, ind) => {
                        return (
                            <div className={`${detail.book ? "bg-red-600" : "bg-green-300"} flex justify-center`}>
                                <img src={require("../images/seat.png")} className='rotat' onClick={() => {
                                    bookticket(detail.id, 0, detail.booked)
                                }}></img>
                            </div>
                        )
                    })
                }
            </div>
            <h1 className='text-center text-lg font-bold'>Price : 250</h1>
            <div className='grid grid-cols-10 gap-5 p-5'>
                {
                    seats[1].map((detail, ind) => {
                        return (
                            <div className={`${detail.book ? "bg-red-600" : "bg-green-300"} flex justify-center`}>
                                <img src={require("../images/seat.png")} className='rotat' onClick={() => {
                                    bookticket(detail.id, 1, detail.booked)
                                }}></img>
                            </div>
                        )
                    })
                }
            </div>
            <h1 className='text-center text-lg font-bold'>Price : 350</h1>
            <div className='grid grid-cols-10 gap-5 p-5'>
                {
                    seats[2].map((detail, ind) => {
                        return (
                            <div className={`${detail.book || detail.booked ? "bg-red-600" : "bg-green-300"} flex justify-center`}>
                                <img src={require("../images/seat.png")} className='rotat' onClick={() => {
                                    bookticket(detail.id, 2, detail.booked)
                                }}></img>
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex fixed bottom-0 left-0 bg-slate-400 w-screen p-3 pe-5 justify-between items-center'>
                <h1 className='text-center text-lg font-bold'>Total Price : {total}</h1>
                <buttom onClick={() => {
                    nav("/ticket");
                }} class="mt-3 cursor-pointer inline-block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Pay Now</buttom>
            </div >
        </>
    )
}
