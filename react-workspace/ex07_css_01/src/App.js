import logo from './logo.svg';
import './App.css';
import Test01 from './components/test/TestCom01'
import Test03 from './components/test/TestCom03';
import Test02 from './components/test/TestCom02';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import IndexCon from './containers/IndexCon';
import LoginCon from './containers/LoginCon';
import RegisterCon from './containers/RegisterCon';
import MemberListPage from './pages/MemberListPage';
import MemberDetailPage from "./pages/MemberDetailPage";

function App() {
  return (<>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<IndexCon />}/>
      <Route path='/login' element={<LoginCon />}/>
      <Route path="/register" element={<RegisterCon />} />
      <Route path="/list" element={<MemberListPage />} />
      <Route path="/members/:username" element={<MemberDetailPage />} />
    </Routes>
  </BrowserRouter>

  {/* 
    <Test03 test={"안녕하세요"} />
  */}
  </>);
}

export default App;