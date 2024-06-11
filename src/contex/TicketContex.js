import { createContext, useState } from "react";


let Contexcreate = createContext();

let ContexProvider = (props) => {

    let [total, setTotal] = useState(0);
    let [book, setBook] = useState([]);
    let [users, setUsers] = useState([]);

    let [seats, setSeats] = useState([
        [
            { id: 1, seet: "a1", price: 150, book: false, booked: false },
            { id: 2, seet: "a2", price: 150, book: false, booked: false },
            { id: 3, seet: "a3", price: 150, book: false, booked: false },
            { id: 4, seet: "a4", price: 150, book: false, booked: false },
            { id: 5, seet: "a5", price: 150, book: false, booked: false },
            { id: 6, seet: "a6", price: 150, book: false, booked: false },
            { id: 7, seet: "a7", price: 150, book: false, booked: false },
            { id: 8, seet: "a8", price: 150, book: false, booked: false },
            { id: 9, seet: "a9", price: 150, book: false, booked: false },
            { id: 10, seet: "b10", price: 150, book: false, booked: false },
            { id: 11, seet: "b1", price: 150, book: false, booked: false },
            { id: 12, seet: "b2", price: 150, book: false, booked: false },
            { id: 13, seet: "b3", price: 150, book: false, booked: false },
            { id: 14, seet: "b4", price: 150, book: false, booked: false },
            { id: 15, seet: "b5", price: 150, book: false, booked: false },
            { id: 16, seet: "b6", price: 150, book: false, booked: false },
            { id: 17, seet: "b7", price: 150, book: false, booked: false },
            { id: 18, seet: "b8", price: 150, book: false, booked: false },
            { id: 19, seet: "b9", price: 150, book: false, booked: false },
            { id: 20, seet: "b10", price: 150, book: false, booked: false },
        ],
        [
            { id: 21, seet: "c1", price: 250, book: false, booked: false },
            { id: 22, seet: "c2", price: 250, book: false, booked: false },
            { id: 23, seet: "c3", price: 250, book: false, booked: false },
            { id: 24, seet: "c4", price: 250, book: false, booked: false },
            { id: 25, seet: "c5", price: 250, book: false, booked: false },
            { id: 26, seet: "c6", price: 250, book: false, booked: false },
            { id: 27, seet: "c7", price: 250, book: false, booked: false },
            { id: 28, seet: "c8", price: 250, book: false, booked: false },
            { id: 29, seet: "c9", price: 250, book: false, booked: false },
            { id: 30, seet: "c10", price: 250, book: false, booked: false },
            { id: 31, seet: "d1", price: 250, book: false, booked: false },
            { id: 32, seet: "d2", price: 250, book: false, booked: false },
            { id: 33, seet: "d3", price: 250, book: false, booked: false },
            { id: 34, seet: "d4", price: 250, book: false, booked: false },
            { id: 35, seet: "d5", price: 250, book: false, booked: false },
            { id: 36, seet: "d6", price: 250, book: false, booked: false },
            { id: 37, seet: "d7", price: 250, book: false, booked: false },
            { id: 38, seet: "d8", price: 250, book: false, booked: false },
            { id: 39, seet: "d9", price: 250, book: false, booked: false },
            { id: 40, seet: "d10", price: 250, book: false, booked: false },
            { id: 41, seet: "e1", price: 250, book: false, booked: false },
            { id: 42, seet: "e2", price: 250, book: false, booked: false },
            { id: 43, seet: "e3", price: 250, book: false, booked: false },
            { id: 44, seet: "e4", price: 250, book: false, booked: false },
            { id: 45, seet: "e5", price: 250, book: false, booked: false },
            { id: 46, seet: "e6", price: 250, book: false, booked: false },
            { id: 47, seet: "e7", price: 250, book: false, booked: false },
            { id: 48, seet: "e8", price: 250, book: false, booked: false },
            { id: 49, seet: "e9", price: 250, book: false, booked: false },
            { id: 50, seet: "e10", price: 250, book: false, booked: false },
            { id: 51, seet: "f1", price: 250, book: false, booked: false },
            { id: 52, seet: "f2", price: 250, book: false, booked: false },
            { id: 53, seet: "f3", price: 250, book: false, booked: false },
            { id: 54, seet: "f4", price: 250, book: false, booked: false },
            { id: 55, seet: "f5", price: 250, book: false, booked: false },
            { id: 56, seet: "f6", price: 250, book: false, booked: false },
            { id: 57, seet: "f7", price: 250, book: false, booked: false },
            { id: 58, seet: "f8", price: 250, book: false, booked: false },
            { id: 59, seet: "f9", price: 250, book: false, booked: false },
            { id: 60, seet: "f10", price: 250, book: false, booked: false },
        ],
        [

            { id: 61, seet: "g1", price: 350, book: false, booked: false },
            { id: 62, seet: "g2", price: 350, book: false, booked: false },
            { id: 63, seet: "g3", price: 350, book: false, booked: false },
            { id: 64, seet: "g4", price: 350, book: false, booked: false },
            { id: 65, seet: "g5", price: 350, book: false, booked: false },
            { id: 66, seet: "g6", price: 350, book: false, booked: false },
            { id: 67, seet: "g7", price: 350, book: false, booked: false },
            { id: 68, seet: "g8", price: 350, book: false, booked: false },
            { id: 69, seet: "g9", price: 350, book: false, booked: false },
            { id: 70, seet: "g10", price: 350, book: false, booked: false },
            { id: 71, seet: "h1", price: 350, book: false, booked: false },
            { id: 72, seet: "h2", price: 350, book: false, booked: false },
            { id: 73, seet: "h3", price: 350, book: false, booked: false },
            { id: 74, seet: "h4", price: 350, book: false, booked: false },
            { id: 75, seet: "h5", price: 350, book: false, booked: false },
            { id: 76, seet: "h6", price: 350, book: false, booked: false },
            { id: 77, seet: "h7", price: 350, book: false, booked: false },
            { id: 78, seet: "h8", price: 350, book: false, booked: false },
            { id: 79, seet: "h9", price: 350, book: false, booked: false },
            { id: 80, seet: "h10", price: 350, book: false, booked: false },
            { id: 81, seet: "i1", price: 350, book: false, booked: false },
            { id: 82, seet: "i2", price: 350, book: false, booked: false },
            { id: 83, seet: "i3", price: 350, book: false, booked: false },
            { id: 84, seet: "i4", price: 350, book: false, booked: false },
            { id: 85, seet: "i5", price: 350, book: false, booked: false },
            { id: 86, seet: "i6", price: 350, book: false, booked: false },
            { id: 87, seet: "i7", price: 350, book: false, booked: false },
            { id: 88, seet: "i8", price: 350, book: false, booked: false },
            { id: 89, seet: "i9", price: 350, book: false, booked: false },
            { id: 90, seet: "i10", price: 350, book: false, booked: false },
            { id: 91, seet: "j1", price: 350, book: false, booked: false },
            { id: 92, seet: "j2", price: 350, book: false, booked: false },
            { id: 93, seet: "j3", price: 350, book: false, booked: false },
            { id: 94, seet: "j4", price: 350, book: false, booked: false },
            { id: 95, seet: "j5", price: 350, book: false, booked: false },
            { id: 96, seet: "j6", price: 350, book: false, booked: false },
            { id: 97, seet: "j7", price: 350, book: false, booked: false },
            { id: 98, seet: "j8", price: 350, book: false, booked: false },
            { id: 99, seet: "j9", price: 350, book: false, booked: false },
            { id: 100, seet: "j10", price: 350, book: false, booked: false },
        ],
    ])

    let data = [
        { id: '1', name: "Jahmkudi", stad: "ua", language: "hindi", image: require("../images/1.avif"), D: "2D", time: "2h 32m", date: "31 May, 2024", type: "Comedy, Horror , Mystery" },
        { id: '2', name: "Jahmkudi", stad: "ua", language: "hindi", image: require("../images/2.avif"), D: "2D", time: "2h 32m", date: "31 May, 2024", type: "Comedy, Horror , Mystery" },
        { id: '3', name: "Jahmkudi", stad: "ua", language: "hindi", image: require("../images/3.avif"), D: "2D", time: "2h 32m", date: "31 May, 2024", type: "Comedy, Horror , Mystery" },
        { id: '4', name: "Jahmkudi", stad: "ua", language: "hindi", image: require("../images/4.avif"), D: "2D", time: "2h 32m", date: "31 May, 2024", type: "Comedy, Horror , Mystery" },
        { id: '5', name: "Jahmkudi", stad: "ua", language: "hindi", image: require("../images/5.avif"), D: "2D", time: "2h 32m", date: "31 May, 2024", type: "Comedy, Horror , Mystery" },
        { id: '6', name: "Jahmkudi", stad: "ua", language: "hindi", image: require("../images/6.avif"), D: "2D", time: "2h 32m", date: "31 May, 2024", type: "Comedy, Horror , Mystery" },
        { id: '7', name: "Jahmkudi", stad: "ua", language: "hindi", image: require("../images/7.avif"), D: "2D", time: "2h 32m", date: "31 May, 2024", type: "Comedy, Horror , Mystery" },
        { id: '8', name: "Jahmkudi", stad: "ua", language: "hindi", image: require("../images/8.avif"), D: "2D", time: "2h 32m", date: "31 May, 2024", type: "Comedy, Horror , Mystery" },
        { id: '9', name: "Jahmkudi", stad: "ua", language: "hindi", image: require("../images/9.avif"), D: "2D", time: "2h 32m", date: "31 May, 2024", type: "Comedy, Horror , Mystery" },
        { id: '10', name: "Jahmkudi", stad: "ua", language: "hindi", image: require("../images/10.avif"), D: "2D", time: "2h 32m", date: "31 May, 2024", type: "Comedy, Horror , Mystery" },
        { id: '11', name: "Jahmkudi", stad: "ua", language: "hindi", image: require("../images/11.avif"), D: "2D", time: "2h 32m", date: "31 May, 2024", type: "Comedy, Horror , Mystery" },
    ]

    let [id, setId] = useState(0);

    let obj = {
        data,
        id,
        setId,
        seats,
        setSeats,
        total, setTotal,
        book, setBook,
        users, setUsers
    }
    return (
        <Contexcreate.Provider value={obj}>
            {props.children}
        </Contexcreate.Provider>
    )

}

export { Contexcreate };

export default ContexProvider;