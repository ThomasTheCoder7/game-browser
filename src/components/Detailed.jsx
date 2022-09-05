import Hero from './Hero'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import '../App.css'
import ScreenShots from './ScreenshotsContainer'
import LoadingSpinner from './loadingModal'
import Carousel from './Carousel'










const Detailed = ({res,setHideNav,setResults}) => {


 

     
     const { id } = useParams();
     const { k } = useParams();
     const [loading, setloading] = useState([])
     const [details, setDetails] = useState({})
     let result = res[k];
     const [scMoadal, setScModal] = useState(false);




     
     function FetchData(){
          fetch(`https://api.rawg.io/api/games?key=39a9a8f059eb4e2d9df768186807dcf9&search_exact=${id}`)
          .then(response => response.json())
          .then(data => {
          setResults(data.results);
          result = res[k];
          })
     }
     
     
     useEffect(() => {
          fetch(`https://api.rawg.io/api/games/${id}?key=39a9a8f059eb4e2d9df768186807dcf9`)
               .then(response => response.json())
               .then(data => {
                    setDetails(data);
                    setloading(false);
                  
               })
     }, [id])
     
     
     function render() {
         
          
          if (result == undefined) { return}
          if(result.slug != id) FetchData();
          
          
          if (loading) { return <Hero text={<LoadingSpinner />} /> }               
          return (
               <>
                    
                    <Carousel scModal={scMoadal} setScModal={setScModal} photos={result.short_screenshots} setHideNav={setHideNav} />
                    <Hero text={details.name} backdrop={details.background_image} />

                    <div className='d-md-flex justify-content-md-between justify-content-center align-items-center flex-md-row flex-column m-3'>
                    
                         <div className='iframeContainer'>
                    
                    
                    <iframe className='' src={`https://www.youtube.com/embed/${"dQw4w9WgXcQ"}`}/>
                    
                          </div>
                         
                         <ScreenShots photos={result.short_screenshots} ScModal={scMoadal} setScmodal={setScModal} />
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: details.description }} className="text-light fs-4 m-3">{}</div>
                    </>
          )
     }



     return render();

}

export default Detailed;


{/* <p className='fs-5 text-light m-3'>{strippedString}</p> */}

