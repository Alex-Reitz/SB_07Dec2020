document.addEventListener("DOMContentLoaded", init);

function init() {
  document.getElementById("searchBtn").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("hello");
    const APIKey = `uI4NgMU7xI34RhUYQPhi3pRxFo80xdYI`;
    const input = document.getElementById("meme").value;
    console.log(input);
    async function getMeme() {
      let url = `http://api.giphy.com/v1/gifs/search?q=${input}&api_key=${APIKey}`;
      console.log(url);
      const resp = await axios.get(url);
      console.log(resp);
      let imageSource = resp.data.data[0].images.original.url;
      console.log(imageSource);

      let memeImage = document.createElement("img");
      memeImage.setAttribute("src", imageSource);
      let container = document.getElementById("memeContainer");
      container.append(memeImage);
    }
    getMeme();
  });
}
