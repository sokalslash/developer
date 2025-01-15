const ADDRESS_FOR_SEND_DATA = "https://httpbin.org/post";

const sendData = (onSuccess, onFail, body) => {
  fetch(ADDRESS_FOR_SEND_DATA, {
    method: "POST",
    body,
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        throw new Error(`${response.status} - ${response.statusText}`);
      }
    })
    .catch((err) =>
      onFail(`При отправке данных на сервер произошла ошибка ${err}`)
    );
};

export { sendData };
