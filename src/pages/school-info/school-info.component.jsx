import React, { useState } from "react";
import "../school-info/school-info.styles.scss";
import { Button ,Modal} from "semantic-ui-react";

const SchoolInfo = ({
  name,
  grade,
  manager,
  phone,
  address,
  postalCode,
  
}) => {
  const [open, setOpen] = useState(false);
  console.log('name:'+ name)
  return (
    <>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        header="ثبت مشخصات"
        content="مشخصات شما با موفقیت ثبت شد."
        actions={[{ key: "done", content: "تایید", positive: true }]}
      />
      <div className="form">
        <h1>اطلاعات مدرسه</h1>
        <p>
          شما در حال ثبت درخواست خرید سامانه برای مدرسه با کد اختصاصی و مشخصات
          ذیل می باشید:
        </p>
        <hr />
        <div>نام مدرسه: {name}</div>
        <div>مقطع: {grade}</div>
        <div>نام مدیر: {manager}</div>
        <div>شماره موبایل مدیر: {phone}</div>
        <div>آدرس مدرسه: {address}</div>
        <div>کدپستی: {postalCode}</div>
        <hr />
        <div className="buttons">
          <Button basic color="teal" type="submit" >
            بازگشت
          </Button>
          <Button primary type="submit" onClick={() => setOpen(true)}>
            تایید
          </Button>
        </div>
      </div>
    </>
  );
};
export default SchoolInfo;
