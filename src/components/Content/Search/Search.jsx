import { useState } from "react";
import "../Search/Search.scss";
function Search() {
  const [inputValue, setInputValue] = useState("");
  const [title, setTitle] = useState(
    "Đây là danh sách người dùng đang hoạt động!!!"
  );

  const handleChangeTitle = () => {
    if (inputValue.trim() !== "") {
      setTitle(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="search">
      <h1>{title}</h1>
      <div className="container">
        <input
          type="text"
          size="100"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Thay thế dòng tiêu đề trên..."
        />
        <button onClick={handleChangeTitle}>Thay thế</button>
      </div>
    </div>
  );
}

export default Search;
