document.querySelector("#start_chat").addEventListener("click", (event) => {
  const socket = io();

  const chat_help = document.getElementById("chat_help");
  chat_help.style.display = "none";

  const chat_in_support = document.getElementById("chat_in_support");
  chat_in_support.style.display = "block";

  const text = document.querySelector("#txt_help").value;
  const email = document.querySelector("#email").value;

  socket.on("connect", () => {
    socket.emit("client_first_access", { text, email }, (call, error) => {
      if (error) return console.error(error);

      console.log(call);
    });
  });
});
