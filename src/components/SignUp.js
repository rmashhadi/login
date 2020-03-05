import React, { useState, useEffect } from "react";
import logo from "../pic/userlock.png";
export default function SignUp(props) {
  const [user, setUser] = useState("");
  const [pass1, setpass1] = useState("");
  const [pass2, setpass2] = useState("");
  const [length, setLength] = useState("bad");
  const [ch1, setCh1] = useState("");
  const [ch2, setCh2] = useState("defaultChecked");
  const [valid2, setValid2] = useState("alert1");
  const [valid3, setValid3] = useState("alert1");
  const [valid4, setValid4] = useState("alert1");
  const [submit, setsubmit] = useState("");
  const [valid, setValid] = useState("alert1");
  // for checkbox checking
  const choice1 = () => {
    if (ch1 === ch2) {
      return "not-chosen";
    } else if (ch1 === "") {
      return "not-chosen";
    } else {
      return "chosen";
    }
  };
  const choice2 = () => {
    if (ch1 === ch2) {
      return "not-chosen";
    } else if (ch2 === "") {
      return "not-chosen";
    } else {
      return "chosen";
    }
  };
  const handle1 = () => {
    setCh1("defaultChecked");
    setCh2("");
  };
  const handle2 = () => {
    setCh2("defaultChecked");
    setCh1("");
  };
  // length of password
  const MyLength = () => {
    if ((0 < pass1.length) & (pass1.length < 6)) {
      return "visible";
    } else {
      return "hidden";
    }
  };
  // final Validation
  const Validation = () => {
    window.localStorage.setItem("Name", user);
    window.localStorage.setItem("Pass", pass1);
    if (ch1 === "defaultChecked") {
      window.localStorage.setItem("type", "حقوقی");
    } else {
      window.localStorage.setItem("type", "حقیقی");
    }
    setsubmit("submit");
    if (pass2 === pass1) {
      setValid("alert1");
    } else {
      setValid("alert2");
    }
    if (pass1.length > 5) {
      setLength("good");
    } else {
      setLength("bad");
    }
    //isNaN(num)        returns true if the variable does NOT contain a valid number
    if (isNaN(user)) {
      setValid4("alert1");
    } else {
      setValid4("alert2");
    }
    if (user !== "") {
      setValid2("alert1");
    } else {
      setValid2("alert2");
    }
    if (pass1 !== "") {
      setValid3("alert1");
    } else {
      setValid3("alert2");
    }
    // if the input is all white
    if (user && !user.trim()) {
      setValid2("alert2");
    }
  };
  console.log("pass1.length", pass1.length);
  const Next = () => {
    if (
      (length === "good") &
      (valid === "alert1") &
      (submit === "submit") &
      (valid2 === "alert1") &
      (valid4 === "alert1") &
      (valid3 === "alert1")
    ) {
      props.history.push("/page/");
    }
  };
  useEffect(() => {
    console.log("valid", valid);
  }, [valid]);
  useEffect(() => {
    console.log("valid", valid);
  }, [valid3]);
  useEffect(() => {
    console.log("valid", valid);
  }, [valid2]);
  const handleClick = e => {
    setUser("");
    e.target.value = "";
  };
  const handleClick1 = e => {
    setpass1("");
    e.target.value = "";
  };
  const handleClick2 = e => {
    setpass2("");
    e.target.value = "";
  };
  return (
    <div className="main">
      <img src={logo} alt="login" />

      <b className="title">نام و نام خانوادگی</b>

      <input
        onClick={e => handleClick(e)}
        className="pw"
        onChange={e => setUser(e.target.value)}
      />
      <span className={valid2}>لطفا نام و نام خانوادگی خود را وارد کنید.</span>
      <span className={valid4}>نام نباید تمامی از اعداد باشد.</span>
      <b className="title">کلمه عبور شما</b>
      <input
        onClick={e => handleClick1(e)}
        type="password"
        className="pw"
        onChange={e => setpass1(e.target.value)}
      />
      <span className={valid3}>لطفا کلمۀ عبور خود را وارد کنید.</span>
      <span style={{ visibility: MyLength() }} className="alert2">
        کلمۀ عبور کوچکتر از 6 حرف
      </span>
      <b className="title">تکرار کلمه عبور شما</b>
      <input
        onClick={e => handleClick2(e)}
        type="password"
        className="pw"
        onChange={e => setpass2(e.target.value)}
      />
      <span className={valid}>تکرار کلمۀ عبور نادرست است.</span>
      <div className="level">
        <div onClick={() => handle1()} className={choice1()}>
          <label class="container">
            <span className="one">مشترک حقوقی هستم</span>
            <input type="checkbox" checked={ch1} />
            <span class="checkmark"></span>
          </label>
        </div>

        <div onClick={() => handle2()} className={choice2()}>
          <label class="container">
            <span className="one">مشترک حقیقی هستم</span>
            <input type="checkbox" checked={ch2} />
            <span class="checkmark"></span>
          </label>
        </div>
      </div>

      <button onClick={() => Validation()}>
        <b style={{ fontSize: "16px" }}>ثبت نام در ناویت</b>
      </button>
      {Next()}
    </div>
  );
}
