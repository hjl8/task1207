window.onload = function () {
    function removeClass(className) {
        let e = document.querySelector('div'),
            classNameList = e.className.split(/\s+/),
            index;
        className = className.trim();
        index = classNameList.indexOf(className);
        if (index > -1) {
            classNameList[index] = '';
        }

        e.className = classNameList.join();
    }

    function f1() {
        let str = '<div class="55   66"    id  =   "2">',
            reg = /^<\b([^<>]+)\b(\s+\b([^<>]+\s=(['"])\s*[^<>]+\s*\4))*>$/,
            //<\/\1>$/,
            arr = [], obj = {};

        // <标签名 => ^<\b([^<>]+)\b
        // 属性键值对 => (\s*\b[^<>]+\b\s*=(["'])\s*\b[^<>]+\s\b\s\4)*


        console.log(reg.test(str), str.match(reg), obj);
        //     let str1 = ' id="2" class="36" src',
        //     reg = /(\s+\b\w+(=\s*(['"])\s*\b\w+\b\s*\2\s*)*)*/g;
        // console.log(reg.test(str1), str1.match(reg))

        /* if (reg.test(str)) {
            arr = str.match(reg);
            obj.tagName = arr[1];
            for (let i = 2; i < arr.length; i++) {
                let element = arr[i].trim();
                // console.log(/[^'"]+/.test(element))
                if (/[^'"]+/.test(element)) {
                    element = element.split('=');
                    for (let j = 0; j < element.length; j += 2) {
                        obj[element[i]] = element[i + 2];
                        console.log(element)
                    }
                }

            }
        }

        return obj; */
    }
    f1();
    // console.log(f1());
}