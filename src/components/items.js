const Items = ({items}) => {
  return (
    <>
    {items.map((item, idx) => {
      return <li key={idx}>{item}</li>
      }
    )}
    </>
  )
}


export default Items;