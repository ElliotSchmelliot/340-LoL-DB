$(function() {
	var currentChampLeft = blankChamp;
	var currentChampRight = blankChamp;

	var curentItem1Left = blankItem;
	var curentItem2Left = blankItem;
	var curentItem3Left = blankItem;
	var curentItem4Left = blankItem;
	var curentItem5Left = blankItem;
	var curentItem6Left = blankItem;

	var curentItem1Right = blankItem;
	var curentItem2Right = blankItem;
	var curentItem3Right = blankItem;
	var curentItem4Right = blankItem;
	var curentItem5Right = blankItem;
	var curentItem6Right = blankItem;


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
		mana: "N/A",
		ad: 51,
		ap: 0,
		as: .625,
		ms: 345,
		armor: 15,
		mr: 30,
		hr: 2.5,
		manar: "N/A",
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
		var val = this.value;
		if (val == "Abyssal Scepter") {
			var old = parseInt($("#stat-champ1-ip").html());
			$("#stat-champ1-ip").html(old + abyssal.ip);
		} else {
			// $("#stat-champ1-ip").html()
		}
		updateChampDiff();
	});

	$(".item-right").change(function() {
		var val = this.value;

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