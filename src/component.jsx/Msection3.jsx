import Icon from"../assets/Icon.png";
import styles from "./Msection3.module.css"
export function Msection3(){
    return(
        <div className={styles.Msection3}>
            <div>
                <span>Explore More</span>
                <h1>Navigate through our Pages</h1>
                <p>Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school</p>
            </div>
            <div className={styles.Msection3box}>
                <div className={styles.Msection3boxes}>
                    <h3>About Us</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea ducimus distinctio eveniet ut porro! Eaque doloremque, pariatur sapiente repellendus ipsam aut aliquid sit veritatis totam natus possimus accusamus incidunt facilis.</p>
                    <button className={styles.btn}>Learn More <img src={Icon} /> </button>
                </div>
                <div className={styles.Msection3boxes} >
                    <h3>Academics</h3>
                    <p>Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.</p>
                    <button className={styles.btn}>
                        Learn More 
                        <img src={Icon} />
                        </button>
                </div>
                <div className={styles.Msection3boxes} >
                    <h3>Student Life</h3>
                    <p>Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.</p>
                    <button className={styles.btn}>Learn More <img src={Icon} /> </button>
                </div>
                <div className={styles.Msection3boxes}>
                    <h3>Admissions</h3>
                    <p>Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces</p>
                    <button className={styles.btn}>Learn More <img src={Icon} /> </button>
                </div>
            </div>
        </div>
    )
}