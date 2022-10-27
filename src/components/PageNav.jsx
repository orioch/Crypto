import { Pagination } from "@mui/material";
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
    <Pagination
      className="pagination"
      onChange={(e) => dispatch(changeCurrentPage(e.target.textContent))}
      count={numberOfPages}
    />
  );
}
