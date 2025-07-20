const url = "https://api.quotable.io/random";
var quote = document.getElementById("quote");
var auth =  document.getElementById("author");
document.getElementById("new").addEventListener("click", function(){
    code(url);
});

async function code(link){
    const response = await fetch(link);
    var data = await response.json();
    quote.innerHTML = data.content;
    auth.innerHTML = data.author;
}
code(url);

