function ListItem({ itemData }) {
  if (itemData) return <div className="list-item">{itemData.name}</div>;
}

export default ListItem;
