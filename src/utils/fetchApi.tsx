// import { LOGIN_URL, TOKEN, CID, ERROR_MESSAGE } from "src/common/constants";
// import { Modal } from "antd";

export default function fetchApi(method: string, url: string, data?: any) {
  // let hideError = false;
  if (data && data.hideError === true) {
    // hideError = true;
    delete data.hideError;
  }

  return fetch(location.origin + "/" + url, {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      // "Authorization": "Bearer " + TOKEN,
      // "Mscid": CID
    },
    body: method === "post" ? JSON.stringify(data) : undefined
  })
  .then(res => res.json())
  .then(value => {
    if (value.result === 401) {
      // location.href = LOGIN_URL;
    }
    // else if (value.result !== 0 && !hideError) {
    //   // Modal.error({title: value.detail || ERROR_MESSAGE});
    // }
    else {
      return value;
    }
  })
}
