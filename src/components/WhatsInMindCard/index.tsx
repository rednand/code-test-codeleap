import React, { useState } from "react";
import { useSelector } from "../../redux/store";
import api from "../../api/axios";
import {
  SignUpBloc,
  UserNameInput,
  EnterButton,
  UserNamTextArea,
  Welcomeh2,
  Label,
  EnterButtonDisable,
} from "./styles";
import { fetchRequestSucces } from "../../actions/actions";
import { useDispatch } from "react-redux";

const initialContent = {
  user: "",
  title: "",
  content: "",
};

function InputWhatsMind() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const [createCard, setCreateCard] = useState({ ...initialContent });

  const fetchProducts = async () => {
    const response = await api
      .get("")
      .then((response) => response.data.results)
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(fetchRequestSucces(response));
  };

  const createCardPost = async (username, title, content) => {
    const data = {
      username: username,
      title: title,
      content: content,
    };
    const response = await api.post("", data);
    return response.data;
  };

  const newPosts = async () => {
    try {
      const response = await createCardPost(
        user,
        createCard.title,
        createCard.content
      );
      fetchProducts();
      setCreateCard(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SignUpBloc>
        <Welcomeh2>What’s on your mind?</Welcomeh2>
        <Label>Title</Label>
        <UserNameInput
          required
          value={createCard.title}
          placeholder="Hello World"
          type="text"
          onChange={(e) =>
            setCreateCard({ ...createCard, user: user, title: e.target.value })
          }
        ></UserNameInput>
        <Label>Content</Label>
        <UserNamTextArea
          rows={4}
          placeholder="Content Here..."
          cols={50}
          required
          value={createCard.content}
          onChange={(e) =>
            setCreateCard({ ...createCard, content: e.target.value })
          }
        ></UserNamTextArea>

        {createCard.title.length > 0 && createCard.content.length > 0 ? (
          <EnterButton type="button" onClick={() => newPosts()}>
            CREATE
          </EnterButton>
        ) : (
          <EnterButtonDisable type="button" disabled>
            CREATE
          </EnterButtonDisable>
        )}
      </SignUpBloc>
    </>
  );
}

export default InputWhatsMind;
