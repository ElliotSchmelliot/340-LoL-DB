$(function() {
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

	$(".champ-select").change(function() {
		var val = this.value;
		if (val == "Blitzcrank") {
			$("#stat-champ1-ip").html(blitzcrank.ip);
			$("#stat-champ1-rp").html(blitzcrank.rp);
			$("#stat-champ1-health").html(blitzcrank.health);
			$("#stat-champ1-mana").html(blitzcrank.mana);
			$("#stat-champ1-ad").html(blitzcrank.ad);
			$("#stat-champ1-ap").html(blitzcrank.ap);
			$("#stat-champ1-as").html(blitzcrank.as);
			$("#stat-champ1-ms").html(blitzcrank.ms);
			$("#stat-champ1-armor").html(blitzcrank.armor);
			$("#stat-champ1-mr").html(blitzcrank.mr);
			$("#stat-champ1-hr").html(blitzcrank.hr);
			$("#stat-champ1-manar").html(blitzcrank.manar);
			$("#stat-champ1-tenacity").html(blitzcrank.tenacity);
			$("#stat-champ1-critc").html(blitzcrank.critc);
			$("#stat-champ1-critd").html(blitzcrank.critd);
			$("#stat-champ1-ls").html(blitzcrank.ls);
			$("#stat-champ1-sv").html(blitzcrank.sv);
			$("#stat-champ1-apen").html(blitzcrank.apen);
			$("#stat-champ1-mpen").html(blitzcrank.mpen);
			$("#stat-champ1-cool").html(blitzcrank.cool);
			$("#stat-champ1-gold").html(blitzcrank.gold);
			$("#stat-champ1-range").html(blitzcrank.range);
			$("#champ1-img > img").attr("src", "img/blitzcrank.jpg");
		} else if (val == "Draven") {
			$("#stat-champ1-ip").html(draven.ip);
			$("#stat-champ1-rp").html(draven.rp);
			$("#stat-champ1-health").html(draven.health);
			$("#stat-champ1-mana").html(draven.mana);
			$("#stat-champ1-ad").html(draven.ad);
			$("#stat-champ1-ap").html(draven.ap);
			$("#stat-champ1-as").html(draven.as);
			$("#stat-champ1-ms").html(draven.ms);
			$("#stat-champ1-armor").html(draven.armor);
			$("#stat-champ1-mr").html(draven.mr);
			$("#stat-champ1-hr").html(draven.hr);
			$("#stat-champ1-manar").html(draven.manar);
			$("#stat-champ1-tenacity").html(draven.tenacity);
			$("#stat-champ1-critc").html(draven.critc);
			$("#stat-champ1-critd").html(draven.critd);
			$("#stat-champ1-ls").html(draven.ls);
			$("#stat-champ1-sv").html(draven.sv);
			$("#stat-champ1-apen").html(draven.apen);
			$("#stat-champ1-mpen").html(draven.mpen);
			$("#stat-champ1-cool").html(draven.cool);
			$("#stat-champ1-gold").html(draven.gold);
			$("#stat-champ1-range").html(draven.range);
			$("#champ1-img > img").attr("src", "img/draven.jpg");
		} else if (val == "Ezreal") {
			$("#stat-champ1-ip").html(ezreal.ip);
			$("#stat-champ1-rp").html(ezreal.rp);
			$("#stat-champ1-health").html(ezreal.health);
			$("#stat-champ1-mana").html(ezreal.mana);
			$("#stat-champ1-ad").html(ezreal.ad);
			$("#stat-champ1-ap").html(ezreal.ap);
			$("#stat-champ1-as").html(ezreal.as);
			$("#stat-champ1-ms").html(ezreal.ms);
			$("#stat-champ1-armor").html(ezreal.armor);
			$("#stat-champ1-mr").html(ezreal.mr);
			$("#stat-champ1-hr").html(ezreal.hr);
			$("#stat-champ1-manar").html(ezreal.manar);
			$("#stat-champ1-tenacity").html(ezreal.tenacity);
			$("#stat-champ1-critc").html(ezreal.critc);
			$("#stat-champ1-critd").html(ezreal.critd);
			$("#stat-champ1-ls").html(ezreal.ls);
			$("#stat-champ1-sv").html(ezreal.sv);
			$("#stat-champ1-apen").html(ezreal.apen);
			$("#stat-champ1-mpen").html(ezreal.mpen);
			$("#stat-champ1-cool").html(ezreal.cool);
			$("#stat-champ1-gold").html(ezreal.gold);
			$("#stat-champ1-range").html(ezreal.range);
			$("#champ1-img > img").attr("src", "img/ezreal.jpg");
		} else if (val == "Fizz") {
			$("#stat-champ1-ip").html(fizz.ip);
			$("#stat-champ1-rp").html(fizz.rp);
			$("#stat-champ1-health").html(fizz.health);
			$("#stat-champ1-mana").html(fizz.mana);
			$("#stat-champ1-ad").html(fizz.ad);
			$("#stat-champ1-ap").html(fizz.ap);
			$("#stat-champ1-as").html(fizz.as);
			$("#stat-champ1-ms").html(fizz.ms);
			$("#stat-champ1-armor").html(fizz.armor);
			$("#stat-champ1-mr").html(fizz.mr);
			$("#stat-champ1-hr").html(fizz.hr);
			$("#stat-champ1-manar").html(fizz.manar);
			$("#stat-champ1-tenacity").html(fizz.tenacity);
			$("#stat-champ1-critc").html(fizz.critc);
			$("#stat-champ1-critd").html(fizz.critd);
			$("#stat-champ1-ls").html(fizz.ls);
			$("#stat-champ1-sv").html(fizz.sv);
			$("#stat-champ1-apen").html(fizz.apen);
			$("#stat-champ1-mpen").html(fizz.mpen);
			$("#stat-champ1-cool").html(fizz.cool);
			$("#stat-champ1-gold").html(fizz.gold);
			$("#stat-champ1-range").html(fizz.range);
			$("#champ1-img > img").attr("src", "img/fizz.jpg");
		} else if (val == "Riven") {
			$("#stat-champ1-ip").html(riven.ip);
			$("#stat-champ1-rp").html(riven.rp);
			$("#stat-champ1-health").html(riven.health);
			$("#stat-champ1-mana").html(riven.mana);
			$("#stat-champ1-ad").html(riven.ad);
			$("#stat-champ1-ap").html(riven.ap);
			$("#stat-champ1-as").html(riven.as);
			$("#stat-champ1-ms").html(riven.ms);
			$("#stat-champ1-armor").html(riven.armor);
			$("#stat-champ1-mr").html(riven.mr);
			$("#stat-champ1-hr").html(riven.hr);
			$("#stat-champ1-manar").html(riven.manar);
			$("#stat-champ1-tenacity").html(riven.tenacity);
			$("#stat-champ1-critc").html(riven.critc);
			$("#stat-champ1-critd").html(riven.critd);
			$("#stat-champ1-ls").html(riven.ls);
			$("#stat-champ1-sv").html(riven.sv);
			$("#stat-champ1-apen").html(riven.apen);
			$("#stat-champ1-mpen").html(riven.mpen);
			$("#stat-champ1-cool").html(riven.cool);
			$("#stat-champ1-gold").html(riven.gold);
			$("#stat-champ1-range").html(riven.range);
			$("#champ1-img > img").attr("src", "img/riven.jpg");
		} else if (val == "Teemo") {
			$("#stat-champ1-ip").html(teemo.ip);
			$("#stat-champ1-rp").html(teemo.rp);
			$("#stat-champ1-health").html(teemo.health);
			$("#stat-champ1-mana").html(teemo.mana);
			$("#stat-champ1-ad").html(teemo.ad);
			$("#stat-champ1-ap").html(teemo.ap);
			$("#stat-champ1-as").html(teemo.as);
			$("#stat-champ1-ms").html(teemo.ms);
			$("#stat-champ1-armor").html(teemo.armor);
			$("#stat-champ1-mr").html(teemo.mr);
			$("#stat-champ1-hr").html(teemo.hr);
			$("#stat-champ1-manar").html(teemo.manar);
			$("#stat-champ1-tenacity").html(teemo.tenacity);
			$("#stat-champ1-critc").html(teemo.critc);
			$("#stat-champ1-critd").html(teemo.critd);
			$("#stat-champ1-ls").html(teemo.ls);
			$("#stat-champ1-sv").html(teemo.sv);
			$("#stat-champ1-apen").html(teemo.apen);
			$("#stat-champ1-mpen").html(teemo.mpen);
			$("#stat-champ1-cool").html(teemo.cool);
			$("#stat-champ1-gold").html(teemo.gold);
			$("#stat-champ1-range").html(teemo.range);
			$("#champ1-img > img").attr("src", "img/teemo.jpg");
		} else {
			$("#stat-champ1-ip").html(0);
			$("#stat-champ1-rp").html(0);
			$("#stat-champ1-health").html(0);
			$("#stat-champ1-mana").html(0);
			$("#stat-champ1-ad").html(0);
			$("#stat-champ1-ap").html(0);
			$("#stat-champ1-as").html(0);
			$("#stat-champ1-ms").html(0);
			$("#stat-champ1-armor").html(0);
			$("#stat-champ1-mr").html(0);
			$("#stat-champ1-hr").html(0);
			$("#stat-champ1-manar").html(0);
			$("#stat-champ1-tenacity").html(0);
			$("#stat-champ1-critc").html(0);
			$("#stat-champ1-critd").html(0);
			$("#stat-champ1-ls").html(0);
			$("#stat-champ1-sv").html(0);
			$("#stat-champ1-apen").html(0);
			$("#stat-champ1-mpen").html(0);
			$("#stat-champ1-cool").html(0);
			$("#stat-champ1-gold").html(0);
			$("#stat-champ1-range").html(0);
			$("#champ1-img > img").attr("src", "img/blank.png");
		}
		updateChampDiff();
	});

	$(".champ-select2").change(function() {
		var val = this.value;
		if (val == "Blitzcrank") {
			$("#stat-champ2-ip").html(blitzcrank.ip);
			$("#stat-champ2-rp").html(blitzcrank.rp);
			$("#stat-champ2-health").html(blitzcrank.health);
			$("#stat-champ2-mana").html(blitzcrank.mana);
			$("#stat-champ2-ad").html(blitzcrank.ad);
			$("#stat-champ2-ap").html(blitzcrank.ap);
			$("#stat-champ2-as").html(blitzcrank.as);
			$("#stat-champ2-ms").html(blitzcrank.ms);
			$("#stat-champ2-armor").html(blitzcrank.armor);
			$("#stat-champ2-mr").html(blitzcrank.mr);
			$("#stat-champ2-hr").html(blitzcrank.hr);
			$("#stat-champ2-manar").html(blitzcrank.manar);
			$("#stat-champ2-tenacity").html(blitzcrank.tenacity);
			$("#stat-champ2-critc").html(blitzcrank.critc);
			$("#stat-champ2-critd").html(blitzcrank.critd);
			$("#stat-champ2-ls").html(blitzcrank.ls);
			$("#stat-champ2-sv").html(blitzcrank.sv);
			$("#stat-champ2-apen").html(blitzcrank.apen);
			$("#stat-champ2-mpen").html(blitzcrank.mpen);
			$("#stat-champ2-cool").html(blitzcrank.cool);
			$("#stat-champ2-gold").html(blitzcrank.gold);
			$("#stat-champ2-range").html(blitzcrank.range);
			$("#champ2-img > img").attr("src", "img/blitzcrank.jpg");
		} else if (val == "Draven") {
			$("#stat-champ2-ip").html(draven.ip);
			$("#stat-champ2-rp").html(draven.rp);
			$("#stat-champ2-health").html(draven.health);
			$("#stat-champ2-mana").html(draven.mana);
			$("#stat-champ2-ad").html(draven.ad);
			$("#stat-champ2-ap").html(draven.ap);
			$("#stat-champ2-as").html(draven.as);
			$("#stat-champ2-ms").html(draven.ms);
			$("#stat-champ2-armor").html(draven.armor);
			$("#stat-champ2-mr").html(draven.mr);
			$("#stat-champ2-hr").html(draven.hr);
			$("#stat-champ2-manar").html(draven.manar);
			$("#stat-champ2-tenacity").html(draven.tenacity);
			$("#stat-champ2-critc").html(draven.critc);
			$("#stat-champ2-critd").html(draven.critd);
			$("#stat-champ2-ls").html(draven.ls);
			$("#stat-champ2-sv").html(draven.sv);
			$("#stat-champ2-apen").html(draven.apen);
			$("#stat-champ2-mpen").html(draven.mpen);
			$("#stat-champ2-cool").html(draven.cool);
			$("#stat-champ2-gold").html(draven.gold);
			$("#stat-champ2-range").html(draven.range);
			$("#champ2-img > img").attr("src", "img/draven.jpg");
		} else if (val == "Ezreal") {
			$("#stat-champ2-ip").html(ezreal.ip);
			$("#stat-champ2-rp").html(ezreal.rp);
			$("#stat-champ2-health").html(ezreal.health);
			$("#stat-champ2-mana").html(ezreal.mana);
			$("#stat-champ2-ad").html(ezreal.ad);
			$("#stat-champ2-ap").html(ezreal.ap);
			$("#stat-champ2-as").html(ezreal.as);
			$("#stat-champ2-ms").html(ezreal.ms);
			$("#stat-champ2-armor").html(ezreal.armor);
			$("#stat-champ2-mr").html(ezreal.mr);
			$("#stat-champ2-hr").html(ezreal.hr);
			$("#stat-champ2-manar").html(ezreal.manar);
			$("#stat-champ2-tenacity").html(ezreal.tenacity);
			$("#stat-champ2-critc").html(ezreal.critc);
			$("#stat-champ2-critd").html(ezreal.critd);
			$("#stat-champ2-ls").html(ezreal.ls);
			$("#stat-champ2-sv").html(ezreal.sv);
			$("#stat-champ2-apen").html(ezreal.apen);
			$("#stat-champ2-mpen").html(ezreal.mpen);
			$("#stat-champ2-cool").html(ezreal.cool);
			$("#stat-champ2-gold").html(ezreal.gold);
			$("#stat-champ2-range").html(ezreal.range);
			$("#champ2-img > img").attr("src", "img/ezreal.jpg");
		} else if (val == "Fizz") {
			$("#stat-champ2-ip").html(fizz.ip);
			$("#stat-champ2-rp").html(fizz.rp);
			$("#stat-champ2-health").html(fizz.health);
			$("#stat-champ2-mana").html(fizz.mana);
			$("#stat-champ2-ad").html(fizz.ad);
			$("#stat-champ2-ap").html(fizz.ap);
			$("#stat-champ2-as").html(fizz.as);
			$("#stat-champ2-ms").html(fizz.ms);
			$("#stat-champ2-armor").html(fizz.armor);
			$("#stat-champ2-mr").html(fizz.mr);
			$("#stat-champ2-hr").html(fizz.hr);
			$("#stat-champ2-manar").html(fizz.manar);
			$("#stat-champ2-tenacity").html(fizz.tenacity);
			$("#stat-champ2-critc").html(fizz.critc);
			$("#stat-champ2-critd").html(fizz.critd);
			$("#stat-champ2-ls").html(fizz.ls);
			$("#stat-champ2-sv").html(fizz.sv);
			$("#stat-champ2-apen").html(fizz.apen);
			$("#stat-champ2-mpen").html(fizz.mpen);
			$("#stat-champ2-cool").html(fizz.cool);
			$("#stat-champ2-gold").html(fizz.gold);
			$("#stat-champ2-range").html(fizz.range);
			$("#champ2-img > img").attr("src", "img/fizz.jpg");
		} else if (val == "Riven") {
			$("#stat-champ2-ip").html(riven.ip);
			$("#stat-champ2-rp").html(riven.rp);
			$("#stat-champ2-health").html(riven.health);
			$("#stat-champ2-mana").html(riven.mana);
			$("#stat-champ2-ad").html(riven.ad);
			$("#stat-champ2-ap").html(riven.ap);
			$("#stat-champ2-as").html(riven.as);
			$("#stat-champ2-ms").html(riven.ms);
			$("#stat-champ2-armor").html(riven.armor);
			$("#stat-champ2-mr").html(riven.mr);
			$("#stat-champ2-hr").html(riven.hr);
			$("#stat-champ2-manar").html(riven.manar);
			$("#stat-champ2-tenacity").html(riven.tenacity);
			$("#stat-champ2-critc").html(riven.critc);
			$("#stat-champ2-critd").html(riven.critd);
			$("#stat-champ2-ls").html(riven.ls);
			$("#stat-champ2-sv").html(riven.sv);
			$("#stat-champ2-apen").html(riven.apen);
			$("#stat-champ2-mpen").html(riven.mpen);
			$("#stat-champ2-cool").html(riven.cool);
			$("#stat-champ2-gold").html(riven.gold);
			$("#stat-champ2-range").html(riven.range);
			$("#champ2-img > img").attr("src", "img/riven.jpg");
		} else if (val == "Teemo") {
			$("#stat-champ2-ip").html(teemo.ip);
			$("#stat-champ2-rp").html(teemo.rp);
			$("#stat-champ2-health").html(teemo.health);
			$("#stat-champ2-mana").html(teemo.mana);
			$("#stat-champ2-ad").html(teemo.ad);
			$("#stat-champ2-ap").html(teemo.ap);
			$("#stat-champ2-as").html(teemo.as);
			$("#stat-champ2-ms").html(teemo.ms);
			$("#stat-champ2-armor").html(teemo.armor);
			$("#stat-champ2-mr").html(teemo.mr);
			$("#stat-champ2-hr").html(teemo.hr);
			$("#stat-champ2-manar").html(teemo.manar);
			$("#stat-champ2-tenacity").html(teemo.tenacity);
			$("#stat-champ2-critc").html(teemo.critc);
			$("#stat-champ2-critd").html(teemo.critd);
			$("#stat-champ2-ls").html(teemo.ls);
			$("#stat-champ2-sv").html(teemo.sv);
			$("#stat-champ2-apen").html(teemo.apen);
			$("#stat-champ2-mpen").html(teemo.mpen);
			$("#stat-champ2-cool").html(teemo.cool);
			$("#stat-champ2-gold").html(teemo.gold);
			$("#stat-champ2-range").html(teemo.range);
			$("#champ2-img > img").attr("src", "img/teemo.jpg");
		} else {
			$("#stat-champ2-ip").html(0);
			$("#stat-champ2-rp").html(0);
			$("#stat-champ2-health").html(0);
			$("#stat-champ2-mana").html(0);
			$("#stat-champ2-ad").html(0);
			$("#stat-champ2-ap").html(0);
			$("#stat-champ2-as").html(0);
			$("#stat-champ2-ms").html(0);
			$("#stat-champ2-armor").html(0);
			$("#stat-champ2-mr").html(0);
			$("#stat-champ2-hr").html(0);
			$("#stat-champ2-manar").html(0);
			$("#stat-champ2-tenacity").html(0);
			$("#stat-champ2-critc").html(0);
			$("#stat-champ2-critd").html(0);
			$("#stat-champ2-ls").html(0);
			$("#stat-champ2-sv").html(0);
			$("#stat-champ2-apen").html(0);
			$("#stat-champ2-mpen").html(0);
			$("#stat-champ2-cool").html(0);
			$("#stat-champ2-gold").html(0);
			$("#stat-champ2-range").html(0);
			$("#champ2-img > img").attr("src", "img/blank.png");
		}
		updateChampDiff();
	});
});

function updateChampDiff() {
	var num = parseInt($("#stat-champ1-ip").html()) - parseInt($("#stat-champ2-ip").html())
	$("#stat-champ15-ip").html(num);
	if (num > 0) {
		$("#stat-champ15-ip").css("color", "green");
	} else if (num < 0) {
		$("#stat-champ15-ip").css("color", "red");
	}

	
	$("#stat-champ15-health").html(parseInt($("#stat-champ1-health").html()) - parseInt($("#stat-champ2-health").html()));
	$("#stat-champ15-mana").html(parseInt($("#stat-champ1-mana").html()) - parseInt($("#stat-champ2-mana").html()));
	$("#stat-champ15-ad").html(parseInt($("#stat-champ1-ad").html()) - parseInt($("#stat-champ2-ad").html()));
	$("#stat-champ15-ap").html(parseInt($("#stat-champ1-ap").html()) - parseInt($("#stat-champ2-ap").html()));
	var num = parseFloat($("#stat-champ1-as").html()) - parseFloat($("#stat-champ2-as").html());
	$("#stat-champ15-as").html(num.toFixed(3));
	$("#stat-champ15-ms").html(parseInt($("#stat-champ1-ms").html()) - parseInt($("#stat-champ2-ms").html()));
	$("#stat-champ15-armor").html(parseInt($("#stat-champ1-armor").html()) - parseInt($("#stat-champ2-armor").html()));
	$("#stat-champ15-mr").html(parseInt($("#stat-champ1-mr").html()) - parseInt($("#stat-champ2-mr").html()));
	$("#stat-champ15-hr").html(parseInt($("#stat-champ1-hr").html()) - parseInt($("#stat-champ2-hr").html()));
	$("#stat-champ15-manar").html(parseInt($("#stat-champ1-manar").html()) - parseInt($("#stat-champ2-manar").html()));
	$("#stat-champ15-tenacity").html(parseInt($("#stat-champ1-tenacity").html()) - parseInt($("#stat-champ2-tenacity").html()));
	$("#stat-champ15-critc").html(parseInt($("#stat-champ1-critc").html()) - parseInt($("#stat-champ2-critc").html()));
	$("#stat-champ15-critd").html(parseInt($("#stat-champ1-critd").html()) - parseInt($("#stat-champ2-critd").html()));
	$("#stat-champ15-ls").html(parseInt($("#stat-champ1-ls").html()) - parseInt($("#stat-champ2-ls").html()));
	$("#stat-champ15-sv").html(parseInt($("#stat-champ1-sv").html()) - parseInt($("#stat-champ2-sv").html()));
	$("#stat-champ15-apen").html(parseInt($("#stat-champ1-apen").html()) - parseInt($("#stat-champ2-apen").html()));
	$("#stat-champ15-mpen").html(parseInt($("#stat-champ1-mpen").html()) - parseInt($("#stat-champ2-mpen").html()));
	$("#stat-champ15-cool").html(parseInt($("#stat-champ1-cool").html()) - parseInt($("#stat-champ2-cool").html()));
	$("#stat-champ15-gold").html(parseInt($("#stat-champ1-gold").html()) - parseInt($("#stat-champ2-gold").html()));
	$("#stat-champ15-range").html(parseInt($("#stat-champ1-range").html()) - parseInt($("#stat-champ2-range").html()));
}