import React, { useState } from "react";
import "../assets/css/inputbox.css";

const Inputbox = () => {
  const [title, setTitle] = useState(" ");
  const [desc, setdesc] = useState(" ");
  const [time, setTime] = useState(" ")
  const [maintext, setMaintext] = useState([]);

  let submitHandel = (e) => {
    e.preventDefault();
    setMaintext([...maintext, { title, desc, time }]);
    setTitle("");
    setdesc("");
    console.log(maintext);
  };

  let deletehandel = (i) =>{
    let copytext = [...maintext]
    copytext.splice(i,1)
    setMaintext(copytext)
  }
  return (
    <>
      <div className="inputbox d-flex justify-content-center align-items-center flex-column">
        <form
          onSubmit={submitHandel}
          className="w-75 border border-black p-3 rounded-2 d-flex justify-content-center align-items-center flex-column gap-4 my-5"
        >
          <label htmlFor="">Enter a Task Title</label>
          <input
          className="w-50 border border-black p-2"
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            placeholder="Enter Title"
            name=""
            id=""
          />
          <label htmlFor="">Enter a Description</label>
          <textarea
          className="w-50 border border-black p-2"
            placeholder="Enter Description"
            value={desc}
            rows={5}
            cols={20}
            id=""
            onChange={(e) => {
              setdesc(e.target.value);
            }}
          ></textarea>

          <input type="time" name="" id="" onChange={(e) => {
              setTime(e.target.value);
            }}/>

          <input className="w-25 py-2 bg-black text-white " type="submit" value="Submit" />
        </form>

        <div className="rander">
          <table>
            <tr>
              <th className="title">Title</th>
              <th className="desc">Description</th>
              <th className="desc">Time</th>
              <th className="delete">Delete</th>
            </tr>
              {maintext.map((e, i) => {
                return (
                  <tr>
                    <td className="data">{e.title}</td>
                    <td className="data">{e.desc}</td>
                    <td className="data">{e.time}</td>
                    <td className="delete data"><button onClick={()=>{
                      deletehandel(i)
                    }} type="button">Delete</button></td>
                  </tr>
                );
              })}
          </table>
        </div>
      </div>
    </>
  );
};

export default Inputbox;
