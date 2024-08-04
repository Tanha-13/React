import { useContext } from "react";
import userContext from "../../context/UserContext";

function Profile() {
  const { user } = useContext(userContext);
  console.log(user);

  if (!user) return <div>Please Log in</div>;
  return <div>Welcome {user.username}</div>
}

export default Profile;
