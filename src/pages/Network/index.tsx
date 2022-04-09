import React, { useState, useEffect } from "react";
import InputWhatsMind from "../../components/WhatsInMindCard";
import { Header, NetworkBg, FooterStyled } from "./styles";
import api from "../../api/axios";
import { useDispatch } from "react-redux";
import { useSelector } from "../../redux/store";
import { fetchRequestSucces } from "../../actions/actions";
import CardData from "../../components/CardData";

function Network() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const userX = useSelector((state) => state.data);

  const fetchProducts = async () => {
    const response = await api
      .get("")
      .then((response) => response.data.results)
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(fetchRequestSucces(response));
  };

  useEffect(() => {
    fetchProducts();
    setData(userX.data);
  }, [data]);

  return (
    <NetworkBg>
      <Header>CodeLeap Network</Header>
      <InputWhatsMind />
      <CardData />
      <FooterStyled>CodeLeap Network &copy;</FooterStyled>
    </NetworkBg>
  );
}

export default Network;
