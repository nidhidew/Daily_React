import React from 'react'

// function Stylesheet() {
//   return (
//     <div>
//       <h1>StyleSheet</h1>
//     </div>
//   )
// }

// function Stylesheet(props) {
//     let className = props.primary ? 'primary' : ''
//   return (
//     <div>
//       <h1 className={className}>StyleSheet</h1>
//     </div>
//   )
// }

function Stylesheet(props) {
    let className = props.primary ? 'primary' : ''
  return (
    <div>
      <h1 className={`${className} font-xl`}>StyleSheet</h1>
    </div>
  )
}

export default Stylesheet
