import { useState } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";

const CSS = styled.div``;

const capitalize = (word) =>
  word[0].toUpperCase() + word.slice(1).toLowerCase();

const formatTitle = (str) => {
  let words = str.split(" ");
  words = words.map((word, idx) => {
    try {
      // Tangani perulangan kata
      const splitted = word.split("-");
      if (splitted.length > 1) {
        splitted[0] = capitalize(splitted[0]);
        if (splitted[0].toLowerCase() === splitted[1].toLowerCase()) {
          splitted[1] = capitalize(splitted[1]);
        } else {
          splitted[1] = splitted[1].toLowerCase();
        }
        return splitted.join("-");
      }

      // Tangani kata tugas
      const kataTugas = ["di", "ke", "dari", "dan", "yang", "untuk"];
      if (idx > 0 && kataTugas.includes(word.toLowerCase())) {
        return word.toLowerCase();
      }

      return capitalize(word);
    } catch (error) {
      return word;
    }
  });
  return words.join(" ");
};

const Kapitalisasi = () => {
  const [judul, setJudul] = useState("");

  return (
    <CSS>
      <h1>Kapitalisasi Judul</h1>
      <TextField
        id="outlined-basic"
        variant="outlined"
        placeholder="Masukkan Judul Anda"
        value={formatTitle(judul)}
        onChange={(el) => setJudul(el.target.value)}
      />
    </CSS>
  );
};

export default Kapitalisasi;
