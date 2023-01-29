import { useContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import {
  userStateContext,
  userProfileContext,
} from "../../context/userProfile";

function Admin() {
  const { setUserState } = useContext(userStateContext);
  const loaderData = useLoaderData();
  const { userProfile, setUserProfile } = useContext(userProfileContext);
  if (loaderData && loaderData.status >= 200 && loaderData.status < 300) {
    if (loaderData.data.success) {
      setUserProfile(loaderData.data.data.userName);
    } else {
      switch (loaderData.errCode) {
        case 1005:
          setUserState("offline");
          break;
        default:
      }
    }
  }
  return (
    <>
      <header>
        <div className="header-admin">
          <div>
            <input placeholder="搜索"></input>
          </div>
          <div>
            <span>{userProfile}</span>
          </div>
        </div>
      </header>

      <Outlet />
    </>
  );
}

export default Admin;
