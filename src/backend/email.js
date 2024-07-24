import axios from "axios";

const sendEmail = (name, email, message) => {
  const options = {
    method: "POST",
    url: "https://rapidmail.p.rapidapi.com/",
    headers: {
      "x-rapidapi-key": "d88d74fc0fmsh91daff602eaf130p1cae5bjsn8b7ba85ff283",
      "x-rapidapi-host": "rapidmail.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    data: {
      sendto: "shihai797@gmail.com",
      name: name,
      replyTo: email,
      ishtml: "false",
      title: `message from ${name}`,
      body: message,
    },
  };
  return axios.request(options);
};

export default sendEmail;
