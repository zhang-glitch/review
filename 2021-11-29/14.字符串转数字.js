var myAtoi = function(s) {
    let res = 0;
    let spl = '';
    const reg = /[0-9]/g
    // 先清除数字前面的空格  "   -42"
    s = s.replace(/\s/g, '')
    if(s.slice(0, 1) === '-') {
        for(let i = 1; i < s.length; i++) {
            if(reg.exec(s[i])) {
                spl = s.slice(i);
                break;
            }
        }
        res = parseInt(spl) < -Math.pow(2, 31) ? -Math.pow(2, 31) : -parseInt(spl);
    }else {
        for(let i = 0; i < s.length; i++) {
            if(reg.exec(s[i])) {
                spl = s.slice(i);
                break;
            }
        }
         res = parseInt(spl) > Math.pow(2, 31) - 1 ? Math.pow(2, 31) : parseInt(spl);
    }
    return res
};


console.log(myAtoi("    -42"))