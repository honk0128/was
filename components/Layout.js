// import React from 'react'
// import Navbar from './Navbar'

// export default function Layout({ children }) {
//   return (
//     <div><Navbar /></div>
//     <div>{ children }</div>
//   )
// }

import Navbar from './Navbar';
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
}
