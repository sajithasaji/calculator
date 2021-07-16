var divs = document.createElement('div');
divs.className="tablestyle";
document.body.append(divs);

var form=document.createElement('form');
form.name="form_cont";
document.body.append(form)

var inpt = document.createElement('input');
inpt.type="text";
inpt.id="calc";
inpt.name="answer";`${`<br>`}`
form.append(inpt);
divs.append(form);
document.body.append(divs);`${`<br>`}`


var inpt1 = document.createElement('input');
inpt1.type="button";
inpt1.value="1";
inpt1.onclick = function() { 
        `${form_cont.answer.value += `${'1'}`}`
 };
form.append(inpt1);
divs.append(form);
document.body.append(divs);

var inpt2 = document.createElement('input');
inpt2.type="button";
inpt2.value="2";
inpt2.onclick = function() { 
        `${form_cont.answer.value += `${'2'}`}`
 };
form.append(inpt2);
divs.append(form);
document.body.append(divs);

var inpt3 = document.createElement('input');
inpt3.type="button";
inpt3.value="3";
inpt3.onclick = function() { 
        `${form_cont.answer.value += `${'3'}`}`
 };
form.append(inpt3);
divs.append(form);
document.body.append(divs);

var inptPlus = document.createElement('input');
inptPlus.type="button";
inptPlus.value="+";
inptPlus.onclick = function() { 
        `${form_cont.answer.value += `${'+'}`}`
 };
form.append(inptPlus);
divs.append(form);
document.body.append(divs);

var inpt4 = document.createElement('input');
inpt4.type="button";
inpt4.value="4";
inpt4.onclick = function() { 
        `${form_cont.answer.value += `${'4'}`}`
 };
form.append(inpt4);
divs.append(form);
document.body.append(divs);

var inpt5 = document.createElement('input');
inpt5.type="button";
inpt5.value="5";
inpt5.onclick = function() { 
        `${form_cont.answer.value += `${'5'}`}`
 };
form.append(inpt5);
divs.append(form);
document.body.append(divs);

var inpt6 = document.createElement('input');
inpt6.type="button";
inpt6.value="6";
inpt6.onclick = function() { 
        `${form_cont.answer.value += `${'6'}`}`
 };
form.append(inpt6);
divs.append(form);
document.body.append(divs);

var inptMinus = document.createElement('input');
inptMinus.type="button";
inptMinus.value="-";
inptMinus.onclick = function() { 
        `${form_cont.answer.value += `${'-'}`}`
 };
form.append(inptMinus);
divs.append(form);
document.body.append(divs);

var inpt7 = document.createElement('input');
inpt7.type="button";
inpt7.value="7";
inpt7.onclick = function() { 
        `${form_cont.answer.value += `${'7'}`}`
 };
form.append(inpt7);
divs.append(form);
document.body.append(divs);

var inpt8 = document.createElement('input');
inpt8.type="button";
inpt8.value="8";
inpt8.onclick = function() { 
        `${form_cont.answer.value += `${'8'}`}`
 };
form.append(inpt8);
divs.append(form);
document.body.append(divs);

var inpt9 = document.createElement('input');
inpt9.type="button";
inpt9.value="9";
inpt9.onclick = function() { 
        `${form_cont.answer.value += `${'9'}`}`
 };
form.append(inpt9);
divs.append(form);
document.body.append(divs);

var inptMul = document.createElement('input');
inptMul.type="button";
inptMul.value="*";
inptMul.onclick = function() { 
        `${form_cont.answer.value += `${'*'}`}`
 };
form.append(inptMul);
divs.append(form);
document.body.append(divs);

var inptDiv = document.createElement('input');
inptDiv.type="button";
inptDiv.value="/";
inptDiv.onclick = function() { 
        `${form_cont.answer.value += `${'/'}`}`
 };
form.append(inptDiv);
divs.append(form);
document.body.append(divs);

var inpt0 = document.createElement('input');
inpt0.type="button";
inpt0.value="0";
inpt0.onclick = function() { 
        `${form_cont.answer.value += `${'0'}`}`
 };
form.append(inpt0);
divs.append(form);
document.body.append(divs);
var inptMod = document.createElement('input');
inptMod.type="button";
inptMod.value="%";
inptMod.onclick = function() { 
        `${form_cont.answer.value += `${'%'}`}`
 };
form.append(inptMod);
divs.append(form);
document.body.append(divs);



var inptEqual = document.createElement('input');
inptEqual.type="button";
inptEqual.value="=";
inptEqual.onclick = function() { 
        `${form_cont.answer.value = eval(form_cont.answer.value)}`
 };
form.append(inptEqual);
divs.append(form);
document.body.append(divs);

var inptClear = document.createElement('input');
inptClear.type="button";
inptClear.value="Clear";
inptClear.id="clear";
inptClear.onclick = function() { 
        `${form_cont.answer.value = ''}`
 };
form.append(inptClear);
divs.append(form);
document.body.append(divs);



