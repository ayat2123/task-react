import styles from "./Headerrightrate.module.css"
export function Headerright(){
    return(
        <div>
            <div>
                <span>Welcome to Little Learners Academy</span>
                <h1>Where Young Minds Blossom and <span>Dreams Take Flight.</span> </h1>
                <p>Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>
            </div>
            <div className={styles.Rate}>
                <div >
                    <span>+7000</span>
                    <span>Students Passed Out</span>
                </div>
                <div>
                    <span>+37</span>
                    <span>Awards & Recognitions</span>
                </div>
                <div>
                    <span>+15</span>
                    <span>Experience Educators</span>
                </div>
            </div>
        </div>
    )
}