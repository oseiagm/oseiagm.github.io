// Initialize font properties
const fontname = "Barlow";
const fontweights = [300, 400]

// Color properties
const basecolor = "#222222";
const accentcolor = "#aa0000";
const highlightcolor = "#111";

// Body properties
const bodyfontweight = 300;
const bodyfontsize = "12pt";
const backgroundcolor = "#fff";

// Link properties
const acolor = accentcolor;
const adecoration = "none";

// Menu properties
const menucolor = basecolor;
const menufontsize = "14pt";
const menudecoration = "none";

// Header properties
const headercolor = "#6c757d";
const headerfontsize = "18pt";
const headerdecoration = "none";
const namecolor = highlightcolor;
const namefontsize = "23pt";


// Publication properties
const ptitlecolor = "#222222";
const ptitlefontsize = bodyfontsize;
const ptitleweight = 400;
const ptitledecoration = "none";
const ptitlestyle = "normal";

const authorcolor = "#6c757d";
const authorweight = bodyfontweight;
const authordecoration = "none";
const authorstyle = "normal";

const selfcolor = highlightcolor;
const selfweight = bodyfontweight;
const selfdecoration = "none";
const selfstyle = "normal";

const tagcolor = accentcolor;
const tagweight = bodyfontweight;
const tagdecoration = "none";
const tagstyle = "normal";


$("head").append("<link href='https://fonts.googleapis.com/css2?family=" + fontname + ":wght@" + fontweights.join(';') + "&display=swap' rel='stylesheet' type='text/css'>");
$("body").css("font-family", fontname);

$("body").css("color", basecolor);
$("body").css("font-weight", bodyfontweight);
$("body").css("font-size", bodyfontsize);
$("body").css("background-color", backgroundcolor);

$("a").css("color", acolor);
$("a").css("text-decoration", adecoration);

$(".menulink").css("color", menucolor);
$(".menulink").css("font-size", menufontsize);
$(".menulink").css("text-decoration", menudecoration);

$(".header").css("color", headercolor);
$(".header").css("font-size", headerfontsize);
$(".header").css("text-decoration", headerdecoration);
$(".name").css("color", namecolor);
$(".name").css("font-size", namefontsize);

$(".papertitle").css("color", ptitlecolor);
$(".papertitle").css("font-size", ptitlefontsize);
$(".papertitle").css("font-weight", ptitleweight);
$(".papertitle").css("text-decoration", ptitledecoration);
$(".papertitle").css("font-style", ptitlestyle);