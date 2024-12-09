window.onload = function() {
	const base64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
		base32 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
		base32_百家姓 = '‌王‌李张刘陈杨赵黄周吴徐孙胡朱高林何郭马罗梁宋郑谢韩唐冯于董萧程曹';
	document.querySelector('.content .base64 button:first-child').onclick = function() {
		let textareas = document.querySelectorAll('.content .base64 textarea'),
			binCode = [],
			res = '';

		if (textareas[0].value === '') {
			return console.error('请先输入要编码的字符！！！');
		}

		for (let i = 0; i < textareas[0].value.length; i++) {
			//找到每个字符对应的ASCII码，并转成二进制
			binCode.push(textareas[0].value[i].charCodeAt().toString(2));
			//每个字符的ASCII码转成二进制后，不够八位的在前面补0
			binCode[i] = '0'.repeat(8 - (binCode[i].length % 8)) + binCode[i];
		}

		// 在将得到的二进制六位一分
		binCode = binCode.join('').match(/[01]{6}|[01]+/g);
		// console.log(binCode);
		//不足6位的在后面补0
		if (binCode[binCode.length - 1].length < 6) {
			binCode[binCode.length - 1] = binCode[binCode.length - 1] + '0'.repeat(6 - (binCode[binCode.length -
				1].length % 6));
		}

		// 将六位二进制转换为十进制,得到的十进制就是base64字符对应的索引
		for (let i = 0; i < binCode.length; i++) {
			let index = parseInt(binCode[i], 2);
			// console.log(index);
			res += base64[index];
		}

		//将得到的编码四位一分，不够四位的在后面补等号（=）
		res = res.match(/\w{4}|\w+/g);
		if (res[res.length - 1].length < 4) {
			res[res.length - 1] = res[res.length - 1] + ('='.repeat(4 - (res[res.length - 1].length % 4)));
		}
		res = res.join('');
		textareas[1].value = res;
	}

	document.querySelector('.content .base64 button:last-child').onclick = function() {
		let textareas = document.querySelectorAll('.content .base64 textarea'),
			binCode = [],
			res = '';

		if (textareas[0].value === '') {
			return console.error('请先输入要解码的字符！！！');
		}

		for (let i = 0; i < textareas[0].value.length; i++) {
			if (binCode[i] !== '=') {
				//找到每个字符对应的base64码的索引位置，并转成二进制
				binCode.push(base64.indexOf(textareas[0].value[i]).toString(2));
				// console.log(binCode)
				//每个字符的索引位置转成二进制后，不够六位的在前面补0
				if (binCode[i].length < 6) binCode[i] = '0'.repeat(6 - (binCode[i].length % 6)) + binCode[i];
			}
		}

		//将二进制索引八位一分，不足八位的在后面补0
		binCode = binCode.join('').match(/[01]{8}|[01]+/g);
		if (binCode[binCode.length - 1].length < 8) {
			binCode[binCode.length - 1] = binCode[binCode.length - 1] + '0'.repeat(8 - (binCode[binCode.length -
				1].length % 8));
		}

		//将每个八位二进制转成十进制，得到对应的ASCII码，通过ASCII码获取对应字符
		for (let i = 0; i < binCode.length; i++) {
			res += String.fromCharCode(parseInt(binCode[i], 2))
		}
		textareas[1].value = res;
	}

	document.querySelector('.content .base32 button:first-child').onclick = function() {
		let textareas = document.querySelectorAll('.content .base32 textarea'),
			baseType = document.querySelector('.content .base32 select').value,
			binCode = [],
			res = '';

		if (textareas[0].value === '') {
			return console.error('请先输入要编码的字符！！！');
		}

		for (let i = 0; i < textareas[0].value.length; i++) {
			//找到每个字符对应的ASCII码，并转成二进制
			binCode.push(textareas[0].value[i].charCodeAt().toString(2));
			//每个字符的ASCII码转成二进制后，不够八位的在前面补0
			binCode[i] = '0'.repeat(8 - (binCode[i].length % 8)) + binCode[i];
		}

		// 在将得到的二进制五位一分
		binCode = binCode.join('').match(/[01]{5}|[01]+/g);
		// console.log(binCode);
		//不足五位的在后面补0
		if (binCode[binCode.length - 1].length < 5) {
			binCode[binCode.length - 1] = binCode[binCode.length - 1] + '0'.repeat(5 - (binCode[binCode.length -
				1].length % 5));
		}

		// 将五位二进制转换为十进制,得到的十进制就是base32字符对应的索引
		for (let i = 0; i < binCode.length; i++) {
			let index = parseInt(binCode[i], 2);
			// console.log(index);
			if (baseType === '普通') {
				res += base32[index];
			} else {
				res += base32_百家姓[index];
			}
		}

		//将得到的编码八位一分，不够八位的在后面补等号（=）
		res = res.match(/[^\s]{8}|[^\s]+/g);
		if (res[res.length - 1].length < 8) {
			res[res.length - 1] = res[res.length - 1] + ('='.repeat(8 - (res[res.length - 1].length % 8)));
		}
		res = res.join('');
		textareas[1].value = res;
	}

	document.querySelector('.content .base32 button:nth-child(2)').onclick = function() {
		let textareas = document.querySelectorAll('.content .base32 textarea'),
			baseType = document.querySelector('.content .base32 select').value,
			binCode = [],
			res = '';

		if (textareas[0].value === '') {
			return console.error('请先输入要解码的字符！！！');
		}

		for (let i = 0; i < textareas[0].value.length; i++) {
			if (binCode[i] !== '=') {
				//找到每个字符对应的base64码的索引位置，并转成二进制
				if (baseType === '普通') {
					binCode.push(base32.indexOf(textareas[0].value[i]).toString(2));

				} else {
					binCode.push(base32_百家姓.indexOf(textareas[0].value[i]).toString(2));
				}
				// console.log(binCode)
				//每个字符的索引位置转成二进制后，不够五位的在前面补0
				if (binCode[i].length < 5) binCode[i] = '0'.repeat(5 - (binCode[i].length % 5)) + binCode[i];
			}
		}

		//将二进制索引八位一分，不足八位的在后面补0
		binCode = binCode.join('').match(/[01]{8}|[01]+/g);
		if (binCode[binCode.length - 1].length < 8) {
			binCode[binCode.length - 1] = binCode[binCode.length - 1] + '0'.repeat(8 - (binCode[binCode.length -
				1].length % 8));
		}

		//将每个八位二进制转成十进制，得到对应的ASCII码，通过ASCII码获取对应字符
		for (let i = 0; i < binCode.length; i++) {
			res += String.fromCharCode(parseInt(binCode[i], 2))
		}
		textareas[1].value = res;
	}

	document.querySelector('.content .conversion button:first-child').onclick = function() {
		let textareas = document.querySelectorAll('.content .conversion textarea'),
			conversionType = document.querySelector('.content .conversion select').value,
			binCode = [],
			res = '';

		if (textareas[0].value === '') {
			return console.error('请先输入要转换的字符！！！');
		}

		switch (conversionType) {
			case 'two':
				textareas[1].value = two(Number(textareas[0].value));
				break;
			case 'ten':
				textareas[1].value = ten(textareas[0].value);
				break;
		}

		function two(number) {
			// 分离整数和小数
			let integerPart = Math.floor(number),
				fractionPart = number - integerPart,
				integerBinary = '';

			// 处理整数部分的二进制
			if (integerPart === 0) {
				integerBinary = '0';
			} else {
				while (integerPart > 0) {
					integerBinary = (integerPart % 2) + integerBinary;
					integerPart = Math.floor(integerPart / 2);
				}
			}

			// 处理小数部分的二进制
			let fractionBinary = '',
				count = 0; // 用于控制循环的次数，避免无限循环
			while (fractionPart > 0 && count < 10) { // 设置最多转换10位二进制小数
				fractionPart *= 2;
				let digit = Math.floor(fractionPart);
				fractionBinary += digit;
				fractionPart -= digit;
				count++;
			}

			// 返回完整的二进制
			if (fractionBinary) {
				return integerBinary + '.' + fractionBinary;
			} else {
				return integerBinary;
			}
		}

		function ten(number) {
			let res = 0;
			for (let i = 0; i < number.length; i++) {
				let digit = parseInt(number[i]);
				res += digit * Math.pow(2, number.length - i - 1); // 对应的2的幂次方
			}
			return res;
		}
	}
}
