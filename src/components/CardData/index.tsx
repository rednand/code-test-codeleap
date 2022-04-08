import React, { useState, useEffect } from "react";
import {
  CardHeader,
  CardBody,
  Card,
  CardContent,
  CardName,
  CardNameDate,
  CardHeaderIcons,
} from "./styles";
import api from "../../api/axios";
import { useDispatch } from "react-redux";
import { useSelector } from "../../redux/store";
import { fetchRequestSucces } from "../../actions/actions";
import { formatDistanceToNow } from "date-fns";
import { useParams } from "react-router-dom";

function CardData() {
  const id = useParams();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const userX = useSelector((state) => state.data);

  const user = useSelector((state) => state.user.user);

  const fetchProducts = async () => {
    const response = await api
      .get("")
      .then((response) => response.data.results)
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(fetchRequestSucces(response));
  };

  const deletePost = async (id) => {
    const response = await api.delete(`${id}/`);
    return response.data;
  };

  const updatePost = async (id, title, content) => {
    const infoJson = {
      title: title,
      content: content,
    };
    const req = await api.patch(`${id}/`, infoJson);
    return req.data;
  };

  useEffect(() => {
    fetchProducts();
    setData(userX.data);
  }, [data]);

  const handleTime = (date) => {
    const result = formatDistanceToNow(new Date(date), { addSuffix: true });
    return result;
  };
  return (
    <>
      {userX.data.map((item) => {
        return (
          <Card key={item.id}>
            {user === item.username ? (
              <CardHeaderIcons>
                <CardHeader>{item.title}</CardHeader>

                <span className="iconsSpan">
                  <button
                    onClick={() => deletePost(item.id)}
                    type="button"
                    className="material-icons icons"
                  >
                    delete_forever
                  </button>
                  <button
                    onClick={() => console.log("teste")}
                    type="button"
                    className="material-icons icons"
                  >
                    drive_file_rename_outline
                  </button>
                </span>
              </CardHeaderIcons>
            ) : (
              <CardHeaderIcons>
                <CardHeader>{item.title}</CardHeader>
              </CardHeaderIcons>
            )}
            <CardBody>
              <CardNameDate>
                <CardName>{item.username}</CardName>
                <CardName>{handleTime(item.created_datetime)}</CardName>
              </CardNameDate>
              <CardContent>{item.content}</CardContent>
            </CardBody>
          </Card>
        );
      })}
    </>
  );
}

export default CardData;
