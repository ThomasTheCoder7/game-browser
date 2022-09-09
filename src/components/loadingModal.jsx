import '../App.css'
function LoadingSpinner() {
     
     return (
          <div className='JModal fullscreen d-flex justify-content-center align-items-center'>
            <div className="spinner-border" role="status">
                
               </div>   
               <span className="mx-3">Loading</span>
          </div>
     )
}

export default LoadingSpinner;