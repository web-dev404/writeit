import './scss/style.scss';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import {Routes, Route} from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from "./pages/Home";
import Music from "./pages/Music";
import Notifications from "./pages/Notifications";
import Saved from "./pages/Saved";

function App() {
    return (
        <div className="App">
            <div className="container">
                <main className="main">
                    <Header/>
                    <Sidebar/>

                    <div className="content">
                        <Routes>
                            <Route path={''} element={<Home/>}/>
                            <Route path={'/Music'} element={<Music/>}/>
                            <Route path={'/notifications'} element={<Notifications/>}/>
                            <Route path={'/saved'} element={<Saved/>}/>
                            <Route path={'*'} element={<NotFound/>}/>
                        </Routes>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;