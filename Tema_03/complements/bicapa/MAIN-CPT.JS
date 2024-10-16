//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// FILE MAIN-CPS.JS
// Main Chime Presentation Support Javascript
// www.umass.edu/chime/prsswc
//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// Sections in this file:
//    Buttons
//    Footer and back functions
//    Color keys
//    Font size control
//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// BUTTONS
//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
function button(script)
{
	with (document)
	{
		open();
		writeln("<embed");
		writeln("	type='application/x-spt'");
		writeln("	width=20");
		writeln("	height=20");
		writeln("	button=followed");
		writeln("	target='chime_graphic'");
		writeln("	script=\"" + script + "\"");
		writeln(">");
		close();
	}
}
//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// FOOTER AND BACK FUNCTIONS
//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
function footer()
{
	with (document)
	{
		open();

// history.back() runs you back thru all the button presses, so is useless.

		writeln("<form>");
		writeln("<div align=center>");
		writeln("<p><input type=button value=\"Índice Principal\"");
		writeln("onClick=\"location.href='contents.htm'\">");
		writeln("<p><a href=\"rightutl.htm\">Utilidades</a> ");	
		writeln("<br><a href=\"rightucs.htm\">Esquemas de color</a>");
		writeln("<br><a href=\"mousesum.htm\">Manejo del ratón</a>");
		close();
	}

}

//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// Funcion salir
//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
function salir()
{
	with (document)
	{
		open();
		writeln("<form>");
		writeln("<a>Pulse </a>");
		writeln("<input type=button value=\"Salir\"");
		writeln("onClick=\"location.href='left.htm'\">");
		writeln("<a> para continuar</a>");
		writeln("</form>");
		close();
	}

}
//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// Funcion Comenzar
//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
function comenzar()
{
	with (document)
	{
		open();
		writeln("<form>");
		writeln("<a>Pulse </a>");
		writeln("<input type=button value=\"Adelante\"");
		writeln("onClick=\"location.href='2frmcont.htm'\">");
		writeln("<a> para iniciar la práctica</a>");
		writeln("</form>");
		close();
	}

}
//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// Funcion Comenzar sin instrucciones
//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
function comenzar1()
{
	with (document)
	{
		open();
		writeln("<form>");
		writeln("<a>(o pulse </a>");
		writeln("<input type=button value=\"Aquí\"");
		writeln("onClick=\"location.href='2frmcon2.htm'\">");
		writeln("<a> si no necesita instrucciones)</a>");
		writeln("</form>");
		close();
	}

}
//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// Funcion creditos
//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
function creditos()
{
	with (document)
	{
		open();
		writeln("<form>");
		writeln("<input type=button value=\"Créditos\"");
		writeln("onClick=\"location.href='creditos.htm'\">");
		writeln("</form>");
		close();
	}

}

// backhis1() makes a button which moves back one step in the history.

function backhis1()
{
	with (document)
	{
		open();

		writeln("<form>");
		writeln("<div align=center>");
		writeln("<input type=button value=\"Atrás\"");
		writeln("onClick=\"history.back()\">");
		writeln("</div>");
		writeln("</form>");
		close();
	}

}
// forward() para volver atras hacia un indice.
function forward()
{
	with (document)
	{
		open();

		writeln("<form>");
		writeln("<div align=center>");
		writeln("<input type=button value=\"Continuar\"");
		writeln("onClick=\"history.back()\">");
		writeln("</div>");
		writeln("</form>");
		close();
	}

}
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// Some documents are displayed in a new window; in these cases, the back
// button simply closes the new window.  This saves time reloading a
// Chime frameset, and preserves the state of the parent window.

function backclose()
{
	with (document)
	{
		open();

		writeln("<form>");
		writeln("<div align=center>");
		writeln("<input type=button value=\"Atrás\"");
		writeln("onClick=\"window.close()\">");
		writeln("</div>");
		writeln("</form>");

		close();
	}

}
//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// COLOR KEYS
//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// wr_doc(to_write) is a utility function used below.
function wr_doc(to_write)
{
	with(document)
	{
		open();
		write(to_write);
		close();
	}
}

//------------------------------------------------------------------
// key_top() begins a color key, key_bottom() completes it.
// These are called in color key functions such as chon() below.

function key_top()
{
	wr_doc(
//		"<table bgcolor='black'>" +
//		"<tr><td>" +
		"<a href='cpk_cs.htm' target='cpk_window'>" +
//		"<tt>" +
		"<font size='+2'><b>"
	);
}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

function key_bottom()
{
	wr_doc(
		"<font color='black'>&nbsp;</font>"+
		"</b></font>" +
//		"</tt>" +
		"</a>" //+
//		"</td></tr>" +
//		"</table>"
	);
}

//------------------------------------------------------------------
// The following functions each add one element to a color key.
// You can easily add new elements by copying and modifying one of these.
// Correct CPK colors for RasMol and Chime are available at
// http://www.umass.edu/microbio/rasmol/distrib/rasman.htm#cpkcolours
// or in the current folder, open cpk-rgb.htm in your browser.

function C_key()
{
	wr_doc(
		"<font color='black'>&nbsp;</font>" +
		"<font color='#C8C8C8'>C</font>"
	);
}


function Fe_key()
{
	wr_doc(
		"<font color='black'>&nbsp;</font>" +
		"<font color='#FFA500'>Fe</font>"
	);
}

function H_key()
{
	wr_doc(
		"<font color='black'>&nbsp;</font>" +
		"<font color='#FFFFFF'>H</font>"
	);
}


function N_key()
{
	wr_doc(
		"<font color='black'>&nbsp;</font>" +
		"<font color='#8F8FFF'>N</font>"
	);
}



function O_key()
{
	wr_doc(
		"<font color='black'>&nbsp;</font>" +
		"<font color='#F00000'>O</font>"
	);
}



function S_key()
{
	wr_doc(
		"<font color='black'>&nbsp;</font>" +
		"<font color='#FFC832'>S</font>"
	);

}

function P_key()
{
	wr_doc(
		"<font color='black'>&nbsp;</font>" +
		"<font color='#FFA500'>P</font>"
	);

}

//------------------------------------------------------------------
// Here now are complete color key functions.  Each is named according
// to the elements included in the key it produces.

function chon_key()
{
	key_top();
	C_key();
	H_key();
	O_key();
	N_key();
	key_bottom();
}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

function chonp_key()
{
	key_top();
	C_key();
	H_key();
	O_key();
	N_key();
	P_key();
	key_bottom();
}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

function chonfe_key()
{
	key_top();
	C_key();
	H_key();
	O_key();
	N_key();
	Fe_key();
	key_bottom();
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

function con_key()
{
	key_top();
	C_key();
	O_key();
	N_key();
	key_bottom();
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

function cons_key()
{
	key_top();
	C_key();
	O_key();
	N_key();
	S_key();
	key_bottom();
}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

function chons_key()
{
	key_top();
	C_key();
	H_key();
	O_key();
	N_key();
	S_key();
	key_bottom();
}

//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// FONT SIZE CONTROL
//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

/*

The fontsize buttons don't work in Nav3.01 (Win95 or Mac).
The second button (down) often doesn't appear; once this happens,
going anywhere else causes Nav to crash.
Therefore they have been disabled in Nav3.01.

*/

// any_navigator() and navv401() were lifted from n4c2.js and can be
// deleted if/when things are reorganized to include that elsewhere.

//- - - - - - - - - - - - - - - - - - - - - - - - - - - 
function any_navigator()
{
	if (navigator.appName.toLowerCase().indexOf("netscape") != -1)
		return 1;
	return 0;
}
//- - - - - - - - - - - - - - - - - - - - - - - - - - - 
function navv401()
{
	if (!any_navigator())
		return 0;
	if (4.01 <= parseFloat(navigator.appVersion))
		return 1;
	return 0;
}
//- - - - - - - - - - - - - - - - - - - - - - - - - - - 
function n4_ok(ask4n4)
{
	if (!navv401())
	{
		if (ask4n4)
		{
			alert("Sorry, font size control does not work in\n" +
			"the browser you are using. Please upgrade to\n" +
			"Netscape Navigator 4.01 or later if you wish to\n" +
			"project with larger fonts. (www.netscape.com)");
		}
		return 0;
	}
	return 1;
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - 

function up_fontsize()
{
	if (!n4_ok(1))
		return;
	if (parent.FontSize < 6)
	{
		parent.FontSize += 1;
		location.reload();
	}
	else
	{
		alert('Font size is already at maximum (6)');
	}
}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - 
function down_fontsize()
{
	if (!n4_ok(1))
		return;
	if (parent.FontSize > 3)
	{
		parent.FontSize -= 1;
		location.reload();
	}
	else
	{
		alert('Font size is already at minimum (3)');
	}
}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - 
function set_basefont()
{
	with (document)
	{
		open();
		writeln("<basefont size='" + parent.FontSize + "'>");
		close();
	}
}
//- - - - - - - - - - - - - - - - - - - - - - - - - - - 
function fontsize_controls()
{
	fontsize_control_up();
	fontsize_control_down();
}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - 
function fontsize_control_up()
{
	with (document)
	{
		open();
		write("<a href='javascript: up_fontsize()'>")
		writeln("<img src='up.gif' border=0></a>")
		close();
	}
}
//- - - - - - - - - - - - - - - - - - - - - - - - - - - 
function fontsize_control_down()
{
	if (!n4_ok(0))
		return;
	with (document)
	{
		open();
		write("<a href='javascript: down_fontsize()'>")
		writeln("<img src='down.gif' border=0></a>")
		close();
	}
}
//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// END OF FILE MAIN-CPS.JS
//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
