export default function Card({data}){
    const {link,name,author,published} = data;
    return(
        <>
            <div className="card">
                <div className="left">
                    <h3>{name}</h3>
                    <p>Author : {author ? author : "NA"}</p>
                    <span>published : {published ? published : "NA"}</span>
                </div>
                <div className="right">
                    <a href={link} target="_blank">View</a>
                </div>
            </div>
        </>
    )
}