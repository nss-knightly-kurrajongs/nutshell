// import React, { Component } from "react"



// export default class MovieDetail extends Component {
//   render() {
//     /*
//         Using the route parameter, find the movie that the
//         user clicked on by looking at the `this.props.movies`
//         collection that was passed down from ApplicationViews
//     */
//     const movie = this.props.movies.find(a => a.id === parseInt(this.props.match.params.movieId)) || {}

//     return (
//       <section className="movie">
//         <div key={movie.id} className="card">
//           <div className="card-body">
//             <h4 className="card-title">

//               {movie.name}
//             </h4>
//             <h6 className="card-title">{movie.name}</h6>
//             <a href="#"
//               onClick={() => this.props.deleteMovie(movie.id)
//                 .then(() => this.props.history.push("/movies"))}
//               className="card-link">Delete</a>
//           </div>
//         </div>
//       </section>
//     )
//   }
// }