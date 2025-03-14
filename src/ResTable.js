import React from 'react';
import './Face.css';

const ResTable = ({ columns, data }) => {
  return (
    // <div style={{
    //   boxShadow: "0px 0px 3px 0px"}}>
    <table className="Tablet">
    <thead>
    <tr className='Tablehead'>
          {columns.map((val,key) =>{
            return(
              <th style={{ display: "flex", alignItems: "center", gap: "0.5em", justifyContent:"center" }}> <div>
                <img
              src="/Analyze_Icon.png" // ✅ Correct way to access from `public/`
              alt="Analyze Icon"
              style={{ width: "4em", height: "4em" }} // Adjust as needed
            />
                </div>  <div style={{fontSize:"25px", marginBottom:"0.3em"}}>
                {val.Header}
                  </div> </th>
            )
          })}
            
        </tr>
    </thead>
     

       <tbody>
       {data.map((val, key) => {
            return (
                <tr key={key}>
                  <td style={{color:"white"}}>{val}</td>
                    {/* <td>{val.name}</td>
                    <td>{val.age}</td> */}
                    {/* <td>{val.email}</td> */}
                </tr>
            )
        })}
       </tbody>
    
    </table>
//  </div>


    // <div >
    //   <table className="Tablet">
   
    //    <thead  >
    //       <tr className="Tablehead">
    //         {columns.map((column) => (
    //           <th
    //             key={column.accessor}
    //           >
    //             {column.Header}
    //           </th>
    //         ))}
    //       </tr>
    //     </thead>
      
  
    //     <tbody>
    //       {data.map((row, rowIndex) => (
    //         <tr key={rowIndex} className="even:bg-gray-50">
    //           {columns.map((column) => (
    //             <td
    //               key={column.accessor}
    //               className="py-2 px-4 border-b border-gray-200 text-gray-800"
    //             >
    //               {row[column.accessor]}
    //             </td>
    //           ))}
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
  );
};

export default ResTable;
