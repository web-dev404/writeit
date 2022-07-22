"use strict";

import homeSvg from '../../assets/img/home.svg';
import notificationsSvg from '../../assets/img/notifications.svg';
import savedSvg from '../../assets/img/saved.svg';
import musicSvg from '../../assets/img/music.svg';
import styles from './Sidebar.module.scss';
import {Link} from 'react-router-dom';

function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <Link className={styles.logo} to={'/'}>WriteIt</Link>
            <Link className={styles.icon} to={'/'}><img src={homeSvg} alt="home svg"/></Link>
            <Link className={styles.icon} to="/notifications"><img src={notificationsSvg} alt="home svg"/></Link>
            <Link className={styles.icon} to="/saved"><img src={savedSvg} alt="home svg"/></Link>
            <Link className={styles.icon} to="/music"><img src={musicSvg} alt="home svg"/></Link>
        </aside>
    )
}

export default Sidebar;