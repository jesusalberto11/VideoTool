import "../../styles/components/current-plan-info/CurrentPlanInfo.css";

const CurrentPlanInfo = () => {
  return (
    <div className="current-plan-container flex">
      <div>
        <p className="current-plan-title">Mi Plan - Plus</p>
        <p className="current-plan-renewal">El uso se renueva el: 3-may-2023</p>
      </div>
      <div className="current-plan-usage flex">
        <div className="current-plan-usage-details">
          <p>Almacenamiento</p>
          <p>23.5 GB / 1 TB</p>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: "50%" }}></div>
        </div>
      </div>
      <div className="current-plan-usage flex">
        <div className="current-plan-usage-details">
          <p>Banda Mensual</p>
          <p>3.4 TB / 5 TB</p>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: "70%" }}></div>
        </div>
      </div>
      <button className="handle-plan-btn" type="button">
        Administrar plan
      </button>
    </div>
  );
};

export default CurrentPlanInfo;
