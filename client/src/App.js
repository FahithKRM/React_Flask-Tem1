// import React, { useEffect, useState } from 'react'

// const App = () => {

//   const [data, setData] = useState({ members: [] });

//   useEffect(() => {
//     fetch("/members").then(
//       response => response.json()
//     ).then(
//       data => {
//         setData(data)
//         console.log(data);
//       }
//     )
//   }, []);
//   return (
//     <div>
//       {(typeof data.members === 'undefined') ? (
//         <p>Loading....</p>
//       ) : (
//         data.members.map((member, i) => (
//           <p key={i}>{member}</p>
//         ))
//       )}
//     </div>
//   )
// }

// export default App

import React, {useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get('http://localhosthttp:8000/api/members');
    console.log(response.data.members);
    
  };

  useEffect(() => {
    // fetch("/members")
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error("Network response was not ok");
    //     }
    //     return response.json();
    //   })
    //   .then(data => {
    //     setData(data);
    //     console.log(data);
    //   })
    //   .catch(error => {
    //     console.error("There was a problem with the fetch operation:", error);
    //});

    fetchAPI()

  }, []);

  return (
    <div>
      {/* {typeof data.members === 'undefined' ? (
        <p>Loading....</p>
      ) : (
        data.members.map((member, i) => (
          <p key={i}>{member}</p>
        ))
      )} */}
    </div>
  );
};

export default App;
