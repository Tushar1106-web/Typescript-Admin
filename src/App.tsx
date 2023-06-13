import {  Route, Routes } from "react-router";
import "./App.css";
import "flowbite";
import Main from "./components/Main";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Kanban from "./components/Kanban";
import Inbox from "./components/Inbox";
import Products from "./components/Products";
import Users from "./components/Users";
import Setting from "./components/Setting";
import Earning from "./components/Earning";
import Temp from "./components/Temp";
import Header from "./components/Header";
import {   useSelector } from "react-redux";
import Api from "./components/Api";
import ErrorBoundary from "./components/Err";
import Shop from "./components/Shop";
import Singleproduct from "./components/Singleproduct";

function App() {
  const user: any = useSelector((state: any) => state.user);
  // console.log(user?.user);
  // const expiretime = localStorage.getItem("Expiretime");
  // const data = localStorage.getItem("name");

  // useEffect(() => {
  //   setInterval(() => {

  //     if (expiretime !== null && new Date() > new Date(expiretime)) {
  //       console.log(
  //       new Date() > new Date(expiretime),
  //       new Date(),
  //       new Date(expiretime)
  //     );
  //       navigate("/");
  //       dispatch(logout());
  //       localStorage.clear();
  //     }
  //   }, 2000);
  // }, []);
  return (
    <div className="App">
      {/* <Main/> */}
      <Routes>
        {user?.user === null ? (
          <Route path="/*" element={<Login />} />
        ) : (
          <>
            <Route path="/" element={<Main />}>
              <Route
                path="/"
                element={
                  <ErrorBoundary>
                    <Dashboard />
                  </ErrorBoundary>
                }
              />
              <Route path="header" element={<Header />} />
              <Route path="kanban" element={<Kanban />} />
              <Route path="inbox" element={<Inbox />} />
              <Route path="products" element={<Products />} />
              <Route path="users" element={<Users/>} />
              <Route path="setting" element={<Setting/>} />
              <Route path="earning" element={<Earning/>} />
              <Route path="api" element={<Api/>} />
              <Route path="shop" element={<Shop/>} />
              <Route path="api/singleproduct/:id" element={<ErrorBoundary><Singleproduct/></ErrorBoundary>} />
              </Route>
          </>
        )}
        <Route path="temp" element={<Temp />} />
      </Routes>
    </div>
  );
}

export default App;
