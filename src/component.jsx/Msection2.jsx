import styles from "./Msection2.module.css"
export function Mensection2(){
    return(
        <div className={styles.Msection2}>
            <div>
                <span>Their Happy Words 🤗</span>
                <h1>Our Testimonials</h1>
                <p>Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally.</p>
            </div>
            <div className={styles.Msection2box}>
                <div className={styles.Msection2boxes}>
                    <p>Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!</p>
                </div>
                <div className={styles.Msection2boxes}>
                    <p>Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.</p>
                </div>
                <div className={styles.Msection2boxes}>
                    <p>My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.</p></div>
            </div>
        </div>
    )
}