import Items from "./items";

const List = ({items}) => {
  return (
    <ul>
      <Items items={items}/>
    </ul>
  )
}



// const List = ({ items }) => {
//   return (
//     <ul>
//       {items.map((item) => <li>{item}</li>)}
//     </ul>
//   )
// }

export default List;
