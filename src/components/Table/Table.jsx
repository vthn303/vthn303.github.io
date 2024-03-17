import "../Table/Table.css";
import post from "../../data/posts.json";
const Table = () => {
  return (
    <div className="big-border">
      <table id="table-data">
        <thead>
          <tr>
            <th>Id</th>
            <th>Tittle</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {post.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
