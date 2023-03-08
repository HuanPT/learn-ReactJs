import { useEffect, useState } from "react";
import Accordion from "./Component/Accordion/Accordion";
import Modal from "./Component/Modal/Modal";
import Button from "./Component/Button/Button";
import Tab from "./Component/Tabs/Tab";
import Toast from "./Component/Toast/Toast";
import OffCanvas from "./Component/Offcanvas/OffCanvas";
import Counter from "./Component/lab5-lifeCycle/Counter";
import Demo from "./Component/lab5-lifeCycle/Demo";

//
// function App() {
//   // Ví dụ sử dụng useEffect để đồng bộ trạng thái ứng dụng react với server

//   // Trạng thái của react => client State (useState)
//   // Dữ liệu lưu ở server => Server state
//   // Jsonplacehoder

//   const [users, setUsers] = useState([]);

//   const [newUserInfo, setNewUserInfo] = useState({});

//   const handleInputChange = (e) => {
//     setNewUserInfo((prev) => {
//       return {
//         ...prev,
//         [e.target.name]: e.target.value,
//       };
//     });
//   };

//   const handleSubmit = (e) => {
//     console.log(newUserInfo);
//     e.preventDefault();
//     const { name, username, email, address, website, company } = newUserInfo;
//     const user = {
//       name,
//       username,
//       email,
//       address: { street: address },
//       website,
//       company: { name: company },
//     };
//     // console.log(newUserInfo);

//     fetch("https://jsonplaceholder.typicode.com/users", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(user),
//     })
//       .then((res) => res.json())
//       .then((data) => setUsers((prev) => [...prev, data]))
//       .catch((err) => console.log(err));
//   };

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => {
//         setUsers(data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   const row = users.map((user, index) => (
//     <tr key={index}>
//       <td>{user.id}</td>
//       <td>{user.name}</td>
//       <td>{user.username}</td>
//       <td>{user.email}</td>
//       <td>{user.address.street}</td>
//       <td>{user.website}</td>
//       <td>{user.company.name}</td>
//     </tr>
//   ));
//   return (
//     <div className="App">
//       <form style={{ display: "flex" }} onSubmit={handleSubmit}>
//         <div style={{ display: "flex", flexDirection: "column" }}>
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             onChange={handleInputChange}
//           />
//         </div>
//         <div style={{ display: "flex", flexDirection: "column" }}>
//           <label htmlFor="username">username</label>
//           <input
//             type="text"
//             name="username"
//             id="username"
//             onChange={handleInputChange}
//           />
//         </div>
//         <div style={{ display: "flex", flexDirection: "column" }}>
//           <label htmlFor="email">email</label>
//           <input
//             type="text"
//             name="email"
//             id="email"
//             onChange={handleInputChange}
//           />
//         </div>
//         <div style={{ display: "flex", flexDirection: "column" }}>
//           <label htmlFor="address">Address</label>
//           <input
//             type="text"
//             name="address"
//             id="address"
//             onChange={handleInputChange}
//           />
//         </div>
//         <div style={{ display: "flex", flexDirection: "column" }}>
//           <label htmlFor="website">website</label>
//           <input
//             type="text"
//             name="website"
//             id="website"
//             onChange={handleInputChange}
//           />
//         </div>
//         <div style={{ display: "flex", flexDirection: "column" }}>
//           <label htmlFor="company">company</label>
//           <input
//             type="text"
//             name="company"
//             id="company"
//             onChange={handleInputChange}
//           />
//         </div>
//         <button type="button" onClick={handleSubmit}>
//           Save
//         </button>
//       </form>
//       <table>
//         <caption>user Table</caption>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>UserName</th>
//             <th>Email</th>
//             <th>Address</th>
//             <th>Website</th>
//             <th>Company</th>
//           </tr>
//         </thead>
//         <tbody>{row}</tbody>
//       </table>
//     </div>
//   );
// }

// Event
// useRef vs useState
// Cách để hủy req khi re-render
// CustomHook (cho ví dụ cụ thể)

function App() {
  const [open, setOpen] = useState(false);
  const [openShow, setShow] = useState(false);
  const [openCanvas, setOpenCanvas] = useState(false);
  const [showDemo, setShowDemo] = useState(true);

  const items = [
    {
      title: "Home",
      content: "Home content",
    },
    {
      title: "Profile",
      content: "Profile content",
    },
    {
      title: "Contact",
      content: "Contact content",
    },
  ];

  return (
    <div className="App" style={{ marginBottom: 60 }}>
      <Counter />
      <h1>Life Cycle Method</h1>
      <button onClick={() => setShowDemo(!showDemo)}>Toglle Demo</button>
      {showDemo && <Demo />}
      <div style={{ marginBottom: 30 }}>
        <h1>OffCanvas</h1>
        <OffCanvas
          openCanvas={openCanvas}
          onClose={() => setOpenCanvas(false)}
        />
        <Button onClick={() => setOpenCanvas(!openCanvas)}>
          {"Toggle left Canvas"}
        </Button>
      </div>
      <Accordion items={items} />
      <div>
        <h1>TABS</h1>
        <Tab items={items} />
      </div>
      {/* {open && <Modal onClose={() => setOpen(!open)} />} */}
      <div>
        <Modal open={open} onClose={() => setOpen(!open)} />
        <Button onClick={() => setOpen(!open)}>{"Launch Demo Modal"}</Button>
      </div>

      <div>
        <h1>Toast</h1>
        <Toast openShow={openShow} onClose={() => setShow(!openShow)} />
        <Button onClick={() => setShow(!openShow)}>
          {"Show Toast Message"}
        </Button>
      </div>
    </div>
  );
}

export default App;
