import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import env from "react-dotenv";
import "./Login.scss";

const loginSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Za krótki!")
    .max(50, "Za długi!")
    .required("Pole wymagane"),
  password: Yup.string()
    .min(8, "Za krótki!")
    .max(50, "Za długi!")
    .required("Pole wymagane"),
});

export default function Login() {
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);
  const [error, setError] = useState(false);

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="w-[100%] bg-[#130F0D]">
      <div className="login ">
        <h1 className="text-xl font-bold font-oswald text-white">Login</h1>
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={loginSchema}
          onSubmit={async (values) => {
            console.log(values);

            const response = await fetch(env.URL_API + "/login", {
              method: "POST",
              body: JSON.stringify(values),
              headers: { "Content-Type": "application/json" },
              credentials: "include",
            });
            if (response.ok) {
              response.json().then((userInfo) => {
                setUserInfo(userInfo);
                setRedirect(true);
              });
            } else {
              setError(true);
            }
          }}
        >
          {({ errors, touched }) => (
            <Form>
              {error ? (
                <div style={{ color: "red" }} className="login_label">
                  Niepoprawne dane logowania
                </div>
              ) : null}

              <Field
                name="username"
                placeholder="nazwa użytkownika"
                className="login__item"
              />
              {errors.username && touched.username ? (
                <div style={{ color: "red" }} className="login_label">
                  {errors.username}
                </div>
              ) : null}
              <Field
                name="password"
                type="password"
                placeholder="hasło"
                className="login__item"
              />
              {errors.password && touched.password ? (
                <div style={{ color: "red" }} className="login__label">
                  {errors.password}
                </div>
              ) : null}
              <button className="login__item" type="submit">
                Zatwierdź
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
