import { Link, Link2, Link3, Link4, Link5, Link6 } from "./Link";
import styles from "./List.module.css";
export function List(){
    return(
        <div >
            <ul className={styles.List}>
                <li><Link/></li>
                <li><Link2/></li>
                <li><Link3/></li>
                <li><Link4/></li>
                <li><Link5/></li>
                <li><Link6/></li>
            </ul>
        </div>

    )
}