
export default function RenderArticles({article, setArticles}){
    console.log(article.authors[0].name)
    return(
        <div style={{border: 'solid'}} className='cards'>
            
            <h2>{article.title}</h2>
            <h3>Author: {article.authors[0].name}</h3>
            <img style={{height: '400px'}}src={article.image_url}/>
            <p>Summary: {article.summary}</p>
            <button onClick={()=>window.open(article.url)} className="button">Go To Article</button>
        </div>
    )
}

