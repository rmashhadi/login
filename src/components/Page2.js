import React from "react";
export default function Page2() {
  return (
    <div
      className="main"
      style={{ backgroundColor: "yellow", height: "100vh", width: "100vw" }}
    >
      <h1>نام کاربر: {window.localStorage.getItem("Name")}</h1>
      <h1>کلمۀ عبور: {window.localStorage.getItem("Pass")}</h1>
      <h1>نوع: {window.localStorage.getItem("type")}</h1>
    </div>
  );
}
