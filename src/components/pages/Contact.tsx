import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import { useForm } from "react-hook-form";
import Footer from "../Footer";
import "../../assets/styles/contact.scss";

function Contact() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  // console.log(errors);

  return (
    <div className="contact">
      <div className="container">
        <div className="titleContact">
          <p>Contact</p>
        </div>
        <div className="contactMsg">
          <p>
            お気軽に下記フォームよりご連絡ください。下記フォーム内容はいずれも必須事項となっております。必須事項をご記入の上ご連絡ください。
          </p>
        </div>
        <form className="forms" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            className="formsItem"
            variant="filled"
            label="氏名(必須)"
            type="text"
            name="title"
            fullWidth
            margin="normal"
            inputRef={register({ required: true, maxLength: 20 })}
            error={Boolean(errors.title)}
            helperText={errors.title && "氏名をご入力ください"}
          />
          <TextField
            className="formsItem"
            variant="filled"
            label="メールアドレス(必須)"
            type="email"
            name="email"
            fullWidth
            margin="normal"
            inputRef={register({ required: true })}
            error={Boolean(errors.email)}
            helperText={errors.email && "メールアドレスをご入力ください"}
          />
          <TextField
            className="formsItem"
            variant="filled"
            label="件名(必須)"
            type="text"
            name="subject"
            fullWidth
            margin="normal"
            inputRef={register({ required: true })}
            error={Boolean(errors.subject)}
            helperText={errors.subject && "件名をご入力ください"}
          />
          <TextField
            className="formsItem"
            variant="filled"
            label="お問い合わせ内容(必須)"
            type="text"
            name="body"
            fullWidth
            margin="normal"
            inputRef={register({ required: true })}
            error={Boolean(errors.body)}
            helperText={errors.body && "お問い合わせをご入力して下さい。"}
            multiline
            rows="8"
          />
          <Button
            className="submitButton"
            variant="contained"
            color="default"
            type="submit"
            style={{ marginTop: 10 }}
          >
            送信
          </Button>
        </form>
        <div className="buttons">
          <GitHubIcon
            className="icon"
            onClick={() =>
              window.open("https://twitter.com/yuuuki_blog", "_blank")
            }
          />
          <TwitterIcon
            className="icon"
            onClick={() => window.open("https://github.com/rikuyu", "_blank")}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
