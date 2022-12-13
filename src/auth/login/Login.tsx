import {
  Button,
  Card,
  FormElement,
  TextField,
  Toast,
  ToastWrapper,
} from "@cedcommerce/ounce-ui";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.module.css";
import styles from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();

  interface user {
    admin: string | number;
    password: string;
  }

  interface toastData {
    logged: boolean;
    open: boolean;
    msg: string;
    type: string;
  }

  const [data, setData] = useState<user>({ admin: "", password: "" });
  const [toast, setToast] = useState<toastData>({
    logged: false,
    open: false,
    msg: "",
    type: "",
  });

  //function for form data entered by user
  const formData = (e: any) => {
    e.preventDefault();
    fetch(
      `https://fbapi.sellernext.com/user/login?username=${data.admin}&password=${data.password}`,
      {
        method: "POST",
        headers: {
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiMSIsInJvbGUiOiJhcHAiLCJpYXQiOjE1MzkwNTk5NzgsImlzcyI6Imh0dHBzOlwvXC9hcHBzLmNlZGNvbW1lcmNlLmNvbSIsImF1ZCI6ImV4YW1wbGUuY29tIiwibmJmIjoxNTM5MDU5OTc4LCJ0b2tlbl9pZCI6MTUzOTA1OTk3OH0.GRSNBwvFrYe4H7FBkDISVee27fNfd1LiocugSntzxAUq_PIioj4-fDnuKYh-WHsTdIFMHIbtyt-uNI1uStVPJQ4K2oYrR_OmVe5_zW4fetHyFmoOuoulR1htZlX8pDXHeybRMYlkk95nKZZAYQDB0Lpq8gxnTCOSITTDES0Jbs9MENwZWVLfyZk6vkMhMoIAtETDXdElIdWjP6W_Q1kdzhwqatnUyzOBTdjd_pt9ZkbHHYnv6gUWiQV1bifWpMO5BYsSGR-MW3VzLqsH4QetZ-DC_AuF4W2FvdjMRpHrsCgqlDL4I4ZgHJVp-iXGfpug3sJKx_2AJ_2aT1k5sQYOMA",
        },
      }
    )
      .then((response) => response.json())
      .then((info) => {
        console.log(info);
        sessionStorage.setItem(`auth_token_${new Date().toLocaleString()}`,info.data.token); //session storage
        if (info.success===true) {
          navigate("/panel/dashboard"); //navigating to dashboard page
        }
        else{
          setToast({
            ...toast,
            logged: false,
            msg: info.message,
            type: "error",
            open: true,
          });
        }
      })
      .catch((err) => {
        setToast({
          ...toast,
          logged: false,
          msg: err.message,
          type: "error",
          open: true,
        });
      });
  };
  return (
    <>
    <div className={styles.form}>
      <Card title="Login">
        <form onSubmit={formData}>
          <FormElement>
            <TextField
              name="Admin"
              required
              onChange={(val) => setData({ ...data, admin: val })}
              placeHolder="Enter username"
              value={data.admin}
            />
            <TextField
              name="Enter Password"
              required
              onChange={(val) => setData({ ...data, password: val })}
              placeHolder="Enter password"
              value={data.password}
            />
            <Button>Login</Button>
          </FormElement>
        </form>
        {toast.open === true ? (
          <ToastWrapper>
            <Toast
              message={toast.msg}
              onDismiss={() => {
                setToast({
                  ...toast,
                  open: false,
                });
              }}
              timeout={2000}
              type={toast.type}
            />
          </ToastWrapper>
        ) : (
          ""
        )}
      </Card>
    </div>
    {/* <Routes>
      <Route  exact path={props.match.path}></Route>
    </Routes> */}
    </>
  );
};

export default Login;
