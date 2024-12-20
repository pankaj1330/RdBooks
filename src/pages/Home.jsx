import { useEffect, useState } from "react";
import Card from "../components/Card";
let alldata = [];

const url = 'https://api.npoint.io/dee51ea017d20efdfcc8';

export default function Home(){
    const [apiData,setApiData] = useState([]);
    const [bookname,setBookName] = useState("");

    useEffect(()=>{
        fetch(url).
            then(resp => resp.json()).
            then(data => {
                setApiData(data);
                alldata = data;
            }).
            catch(err => setApiData([]));
        
        
        
    },[]);

    function searchBook(e){
        setBookName(e.target.value);
        let value = e.target.value.toLowerCase()
        const filterdata = alldata.filter(data=>{
            return data.name.toLowerCase().includes(value);
        })
        console.log(alldata, filterdata);
        
        setApiData(filterdata);
        return;
    }

    return(
        <>
            <nav className="navbar">
                <h2>RdBooks</h2>
                <form onSubmit={(e)=>{e.preventDefault()}}>
                    <input type="text" name="name" id="name" placeholder="Search Book" value={bookname} onChange={searchBook}/>
                </form>
            </nav>

            <div className="cards">
                {
                    apiData.map((data,i)=>{
                        return <Card key={i} data={data}/>
                    })
                }
            </div>
        </>
    )
}