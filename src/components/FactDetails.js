import React , {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import Spinner from './Spinner';

export default function FactDetails() {

    let { id } = useParams();

    const [fact, setFact] = useState({})

    const [loading, setLoading] = useState(false)

    const fetchFact = async () => {
        let url = 'https://script.googleusercontent.com/macros/echo?user_content_key=dZrZHNgsoMJXChlRnHL66WQyxfFzjNw4NRcPM_SPuh2D39sdXk9toXRHRl7K0ALiGd9qXuyW44d7mYrGH4d0dOSfndVVntuNm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnIj1PUo5OnTvgCwP4OCb9N4bgYcGOAElqREGQvFw53U-icN-KzN_koUAj4VR0C6CP20dDG_qI20nt-rqrVrky59ZRoz_7TtNudz9Jw9Md8uu&lib=MhVZTcL5_fMl15dD0f-tVyiKMt2a3QSUU';
        setLoading(true)
        let items = await fetch(url)
        let parsedItems = await items.json();
        let parsedItemsArray = parsedItems.data;
        let singleFact = parsedItemsArray.filter((element) => element.id === parseInt(id))
        setFact(singleFact[0])
        setLoading(false)
    }

    useEffect(() => {
        fetchFact()
    }, [])
     
  return (
    <div className='container my-3'>
        {loading && <Spinner/>}
        <h2 className='text-center' style={{fontFamily:"Courier"}}>{fact.title}</h2>
        {!loading && <div className="card mb-3">
        <img src={fact.imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{fact.title}</h5>
                <p className="card-text">{fact.description}</p>
                <p className="card-text"><small className="text-muted">{new Date(fact.date).toUTCString()}</small></p>
            </div>
        </div>}
    </div>
  )
}
