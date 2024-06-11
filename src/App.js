import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Movielist from './component/Movielist';
import Detail from './component/Detail';
import { Routes, Route } from "react-router-dom"
import Mainbody from './component/Mainbody';
import Seatpage from './component/Seatpage';
import Ticket from './component/Ticket';
import Booklist from './component/Booklist';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mainbody />} >
          <Route path="" element={<Movielist />} />
          <Route path="detail" element={<Detail />} />
          <Route path="seatpage" element={<Seatpage />} />
          <Route path="ticket" element={<Ticket />} />
          <Route path="booklist" element={<Booklist />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
