"use strict";

import styles from './Header.module.scss';
import searchIcon from '../../assets/img/search.svg';
import profileIcon from '../../assets/img/profile.svg';

function Header() {
    return (
        <header className={`${styles.header} d-f ai-cen jc-sp`}>
            <div className={styles.searchWrapper}>
                <img className={styles.searchIcon} src={searchIcon} alt="search"/>
                <input className={styles.search} type="text" placeholder={'Search'} />
            </div>
            
            <div className={'d-f ai-cen'}>
                <button className={styles.btnCreate}>Написать пост</button>
                <div className={styles.account}>
                    <img src={profileIcon} alt="profile"/>
                </div>
            </div>
        </header>
    )
}

export default Header;