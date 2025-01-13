console.log("HELLO FILe Included");
$(document).ready(function () {
    // Event listener for left scroll button
    $('#scrollLeft').click(function () {
      $('#scrollContainer').animate(
        {
          scrollLeft: '-=300',
        },
        500 
      );
    });

    // Event listener for right scroll button
    $('#scrollRight').click(function () {
      $('#scrollContainer').animate(
        {
          scrollLeft: '+=300',
        },
        500 
      );
    });
  });
