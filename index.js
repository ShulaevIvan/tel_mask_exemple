window.addEventListener('DOMContentLoaded', () => {

    const maskPhone = (selector, maskTmp = '+7 (___) ___-__-__') => {
        
        const elems = document.querySelectorAll(selector);
    
        function mask(event) {
            const keyboardKey = event.keyCode;
            const tmp = maskTmp;
            const def = tmp.replace(/\D/g, "");
            const val = this.value.replace(/\D/g, "");
            
            let i = 0;
            let newValue = tmp.replace(/[_\d]/g, (a) => i < val.length ? val.charAt(i++) || def.charAt(i) : a);
            i = newValue.indexOf("_");

            if (i !== -1) newValue = newValue.slice(0, i);
    
            let reg = tmp.substr(0, this.value.length).replace(/_+/g, (item) => "\\d{1," + item.length + "}").replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
    
            if (!reg.test(this.value) || this.value.length < 5 || keyboardKey > 47 && keyboardKey < 58) this.value = newValue;
            if (event.type === "blur" && this.value.length < 5) this.value = "";
    
        }
        
        for (const elem of elems) {
            elem.addEventListener("input", mask);
            elem.addEventListener("focus", mask);
            elem.addEventListener("blur", mask);
        }
        
    };

    maskPhone('.tel-input');
    const testStr = `C:\fakepath\form-img.png`;
    console.log(testStr.split(''))
    const patten = /[a-zA-Z0-9_-]+\.(.+)$/;
    const clearValue =  testStr.match(patten);
    console.log(clearValue[0])

});