import Hero from './Hero'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import '../App.css'
import ScreenShots from './ScreenshotsContainer'
import LoadingSpinner from './loadingModal'
import Carousel from './Carousel'










const Detailed = ({ setHideNav, screenshots, loading, setLoading, setSc}) => {
     
     const { id } = useParams();
     const key = "53f7c1ee5b2449dc8379de8da8db4d18";
     const [details, setDetails] = useState({});
     const [scMoadal, setScModal] = useState(false);
     const tempSc = [
          { "id": -1, "image": "https://media.rawg.io/media/games/b4e/b4e4c73d5aa4ec66bbf75375c4847a2b.jpg" },
          { "id":  
          565530, "image": 
          "https://media.rawg.io/media/screenshots/324/32454b11adde40d87c046f310f0d710d.jpg" },
         { "id": 565531, "image": "https://media.rawg.io/media/screenshots/268/2689f04cbcabb467dd4948e30fe90f51.jpg" },
          { "id": 565532, "image": "https://media.rawg.io/media/screenshots/e83/e83fbaf3a8bdf1cdd855acf8fc90d2fe.jpg" },
         { "id": 565533, "image": "https://media.rawg.io/media/screenshots/a02/a021bf48ee5e492026e6464b3751cf35.jpg" }
     ]
     //this to set which image is clicked
     const [imgNo, setImgNo] = useState(0);
     
     
     function getScreenShots() {
         

          setSc(tempSc);
          fetch(`https://api.rawg.io/api/games/${id}/screenshots?key=${key}`)
          .then(response => response.json())
          .then(data => {
               setSc(data.results);
               
             
             
          }) 

         
     }
     
    
     
  



     
     
     
     
     useEffect(() => {
          
          setLoading(true);
          
          fetch(`https://api.rawg.io/api/games/${id}?key=${key}`)
               .then(response => response.json())
               .then(data => {
          
                    
                    setDetails(data);
                    setLoading(false);
                  
                  
               })
               
          
          
               console.log("Requested Details")
                    
     }, [id])
     
     if (Object.keys(screenshots).length === 0) {
          
          getScreenShots();
          
     }
     function render() {
          
          
         
          
          if (loading) { return <Hero text={<LoadingSpinner />} /> }               
          return (
               <>
                    
                    <Carousel scModal={scMoadal} setScModal={setScModal} photos={screenshots} setHideNav={setHideNav} setImgNo={setImgNo} imgNo={imgNo} />
                    <Hero text={details.name} backdrop={details.background_image} />

                    <div className='d-md-flex justify-content-md-between justify-content-center align-items-center flex-md-row flex-column m-3'>
                    
                         <div className='iframeContainer'>
                    
                    
                    <iframe className='' src={`https://www.youtube.com/embed/${"dQw4w9WgXcQ"}`}/>
                    
                          </div>
                         
                         <ScreenShots photos={screenshots} ScModal={scMoadal} setScmodal={setScModal} setImgNo={ setImgNo} />
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: details.description }} className="text-light fs-4 m-3">{ }</div>
               </>
               
          )
          
     }



     return render();

}

export default Detailed;


{/* <p className='fs-5 text-light m-3'>{strippedString}</p> */}

