import Icon from"../assets/Icon.png";
import styles from"./Titlebar.module.css";
export function Titlebar(){
    return(
        <div className={styles.Titlebar}>
            <p>Admission is Open, Grab your seat now</p>
            <img src={Icon} />
        </div>
    )
}