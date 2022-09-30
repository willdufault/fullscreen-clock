var per_flag = true;  // flag for showing period
var z_flag = false;  // flag for showing leading zero
var menu_flag = true;  // flag for showing menu

function showTime()
{
	let date = new Date();
	let h = date.getHours();
	let m = date.getMinutes();
	let s = date.getSeconds();
	let period = "am";
	if(h == 0)
	{
		h = 12;
	}
	else if(h > 12)
	{
		h -= 12;
		period = "pm";
	}
	zh = ((h < 10) ? ("0" + h) : h);
	m = ((m < 10) ? ("0" + m) : m);
	s = ((s < 10) ? ("0" + s) : s);	
	let t = h;
	if(z_flag)
	{
		t = zh
	}
	t += (":" + m + ":" + s);
	if(per_flag)
	{
		t += ("\xa0" + period);
	}
	document.getElementById("clock").innerText = t;
	// need 100ms to check for flag updates
	setTimeout(showTime, 100);

	/*
	- store user options
	- add import/export
	*/
}

function toggleMenu()
{
	menu.style.top = (menu_flag ? '-240px' : '0');
	menu_flag = !menu_flag;
}

function setFont(font)
{
	document.getElementById("clock").style.fontFamily = font;
	document.getElementById("font-selector").style.fontFamily = font;
}

function setFontSize(event, size)
{
	if(event.key == 'Enter')
	{
		document.getElementById("clock").style.fontSize = (size + 'px');
		document.getElementById("font-size-input").value = "";
		event.preventDefault();
	}
}

function setFontColor(event, color)
{
	if(event.key == 'Enter')
	{
		document.getElementById("clock").style.color = color;
		document.getElementById("font-color-input").value = "";
		event.preventDefault();
	}
}

function setBGColor(event, color)
{
	if(event.key == 'Enter')
	{
		document.body.style.backgroundColor = color;
		document.getElementById("bg-color-input").value = "";
		event.preventDefault();
	}
}

function togglePeriod()
{
	per_flag = !per_flag;
}

function toggleZero()
{
	z_flag = !z_flag;
}

window.onload = showTime();