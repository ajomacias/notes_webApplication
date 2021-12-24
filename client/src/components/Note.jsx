import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ApiUri } from "../helpers/ApiUri";

const Note = () => {
  let id = useParams();
  const [nota, setNota] = useState(null);

  useEffect(() => {
    fetchCharacter();
  }, []);

  const fetchCharacter = async () => {
    let data;
    try {
      data = await axios({
        method: "GET",
        url: `${ApiUri}/ver_nota/${id.id}`,
      });
    } catch (err) {
        return;
    }
    setNota(data.data);
    
  };

  return nota ? (
    <div>
      <h1>
        <strong>Titulo</strong>
      </h1>
      <br />
      <h3> {nota.title_nota} </h3>
      <br />
      <h1>
        <strong>Cuerpo</strong>
      </h1>
      <br />
      <p>{nota.text_nota}</p>
    </div>
  ) : (
    <div>no existe esta nota</div>
  );
};

export default Note;
