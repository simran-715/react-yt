import React, { useState } from "react";

const Notes = () => {
  const [Title, setTitle] = useState("");

  const [Note, setNote] = useState("");

  const [Task, setTask] = useState([]);

  // Form Handling On Submittion
  const submitHandler = (e) => {
    e.preventDefault();
    
    const copyTask = [...Task];

    copyTask.push({ Title,Note });

    setTask(copyTask);

    setTitle("");
    setNote("");
  };



  // 2 way binding  -Title (heading)
  const ChangeTitle = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };


  // 2 way binding  -Note  (Paragraph)
  const ChangeNote = (e) => {
    setNote(e.target.value);
    console.log(e.target.value);
  };


  // delete a note with id idx
  
  const DeleteNote = (idx) => {
    const CopyTask = [...Task];
    CopyTask.splice(idx, 1);
    
    setTask(CopyTask);

  }


  return (
    <>
      <div className="lg:flex w-screen h-screen">
        {/* to fill the form */}

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="mx-10 my-10 flex justify-between items-start gap-4 lg:w-1/2 "
        >
          <div className="flex flex-col w-full text-2xl items-start gap-6">
            <h1 className="text-4xl font-bold">ADD NOTES</h1>
            <input
              onChange={(e) => {
                ChangeTitle(e);
              }}
              value={Title}
              className=" px-5 py-3 border-[3px] border-black rounded-2xl w-full"
              type="text"
              placeholder="Enter  Notes  heading"
            />
            <textarea
              onChange={(e) => {
                ChangeNote(e);
              }}
              value={Note}
              className="w-full   px-5 py-3 min-h-40 border-[3px] border-black rounded-2xl "
              id=""
              placeholder="Enter Details"
            ></textarea>
            <button
              className="w-full py-2 bg-black text-amber-50 rounded-2xl h-16"
              type="submit"
            >
              Add Note
            </button>

          </div>

        </form>



        {/* <hr className="border-2 border-b-blue-700 h-screen lg:w-0.5" /> */}

        


        {/* to display Cards -container-div */}

        <div className="lg:w-1/2 lg:border-l-2 overflow-auto p-10">
          
          <h1 className="font-bold text-4xl px-10 py-2">Recent Notes</h1>

          <div className="flex flex-wrap w-full  gap-6 p-10 ">
              
            {Task.map((elem, idx) => {
              
              return <div key={idx} className="min-h-65 min-w-54 rounded-[15px] bg-gray-800 flex flex-col justify-between align-center p-4" >

                <div >
                <h2 className="text-2xl font-bold p-2 leading-tight uppercase text-white">{elem.Title}</h2>

                  <h4 className=" px-3 py-2 first-letter:capitalize text-[21px] text-amber-50">{elem.Note}</h4>
                </div>
                <button onClick={()=>{DeleteNote(idx)}} className="text-white m-3 bg-pink-800 p-2 rounded-full active:scale-95 text-[17px]">Delete</button>
              </div>
            })}
            
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;
