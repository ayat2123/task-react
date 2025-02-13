import styles from "./Headerrightrate.module.css"
export function Headerright(){
    return(
        <div>
            <div>
                <span className={styles.spantitle} >Welcome to Little Learners Academy</span>
                <h1 className={styles.title}>Where Young Minds Blossom and <span className={styles.spanp}>Dreams Take Flight.</span> </h1>
                <p className={styles.descp}>Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>
            </div>
            <div className={styles.Rate}>
                <div >
                    <span className={styles.spanrate}>+7000</span>
                    <span className={styles.spanrate2}>Students Passed Out</span>
                </div>
                <div>
                    <span className={styles.spanrate}>+37</span>
                    <span className={styles.spanrate2}>Awards & Recognitions</span>
                </div>
                <div>
                    <span className={styles.spanrate}>+15</span>
                    <span className={styles.spanrate2}>Experience Educators</span>
                </div>
            </div>
        </div>
    )
}