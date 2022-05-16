import "./featuredProperties.css";
import useFetch from "../../hooks/useFetch";
import Carousel from "react-elastic-carousel";
import styled from "styled-components"

const Div = styled.div`
width:100%;
margin:0 auto;
button{
   
   
    
    border:0;
}
.rec.rec-arrow {
    border-radius: 50%;
   
  background-color:#ffff;
  color:black;
  font-size:15px;
 
   
}
.rec.rec-arrow:disabled {
    visibility: hidden;
    color:black;
}
.rec-carousel-item:focus {
    outline: none;
    box-shadow: inset 0 0 1px 1px lightgrey;
}
.rec-pagination{
    display: none;
}
`

const FeaturedProperties = () => {
  const { data, loading } = useFetch("https://booking-clones.herokuapp.com/api/hotels/featured?featured=true");
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 }
  ];


  return (
    <div className="fp">
      <Div>
        {loading ? (
          "Loading"
        ) : (
          <>
            <Carousel breakPoints={breakPoints}>
              {data.map((item) => (
                <div className="fpItem" key={item._id}>
                  <img
                    src={item.photos[0]}
                    alt=""
                    className="fpImg"
                  />
                  <span className="fpName">{item.name}</span>
                  <span className="fpCity">{item.city}</span>
                  <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
                  {item.rating && <div className="fpRating">
                    <button>{item.rating}</button>
                    <span>Excellent</span>
                  </div>}
                </div>
              ))}
            </Carousel>
          </>
        )}
      </Div>
    </div>
  );
};

export default FeaturedProperties;