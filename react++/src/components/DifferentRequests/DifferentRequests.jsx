import React from "react";

const URL = "https://642a8bc0b11efeb7599bd58a.mockapi.io/users";

// async - await
// const fecthData = async () => {
//   const prom = await fetch(URL);
//   const json = await prom.json();
//   console.log(json);
// };

// then
const fecthData = () => {
  const res = fetch(URL)
    .then((res) => res.json())
    .then((data) => console.log(data));
};

const DifferentRequests = () => {
  fecthData();

  return <div>DifferentRequests</div>;
};

export default DifferentRequests;
