import axios from "axios";
import alertify from "alertifyjs"
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ApiUri } from "../helpers/ApiUri";
import titleDinamic from "../services/dinamicTitle";

const CardNote = () => {
  const [notas, setNotas] = useState([]);
  useEffect(() => {
    fetchNotes();
    titleDinamic();
  }, []);

  const fetchNotes = async () => {
    let session = JSON.parse(localStorage.getItem("session"))
    let data;
    try {
      data = await axios({
        method: "GET",
        url: `${ApiUri}/getNotes`,
        headers:{
            authorization:`Bearer ${session.token}`
        }
      });
    } catch (err) {
      if (err.response.status == 401) {
        alertify.warning("por favor inicie sesion nuevamente");
        localStorage.removeItem("session");
        setTimeout(() => {
          window.location.href = "/login";
        }, 1000);
        return;
      }
      return;
    }
    setNotas(data.data.data);
  };
  return !notas.length ? (
    <di>Al parecer aun no has agregado ninguna nota A por ello!!!</di>
  ) : (
    <>
      {notas.map((item, index) => {
        return (
          <div key={index} style={{ border: "1px solid black", margin: "9px" }}>
            <h1>
              <Link to={`/n/${item.id}`}> {item.title_nota}</Link>{" "}
            </h1>
            ---------------------------
            <p> {item.text_nota} </p>
          </div>
        );
      })}
    </>
  );
};

export default CardNote;
