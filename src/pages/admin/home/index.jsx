import ProfileCard from "../../../components/profileCard";
import { useAuth } from "../../../routes/Authprovider";
import PopOver from "../../../components/popover";
import Message from "../../../components/message";

function Home() {
  const { user } = useAuth();
  return (
    <>
    <div onClick={()=>{
      Message()
    }}>
      点我
    </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",

          height: "80px",
        }}
      >
        <PopOver>
          {(onClick, ref) => {
            return <ProfileCard onClick={onClick} ref={ref} {...user} />;
          }}
        </PopOver>
      </div>
    </>
  );
}

export default Home;
