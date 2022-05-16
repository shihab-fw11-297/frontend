import "./explore.css";
import Carousel from "react-elastic-carousel";
import styled from "styled-components"

const data = [
  {
    src: "https://t-cf.bstatic.com/xdata/images/region/square250/49646.webp?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o=",
    location: "Berlin",
    properties: "5,247 properties",
  },
  {
    src: "https://t-cf.bstatic.com/xdata/images/region/square250/68431.webp?k=b819d986ecd87c0e182f4ddd3dcadeaa271e3b308061040bb86f5658a0d0340a&o=",
    location: "London",
    properties: "5,906 properties",
  },
  {
    src: "https://t-cf.bstatic.com/xdata/images/region/square250/60943.webp?k=764589bec5bc72ca0abf6d79f8e86bc0a992d9a9a13a67c1c5d0a196de947077&o=",
    location: "Canada",
    properties: "3,906 properties",
  },
  {
    src: "https://t-cf.bstatic.com/xdata/images/region/square250/68085.webp?k=0f810fd728bfd94157ce21f611e004eb6fa47a2722067e8086cd5e5f6bba24b9&o=",
    location: "India",
    properties: "3,906 properties",
  },
  {
    src: "https://t-cf.bstatic.com/xdata/images/region/square250/67964.webp?k=8f4f2ee5df4d880fe7f202927984f81655afbda90b7682a8f0582a0fcaa5e284&o=",
    location: "Madrid",
    properties: "2,906 properties",
  },
  
]

const Div  = styled.div`
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
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 }
  ];

  return (
    <div className="pList">
      <Div>
      <Carousel breakPoints={breakPoints}>
        {data.map((item) => (
          <div className="pListItem">
            <img
              src={item.src}
              alt=""
              className="pListImg"
            />
            <div className="pListTitles">
              <h1>{item.location}</h1>
              <h2>{item.properties}</h2>
            </div>
          </div>
        ))}
      </Carousel>
      </Div>
    </div>
  );
};

export default PropertyList;