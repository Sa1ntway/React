import logo from "./logo.svg";
import "./App.css";
import Book from "./Components/Book";
const bookCover1 =
  "https://cdn.eksmo.ru/v2/ITD000000001129035/COVER/cover1__w220.jpg?p404=1";
const bookCover2 =
  "https://i1.mybook.io/p/512x852/book_covers/fe/ee/feeec77c-f4fb-4464-9365-305424852677.jpe?v2";
const bookCover3 =
  "https://images.techinsider.ru/upload/img_cache/02a/02a2bc8cef3f962e45c1aed38a8d6c8f_cropped_415x657.jpg";
function App() {
  return (
    <div className="App">
      <Book
        src={bookCover1}
        name={"Гордость и преубеждение"}
        author={"Джейн Остен"}
      />
      <Book
        src={bookCover2}
        name={"Мальчик в полосатой пижаме"}
        author={"Джон Бойн"}
      />
      <Book
        src={bookCover3}
        name={"Бегущий за ветром"}
        author={"Халед Хоссейни"}
      />
    </div>
  );
}

export default App;
