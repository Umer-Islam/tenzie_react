export default function Die(props) {
  let style = {
    backgroundColor: props.isHeld ? `#59E391` : `white`,
  };
  return (
    <>
      <button
        style={style}
        onClick={() => {
          props.hold(props.id);
        }}
      >
        {props.value}
      </button>
    </>
  );
}
