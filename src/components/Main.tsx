import {  selectUser } from "../features/UserSlice";
import Login from "./Login";
import { useDispatch, useSelector } from "react-redux";
import {   useNavigate } from "react-router";
import Header from "./Header";

function Main() {
  const user = useSelector(selectUser);
  //   const currenttime = localStorage.getItem('currenttime');
  const expiretime:any = localStorage.getItem("Expiretime");
  // const data = localStorage.getItem("name");
  

  // useEffect(() => {
  //   setInterval(() => {
  //     console.log(
  //       new Date() > new Date(expiretime),
  //       new Date(),
  //       new Date(expiretime)
  //     );
  //     if (new Date() > new Date(expiretime)) {
  //       navigate("/");
  //       dispatch(logout());
  //       localStorage.clear();
  //     }
  //     // let navigator =
  //     //   new Date() < new Date(expiretime) ? "/" : "/login";
  //     // navigate(navigator);
  //   }, 2000);
  // }, []);

  return (
    <div className="App">
      {new Date() < new Date(expiretime) ? (
        <Header/>
        //   <Outlet />
        // </Header>
      ) : (
        <Login />
      )}
      {/* <Dashboard/> */}
    </div>
  );
}

export default Main;
