import { useEffect, useRef, useState, useCallback } from "react";
import { useAuth } from "../../routes/Authprovider";

import "./index.scss";

function PopOver(porps) {
  const [fresh, setFresh] = useState(false);
  const { logout } = useAuth();

  const ref = useRef(null);
  const target = useRef(null);

  const forceUpdate = useCallback(() => {
    setFresh((f) => (f ? false : true));
  }, []);

  const hideMenu = useCallback(() => {
    if (ref.current) {
      ref.current.classList.remove("open");
      ref.current.classList.add("close");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", forceUpdate);
    return () => {
      window.removeEventListener("resize", forceUpdate);
    };
  }, [forceUpdate]);

  useEffect(() => {
    ref.current.style.top =
      target.current.top() + target.current.height() + 8 + "px";
    ref.current.style.left =
      target.current.left() +
      target.current.width() / 2 -
      ref.current.offsetWidth / 2 +
      "px";
  }, [fresh]);

  const onClick = (e) => {
    e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true);
    document.addEventListener("click", hideMenu);
    if (ref.current.classList.contains("open")) {
      ref.current.classList.remove("open");
      ref.current.classList.add("close");
    } else {
      ref.current.style.display = "block";
      ref.current.classList.remove("close");
      ref.current.classList.add("open");
      ref.current.style.top =
        target.current.top() + target.current.height() + 8 + "px";
      ref.current.style.left =
        target.current.left() +
        target.current.width() / 2 -
        ref.current.offsetWidth / 2 +
        "px";
    }
  };

  const content = [
    {
      content: <div onClick={logout}>退出登录</div>,
    },
    {
      content: "修改密码",
    },
  ];
  return (
    <>
      <div className="popOver" ref={ref}>
        {content.map((value) => {
          return (
            <div
              className="popOver-item"
              onClick={() => {
                document.removeEventListener("click", hideMenu);
              }}
              key={value.content}
            >
              {value.content}
            </div>
          );
        })}
      </div>

      {porps.children(onClick, target)}
    </>
  );
}

export default PopOver;
