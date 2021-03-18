import React from "react";
import { Link } from "react-router-dom";
import { DetailWrapper } from "./styles";
import Loading from "../Loading";
import { useSelector, useDispatch } from "react-redux";
import { history } from "../../store/actions/authActions";
import { ItemWrapper } from "./styles";

const Userprofile = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.authReducer.profile);
  const loading = useSelector((state) => state.authReducer.loading);
  if (loading) return <Loading />;

  return (
    <ItemWrapper>
      <h1 style={{ marginBottom: "2%", marginLeft: "2.5%", marginTop: "2%" }}>
        {profile.username}
      </h1>
      <img
        src={
          profile.picture ??
          "https://www.kindpng.com/picc/m/105-1055656_account-user-profile-avatar-avatar-user-profile-icon.png"
        }
        alt={profile.firstName}
        // style={{
        //   borderRadius: "50%",
        //   border: "2px solid transparent",
        //   width: "20%",
        // }}
      />
      <p>{`Name: ${profile.firstName} ${profile.lastName}`}</p>
      <p>{`Passport: ${profile.passport}`}</p>
      <p>{`Email: ${profile.email}`}</p>
      <div className="buttons">
        <Link to="/profile/edit">
          <button type="button" className="btn btn-dark ">
            Edit My Profile
          </button>
        </Link>

        <Link onClick={() => dispatch(history())} to="/order-history">
          <button type="button" className="btn btn-dark ">
            My Orders History
          </button>
        </Link>
      </div>
    </ItemWrapper>
  );
};

export default Userprofile;
