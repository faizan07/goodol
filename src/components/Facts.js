import React, {useState, useEffect} from 'react'
import FactsItems from './FactsItems'
import Spinner from './Spinner'

export default function Facts() {

    const [facts, setFacts] = useState([])

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async() => {
        let url = 'https://script.googleusercontent.com/macros/echo?user_content_key=Ih1I2BFxeTK7OdN-ndwDxKOLCMqGQoUZIlDhhVuqZVebDf7HobN8R57xMV8_v1mLW31q8HkJ0Z3h2tk03iV1uqoPiO00I2f8m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnIj1PUo5OnTvgCwP4OCb9N4bgYcGOAElqREGQvFw53U-icN-KzN_koUAj4VR0C6CP20dDG_qI20nt-rqrVrky59ZRoz_7TtNudz9Jw9Md8uu&lib=MhVZTcL5_fMl15dD0f-tVyiKMt2a3QSUU';
        setLoading(true)
        let data = await fetch(url)
        let parsedData = await data.json()
        let parsedDataArray = parsedData.data;
        parsedDataArray.sort(function(a,b){
            return new Date(b.date) - new Date(a.date);
        })
        setFacts(parsedDataArray)
        setLoading(false)
    }

  return (
    <div className='container my-3'>
        <h2 className='text-center' style={{fontFamily:"Courier"}}>A look into the ol' days!</h2>
        {loading && <Spinner/>}
        <div className="row">
        {!loading && facts.map((element) => {
            return <div className='col-md-6' key={element.id}>
                <FactsItems title={element.title}
                 description={element.description}
                date={element.date}
                imageUrl={element.imageUrl}
                id={element.id}/>
            </div>
        })}
        </div>
    </div>
  )
}
