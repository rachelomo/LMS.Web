import React from "react";

const Login = () => {
  return (
    <section className="LogNav">
      <div className="Login">
        <ul className="LogLink">
          <li>
            <a href="/menu">
              <i class="fa-solid fa-house"></i>
            </a>
          </li>
          <li>/</li>
          <li>Login</li>
        </ul>
        <h1>Registered user</h1>
      </div>
      <div className="FormHandler">
        <div className="control">
          <div className="title">Login</div>
          <div className="credential">
            Provide your valid login credentials.
          </div>
        </div>
        <div className="form">
          <form action="home">
            <label htmlFor="Email">Email</label>
            <input type="text" placeholder="Email" required />
          </form>
        </div>
      </div>
    </section>
  );
};

// const Book1 = [
//   {
//     Name: "rachael",
//     Age: 20,
//     Job: "tech",
//   },
//   {
//     Name: "rachael",
//     Age: 20,
//     Job: "tech",
//     id:1
//   },
//   {
//     Name: "rachael",
//     Age: 20,
//     Job: "tech",
//   },
// ];
// const AllBooks = () =>{
//   return(
//  {Books.map((books) => {
//     const { Name, Age, Job } = books;
//   return
//     <Books books={books}key={id}/>  ;
//   })}
// );
// }

// const Books = (props) => {
//   const { Name, Age, Job } = props;
//   console.log(props);
//   return (
//     <article>
//       <h2>{Name}</h2>
//       <h2>{Age}</h2>
//       <h2>{Job}</h2>
//     </article>
//   );
// };

export default Login;
