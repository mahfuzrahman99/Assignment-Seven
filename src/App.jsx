import { useState } from "react";
import "./App.css";
import Cards from "./Components/cads/Cards";
import Bookmarks from "./Components/bookmarks/Bookmarks";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [totalCreditHour, setTotalCreditHour] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [totalRemaning, setTotalRemaning] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [totalCost, setTotalCost] = useState(0)

  const handleAddNameToBookmarks = (card, time, price) => {
    const isExist = bookmarks.find((item) => item.course_name === card.course_name);
 
    let count = totalCreditHour;

    if (isExist) {
      return alert('This Course already added to bookmarks.');
    } else {

      count += parseInt(time)

      if(count > 20){
        return alert(`you can't add more than 20 credit time`)
      }else{
        setTotalCreditHour(count)
  
        setTotalRemaning(20 - count)
  
        setBookmarks([...bookmarks, card ]);
  
        setTotalCost(totalCost + price)
      }
     
    }
  }

  return (
    <div className="">
      <h1 className="text-4xl font-bold text-center text-[#2563eb] my-8">CodeCraftHub</h1>
      <div className="md:flex mx-auto container gap-4">
        <Cards handleAddNameToBookmarks={handleAddNameToBookmarks}></Cards>
        <Bookmarks bookmarks={bookmarks} totalCreditHour={totalCreditHour} totalRemaning={totalRemaning} totalCost={totalCost}></Bookmarks>
      </div>
    </div>
  );
}

export default App;
