import styles from "./PrestojniNastani.module.css"


const Nastani = () =>{

    return(
        <>
        
        <div className={`flex ${styles.NastanContainer}`}>
                <p className={`bg-white px-2 py-1 center ${styles.NastaniDate}`}>06 DATE</p>
                <div className={`text-white px-4`}>
                    <h2 className={`${styles.NastaniHeader}`} >Ime na nastanot</h2>
                    <div className={`flex`}>
                        <p>time</p>
                        <p>full date</p>
                        <p>lokacija</p>
                    </div>
                </div>
            </div>
        
        </>
    )
}
export default Nastani;