import "./Offcanvas.css";

const Offcanvas = (props) => {
  return (
    <>
      <div className="backdrop" onClick={props.onClose}></div>
      <div className="offcanvas">
        <div className="content">
            {props.children}
        </div>
      </div>
    </>
  );
};

export default Offcanvas;
