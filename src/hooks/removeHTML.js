const removeHTML = (str) => {
   var tmp = document.createElement("DIV");
   tmp.innerHTML = str;
   return tmp.textContent || tmp.innerText || "";
}

export default removeHTML