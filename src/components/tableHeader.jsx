import { useSelector, useDispatch } from "react-redux";
import { sortCryptoArray } from "../redux/features/cryptoDataSlice";

export default function TableHeader({ children, id }) {
  const dispatch = useDispatch();
  return <th onClick={() => dispatch(sortCryptoArray(id))}>{children}</th>;
}
