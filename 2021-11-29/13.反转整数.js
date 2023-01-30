// var reverse1 = function(x) {
//     x = x + '';
//     console.log("xxx", typeof x)
//     const rev = x.split('').reverse().join("");
//     if(rev.slice(0,1) === '-') {
//        if(rev.slice(1,2) === '0') {
//             return '-' + rev.slice(1);
//        }else {
//          return rev;
//        }
//     }else {
//       if(rev.slice(1,2) === '0') {
//             return rev.slice(1);
//       }else {
//         return rev;
//       }
//     }
// };

var reverse1 = function(x) {
    x = x + '';
    let rev = x.split('')
    for(let i = rev.length - 1, j = 0; i >= j; i--,j++) {
        [rev[i], rev[j]] = [rev[j], rev[i]];
    }
    rev.join("");
    if(rev.slice(rev.length - 1)[0] === '-') {
       if(rev.slice(0,1)[0] === '0') {
            return '-' + rev.slice(1, rev.length - 1).join("");
       }else {
         return '-' + rev.slice(0, rev.length - 1).join("");
       }
    }else if(rev.slice(rev.length - 1)[0] === '+'){
      if(rev.slice(0,1)[0] === '0') {
        return rev.slice(1, rev.length - 1).join("");
      }else {
        return rev.slice(0, rev.length - 1).join("");
      }
    }else {
      if(rev.slice(0,1)[0] === '0') {
        return rev.slice(1).join("");
      }else {
        return rev.join("");
      }
    }
};

var reverse = function (x) {
    let y = parseInt(x.toString().split("").reverse().join(""));
    if (x < 0)
        y = - y;
    return y > 2147483647 || y < -2147483648 ? 0 : y;
};


console.log(reverse1(123))