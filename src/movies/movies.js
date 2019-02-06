import React from 'react';

const Movies = (props) => (
  <tr>
    <td>
     <div >
      <h3> {props.movie.title}</h3>
     </div>
    </td>
  </tr> 
)

export default Movies;