function openBuy(artwork) {

  document.getElementById("buyModal").style.display = "flex";

  document.getElementById("selectedArtwork").textContent =
    "Artwork: " + artwork;
}


function closeBuy() {

  document.getElementById("buyModal").style.display = "none";

}


function sendEnquiry() {

  const name =
    document.getElementById("buyerName").value.trim();

  const email =
    document.getElementById("buyerEmail").value.trim();

  const message =
    document.getElementById("buyerMessage").value.trim();

  const artwork =
    document.getElementById("selectedArtwork").textContent;


  if (!name || !email) {

    alert("Please enter your name and email.");

    return;
  }


  const body =
    artwork +
    "\n\nName: " + name +
    "\nEmail: " + email +
    "\nMessage: " + message;


  window.location.href =
    "mailto:YOUR-EMAIL-HERE" +
    "?subject=Artwork Purchase Enquiry" +
    "&body=" +
    encodeURIComponent(body);
}


function sendContact(event) {

  event.preventDefault();


  const name =
    document.getElementById("contactName").value;

  const email =
    document.getElementById("contactEmail").value;

  const subject =
    document.getElementById("contactSubject").value;

  const message =
    document.getElementById("contactMessage").value;


  const body =
    "Name: " + name +
    "\nEmail: " + email +
    "\n\n" + message;


  window.location.href =
    "mailto:YOUR-EMAIL-HERE" +
    "?subject=" +
    encodeURIComponent(subject || "Website Enquiry") +
    "&body=" +
    encodeURIComponent(body);
}


window.addEventListener("click", function(event) {

  const modal = document.getElementById("buyModal");

  if (modal && event.target === modal) {
    closeBuy();
  }

});
