"use strict";
import styles from './Home.module.scss';
import {Link} from "react-router-dom";

function Post({id, imgUrl, name, text, tags, date}) {
    return (
        <div className={styles.post}>
            <Link to={'/post1'} className={`${styles.postHeader} d-f ai-cen`}>
                <img
                    src={imgUrl}
                    alt="avatar"/>
                <p className={styles.name}>{name}</p>
                <div className={styles.round}></div>
                <p className={styles.date}>{date}</p>
            </Link>

            <div className={styles.text}>
                {text}
            </div>

            <div className={`${styles.tags} d-f ai-cen`}>
                <Link to={'frontend'} className={styles.tag}>JavaScript</Link>
                <Link to={'frontend'} className={styles.tag}>Photoshop</Link>
                <Link to={'frontend'} className={styles.tag}>TypeScript</Link>
                <Link to={'frontend'} className={styles.tag}>HTML</Link>
            </div>
        </div>
    )
}

export default Post;