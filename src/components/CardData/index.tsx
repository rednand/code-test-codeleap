import React, { useState, useEffect } from "react";

import {
  CardHeader,
  CardBody,
  Card,
  CardContent,
  CardName,
  CardModalFooterButton,
  CardNameDate,
  CardHeaderIcons,
} from "./styles";

import api from "../../api/axios";
import { deletePost, updateCardPost } from "../../actions/services";
import { useDispatch } from "react-redux";
import { handleTime } from "../../utils/utils";

import { useSelector } from "../../redux/store";
import { fetchRequestSucces } from "../../actions/actions";

import ModalDelete, {
  ModalHeaderDelete,
  ModalFooterDelete,
  useModalDelete,
} from "../../components/ModalDelet";
import ModalEdit, {
  ModalHeaderEdit,
  ModalFooterEdit,
  useModalEdit,
} from "../../components/ModalEdit";

const initialContent = {
  id: "",
  user: "",
  title: "",
  content: "",
};

function CardData() {
  const { ShowingModalDelete, clickModalDelete } = useModalDelete();
  const { ShowingModalEdit, clickModalEdit } = useModalEdit();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const dataStore = useSelector((state) => state.data);
  const user = useSelector((state) => state.user.user);
  const [updateCard, setUpdateCard] = useState({ ...initialContent });

  const getData = async () => {
    const response = await api
      .get("")
      .then((response) => response.data.results)
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(fetchRequestSucces(response));
  };

  const updatePost = async (id) => {
    try {
      await updateCardPost(id, user, updateCard.title, updateCard.content);
    } catch (error) {
      console.log(error);
    }
  };

  const Delete = async (id) => {
    await deletePost(id).then(() => window.location.reload());
  };

  const Edit = async (id) => {
    await updatePost(id).then(() => window.location.reload());
  };

  useEffect(() => {
    getData();
    setData(dataStore.data);
  }, []);

  return (
    <>
      {dataStore.data.map((item) => {
        return (
          <Card key={item.id}>
            {user === item.username ? (
              <CardHeaderIcons>
                <CardHeader>{item.title}</CardHeader>
                <ModalDelete {...{ ShowingModalDelete, clickModalDelete }}>
                  <ModalHeaderDelete {...{ clickModalDelete }}>
                    Are you sure you want to delete this item?
                  </ModalHeaderDelete>
                  <ModalFooterDelete clickModalDelete={clickModalDelete}>
                    <>
                      <CardModalFooterButton onClick={clickModalDelete}>
                        Cancel
                      </CardModalFooterButton>
                      <CardModalFooterButton
                        type="button"
                        onClick={() => Delete(item.id)}
                      >
                        OK
                      </CardModalFooterButton>
                    </>
                  </ModalFooterDelete>
                </ModalDelete>

                <ModalEdit {...{ ShowingModalEdit, clickModalEdit }}>
                  <ModalHeaderEdit {...{ clickModalEdit }}>
                    Edit item
                  </ModalHeaderEdit>
                  <ModalFooterEdit clickModalEdit={clickModalEdit}>
                    <div className="contentModal">
                      <div className="inputModal">
                        <label className="title label">Title</label>
                        <input
                          className="input"
                          required
                          placeholder={item.title}
                          type="text"
                          onChange={(e) =>
                            setUpdateCard({
                              ...updateCard,
                              title: e.target.value,
                            })
                          }
                        />
                        <label className="label">Content</label>
                        <textarea
                          className="input"
                          rows={4}
                          placeholder={item.content}
                          cols={50}
                          required
                          onChange={(e) =>
                            setUpdateCard({
                              ...updateCard,
                              content: e.target.value,
                            })
                          }
                        />
                      </div>
                      <CardModalFooterButton
                        type="button"
                        className="save"
                        onClick={() => Edit(item.id)}
                      >
                        SAVE
                      </CardModalFooterButton>
                    </div>
                  </ModalFooterEdit>
                </ModalEdit>

                <span className="iconsSpan">
                  <button
                    onClick={clickModalDelete}
                    type="button"
                    className="material-icons icons"
                  >
                    delete_forever
                  </button>
                  <button
                    onClick={clickModalEdit}
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
