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
    <>
      <ItemWrapper>
        <h1 style={{ marginBottom: "2%", marginLeft: "2.5%", marginTop: "2%" }}>
          {profile.lastName}
        </h1>
        <img
          src={profile.picture}
          alt={profile.firstName}
          // style={{
          //   borderRadius: "50%",
          //   border: "2px solid transparent",
          //   width: "20%",
          // }}
        />
        <p>
          my name :{profile.firstName}
          {profile.lastName}
        </p>
        <p>passport:{profile.passport}</p>
        <p>email:{profile.email}</p>
      </ItemWrapper>
      <DetailWrapper>
        <Link to="/user/signup">
          <button
            type="button"
            className="btn btn-dark "
            style={{ position: "absolute", left: "1030px", top: "240px" }}
          >
            Edit My Profile
          </button>
        </Link>

        <Link onClick={() => dispatch(history())} to="/user/order-history">
          <button
            type="button"
            className="btn btn-dark "
            style={{ position: "absolute", left: "1030px", top: "350px" }}
          >
            My Orders History
          </button>
        </Link>
      </DetailWrapper>
    </>
  );
};

export default Userprofile;
