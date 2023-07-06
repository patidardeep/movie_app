import Image from "next/image";
import styles from "@/app/styles/common.module.css"

export default async function Page({params}){
    const id = params.id;

    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lNG=EN`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b27dc1edc1msh08503fb6056744bp16d421jsn5d54027cc29c',
        'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
      }
    };

    const res = await fetch(url,options);
const data = await res.json()
const main_data = data[0].details;


    return(
        <div className={styles.container}>
            <h2 className={styles.movie_title}>Netflix <span>{main_data.type}</span></h2>
            <div className={styles.card_section}>
                <div>
                    <Image src={main_data.backgroundImage.url} alt={main_data.title} width={400} height={200}/>
                </div>
                <div>
                    <h1>{main_data.title}</h1>
                    <p>{main_data.synopsis}</p>
                </div>

            </div>

        </div>
    )
}