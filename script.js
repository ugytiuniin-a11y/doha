
function addComment() {
  var comment = document.getElementById("commentBox").value;

  if (comment.trim() === "") {
    alert("الموضوع هيكون شيق اكتر برايك دبعا فشاركنا بيه ");
    return;
  }

  var p = document.createElement("p");
  p.textContent = comment;

  document.getElementById("commentsSection").appendChild(p);
  document.getElementById("commentBox").value = "";
}
