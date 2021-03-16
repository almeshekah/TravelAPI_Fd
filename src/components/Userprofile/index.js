import React from "react";
import { Link } from "react-router-dom";
import { DetailWrapper } from "./styles";
import Loading from "../Loading";
import { useSelector, useDispatch } from "react-redux";
import { history } from "../../store/actions/authActions";
const Userprofile = () => {
  const dispatch = useDispatch();
  const { profile, loading } = useSelector((state) => state.authReducer);
  if (loading) return <Loading />;
  return (
    <DetailWrapper>
      <h1 style={{ marginBottom: "2%", marginLeft: "2.5%", marginTop: "2%" }}>
        {profile.lastName}
      </h1>
      <img
        src={profile.picture}
        alt={profile.firstName}
        style={{
          borderRadius: "50%",
          border: "2px solid transparent",
          width: "20%",
        }}
      />
      <p>
        my name :{profile.firstName}
        {profile.lastName}
      </p>
      <p>passport:{profile.passport}</p>
      <p>email:{profile.email}</p>
      <Link to="/user/signup">
        <button
          type="button"
          className="btn btn-dark "
          style={{ position: "absolute", left: "1030px", top: "240px" }}
        >
          edit my profile
        </button>
      </Link>

      <Link onClick={() => dispatch(history())} to="/user/order-history">
        <button
          type="button"
          className="btn btn-dark "
          style={{ position: "absolute", left: "1030px", top: "350px" }}
        >
          my orders History
        </button>
      </Link>
    </DetailWrapper>
  );
};

export default Userprofile;
