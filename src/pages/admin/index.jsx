import { useContext, useLayoutEffect } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import {
  userStateContext,
  userProfileContext,
} from "../../context/userProfile";
import ProfileCard from "../../components/profileCard";

import "./index.scss";

function Admin() {
  const { setUserState } = useContext(userStateContext);
  const loaderData = useLoaderData();
  const { userProfile, setUserProfile } = useContext(userProfileContext);
  useLayoutEffect(() => {
    if (loaderData && loaderData.status >= 200 && loaderData.status < 300) {
      if (loaderData.data.success) {
        setUserProfile((pre) => {
          return {
            ...pre,
            username: loaderData.data.data.userName,
            email: loaderData.data.data.email,
          };
        });
      } else {
        switch (loaderData.data.errCode) {
          case 1005:
            setUserState("offline");
            break;
          default:
        }
      }
    }
  }, [loaderData, setUserProfile, setUserState]);
  return (
    <>
      <header>
        <div className="header-admin">
          <div className="input-search">
            <input placeholder="搜索"></input>
          </div>
          <ProfileCard {...userProfile} />
        </div>
      </header>

      <Outlet />
    </>
  );
}

export default Admin;
