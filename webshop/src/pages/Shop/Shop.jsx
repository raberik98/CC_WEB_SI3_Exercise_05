import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ToastContainer from "../../components/ToastContainer/ToastContainer";
import { getAllItems } from "../../services/ItemService";
import "./Shop.css";
import CardDetails from "../../components/CardDetails";

export default function Shop() {
  const [data, setData] = useState(null);
  const [filterValue, setFilterValue] = useState("")
  const [isAsc, setIsAsc] = useState(true)

  useEffect(() => {
    // fetch("/api/v1/items")
    //   .then(resp => resp.json())
    //   .then(jsonData => setData(jsonData))
    //   .catch(err => console.error(err))
    getAllItems().then((resp) =>
      resp.status == "ok" ? setData(resp.data) : setData(null)
    );
  }, []);

  console.log(data);


  return (
    <>
      <Navbar filterValue={filterValue} setFilterValue={setFilterValue} isAsc={isAsc} setIsAsc={setIsAsc} />
      <ToastContainer/>
      <div className="itemsGoHere">
        {data == null ? <h1>Loading</h1> : data
        .filter((element) => element.title == "ERROR" ? false : element.title.toLowerCase().includes(filterValue.toLowerCase()))
        .sort((a, b) => isAsc ? a.id-b.id : b.id-a.id)
        .map((element) => (
          <div key={element.id}>
            <CardDetails
                title = {element.title}
                description = {element.description}
                rating = {element.rating}
                price = {element.price}
                src = {element.src}
            />
          </div>
        ))}
      </div>
    </>
  );
}


/* {data ? (
data.map((element) => (
   <div key={element.id}>
     <CardDetails
         title = {element.title}
         description = {element.description}
         rating = {element.rating}
         price = {element.price}
         src = {element.src}
     />
    </div>
 ))) : (
  <h1>Loading</h1> 
  )}*/
