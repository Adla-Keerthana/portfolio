document.getElementById("downloadBtn").addEventListener("click", function() {
    // Create an anchor element
    var downloadLink = document.createElement("a");
    // Set the href attribute to the path of your PDF file
    downloadLink.href = "Adla Keerthana.pdf";
    // Set the download attribute to specify the filename
    downloadLink.download = "Adla Keerthana.pdf";
    // Append the anchor element to the document body
    document.body.appendChild(downloadLink);
    // Trigger a click event on the anchor element
    downloadLink.click();
    // Remove the anchor element from the document body
    document.body.removeChild(downloadLink);
  });
  