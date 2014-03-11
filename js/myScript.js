$(function() {
	var blankChamp = {
		ip: 0,
		rp: 0,
		health: 0,
		mana: 0,
		ad: 0,
		ap: 0,
		as: 0,
		ms: 0,
		armor: 0,
		mr: 0,
		hr: 0,
		manar: 0,
		tenacity: 0,
		critc: 0,
		critd: 0,
		ls: 0,
		sv: 0,
		apen: 0,
		mpen: 0,
		cool: 0,
		gold: 0,
		range: 0
	};

	var blitzcrank = {
		ip: 3150,
		rp: 790,
		health: 423,
		mana: 200,
		ad: 55,
		ap: 0,
		as: .625,
		ms: 325,
		armor: 14.5,
		mr: 30,
		hr: 7.25,
		manar: 6.5,
		tenacity: 0,
		critc: 0,
		critd: 0,
		ls: 0,
		sv: 0,
		apen: 0,
		mpen: 0,
		cool: 0,
		gold: 0,
		range: 125
	};

	var draven = {
		ip: 6300,
		rp: 975,
		health: 420,
		mana: 240,
		ad: 47,
		ap: 0,
		as: .679,
		ms: 330,
		armor: 16,
		mr: 30,
		hr: 5,
		manar: 6.95,
		tenacity: 0,
		critc: 0,
		critd: 0,
		ls: 0,
		sv: 0,
		apen: 0,
		mpen: 0,
		cool: 0,
		gold: 0,
		range: 550
	};

	var ezreal = {
		ip: 4800,
		rp: 880,
		health: 350,
		mana: 235,
		ad: 47.2,
		ap: 0,
		as: .625,
		ms: 325,
		armor: 12,
		mr: 30,
		hr: 5.5,
		manar: 7,
		tenacity: 0,
		critc: 0,
		critd: 0,
		ls: 0,
		sv: 0,
		apen: 0,
		mpen: 0,
		cool: 0,
		gold: 0,
		range: 550
	};

	var fizz = {
		ip: 6300,
		rp: 975,
		health: 414,
		mana: 200,
		ad: 53,
		ap: 0,
		as: .658,
		ms: 335,
		armor: 12.7,
		mr: 30,
		hr: 7,
		manar: 6.1,
		tenacity: 0,
		critc: 0,
		critd: 0,
		ls: 0,
		sv: 0,
		apen: 0,
		mpen: 0,
		cool: 0,
		gold: 0,
		range: 175
	};

	var riven = {
		ip: 4800,
		rp: 880,
		health: 414,
		mana: 0,
		ad: 51,
		ap: 0,
		as: .625,
		ms: 345,
		armor: 15,
		mr: 30,
		hr: 2.5,
		manar: 0,
		tenacity: 0,
		critc: 0,
		critd: 0,
		ls: 0,
		sv: 0,
		apen: 0,
		mpen: 0,
		cool: 0,
		gold: 0,
		range: 125
	};

	var teemo = {
		ip: 1350,
		rp: 378,
		health: 378,
		mana: 200,
		ad: 44.5,
		ap: 0,
		as: .690,
		ms: 330,
		armor: 14,
		mr: 30,
		hr: 4.65,
		manar: 6.45,
		tenacity: 0,
		critc: 0,
		critd: 0,
		ls: 0,
		sv: 0,
		apen: 0,
		mpen: 0,
		cool: 0,
		gold: 0,
		range: 500
	};

	var blankItem = {
		ip: 0,
		rp: 0,
		health: 0,
		mana: 0,
		ad: 0,
		ap: 0,
		as: 0,
		ms: 0,
		armor: 0,
		mr: 0,
		hr: 0,
		manar: 0,
		tenacity: 0,
		critc: 0,
		critd: 0,
		ls: 0,
		sv: 0,
		apen: 0,
		mpen: 0,
		cool: 0,
		gold: 0,
		range: 0,
		cost: 0
	};

	var abyssal = {
		ip: 0,
		rp: 0,
		health: 0,
		mana: 0,
		ad: 0,
		ap: 70,
		as: 0,
		ms: 0,
		armor: 0,
		mr: 45,
		hr: 0,
		manar: 0,
		tenacity: 0,
		critc: 0,
		critd: 0,
		ls: 0,
		sv: 0,
		apen: 0,
		mpen: 0,
		cool: 0,
		gold: 0,
		range: 0,
		cost: 2560
	};

	var berserkers = {
		ip: 0,
		rp: 0,
		health: 0,
		mana: 0,
		ad: 0,
		ap: 0,
		as: 1.20,
		ms: 45,
		armor: 0,
		mr: 0,
		hr: 0,
		manar: 0,
		tenacity: 0,
		critc: 0,
		critd: 0,
		ls: 0,
		sv: 0,
		apen: 0,
		mpen: 0,
		cool: 0,
		gold: 0,
		range: 0,
		cost: 900
	};

	var bts = {
		ip: 0,
		rp: 0,
		health: 0,
		mana: 0,
		ad: 100,
		ap: 0,
		as: 0,
		ms: 0,
		armor: 0,
		mr: 0,
		hr: 0,
		manar: 0,
		tenacity: 0,
		critc: 0,
		critd: 0,
		ls: 21,
		sv: 0,
		apen: 0,
		mpen: 0,
		cool: 0,
		gold: 0,
		range: 0,
		cost: 3200
	};

	var btus = {
		ip: 0,
		rp: 0,
		health: 0,
		mana: 0,
		ad: 70,
		ap: 0,
		as: 0,
		ms: 0,
		armor: 0,
		mr: 0,
		hr: 0,
		manar: 0,
		tenacity: 0,
		critc: 0,
		critd: 0,
		ls: 15,
		sv: 0,
		apen: 0,
		mpen: 0,
		cool: 0,
		gold: 0,
		range: 0,
		cost: 3200
	};

	var chainvest = {
		ip: 0,
		rp: 0,
		health: 0,
		mana: 0,
		ad: 0,
		ap: 0,
		as: 0,
		ms: 0,
		armor: 40,
		mr: 0,
		hr: 0,
		manar: 0,
		tenacity: 0,
		critc: 0,
		critd: 0,
		ls: 0,
		sv: 0,
		apen: 0,
		mpen: 0,
		cool: 0,
		gold: 0,
		range: 0,
		cost: 720
	};

	var deathfire = {
		ip: 0,
		rp: 0,
		health: 0,
		mana: 0,
		ad: 0,
		ap: 120,
		as: 0,
		ms: 0,
		armor: 0,
		mr: 0,
		hr: 0,
		manar: 0,
		tenacity: 0,
		critc: 0,
		critd: 0,
		ls: 15,
		sv: 0,
		apen: 0,
		mpen: 0,
		cool: 10,
		gold: 0,
		range: 0,
		cost: 3100
	};

	var blade = {
		ip: 0,
		rp: 0,
		health: 80,
		mana: 0,
		ad: 8,
		ap: 0,
		as: 0,
		ms: 0,
		armor: 0,
		mr: 0,
		hr: 0,
		manar: 0,
		tenacity: 0,
		critc: 0,
		critd: 0,
		ls: 0,
		sv: 0,
		apen: 0,
		mpen: 0,
		cool: 0,
		gold: 0,
		range: 0,
		cost: 440
	};

	var ga = {
		ip: 0,
		rp: 0,
		health: 0,
		mana: 0,
		ad: 0,
		ap: 0,
		as: 0,
		ms: 0 ,
		armor: 50,
		mr: 40,
		hr: 0,
		manar: 0,
		tenacity: 0,
		critc: 0,
		critd: 0,
		ls: 0,
		sv: 0,
		apen: 0,
		mpen: 0,
		cool: 0,
		gold: 0,
		range: 0,
		cost: 2750
	};

	var ie = {
		ip: 0,
		rp: 0,
		health: 0,
		mana: 0,
		ad: 70,
		ap: 0,
		as: 0,
		ms: 0 ,
		armor: 0,
		mr: 0,
		hr: 0,
		manar: 0,
		tenacity: 0,
		critc: 25,
		critd: 50,
		ls: 0,
		sv: 0,
		apen: 0,
		mpen: 0,
		cool: 0,
		gold: 0,
		range: 0,
		cost: 3800
	};

	var lw = {
		ip: 0,
		rp: 0,
		health: 0,
		mana: 0,
		ad: 40,
		ap: 0,
		as: 0,
		ms: 0 ,
		armor: 0,
		mr: 0,
		hr: 0,
		manar: 0,
		tenacity: 0,
		critc: 0,
		critd: 0,
		ls: 0,
		sv: 0,
		apen: 35,
		mpen: 0,
		cool: 0,
		gold: 0,
		range: 0,
		cost: 2300
	};

	var lb = {
		ip: 0,
		rp: 0,
		health: 0,
		mana: 250,
		ad: 0,
		ap: 80,
		as: 0,
		ms: 5 ,
		armor: 0,
		mr: 0,
		hr: 0,
		manar: 0,
		tenacity: 0,
		critc: 0,
		critd: 0,
		ls: 0,
		sv: 0,
		apen: 0,
		mpen: 0,
		cool: 0,
		gold: 0,
		range: 0,
		cost: 3000
	};

	var pd = {
		ip: 0,
		rp: 0,
		health: 0,
		mana: 0,
		ad: 0,
		ap: 0,
		as: 1.50,
		ms: 5 ,
		armor: 0,
		mr: 0,
		hr: 0,
		manar: 0,
		tenacity: 0,
		critc: 30,
		critd: 0,
		ls: 0,
		sv: 0,
		apen: 0,
		mpen: 0,
		cool: 0,
		gold: 0,
		range: 0,
		cost: 2800
	};

	var cap = {
		ip: 0,
		rp: 0,
		health: 0,
		mana: 0,
		ad: 0,
		ap: 120,
		as: 0,
		ms: 0,
		armor: 0,
		mr: 0,
		hr: 0,
		manar: 0,
		tenacity: 0,
		critc: 0,
		critd: 0,
		ls: 0,
		sv: 0,
		apen: 0,
		mpen: 0,
		cool: 0,
		gold: 0,
		range: 0,
		cost: 3300
	};

	var ruby = {
		ip: 0,
		rp: 0,
		health: 150,
		mana: 0,
		ad: 0,
		ap: 0,
		as: 0,
		ms: 0,
		armor: 0,
		mr: 0,
		hr: 0,
		manar: 0,
		tenacity: 0,
		critc: 0,
		critd: 0,
		ls: 0,
		sv: 0,
		apen: 0,
		mpen: 0,
		cool: 0,
		gold: 0,
		range: 0,
		cost: 400
	};

	var sight = {
		ip: 0,
		rp: 0,
		health: 150,
		mana: 0,
		ad: 0,
		ap: 0,
		as: 0,
		ms: 0,
		armor: 0,
		mr: 0,
		hr: 0,
		manar: 0,
		tenacity: 0,
		critc: 0,
		critd: 0,
		ls: 0,
		sv: 0,
		apen: 0,
		mpen: 0,
		cool: 0,
		gold: 0,
		range: 0,
		cost: 800
	};

	var sorcs = {
		ip: 0,
		rp: 0,
		health: 0,
		mana: 0,
		ad: 0,
		ap: 0,
		as: 0,
		ms: 45,
		armor: 0,
		mr: 0,
		hr: 0,
		manar: 0,
		tenacity: 0,
		critc: 0,
		critd: 0,
		ls: 0,
		sv: 0,
		apen: 0,
		mpen: 15,
		cool: 0,
		gold: 0,
		range: 0,
		cost: 1100
	};

	var cowl = {
		ip: 0,
		rp: 0,
		health: 200,
		mana: 0,
		ad: 0,
		ap: 0,
		as: 0,
		ms: 0,
		armor: 0,
		mr: 45,
		hr: 15,
		manar: 0,
		tenacity: 0,
		critc: 0,
		critd: 0,
		ls: 0,
		sv: 0,
		apen: 0,
		mpen: 0,
		cool: 0,
		gold: 0,
		range: 0,
		cost: 1400
	};

	var zhonyas = {
		ip: 0,
		rp: 0,
		health: 0,
		mana: 0,
		ad: 0,
		ap: 120,
		as: 0,
		ms: 0,
		armor: 50,
		mr: 0,
		hr: 0,
		manar: 0,
		tenacity: 0,
		critc: 0,
		critd: 0,
		ls: 0,
		sv: 0,
		apen: 0,
		mpen: 0,
		cool: 0,
		gold: 0,
		range: 0,
		cost: 3260
	};



	var currentChampLeft = blankChamp;
	var currentChampRight = blankChamp;

	var currentItem1Left = blankItem;
	var currentItem2Left = blankItem;
	var currentItem3Left = blankItem;
	var currentItem4Left = blankItem;
	var currentItem5Left = blankItem;
	var currentItem6Left = blankItem;

	var currentItem1Right = blankItem;
	var currentItem2Right = blankItem;
	var currentItem3Right = blankItem;
	var currentItem4Right = blankItem;
	var currentItem5Right = blankItem;
	var currentItem6Right = blankItem;







	$(".champ-select").change(function() {
		var val = this.value;
		if (val == "Blitzcrank") {
			currentChampLeft = blitzcrank;
			$("#champ1-img > img").attr("src", "img/blitzcrank.jpg");
		} else if (val == "Draven") {
			currentChampLeft = draven;
			$("#champ1-img > img").attr("src", "img/draven.jpg");
		} else if (val == "Ezreal") {
			currentChampLeft = ezreal;
			$("#champ1-img > img").attr("src", "img/ezreal.jpg");
		} else if (val == "Fizz") {
			currentChampLeft = fizz;
			$("#champ1-img > img").attr("src", "img/fizz.jpg");
		} else if (val == "Riven") {
			currentChampLeft = riven;
			$("#champ1-img > img").attr("src", "img/riven.jpg");
		} else if (val == "Teemo") {
			currentChampLeft = teemo;
			$("#champ1-img > img").attr("src", "img/teemo.jpg");
		} else {
			currentChampLeft = blankChamp;
			$("#champ1-img > img").attr("src", "img/blank.png");
		}
		$("#stat-champ1-ip").html(currentChampLeft.ip);
		$("#stat-champ1-rp").html(currentChampLeft.rp);
		$("#stat-champ1-health").html(currentChampLeft.health);
		$("#stat-champ1-mana").html(currentChampLeft.mana);
		$("#stat-champ1-ad").html(currentChampLeft.ad);
		$("#stat-champ1-ap").html(currentChampLeft.ap);
		$("#stat-champ1-as").html(currentChampLeft.as);
		$("#stat-champ1-ms").html(currentChampLeft.ms);
		$("#stat-champ1-armor").html(currentChampLeft.armor);
		$("#stat-champ1-mr").html(currentChampLeft.mr);
		$("#stat-champ1-hr").html(currentChampLeft.hr);
		$("#stat-champ1-manar").html(currentChampLeft.manar);
		$("#stat-champ1-tenacity").html(currentChampLeft.tenacity);
		$("#stat-champ1-critc").html(currentChampLeft.critc);
		$("#stat-champ1-critd").html(currentChampLeft.critd);
		$("#stat-champ1-ls").html(currentChampLeft.ls);
		$("#stat-champ1-sv").html(currentChampLeft.sv);
		$("#stat-champ1-apen").html(currentChampLeft.apen);
		$("#stat-champ1-mpen").html(currentChampLeft.mpen);
		$("#stat-champ1-cool").html(currentChampLeft.cool);
		$("#stat-champ1-gold").html(currentChampLeft.gold);
		$("#stat-champ1-range").html(currentChampLeft.range);
		updateChampDiff();
	});

	$(".champ-select2").change(function() {
		var val = this.value;
		if (val == "Blitzcrank") {
			currentChampRight = blitzcrank;
			$("#champ2-img > img").attr("src", "img/blitzcrank.jpg");
		} else if (val == "Draven") {
			currentChampRight = draven;
			$("#champ2-img > img").attr("src", "img/draven.jpg");
		} else if (val == "Ezreal") {
			currentChampRight = ezreal;
			$("#champ2-img > img").attr("src", "img/ezreal.jpg");
		} else if (val == "Fizz") {
			currentChampRight = fizz;
			$("#champ2-img > img").attr("src", "img/fizz.jpg");
		} else if (val == "Riven") {
			currentChampRight = riven;
			$("#champ2-img > img").attr("src", "img/riven.jpg");
		} else if (val == "Teemo") {
			currentChampRight = teemo;
			$("#champ2-img > img").attr("src", "img/teemo.jpg");
		} else {
			currentChampRight = blankChamp;
			$("#champ2-img > img").attr("src", "img/blank.png");
		}
		$("#stat-champ2-ip").html(currentChampRight.ip);
		$("#stat-champ2-rp").html(currentChampRight.rp);
		$("#stat-champ2-health").html(currentChampRight.health);
		$("#stat-champ2-mana").html(currentChampRight.mana);
		$("#stat-champ2-ad").html(currentChampRight.ad);
		$("#stat-champ2-ap").html(currentChampRight.ap);
		$("#stat-champ2-as").html(currentChampRight.as);
		$("#stat-champ2-ms").html(currentChampRight.ms);
		$("#stat-champ2-armor").html(currentChampRight.armor);
		$("#stat-champ2-mr").html(currentChampRight.mr);
		$("#stat-champ2-hr").html(currentChampRight.hr);
		$("#stat-champ2-manar").html(currentChampRight.manar);
		$("#stat-champ2-tenacity").html(currentChampRight.tenacity);
		$("#stat-champ2-critc").html(currentChampRight.critc);
		$("#stat-champ2-critd").html(currentChampRight.critd);
		$("#stat-champ2-ls").html(currentChampRight.ls);
		$("#stat-champ2-sv").html(currentChampRight.sv);
		$("#stat-champ2-apen").html(currentChampRight.apen);
		$("#stat-champ2-mpen").html(currentChampRight.mpen);
		$("#stat-champ2-cool").html(currentChampRight.cool);
		$("#stat-champ2-gold").html(currentChampRight.gold);
		$("#stat-champ2-range").html(currentChampRight.range);
		updateChampDiff();
	});












	$(".item-select").change(function() {
		var id = $(this).attr("id");
		var val = this.value;
		var totals;
		if (id == "item-left-1") {
			currentItem1Left = getItemValues(val, blankItem, abyssal, berserkers, bts, btus, chainvest, deathfire, blade, ga, ie, lw, lb, pd, cap, ruby, sight, sorcs, cowl, zhonyas);
			totals = sumItemsLeft(currentChampLeft, currentItem1Left, currentItem2Left, currentItem3Left, currentItem4Left, currentItem5Left, currentItem6Left);
		} else if (id == "item-left-2") {
			currentItem2Left = getItemValues(val, blankItem, abyssal, berserkers, bts, btus, chainvest, deathfire, blade, ga, ie, lw, lb, pd, cap, ruby, sight, sorcs, cowl, zhonyas);
			totals = sumItemsLeft(currentChampLeft, currentItem1Left, currentItem2Left, currentItem3Left, currentItem4Left, currentItem5Left, currentItem6Left);
		} else if (id == "item-left-3") {
			currentItem3Left = getItemValues(val, blankItem, abyssal, berserkers, bts, btus, chainvest, deathfire, blade, ga, ie, lw, lb, pd, cap, ruby, sight, sorcs, cowl, zhonyas);
			totals = sumItemsLeft(currentChampLeft, currentItem1Left, currentItem2Left, currentItem3Left, currentItem4Left, currentItem5Left, currentItem6Left);
		} else if (id == "item-left-4") {
			currentItem4Left = getItemValues(val, blankItem, abyssal, berserkers, bts, btus, chainvest, deathfire, blade, ga, ie, lw, lb, pd, cap, ruby, sight, sorcs, cowl, zhonyas);
			totals = sumItemsLeft(currentChampLeft, currentItem1Left, currentItem2Left, currentItem3Left, currentItem4Left, currentItem5Left, currentItem6Left);
		} else if (id == "item-left-5") {
			currentItem5Left = getItemValues(val, blankItem, abyssal, berserkers, bts, btus, chainvest, deathfire, blade, ga, ie, lw, lb, pd, cap, ruby, sight, sorcs, cowl, zhonyas);
			totals = sumItemsLeft(currentChampLeft, currentItem1Left, currentItem2Left, currentItem3Left, currentItem4Left, currentItem5Left, currentItem6Left);
		} else if (id == "item-left-6") {
			currentItem6Left = getItemValues(val, blankItem, abyssal, berserkers, bts, btus, chainvest, deathfire, blade, ga, ie, lw, lb, pd, cap, ruby, sight, sorcs, cowl, zhonyas);
			totals = sumItemsLeft(currentChampLeft, currentItem1Left, currentItem2Left, currentItem3Left, currentItem4Left, currentItem5Left, currentItem6Left);
		} else if (id == "item-right-1") {
			currentItem1Right = getItemValues(val, blankItem, abyssal, berserkers, bts, btus, chainvest, deathfire, blade, ga, ie, lw, lb, pd, cap, ruby, sight, sorcs, cowl, zhonyas);
			totals = sumItemsRight(currentChampRight, currentItem1Right, currentItem2Right, currentItem3Right, currentItem4Right, currentItem5Right, currentItem6Right);
		} else if (id == "item-right-2") {
			currentItem2Right = getItemValues(val, blankItem, abyssal, berserkers, bts, btus, chainvest, deathfire, blade, ga, ie, lw, lb, pd, cap, ruby, sight, sorcs, cowl, zhonyas);
			totals = sumItemsRight(currentChampRight, currentItem1Right, currentItem2Right, currentItem3Right, currentItem4Right, currentItem5Right, currentItem6Right);
		} else if (id == "item-right-3") {
			currentItem3Right = getItemValues(val, blankItem, abyssal, berserkers, bts, btus, chainvest, deathfire, blade, ga, ie, lw, lb, pd, cap, ruby, sight, sorcs, cowl, zhonyas);
			totals = sumItemsRight(currentChampRight, currentItem1Right, currentItem2Right, currentItem3Right, currentItem4Right, currentItem5Right, currentItem6Right);
		} else if (id == "item-right-4") {
			currentItem4Right = getItemValues(val, blankItem, abyssal, berserkers, bts, btus, chainvest, deathfire, blade, ga, ie, lw, lb, pd, cap, ruby, sight, sorcs, cowl, zhonyas);
			totals = sumItemsRight(currentChampRight, currentItem1Right, currentItem2Right, currentItem3Right, currentItem4Right, currentItem5Right, currentItem6Right);
		} else if (id == "item-right-5") {
			currentItem5Right = getItemValues(val, blankItem, abyssal, berserkers, bts, btus, chainvest, deathfire, blade, ga, ie, lw, lb, pd, cap, ruby, sight, sorcs, cowl, zhonyas);
			totals = sumItemsRight(currentChampRight, currentItem1Right, currentItem2Right, currentItem3Right, currentItem4Right, currentItem5Right, currentItem6Right);
		} else if (id == "item-right-6") {
			currentItem6Right = getItemValues(val, blankItem, abyssal, berserkers, bts, btus, chainvest, deathfire, blade, ga, ie, lw, lb, pd, cap, ruby, sight, sorcs, cowl, zhonyas);
			totals = sumItemsRight(currentChampRight, currentItem1Right, currentItem2Right, currentItem3Right, currentItem4Right, currentItem5Right, currentItem6Right);
		}
		updateChampDiff();
	});
});












function updateChampDiff() {
	var num = parseInt($("#stat-champ1-ip").html()) - parseInt($("#stat-champ2-ip").html());
	$("#stat-champ15-ip").html(num);
	if (num > 0) {
		$("#stat-champ15-ip").css("color", "green");
	} else if (num < 0) {
		$("#stat-champ15-ip").css("color", "red");
	} else {
		$("#stat-champ15-ip").css("color", "black");
	}

	var num = parseInt($("#stat-champ1-rp").html()) - parseInt($("#stat-champ2-rp").html());
	$("#stat-champ15-rp").html(num);
	if (num > 0) {
		$("#stat-champ15-rp").css("color", "green");
	} else if (num < 0) {
		$("#stat-champ15-rp").css("color", "red");
	} else {
		$("#stat-champ15-rp").css("color", "black");
	}

	var num = parseInt($("#stat-champ1-health").html()) - parseInt($("#stat-champ2-health").html());
	$("#stat-champ15-health").html(num);
	if (num > 0) {
		$("#stat-champ15-health").css("color", "green");
	} else if (num < 0) {
		$("#stat-champ15-health").css("color", "red");
	} else {
		$("#stat-champ15-health").css("color", "black");
	}

	var num = parseInt($("#stat-champ1-mana").html()) - parseInt($("#stat-champ2-mana").html());
	$("#stat-champ15-mana").html(num);
	if (num > 0) {
		$("#stat-champ15-mana").css("color", "green");
	} else if (num < 0) {
		$("#stat-champ15-mana").css("color", "red");
	} else {
		$("#stat-champ15-mana").css("color", "black");
	}

	var num = parseInt($("#stat-champ1-ad").html()) - parseInt($("#stat-champ2-ad").html());
	$("#stat-champ15-ad").html(num);
	if (num > 0) {
		$("#stat-champ15-ad").css("color", "green");
	} else if (num < 0) {
		$("#stat-champ15-ad").css("color", "red");
	} else {
		$("#stat-champ15-ad").css("color", "black");
	}

	var num = parseInt($("#stat-champ1-ap").html()) - parseInt($("#stat-champ2-ap").html());
	$("#stat-champ15-ap").html(num);
	if (num > 0) {
		$("#stat-champ15-ap").css("color", "green");
	} else if (num < 0) {
		$("#stat-champ15-ap").css("color", "red");
	} else {
		$("#stat-champ15-ap").css("color", "black");
	}

	var num = parseInt($("#stat-champ1-ms").html()) - parseInt($("#stat-champ2-ms").html());
	$("#stat-champ15-ms").html(num);
	if (num > 0) {
		$("#stat-champ15-ms").css("color", "green");
	} else if (num < 0) {
		$("#stat-champ15-ms").css("color", "red");
	} else {
		$("#stat-champ15-ms").css("color", "black");
	}

	var num = parseInt($("#stat-champ1-armor").html()) - parseInt($("#stat-champ2-armor").html());
	$("#stat-champ15-armor").html(num);
	if (num > 0) {
		$("#stat-champ15-armor").css("color", "green");
	} else if (num < 0) {
		$("#stat-champ15-armor").css("color", "red");
	} else {
		$("#stat-champ15-armor").css("color", "black");
	}

	var num = parseInt($("#stat-champ1-mr").html()) - parseInt($("#stat-champ2-mr").html());
	$("#stat-champ15-mr").html(num);
	if (num > 0) {
		$("#stat-champ15-mr").css("color", "green");
	} else if (num < 0) {
		$("#stat-champ15-mr").css("color", "red");
	} else {
		$("#stat-champ15-mr").css("color", "black");
	}

	var num = parseInt($("#stat-champ1-hr").html()) - parseInt($("#stat-champ2-hr").html());
	$("#stat-champ15-hr").html(num);
	if (num > 0) {
		$("#stat-champ15-hr").css("color", "green");
	} else if (num < 0) {
		$("#stat-champ15-hr").css("color", "red");
	} else {
		$("#stat-champ15-hr").css("color", "black");
	}

	var num = parseInt($("#stat-champ1-manar").html()) - parseInt($("#stat-champ2-manar").html());
	$("#stat-champ15-manar").html(num);
	if (num > 0) {
		$("#stat-champ15-manar").css("color", "green");
	} else if (num < 0) {
		$("#stat-champ15-manar").css("color", "red");
	} else {
		$("#stat-champ15-manar").css("color", "black");
	}

	var num = parseInt($("#stat-champ1-tenacity").html()) - parseInt($("#stat-champ2-tenacity").html());
	$("#stat-champ15-tenacity").html(num);
	if (num > 0) {
		$("#stat-champ15-tenacity").css("color", "green");
	} else if (num < 0) {
		$("#stat-champ15-tenacity").css("color", "red");
	} else {
		$("#stat-champ15-tenacity").css("color", "black");
	}

	var num = parseInt($("#stat-champ1-critc").html()) - parseInt($("#stat-champ2-critc").html());
	$("#stat-champ15-critc").html(num);
	if (num > 0) {
		$("#stat-champ15-critc").css("color", "green");
	} else if (num < 0) {
		$("#stat-champ15-critc").css("color", "red");
	} else {
		$("#stat-champ15-critc").css("color", "black");
	}

	var num = parseInt($("#stat-champ1-critd").html()) - parseInt($("#stat-champ2-critd").html());
	$("#stat-champ15-critd").html(num);
	if (num > 0) {
		$("#stat-champ15-critd").css("color", "green");
	} else if (num < 0) {
		$("#stat-champ15-critd").css("color", "red");
	} else {
		$("#stat-champ15-critd").css("color", "black");
	}

	var num = parseInt($("#stat-champ1-ls").html()) - parseInt($("#stat-champ2-ls").html());
	$("#stat-champ15-ls").html(num);
	if (num > 0) {
		$("#stat-champ15-ls").css("color", "green");
	} else if (num < 0) {
		$("#stat-champ15-ls").css("color", "red");
	} else {
		$("#stat-champ15-ls").css("color", "black");
	}

	var num = parseInt($("#stat-champ1-sv").html()) - parseInt($("#stat-champ2-sv").html());
	$("#stat-champ15-sv").html(num);
	if (num > 0) {
		$("#stat-champ15-sv").css("color", "green");
	} else if (num < 0) {
		$("#stat-champ15-sv").css("color", "red");
	} else {
		$("#stat-champ15-sv").css("color", "black");
	}

	var num = parseInt($("#stat-champ1-apen").html()) - parseInt($("#stat-champ2-apen").html());
	$("#stat-champ15-apen").html(num);
	if (num > 0) {
		$("#stat-champ15-apen").css("color", "green");
	} else if (num < 0) {
		$("#stat-champ15-apen").css("color", "red");
	} else {
		$("#stat-champ15-apen").css("color", "black");
	}

	var num = parseInt($("#stat-champ1-mpen").html()) - parseInt($("#stat-champ2-mpen").html());
	$("#stat-champ15-mpen").html(num);
	if (num > 0) {
		$("#stat-champ15-mpen").css("color", "green");
	} else if (num < 0) {
		$("#stat-champ15-mpen").css("color", "red");
	} else {
		$("#stat-champ15-mpen").css("color", "black");
	}

	var num = parseInt($("#stat-champ1-cool").html()) - parseInt($("#stat-champ2-cool").html());
	$("#stat-champ15-cool").html(num);
	if (num > 0) {
		$("#stat-champ15-cool").css("color", "green");
	} else if (num < 0) {
		$("#stat-champ15-cool").css("color", "red");
	} else {
		$("#stat-champ15-cool").css("color", "black");
	}

	var num = parseInt($("#stat-champ1-gold").html()) - parseInt($("#stat-champ2-gold").html());
	$("#stat-champ15-gold").html(num);
	if (num > 0) {
		$("#stat-champ15-gold").css("color", "green");
	} else if (num < 0) {
		$("#stat-champ15-gold").css("color", "red");
	} else {
		$("#stat-champ15-gold").css("color", "black");
	}

	var num = parseInt($("#stat-champ1-range").html()) - parseInt($("#stat-champ2-range").html());
	$("#stat-champ15-range").html(num);
	if (num > 0) {
		$("#stat-champ15-range").css("color", "green");
	} else if (num < 0) {
		$("#stat-champ15-range").css("color", "red");
	} else {
		$("#stat-champ15-range").css("color", "black");
	}

	var num = parseFloat($("#stat-champ1-as").html()) - parseFloat($("#stat-champ2-as").html());
	$("#stat-champ15-as").html(num.toFixed(3));
	if (num > 0) {
		$("#stat-champ15-as").css("color", "green");
	} else if (num < 0) {
		$("#stat-champ15-as").css("color", "red");
	} else {
		$("#stat-champ15-as").css("color", "black");
	}
}
        // getItemValues(val, blankItem, abyssal, berserkers, bts, btus, chainvest, deathfire, blade, ga, ie, lw, lb, pd, cap, ruby, sight, sorcs, cowl, zhonyas);

function getItemValues(val, blankItem, abyssal, berserkers, bts, btus, chainvest, deathfire, blade, ga, ie, lw, lb, pd, cap, ruby, sight, sorcs, cowl, zhonyas) {
	var temp;
	if (val == "Abyssal Scepter") {
		temp = abyssal;
	} else if (val == "Berserkers Greaves") {
		temp = berserkers;
	} else if (val == "Bloodthirster(stacked)") {
		temp = bts;
	} else if (val == "Bloodthirster(unstacked)") {
		temp = btus;
	} else if (val == "Chain Vest") {
		temp = chainvest;
	} else if (val == "Deathfire Grasp") {
		temp = deathfire;
	} else if (val == "Dorans Blade") {
		temp = blade;
	} else if (val == "Guardian Angel") {
		temp = ga;
	} else if (val == "Infinity Edge") {
		temp = ie;
	} else if (val == "Last Whisper") {
		temp = lw;
	} else if (val == "Lich Bane") {
		temp = lb;
	} else if (val == "Phantom Dancer") {
		temp = pd;
	} else if (val == "Rabadons Deathcap") {
		temp = cap;
	} else if (val == "Ruby Crystal") {
		temp = ruby;
	} else if (val == "Sightstone") {
		temp = sight;
	} else if (val == "Sorcerers Shoes") {
		temp = sorcs;
	} else if (val == "Spectres Cowl") {
		temp = cowl;
	} else if (val == "Zhonyas Hourglass") {
		temp = zhonyas;
	} else {
		temp = blankItem;
	}
	return temp;
}

function sumItemsLeft(currentChamp, item1, item2, item3, item4, item5, item6) {
	// alert(item2);
	$("#stat-champ1-ip").html(parseInt(currentChamp.ip + item1.ip + item2.ip + item3.ip + item4.ip + item5.ip + item6.ip));
	$("#stat-champ1-rp").html(parseInt(currentChamp.rp + item1.rp + item2.rp + item3.rp + item4.rp + item5.rp + item6.rp));
	$("#stat-champ1-health").html(parseInt(currentChamp.health + item1.health + item2.health + item3.health + item4.health + item5.health + item6.health));
	$("#stat-champ1-mana").html(parseInt(currentChamp.mana + item1.mana + item2.mana + item3.mana + item4.mana + item5.mana + item6.mana));
	$("#stat-champ1-ad").html(parseInt(currentChamp.ad + item1.ad + item2.ad + item3.ad + item4.ad + item5.ad + item6.ad));
	$("#stat-champ1-ap").html(parseInt(currentChamp.ap + item1.ap + item2.ap + item3.ap + item4.ap + item5.ap + item6.ap));
	$("#stat-champ1-as").html(parseFloat(currentChamp.as + item1.as + item2.as + item3.as + item4.as + item5.as + item6.as));
	$("#stat-champ1-ms").html(parseInt(currentChamp.ms + item1.ms + item2.ms + item3.ms + item4.ms + item5.ms + item6.ms));
	$("#stat-champ1-armor").html(parseInt(currentChamp.armor + item1.armor + item2.armor + item3.armor + item4.armor + item5.armor + item6.armor));
	$("#stat-champ1-mr").html(parseInt(currentChamp.mr + item1.mr + item2.mr + item3.mr + item4.mr + item5.mr + item6.mr));
	$("#stat-champ1-hr").html(parseInt(currentChamp.hr + item1.hr + item2.hr + item3.hr + item4.hr + item5.hr + item6.hr));
	$("#stat-champ1-manar").html(parseInt(currentChamp.manar + item1.manar + item2.manar + item3.manar + item4.manar + item5.manar + item6.manar));
	$("#stat-champ1-tenacity").html(parseInt(currentChamp.tenacity + item1.tenacity + item2.tenacity + item3.tenacity + item4.tenacity + item5.tenacity + item6.tenacity));
	$("#stat-champ1-critc").html(parseInt(currentChamp.critc + item1.critc + item2.critc + item3.critc + item4.critc + item5.critc + item6.critc));
	$("#stat-champ1-critd").html(parseInt(currentChamp.critd + item1.critd + item2.critd + item3.critd + item4.critd + item5.critd + item6.critd));
	$("#stat-champ1-ls").html(parseInt(currentChamp.ls + item1.ls + item2.ls + item3.ls + item4.ls + item5.ls + item6.ls));
	$("#stat-champ1-sv").html(parseInt(currentChamp.sv + item1.sv + item2.sv + item3.sv + item4.sv + item5.sv + item6.sv));
	$("#stat-champ1-apen").html(parseInt(currentChamp.apen + item1.apen + item2.apen + item3.apen + item4.apen + item5.apen + item6.apen));
	$("#stat-champ1-mpen").html(parseInt(currentChamp.mpen + item1.mpen + item2.mpen + item3.mpen + item4.mpen + item5.mpen + item6.mpen));
	$("#stat-champ1-cool").html(parseInt(currentChamp.cool + item1.cool + item2.cool + item3.cool + item4.cool + item5.cool + item6.cool));
	$("#stat-champ1-gold").html(parseInt(currentChamp.gold + item1.gold + item2.gold + item3.gold + item4.gold + item5.gold + item6.gold));
	$("#stat-champ1-range").html(parseInt(currentChamp.range + item1.range + item2.range + item3.range + item4.range + item5.range + item6.range));
	$("#cost-left").html("Cost: " + parseInt(item1.cost + item2.cost + item3.cost + item4.cost + item5.cost + item6.cost));
}

function sumItemsRight(currentChamp, item1, item2, item3, item4, item5, item6) {
	$("#stat-champ2-ip").html(parseInt(currentChamp.ip + item1.ip + item2.ip + item3.ip + item4.ip + item5.ip + item6.ip));
	$("#stat-champ2-rp").html(parseInt(currentChamp.rp + item1.rp + item2.rp + item3.rp + item4.rp + item5.rp + item6.rp));
	$("#stat-champ2-health").html(parseInt(currentChamp.health + item1.health + item2.health + item3.health + item4.health + item5.health + item6.health));
	$("#stat-champ2-mana").html(parseInt(currentChamp.mana + item1.mana + item2.mana + item3.mana + item4.mana + item5.mana + item6.mana));
	$("#stat-champ2-ad").html(parseInt(currentChamp.ad + item1.ad + item2.ad + item3.ad + item4.ad + item5.ad + item6.ad));
	$("#stat-champ2-ap").html(parseInt(currentChamp.ap + item1.ap + item2.ap + item3.ap + item4.ap + item5.ap + item6.ap));
	$("#stat-champ2-as").html(parseFloat(currentChamp.as + item1.as + item2.as + item3.as + item4.as + item5.as + item6.as));
	$("#stat-champ2-ms").html(parseInt(currentChamp.ms + item1.ms + item2.ms + item3.ms + item4.ms + item5.ms + item6.ms));
	$("#stat-champ2-armor").html(parseInt(currentChamp.armor + item1.armor + item2.armor + item3.armor + item4.armor + item5.armor + item6.armor));
	$("#stat-champ2-mr").html(parseInt(currentChamp.mr + item1.mr + item2.mr + item3.mr + item4.mr + item5.mr + item6.mr));
	$("#stat-champ2-hr").html(parseInt(currentChamp.hr + item1.hr + item2.hr + item3.hr + item4.hr + item5.hr + item6.hr));
	$("#stat-champ2-manar").html(parseInt(currentChamp.manar + item1.manar + item2.manar + item3.manar + item4.manar + item5.manar + item6.manar));
	$("#stat-champ2-tenacity").html(parseInt(currentChamp.tenacity + item1.tenacity + item2.tenacity + item3.tenacity + item4.tenacity + item5.tenacity + item6.tenacity));
	$("#stat-champ2-critc").html(parseInt(currentChamp.critc + item1.critc + item2.critc + item3.critc + item4.critc + item5.critc + item6.critc));
	$("#stat-champ2-critd").html(parseInt(currentChamp.critd + item1.critd + item2.critd + item3.critd + item4.critd + item5.critd + item6.critd));
	$("#stat-champ2-ls").html(parseInt(currentChamp.ls + item1.ls + item2.ls + item3.ls + item4.ls + item5.ls + item6.ls));
	$("#stat-champ2-sv").html(parseInt(currentChamp.sv + item1.sv + item2.sv + item3.sv + item4.sv + item5.sv + item6.sv));
	$("#stat-champ2-apen").html(parseInt(currentChamp.apen + item1.apen + item2.apen + item3.apen + item4.apen + item5.apen + item6.apen));
	$("#stat-champ2-mpen").html(parseInt(currentChamp.mpen + item1.mpen + item2.mpen + item3.mpen + item4.mpen + item5.mpen + item6.mpen));
	$("#stat-champ2-cool").html(parseInt(currentChamp.cool + item1.cool + item2.cool + item3.cool + item4.cool + item5.cool + item6.cool));
	$("#stat-champ2-gold").html(parseInt(currentChamp.gold + item1.gold + item2.gold + item3.gold + item4.gold + item5.gold + item6.gold));
	$("#stat-champ2-range").html(parseInt(currentChamp.range + item1.range + item2.range + item3.range + item4.range + item5.range + item6.range));
	$("#cost-right").html("Cost: " + parseInt(item1.cost + item2.cost + item3.cost + item4.cost + item5.cost + item6.cost));
}