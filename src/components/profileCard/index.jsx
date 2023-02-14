import { forwardRef, useImperativeHandle, useRef } from "react";

import avatar from "../../assets/avatar.jpg";
import "./index.scss";

const ProfileCard = forwardRef((props, ref) => {
  const containerRef = useRef(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        top() {
          return containerRef.current.offsetTop;
        },
        width() {
          return containerRef.current.offsetWidth;
        },
        height() {
          return containerRef.current.offsetHeight;
        },
        left() {
          return containerRef.current.offsetLeft;
        },
      };
    },
    [containerRef]
  );
  return (
    <div
      className="container-profileCard"
      ref={containerRef}
      onClick={props.onClick}
    >
      <div className="avatar">
        <img width={40} height={40} src={avatar} alt="avatar"></img>
      </div>
      <div className="info">
        <span>{props.username}</span>
        <span>{props.email ?? "-"}</span>
      </div>
    </div>
  );
});

export default ProfileCard;
