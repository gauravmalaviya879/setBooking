import React, { useContext } from 'react'
import { Contexcreate } from '../contex/TicketContex'
import { useNavigate } from 'react-router-dom';

export default function Detail() {

    let { id } = useContext(Contexcreate);

    let nav = useNavigate();
    return (
        <>
            <div className='h-screen setcol'>
                <div className='flex p-16 gap-5'>
                    <div className=''>
                        <img src={id?.image} />
                    </div>
                    <div className='flex flex-col gap-5 uppercase font-bold justify-center ms-20'>
                        <div className="flex">
                            <div>Name : </div>
                            <div className='ms-3'>{id?.name}</div>
                        </div>
                        <div className="flex">
                            <div>LIC. : </div>
                            <div className='ms-3'>{id?.stad}</div>
                        </div>
                        <div className="flex">
                            <div>Language : </div>
                            <div className='ms-3'>{id?.language}</div>
                        </div>
                        <div className="flex">
                            <div>2D / 3D : </div>
                            <div className='ms-3'>{id?.D}</div>
                        </div>
                        <div className="flex">
                            <div>Time : </div>
                            <div className='ms-3'>{id?.time}</div>
                        </div>
                        <div className="flex">
                            <div>Relese Date : </div>
                            <div className='ms-3'>{id?.date}</div>
                        </div>
                        <div className="flex">
                            <div>Type : </div>
                            <div className='ms-3'>{id?.type}</div>
                        </div>
                        <buttom onClick={() => {
                            nav("/seatpage")
                        }} class="mt-3 text-center cursor-pointer inline-block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Book Ticket</buttom>
                    </div>
                </div>
            </div>
        </>
    )
}
