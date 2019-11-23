function reset(){
  inpCd.bar1.value='';
  inpCd.bar2.value='';
  $('#barcode1').barcode('0','code128',{barWidth:0,barHeight:0});
  $('#barcode2').barcode('0','code128',{barWidth:0,barHeight:0});
}

function makeCode(){
  checkD();
  if(inpCd.bar1.value=='3700000000000002'||isNaN(Number(inpCd.bar1.value))||inpCd.bar1.value>='3800000000000000'){inpCd.bar1.value='';$('#barcode1').barcode('0','code128',{barWidth:0,barHeight:0});}
  else{$('#barcode1').barcode(inpCd.bar1.value,'code128',{barWidth:1,barHeight:50});}
  if(inpCd.bar2.value=='3700000000000002'||isNaN(Number(inpCd.bar2.value))||inpCd.bar2.value>='3800000000000000'){inpCd.bar2.value='';$('#barcode2').barcode('0','code128',{barWidth:0,barHeight:0});}
  else{$('#barcode2').barcode(inpCd.bar2.value,'code128',{barWidth:1,barHeight:50});}
}

function checkD(){
  var bar1=Number(inpCd.bar1.value)+370000000000000;
  var bar2=Number(inpCd.bar2.value)+370000000000000;
  inpCd.bar1.value=String(bar1)+String(calcBar(bar1));
  inpCd.bar2.value=String(bar2)+String(calcBar(bar2));
}

function calcBar(bar){
  var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,num;
  bar=String(bar);
  a=bar.substr(0,1)*1;
    if(String(a).length==2){a=String(a);a=Number(a.substr(0,1))+Number(a.substr(1,1))};
  b=bar.substr(1,1)*2;
    if(String(b).length==2){b=String(b);b=Number(b.substr(0,1))+Number(b.substr(1,1))};
  c=bar.substr(2,1)*1;
    if(String(c).length==2){c=String(c);c=Number(c.substr(0,1))+Number(c.substr(1,1))};
  d=bar.substr(3,1)*2;
    if(String(d).length==2){d=String(d);d=Number(d.substr(0,1))+Number(d.substr(1,1))};
  e=bar.substr(4,1)*1;
    if(String(e).length==2){e=String(e);e=Number(e.substr(0,1))+Number(e.substr(1,1))};
  f=bar.substr(5,1)*2;
    if(String(f).length==2){f=String(f);f=Number(f.substr(0,1))+Number(f.substr(1,1))};
  g=bar.substr(6,1)*1;
    if(String(g).length==2){g=String(g);g=Number(g.substr(0,1))+Number(g.substr(1,1))};
  h=bar.substr(7,1)*2;
    if(String(h).length==2){h=String(h);h=Number(h.substr(0,1))+Number(h.substr(1,1))};
  i=bar.substr(8,1)*1;
    if(String(i).length==2){i=String(i);i=Number(i.substr(0,1))+Number(i.substr(1,1))};
  j=bar.substr(9,1)*2;
    if(String(j).length==2){j=String(j);j=Number(j.substr(0,1))+Number(j.substr(1,1))};
  k=bar.substr(10,1)*1;
    if(String(k).length==2){k=String(k);k=Number(k.substr(0,1))+Number(k.substr(1,1))};
  l=bar.substr(11,1)*2;
    if(String(l).length==2){l=String(l);l=Number(l.substr(0,1))+Number(l.substr(1,1))};
  m=bar.substr(12,1)*1;
    if(String(m).length==2){m=String(m);m=Number(m.substr(0,1))+Number(m.substr(1,1))};
  n=bar.substr(13,1)*2;
    if(String(n).length==2){n=String(n);n=Number(n.substr(0,1))+Number(n.substr(1,1))};
  o=bar.substr(14,1)*1;
    if(String(o).length==2){o=String(o);o=Number(o.substr(0,1))+Number(o.substr(1,1))};
  num=a+b+c+d+e+f+g+h+i+j+k+l+m+n+o;
  num=(num%10)==0?0:10-(num%10);
  return num;
}
