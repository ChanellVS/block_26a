import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import RenderArticles from './RenderArticles';

export default function SpaceNews(){


    const [articles, setArticles] = useState([]);


    useEffect(()=>{
        async function fetchArticles(){
            try{
                const res = await fetch("https://api.spaceflightnewsapi.net/v4/articles");
                const results = await res.json();
                setArticles(results.results)
             }catch(error){
                console.error(error)
                }
            }
        fetchArticles();
    },[]);
console.log(articles);

    return(
           <div>

            {
               articles.map((article)=> {
                    return <RenderArticles key={article.id} article={article} setArticles={setArticles}/>
               })
            }
        </div> 
    )
}

