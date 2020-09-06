import React from "react";
import "../salePage/salePage.styles.scss";
import paleGreen from "../../assets/paleGreen.svg";
import student from '../../assets/student.svg'
import CustomButton from "../../components/custom-button/custom-buuton.component";
import { useHistory } from "react-router-dom";

const SalePage = () => {
  const history = useHistory();

  const routeChange = () => {
    let path = `./request`;
    history.push(path);
  };

  return (
    <div className="sale-page ">
      <div className="home ">
      <img src={student} alt="student logo" />
        <div className='container'>
          <p>سامانه جامع آموزش آنلاین دانشگاه شیراز</p>
          <div className="buttons">
            <CustomButton onClick={routeChange}>خرید سامانه</CustomButton>
            <CustomButton peygiry>پیگیری خرید</CustomButton>
          </div>
        </div>
      </div>
      <div className="paleGreenBg">
        <img src={paleGreen} />
      </div>
    </div>
  );
};

export default SalePage;
