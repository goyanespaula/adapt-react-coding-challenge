// libraries
import uuidv1 from "uuid/v1";
import axios from "axios";

// src
async function getScienceList() {
  const scienceList = await axios.get(
    "http://localhost:3010/books?subjects_like=Fiction"
  );
  return scienceList;
}
const DEFAULT_STATE = {
  completeBookList: [
    {
      title: "100 Years of Solitude",
      author: "Gabriel Garcia Marquez",
      year: 1967,
      subject: "magical realism",
      id: uuidv1()
    },
    {
      title: "House of the Spirits",
      author: "Isabel Allende",
      year: 1982,
      subject: "magical realism",
      id: uuidv1()
    },
    {
      title: "Labyrinths",
      author: "Jorge Luis Borges",
      year: 1962,
      subject: "magical realism",
      id: uuidv1()
    },
    {
      title: "Foundation",
      author: "Isaac Asimov",
      year: 1951,
      subject: "science fiction",
      id: uuidv1()
    },
    {
      title: "Ender's Game",
      author: "Orson Scott Card",
      year: 1985,
      subject: "science fiction",
      id: uuidv1()
    },
    {
      title: "Brave New World",
      author: "Aldous Huxley",
      year: 1932,
      subject: "science fiction",
      id: uuidv1()
    }
  ]
};

export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case "EDIT_BOOK":
      const newBookList = state.completeBookList.map(book => {
        if (book.id === action.book.id) {
          book = action.book;
        }
        return book;
      });
      return { ...state, completeBookList: newBookList };
    default:
      return { ...state };
  }
}
