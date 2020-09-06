import React, { useState } from "react";
import "../school-info/school-info.styles.scss";
import { Button ,Modal} from "semantic-ui-react";

const SchoolInfo = ({
  SchoolName,
  Grade,
  Manager,
  PhoneNumber,
  Address,
  PostalCode,
  id
}) => {
  const [open, setOpen] = useState(false);
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
        <div>نام مدرسه: {SchoolName}</div>
        <div>مقطع: {Grade}</div>
        <div>نام مدیر: {Manager}</div>
        <div>شماره موبایل مدیر: {PhoneNumber}</div>
        <div>آدرس مدرسه: {Address}</div>
        <div>کدپستی: {PostalCode}</div>
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
