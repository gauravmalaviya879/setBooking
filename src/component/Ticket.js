import React, { useContext, useEffect, useState } from 'react'
import { Contexcreate } from '../contex/TicketContex'
import { useNavigate } from 'react-router-dom';

export default function Ticket() {

    let { id, book, total, seats, setSeats, setTotal, setBook, users, setUsers } = useContext(Contexcreate);

    let [seat, setSeat1] = useState("")
    let [name, setName] = useState("")

    let nav = useNavigate();

    useEffect(() => {
        let temp = []
        book.filter((det) => {
            if (!det.booked) {
                console.log(det);
                temp = [...temp, det.seet];
            }
        })
        setSeat1(temp);
    }, [])

    const seatconfirmd = () => {
        if (name !== "") {
            let temp = seats;
            let obj = {
                name: name,
                seet: book,
                total
            }
            console.log(obj);
            temp[0] = temp[0].map((det) => {
                if (seat.includes(det.seet))
                    det.booked = true;
                return det;
            })
            temp[1] = temp[1].map((det) => {
                if (seat.includes(det.seet))
                    det.booked = true;
                return det;
            })
            temp[2] = temp[2].map((det) => {
                if (seat.includes(det.seet))
                    det.booked = true;
                return det;
            })

            console.log(obj);
            let temp2 = [...users, obj]
            setUsers(temp2)
            setTotal(0);
            setBook([]);
            setSeats(temp);
            nav('/')
        }
        else {
            alert("Please Enter Your Name")
        }
    }

    return (
        <>
            <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-lg border-red-800 border-4 p-16 grid grid-cols-2 gap-5'>
                <img src={id?.image}></img>
                <div className='grid grid-cols-2 items-center gap-5'>
                    <span className='font-bold text-2xl'>Movie Name:</span>
                    <span className='text-xl'>{id?.name}</span>
                    <span className='font-bold text-2xl'>Movie time:</span>
                    <span className='text-xl'>{id?.time}</span>
                    <span className='font-bold text-2xl'>Seats No:</span>
                    <span className='uppercase text-xl'>{seat.toString()}</span>
                    <span className='font-bold text-2xl'>Total : </span>
                    <span className='uppercase text-xl'>{total}</span>
                    <span className='uppercase text-xl'>Enter Your Name</span>
                    <span className='uppercase text-xl col-span-2 border-2 border-pink-600 rounded-lg overflow-hidden'>
                        <input type='text' value={name} onChange={(e) => setName(e.target.value)} className='w-full border-0 ps-5' autoFocus />
                    </span>
                    <span className='uppercase text-xl col-span-2'>
                        <buttom onClick={() => {
                            seatconfirmd()
                        }} class="mt-3 cursor-pointer inline-block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Confirm </buttom>
                    </span>
                </div>
            </div>
        </>
    )
}
