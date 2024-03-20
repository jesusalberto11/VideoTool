import "../../styles/shared/ActionButton.css";

export enum ActionButtonStyle {
  Active,
  Pasive,
}

const ActionButton = (props: {
  title: string;
  icon: string;
  type: ActionButtonStyle;
}) => {
  return (
    <button
      className={
        props.type === ActionButtonStyle.Active
          ? "action-btn active"
          : "action-btn pasive"
      }
      type="button"
    >
      <svg width="16" height="16" fill="#000" viewBox="0 0 16 16">
        <path d={props.icon} />
      </svg>
      {props.title}
    </button>
  );
};

export default ActionButton;
