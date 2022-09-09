import "../App.css";

const render = ({ scModal, setScmodal, photos ,setImgNo}) => {
  return (
    <div className="screenshotContainer">
      {photos.slice(0, 3).map((obj, i) => {
        return (
          <img
            src={obj.image}
            className="screenshot"
            onClick={() => { setScmodal(true); setImgNo(i); } }
          />
        );
      })}
      <button
        className="b-sc fs-5 w-100 h-100 border-0 text-light"
        onClick={() => { setScmodal(true); setImgNo(0)}}
      >
        View all screenshots
      </button>
    </div>
  );
};

export default render;

{
  /* <div className='d-flex justify-content-center align-items-center sc-link-container'>
<p className='sc-link text-light'>View ALL</p></div> */
}
