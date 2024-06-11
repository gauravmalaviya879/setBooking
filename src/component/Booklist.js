import React, { useContext } from 'react'
import { Contexcreate } from '../contex/TicketContex';
import { Table } from "flowbite-react";

export default function Booklist() {
    let { users } = useContext(Contexcreate);

    let get = (a) => {
        let temp = []
        a.forEach((det) => {
            temp.push(det.seet);
        })
        return temp.toString();
    }

    return (
        <>
            {/* <table>
                <tr>
                    <th>Name</th>
                    <th>Seats</th>
                    <th>Price</th>
                </tr>
                {
                    users.map(user => {
                        return (
                            <tr>
                                <td>{user.name}</td>
                                <td>{get(user.seet)}</td>
                                <td>{user.total}</td>
                            </tr>
                        )
                    })
                }
            </table> */}
            <div className="overflow-x-auto">
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>name</Table.HeadCell>
                        <Table.HeadCell>Seats</Table.HeadCell>
                        <Table.HeadCell>Price</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            users.map(user => {
                                return (

                                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            {'Apple MacBook Pro 17"'}
                                        </Table.Cell>
                                        <Table.Cell>{user.name}</Table.Cell>
                                        <Table.Cell>{get(user.seet)}</Table.Cell>
                                        <Table.Cell>{user.total}</Table.Cell>
                                    </Table.Row>
                                )
                            })
                        }
                    </Table.Body>
                </Table>
            </div>
        </>
    )
}
