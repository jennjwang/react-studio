// TODO: create a component that displays a single bakery item
export function BakeryItem(props) {
  return (
    <div className="item">
      <h3 cl>{props.name}</h3>
      <img src={props.image} />
      <p>{props.description}</p>
      <p>${props.price}</p>
    </div>
  );
}
