import React, { createContext, useContext } from 'react'
import { Button } from "flowbite-react";
import { Contexcreate } from '../contex/TicketContex';
import { Link, useNavigate } from 'react-router-dom';

export default function Moviecard(props) {

    let { setId } = useContext(Contexcreate);
    let navi = useNavigate();

    return (
        <>
            <div className="max-w-sm bg-white border border-gray-200 rounded-l-2xl shadow dark:bg-gray-800 dark:border-gray-700">
                <button onClick={() => {
                    setId(props.data)
                    navi("/detail")
                }} >
                    <img className="rounded-lg" src={props.data.image} alt="" />
                </button>
                <div className="p-5">
                    <div className='text-2xl font-bold'>
                        {props.data.name}
                    </div>
                    <div className='text-lg uppercase mt-2'>
                        {props.data.stad}
                    </div>
                    <div className='text-lg uppercase mt-2'>
                        {props.data.language}
                    </div>
                    <buttom onClick={() => {
                        setId(props.data)
                        navi("/detail")
                    }} class="mt-3 cursor-pointer inline-block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Read More</buttom>
                </div>
            </div>
        </>
    )
}
