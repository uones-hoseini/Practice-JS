function star1(x) {
  for (let i = 1; i <= x; i++) {
    document.write("*" + " ");

    document.write("<br>");
  }
}
document.write(
  "<br>" + "Practice 1______________________________________________" + "<br>"
);
star1(10);
function star2(x) {
  for (let i = 1; i <= x; i++) {
    for (let j = 1; j <= x; j++) {
      document.write("*" + "         ");
    }
    document.write("<br>");
  }
}

document.write(
  "<br>" + "Practice2______________________________________________" + "<br>"
);
star2(5);

function star3(x) {
  for (let e = 1; e <= x; e++) {
    for (let i = 1; i <= x; i++) {
      for (let j = 1; j <= x; j++) {
        document.write("*" + " ");
      }
      document.write("<br>");
    }
    document.write("<br>");
  }
}

document.write(
  "<br>" + "Practice3______________________________________________" + "<br>"
);
star3(5);

function star4(x) {
  for (let i = 0; i <= x; i++) {
    for (let j = 1; j <= i; j++) {
      document.write("*" + " ");
    }
    document.write("<br>");
  }
}

document.write(
  "<br>" + "Practice4______________________________________________" + "<br>"
);
star4(5);

function star5(x) {
  for (let i = x; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      document.write("*"+"&nbsp");
    }
     document.write("<br>");
  }
}

document.write(
  "<br>" + "Practice5______________________________________________" + "<br>"
);
star5(5);

// function star6(x) {
//   let k=1
//   for (let i = x; i <=x ; i--) {
//     for (let j = 1; j <= x-1; j++) {
//         document.write("&nbsp");
//         for (let s = 1; s <= k;s++)
//         {
//             document.write("*");
//         }
//     }
//     document.write("<br>");
//   }
// }

document.write(
  "<br>" + "Practice6______________________________________________" + "<br>"
);
star6(5);
