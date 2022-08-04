'use strict';

window.onload = function () {
	var KEYMAP = {
		'见南枝': 8,
		'破星寒': 9,
		'逍萧': 13,
		'.迷路.迷路.': 16,
		'小逍萧': 17,
		'画师曦兮': 18,
		'鹿噣': 20,
		'胡歌': 32,
		'爱的初拥丶': 33,
		'低头有鱼': 34,
		'晚宁': 35,
		'21克°': 36,
		'君踏一叶舟': 37,
		'花怜': 38,
		'奈绪': 39,
		'桃': 40,
		'老婆bb': 45,
		'枪神燕云昭': 46,
		'反计之策': 48,
		'移花子桑不举': 49,
		'翎九': 50,
		/*
		'': 51,
		'': 52,
		'': 53,
		'': 54,
		'': 55,
		'': 56,
		'': 57,
		'': 65,
		'': 66,
		'篮球': 67,
		'排球': 68,
		'乒乓球': 69,
		'羽毛球': 70,
		'棒球': 71,
		'游泳': 72,
		'攀岩': 73,
		'越野': 74,
		'骑行': 75,
		'爬山': 76,
		'冲浪': 77,
		'美食': 78,
		'网球': 79,
		'小提琴': 80,
		'大提琴': 81,
		'萨克斯': 82,
		'长笛': 83,
		'宿营': 84,
		'钢琴': 85,
		'吉他': 86,
		'手风琴': 87,
		'骑马': 88,
		'收藏鞋子': 89,
		'书法': 90,
		'字画': 112,
		'收藏硬币': 113,
		'宿营': 114,
		'跳水': 115,
		'蹦极': 116,
		'游乐场': 117,
		'幽默': 118,
		'摇滚': 119,
		'喝酒': 120,
		'慢走': 121,
		'高尔夫球': 122,
		'刷短视频': 123,
		'微信聊天': 124,
		'汽车': 125,
		'探险': 126,
		'潜水': 186,
		'滑翔': 187,
		'跳伞': 188,
		'古玩': 189,
		'玉器': 190,
		'园艺': 191,
		'烹饪美食': 219,
		'暴发户': 220,
		'富二代': 221,
		'宅男': 222
		*/
	},
	    key_els = {};

	var rand = function rand() {
		var max = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
		var min = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

		var _int = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

		var gen = min + (max - min) * Math.random();
		return _int ? Math.round(gen) : gen;
	};

	(function init() {
		var a3d = document.querySelector('.a3d'),
		    f = document.createDocumentFragment(),
		    lims = [33, 41, 47, 58, 91, 127, 146],
		    len = lims.length,
		    unit = 360 / (len + 1);

		for (var p in KEYMAP) {
			var rot = document.createElement('div'),
			    key = document.createElement('div');

			key.dataset.name = p.replace('NUM_', '');
			key.dataset.code = KEYMAP[p];
			key.classList.add('key');

			for (var i = 0; i < len; i++) {
				if (KEYMAP[p] < lims[i]) {
					var hue = rand((i + .8) * unit, (i + .2) * unit, 1);
					key.style.color = 'hsl(' + hue + ',100%,65%)';
					break;
				}
			}

			rot.classList.add('rot');

			key_els[p] = key;
			rot.appendChild(key);
			f.appendChild(rot);
		}

		a3d.appendChild(f);
	})();

	addEventListener('keydown', function (e) {
		e.preventDefault();

		for (var p in KEYMAP) {
			if (e.keyCode === KEYMAP[p]) {
				if (!key_els[p].classList.contains('vis')) key_els[p].classList.add('vis');
				return;
			}
		}
	}, false);

	addEventListener('keyup', function (e) {
		e.preventDefault();
	}, false);

	addEventListener('animationend', function (e) {
		var t = e.target;
		if (e.animationName === 'hl') t.classList.remove('vis');
	}, false);
};
