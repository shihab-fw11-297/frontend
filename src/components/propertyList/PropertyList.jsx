import "./propertyList.css";
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

const PropertyList = () => {
  const { data, loading } = useFetch(
    "https://booking-clones.herokuapp.com/api/hotels/countByType"
  );

  const images = [
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
  ];

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 }
  ];

  return (
    <div className="pList">
      <Div>
        {/*  */}
          {loading ? (
            "loading"
          ) : (
            <>
            <Carousel breakPoints={breakPoints}>
              {data &&
                images.map((img, i) => (
                  
                  <div className="pListItem" key={Math.random() * 50000}>
                    <img
                      src={img}
                      alt=""
                      className="pListImg"
                    />
                    <div className="pListTitles">
                      <h1>{data[i]?.type}</h1>
                      <h2>{data[i]?.count} {data[i]?.type}</h2>
                    </div>
                  </div>
                ))}
                </Carousel> 
            </>
          )}
        {/* */}
      </Div>
    </div>
  );
};

export default PropertyList;