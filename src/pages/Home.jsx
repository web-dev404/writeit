"use strict";

import {Link, Route, Routes} from "react-router-dom";
import styles from '../components/Home/Home.module.scss';
import News from "../components/Home/News";
import Recommended from "../components/Home/Recommended";
import Popular from "../components/Home/Popular";

function Home() {
    return (
        <div>
            <div className={`${styles.filter} d-f ai-cen`}>
                <Link className={styles.active} to={''}>Рекомендуемое</Link>
                <Link to={'/news'}>Свежое</Link>
                <Link to={'/popular'}>Популярное</Link>
            </div>

            <Routes>
                <Route path={''} element={<Recommended />}/>
                <Route path={'/news'} element={<News />}/>
                <Route path={'/popular'} element={<Popular />}/>
            </Routes>
        </div>
    )
}

export default Home;