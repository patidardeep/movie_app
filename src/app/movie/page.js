
import styles from "@/app/styles/common.module.css"
import MovieCard from "../components/MovieCard";
import { resolve } from "styled-jsx/css";



export default  async function Movie(){

// await new Promise(executor:resolve => setTimeout(resolve ,timeout:2000));



    const url = process.env.RAPID_KEY;
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'b27dc1edc1msh08503fb6056744bp16d421jsn5d54027cc29c',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};
const res = await fetch(url,options);
const data = await res.json()
const main_data = data.titles;
console.log(data);

    return(
        <>
<section className={styles.movieSection}>
<div className={styles.container}>
        <h1>Series & Movie</h1>
        <div className={styles.card_section}>
        {
          main_data.map((curElem)=>{
            return <MovieCard key={curElem.id} {...curElem}/>
          })
        }
        </div>
        </div>
</section>
        </>
    )
}