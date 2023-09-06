import React from "react";
import "./ContactForm.css";
const ContactForm = () => {
  // 入力欄の値を保持するためのuseStateフックを設定
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [comment, setComment] = React.useState("");

  // フォームが送信されたときの処理
  const handleSubmit = (e) => {
    e.preventDefault();
    // ここにバックエンドへのデータ送信などの処理を記述
    console.log({
      name: name,
      email: email,
      comment: comment,
    });
    // 送信後、入力欄をクリア
    setName("");
    setEmail("");
    setComment("");
  };

  return (
    <div className="section contactForm" id="contact-form">
      <div className="title">Contact Me</div>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form">
          <label>Comment:</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <div className="submit-button">
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
