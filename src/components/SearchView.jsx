import Hero from './Hero'
import { Link,useNavigate } from 'react-router-dom'
import hedthy from '../Resources/HEDTHY.png'
import LoadingSpinner from './loadingModal';
import Detailed from './Detailed';


function getDate(d) {
     if (d === null) { return <>{"Unknown"}</>  }
     const date = d.split("-");
     const months = {
          "01": "Jan",
          "02": "Feb",
          "03": "Mar",
          "04": "Apr",
          "05": "May",
          "06": "Jun",
          "07": "Jul",
          "08": "Aug",
          "09": "Sept",
          "10": "Oct",
          "11": "Nov",
          "12": "Dec"
     }
     return (
          <>
               {`${months[date[1]]} ${date[2]}, ${date[0]}`}
          </>
     )
}

function getImg(i) {
     if (i == null) return `${hedthy}`;
     return i;
}


function getPlatforms(p) {
     
     const icons = {
          1: <i class="bi bi-pc mx-1"></i>,
          2: <i class="bi bi-playstation mx-1"></i>,
          3: <i class="bi bi-xbox mx-1"></i>,
          4: <i class="bi bi-phone-fill mx-1"></i>,
          5: <i class="bi bi-android2 mx-1"></i>,
          6: <i class="bi bi-apple mx-1"></i>,
          7: <i class="bi bi-ubuntu mx-1"></i>,
          8: <i class="bi bi-nintendo-switch mx-1"></i>,
          14:  <i class="bi bi-browser-chrome mx-1"></i>
     }
    
     if (p == undefined) { return; }
    
     return (
          <div>
               
               {p.map((obj, i) => {
                    return icons[obj.platform.id];
               })}
          </div>
     )
}
//game.background_image


const Card = ({game,setLoading,setSc}) => {
     const detailsUrl = `/game/${game.slug}`

     return (
          <div className='col-lg-3 col-md-4 col-sm-12  my-1'>
               
               <div className="card bg-white border border-dark h-75">

                    <img src={getImg(game.background_image)}  className="card-img-top card-img "  />
                    <div className="card-body">
                         <h6 className=" card-title-txt card-title">{game.name}</h6>
                         {getPlatforms(game.parent_platforms)}
                         <hr/>
                         <div className="card-text bolded text-dark">
                              
                                   Release Date: <span className=''>{getDate(game.released)}</span> <br/>
                              
                             
                              Genres: <span> {game.genres.map((obj, i) => {
                                   if (i == game.genres.length - 1) return obj.name;
                                   return obj.name +", "
                              }) } </span> <br/>
                              
                              
                                   Rating: {game.rating}/5 <i class="bi bi-star-fill text-warning"></i>
                         
                         </div>
                         <div className=''>
                              <Link onClick={() => {
                                   setLoading(true);
                                   setSc(game.short_screenshots);
                                   
                              }}
                                   to={detailsUrl} className="btn btn-dark position-absolute bottom-0 start-0 m-3">Details</Link>

                         </div>
                    </div>
               </div>
          </div>
     )
}


const SearchView = ({ keyword, searchResult,loading,setLoading,setSc}) => {
     
     if (loading) return <Hero text={<LoadingSpinner />} />
     
     
     if (keyword.length == 0) { 
        
     }
     
     

     const resultAsHtml = searchResult.map((obj, i) => {
          return <Card game={obj} key={i} k={i} setLoading={setLoading} setSc={setSc}  />
     })

     

     return (
          
          <>

               <Hero text={`Results for "${keyword}"`} />
               {searchResult.length === 0 &&
                    <div className='d-flex justify-content-center my-4'>
                         <h3 className='text-light'>No Results has been found</h3>
               </div>
               }
               {resultAsHtml && 
                <div className='container'>
                         <div className='row'>
                              {resultAsHtml}
                         </div>
                    </div>}
               
          </>
     )

}


export default SearchView; 