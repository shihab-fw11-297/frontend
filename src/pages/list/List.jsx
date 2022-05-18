import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
//import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";

import {useSelector} from "react-redux";

const List = () => {
  const {search} = useSelector((store) => store);
 // const location = useLocation();
  const [destination, setDestination] = useState(search.search?.destination);
  const [date, setDate] = useState(search.search?.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(search.search?.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const [rating, setRating] = useState(0);

  const { data, loading,reFetch  } = useFetch(`https://booking-clones.herokuapp.com/api/hotels?city=${destination}&min=${min || 0 }&max=${max || 999}&rating=${rating || 5}`);

  const handleClick = () => {
    reFetch();
  };

   function capitalizeFirstLetter(str) {
    let data = str[0].toUpperCase() + str.slice(1);
    setDestination(data);
  }
  

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text"  onChange={(e) => capitalizeFirstLetter(e.target.value)}/>
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0]?.startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0]?.endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" onChange={(e) => setMin(e.target.value)} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" onChange={(e) => setMax(e.target.value)} />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">
                  Star rating
                  </span>
                  <select className="selectboxs" onChange={(e) => setRating(e.target.value)}>
                    <option defaultValue>Select Star</option>
                    <option value="1">1 star</option>
                    <option value="2">2 star</option>
                    <option value="3">3 star</option>
                    <option value="4">4 star</option>
                    <option value="5">5 star</option>
                  </select>
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
             <button onClick={handleClick}>Search</button>
          </div>
          <div className="listResult">
                 {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;