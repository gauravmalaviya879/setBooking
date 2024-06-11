import React, { useContext } from 'react'
import Moviecard from './Moviecard'
import { Carousel } from "flowbite-react";
import { Contexcreate } from '../contex/TicketContex';

export default function Movielist() {

    let { data } = useContext(Contexcreate);

    return (
        <>
            <div className='p-14'>
                <h1 className='text-5xl'>Movie List</h1>
                <p className='text-xl mt-5'>This is the movie list page for Surat</p>
                <img src={require("../images/a2.jpg")} className='w-screen my-5' />

                <div className='mt-7 grid grid-cols-4 gap-5'>
                    {
                        data.map((detaill, ind) => {
                            return <Moviecard data={detaill} key={ind} />
                        })
                    }
                </div>
            </div>
        </>
    )
}
