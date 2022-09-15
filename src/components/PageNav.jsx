import Nav from "react-bootstrap/Nav";
import { useSelector, useDispatch } from "react-redux";
import { changeCurrentPage } from "../redux/features/cryptoDataSlice";

export default function PageNav() {
  const dispatch = useDispatch();
  const { length, itemsInPage, currentPage } = useSelector(
    (store) => store.cryptoData
  );
  let numberOfPages = Math.floor(length / itemsInPage);
  return (
    <Nav variant="pills">
      {Array.from({ length: numberOfPages }, (_, i) => i + 1).map((i) => (
        <Nav.Item key={i}>
          <Nav.Link
            key={i}
            active={i == currentPage}
            onClick={() => dispatch(changeCurrentPage(i))}
          >
            {i}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}
