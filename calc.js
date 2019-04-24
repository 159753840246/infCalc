var da=1024;
var dot=/\./,nega=/\-/,nond=/\D/g,stzero=/^0+/,endzero=/0*$/,sezero=/^0+|0+$/g,ivv=/[^0-9\.\-]/g,vst=/^[0-9\-]/;
function lt(a,b){
a=a.replace(/^0+/,"");
b=b.replace(/^0+/,"");
var la=a.length,lb=b.length;
if(la>lb){return false} else if(la<lb){return true} else {return a<b}
}
function gt(a,b){
a=a.replace(/^0+/,"");
b=b.replace(/^0+/,"");
var la=a.length,lb=b.length;
if(la<lb){return false} else if(la>lb){return true} else {return a>b}
}
function ltEq(a,b){
a=a.replace(/^0+/,"");
b=b.replace(/^0+/,"");
var la=a.length,lb=b.length;
if(la>lb){return false} else if(la<lb){return true} else {return a<=b}
}
function gtEq(a,b){
a=a.replace(/^0+/,"");
b=b.replace(/^0+/,"");
var la=a.length,lb=b.length;
if(la<lb){return false} else if(la>lb){return true} else {return a>=b}
}
function eq(a,b){
a=a.replace(/^0+/,"");
b=b.replace(/^0+/,"");
return a===b;
}
function ltR(a,b){
var asn=a.search(/\-/)+1,bsn=b.search(/\-/)+1,adot=a.search(/\./),bdot=b.search(/\./);
if(asn!==bsn){return asn-bsn===1}
if(adot===-1){adot=a.length}
if(bdot===-1){bdot=b.length}
var az=a.slice(asn,adot).replace(/^0+/,""),bz=b.slice(bsn,bdot).replace(/^0+/,""),ax=a.slice(adot+1),bx=b.slice(bdot+1);
if(az.length<bz.length){return asn===0}else if(az.length>bz.length){return asn!==0}else if(az!==bz){return (asn===0)===(az<bz)}else{return ax.replace(/0*$/,"")<bx.replace(/0*$/,"")}
}
function gtR(a,b){
var asn=a.search(/\-/)+1,bsn=b.search(/\-/)+1,adot=a.search(/\./),bdot=b.search(/\./);
if(asn!==bsn){return bsn-asn===1}
if(adot===-1){adot=a.length}
if(bdot===-1){bdot=b.length}
var az=a.slice(asn,adot).replace(/^0+/,""),bz=b.slice(bsn,bdot).replace(/^0+/,""),ax=a.slice(adot+1),bx=b.slice(bdot+1);
if(az.length>bz.length){return asn===0}else if(az.length<bz.length){return asn!==0}else if(az!==bz){return (asn===0)===(az>bz)}else{return ax.replace(/0*$/,"")>bx.replace(/0*$/,"")}
}
function ltEqR(a,b){
var asn=a.search(/\-/)+1,bsn=b.search(/\-/)+1,adot=a.search(/\./),bdot=b.search(/\./);
if(asn!==bsn){return asn-bsn===1}
if(adot===-1){adot=a.length}
if(bdot===-1){bdot=b.length}
var az=a.slice(asn,adot).replace(/^0+/,""),bz=b.slice(bsn,bdot).replace(/^0+/,""),ax=a.slice(adot+1),bx=b.slice(bdot+1);
if(az.length<bz.length){return asn===0}else if(az.length>bz.length){return asn!==0}else if(az!==bz){return (asn===0)===(az<bz)}else{return ax.replace(/0*$/,"")<=bx.replace(/0*$/,"")}
}
function gtEqR(a,b){
var asn=a.search(/\-/)+1,bsn=b.search(/\-/)+1,adot=a.search(/\./),bdot=b.search(/\./);
if(asn!==bsn){return bsn-asn===1}
if(adot===-1){adot=a.length}
if(bdot===-1){bdot=b.length}
var az=a.slice(asn,adot).replace(/^0+/,""),bz=b.slice(bsn,bdot).replace(/^0+/,""),ax=a.slice(adot+1),bx=b.slice(bdot+1);
if(az.length>bz.length){return asn===0}else if(az.length<bz.length){return asn!==0}else if(az!==bz){return (asn===0)===(az>bz)}else{return ax.replace(/0*$/,"")>=bx.replace(/0*$/,"")}
}
function eqR(a,b){
var asn=a.search(/\-/)+1,bsn=b.search(/\-/)+1;
a=a.slice(asn).replace(/^0+|0+$/g,"");
b=b.slice(bsn).replace(/^0+|0+$/g,"");
if(a.search(dot)===-1){a+="."}
if(b.search(dot)===-1){b+="."}
return asn===bsn&&a===b;
}
function cwLt(a,b,cw){
a=a.replace(/^0+/,"");
b=b.replace(/^0+/,"");
var La=a.length+cw,Lb=b.length;
if(La>Lb){return false} else if(La<Lb){return true} else {return a<b}
}
function ltQ(a,b){
return a.length===b.length?a<b:a.length<b.length;
}
function gtQ(a,b){
return a.length===b.length?a>b:a.length>b.length;
}
function fu(numstr){if(numstr[0]==="-"){return numstr.slice(1)}else{return "-"+numstr}}
function moveDeci(nstr,mn){
var lenn=nstr.length,orig=nstr.search(/\./),zers="",moved=nstr.replace(/\D/g,""),zl=0;
if(orig===-1){orig=lenn}
if(mn>0){zl=orig+mn-lenn+(orig!==lenn);while(zers.length<zl){zers+="0"};moved+=zers;zl=orig+mn}else{zl=1-orig-mn;while(zers.length<zl){zers+="0"};moved=zers+moved;zl=orig+mn+zers.length}
moved=moved.slice(0,zl)+"."+moved.slice(zl);
return moved;
}

function plus(a,b){
if(b.length>a.length){var h=a;a=b;b=h;}
var lap15=a.length+15,lbp15=b.length+15;
var z=0,t=0,dl=lap15-lbp15,s="";
for(var i=lbp15-15;i>0;i-=15){
z=parseInt(a.slice(i+dl-lap15,i+dl),10)+parseInt(b.slice(i-lbp15,i),10)+z/1000000000000000;
t=z%1000000000000000;
s=(t<100000000000000?("00000000000000"+t).slice(-15):t)+s;
z-=t;
}
for(i+=dl;z>0&&i>0;i-=15){
z=parseInt(a.slice(i-lap15,i),10)+z/1000000000000000;
t=z%1000000000000000;
s=(t<100000000000000?("00000000000000"+t).slice(-15):t)+s;
z-=t;
}
if(i>0){
s=a.slice(0,i)+s;
}
if(z>0){
s=z/1000000000000000+s;
}
return s.replace(/^0+(?!$)/,"");
}

function minus(a,b){
var lap15=a.length+15,lbp15=b.length+15;
var z=1000000000000000,t=0,dl=lap15-lbp15,d="";
for(var i=lbp15-15;i>0;i-=15){
z=parseInt(a.slice(i+dl-lap15,i+dl),10)-parseInt(b.slice(i-lbp15,i),10)+999999999999999+z/1000000000000000;
t=z%1000000000000000;
d=(t<100000000000000?("00000000000000"+t).slice(-15):t)+d;
z-=t;
}
for(i+=dl;z===0&&i>0;i-=15){
z=parseInt(a.slice(i-lap15,i),10)+999999999999999+z/1000000000000000;
t=z%1000000000000000;
d=(t<100000000000000?("00000000000000"+t).slice(-15):t)+d;
z-=t;
}
if(i>0){
d=a.slice(0,i)+d;
}
return d.replace(/^0+(?!$)/,"");
}

function cwPlus(m,n,cw){
var lm=m.length,ln=n.length,zeros="";
if(cw>=ln){while(cw>zeros.length+ln){zeros+="0"};return m+zeros+n}
if(-cw>=lm){while(-cw>zeros.length+lm){zeros+="0"};return n+zeros+m}
var mex="",nex="";
if(cw>0){nex=n.slice(-cw);n=n.slice(0,-cw);return plus(m,n)+nex}else{mex=m.slice(lm+cw);m=m.slice(0,lm+cw);return plus(n,m)+mex}
}
function cwMinus(m,n,cw){
var lm=m.length,ln=n.length,ext="";
if(cw>=0){while(ext.length<cw){ext+="0"};m+=ext;return minus(m,n)}
if(cw<0){ext=m.slice(cw);m=m.slice(0,cw);return minus(m,n)+ext}
}
function plusR(x,y){
var xd=x.search(/\./),yd=y.search(/\./),xsn=x.search(/\-/)+1,ysn=y.search(/\-/)+1,ve="",sgn="";
if(xd===-1){xd=x.length-1}
if(yd===-1){yd=y.length-1}
var xxw=x.length-xd-1,yyw=y.length-yd-1;
var diff=yyw-xxw,deci=xxw<yyw?yyw:xxw,minw=deci+1;
var xz=x.replace(/\D/g,""),yz=y.replace(/\D/g,"");
switch(xsn+ysn){
case 0:ve=cwPlus(xz,yz,diff);while(ve.length<minw){ve="0"+ve};return ve.slice(0,ve.length-deci)+"."+ve.slice(ve.length-deci);break;
case 2:ve=cwPlus(xz,yz,diff);while(ve.length<minw){ve="0"+ve};return "-"+ve.slice(0,ve.length-deci)+"."+ve.slice(ve.length-deci);break;
default:if(cwLt(xz,yz,diff)){ve=cwMinus(yz,xz,-diff);sgn=(ysn===1?"-":"")}else if(xz===yz){ve="0";sgn=""}else{ve=cwMinus(xz,yz,diff);sgn=(xsn===1?"-":"")};while(ve.length<minw){ve="0"+ve};return sgn+ve.slice(0,ve.length-deci)+"."+ve.slice(ve.length-deci);
}
}
function minusR(x,y){
var xd=x.search(/\./),yd=y.search(/\./),xsn=x.search(/\-/)+1,ysn=y.search(/\-/)+1,ve="",sgn="";
if(xd===-1){xd=x.length-1}
if(yd===-1){yd=y.length-1}
var xxw=x.length-xd-1,yyw=y.length-yd-1;
var diff=yyw-xxw,deci=xxw<yyw?yyw:xxw,minw=deci+1;
var xz=x.replace(/\D/g,""),yz=y.replace(/\D/g,"");
switch(xsn-ysn){
case -1:ve=cwPlus(xz,yz,diff);while(ve.length<minw){ve="0"+ve};return ve.slice(0,ve.length-deci)+"."+ve.slice(ve.length-deci);break;
case 1:ve=cwPlus(xz,yz,diff);while(ve.length<minw){ve="0"+ve};return "-"+ve.slice(0,ve.length-deci)+"."+ve.slice(ve.length-deci);break;
default:if(cwLt(xz,yz,diff)){ve=cwMinus(yz,xz,-diff);sgn=(xsn===0?"-":"")}else if(xz===yz){ve="0";sgn=""}else{ve=cwMinus(xz,yz,diff);sgn=(xsn===1?"-":"")};while(ve.length<minw){ve="0"+ve};return sgn+ve.slice(0,ve.length-deci)+"."+ve.slice(ve.length-deci);
}
}

function multiply(a,b){
var lap7=a.length+7,lbp7=b.length+7,lsp15=0,lpp15=0,dl=0;
var bn=0,z=0,t=0,s="",p="",m="";
var an=[];
for(var i=lap7-7;i>0;i-=7){
an.push(parseInt(a.slice(i-lap7,i),10));
}
lap7=an.length;
for(var i=lbp7-7;i>0;i-=7){
bn=parseInt(b.slice(i-lbp7,i),10);
if(!bn){p="0000000"+p;continue;}
for(var k=0;k<lap7;k++){
z=an[k]*bn+z/10000000;
t=z%10000000;
s=(t<1000000?("000000"+t).slice(-7):t)+s;
z-=t;
}
if(z>0){
s=z/10000000+s;
z=0;
}
m=p.slice(i-lbp7+7);
lsp15=s.length+15;
lpp15=p.length+15;
dl=lsp15-lpp15+lbp7-i-7;
//ls-(lp-n-cw)===ls-lp+n+lbp7-i-7;
for(var n=p.length+i-lbp7+7;n>0;n-=15){
z=parseInt(s.slice(n+dl-lsp15,n+dl),10)+parseInt(p.slice(n-lpp15,n),10)+z/1000000000000000;
t=z%1000000000000000;
m=(t<100000000000000?("00000000000000"+t).slice(-15):t)+m;
z-=t;
}
for(n+=dl;z>0&&n>0;n-=15){
z=parseInt(s.slice(n-lsp15,n),10)+z/1000000000000000;
t=z%1000000000000000;
m=(t<100000000000000?("00000000000000"+t).slice(-15):t)+m;
z-=t;
}
if(n>0){
m=s.slice(0,n)+m;
}
if(z>0){
m=z/1000000000000000+m;
z=0;
}
s="";
p=m.replace(/^0+(?!$)/,"");
}
return p.replace(/^0+(?!$)/,"");
}

function multiplyR(x,y){
var xd=x.search(/\./),yd=y.search(/\./),xsn=x.search(/\-/)+1,ysn=y.search(/\-/)+1;
if(xd===-1){xd=x.length-1}
if(yd===-1){yd=y.length-1}
var deci=x.length+y.length-xd-yd-2,minw=deci+1;
var xz=x.replace(/\D/g,""),yz=y.replace(/\D/g,"");
var ve=multiply(xz,yz);
while(ve.length<minw){ve="0"+ve}
if(xsn!==ysn){return "-"+ve.slice(0,ve.length-deci)+"."+ve.slice(ve.length-deci)}else{return ve.slice(0,ve.length-deci)+"."+ve.slice(ve.length-deci)}
}

function invert(n,d){
var lm1=n.length-1,z="1",s="";
var b2=multiply(n,"2"),b3=multiply(n,"3"),b4=multiply(n,"4"),b5=multiply(n,"5"),b6=multiply(n,"6"),b7=multiply(n,"7"),b8=multiply(n,"8"),b9=multiply(n,"9");
while(s.length<lm1){s+="0";}
z+=s;
for(var i=0;i<=d&&z!=="00";i++){
switch(true){
case gtQ(n,z):s+="0";break;
case gtQ(b2,z):s+="1";z=minus(z,n);break;
case gtQ(b3,z):s+="2";z=minus(z,b2);break;
case gtQ(b4,z):s+="3";z=minus(z,b3);break;
case gtQ(b5,z):s+="4";z=minus(z,b4);break;
case gtQ(b6,z):s+="5";z=minus(z,b5);break;
case gtQ(b7,z):s+="6";z=minus(z,b6);break;
case gtQ(b8,z):s+="7";z=minus(z,b7);break;
case gtQ(b9,z):s+="8";z=minus(z,b8);break;
default:s+="9";z=minus(z,b9);break;
}
z+="0";
}
s=s[0]+"."+s.slice(1);
return s;
}
function invertR(num,de){
var numd=num.search(/\./),sn=num.search(/\-/)+1;
if(numd===-1){numd=num.length-1}
var numz=num.replace(/\D/g,"");
var mD=num.search(/0*$/)-numd-1;
numz=numz.replace(/^0+|0+$/g,"");
var ve=invert(numz,de+numz.length+1);
ve=moveDeci(ve,mD);
if(sn===1){return "-"+ve}else{return ve}
}

function divide(a,b,d){
var lb=b.length,s="";
var b2=multiply(b,"2"),b3=multiply(b,"3"),b4=multiply(b,"4"),b5=multiply(b,"5"),b6=multiply(b,"6"),b7=multiply(b,"7"),b8=multiply(b,"8"),b9=multiply(b,"9");
while(a.length<lb){a+="0";s+="0"}
var la=a.length,z=a.slice(0,lb);
d+=lb;
for(var i=lb;i<=d&&(i<=la||z!=="0");i++){
switch(true){
case gtQ(b,z):s+="0";break;
case gtQ(b2,z):s+="1";z=minus(z,b);break;
case gtQ(b3,z):s+="2";z=minus(z,b2);break;
case gtQ(b4,z):s+="3";z=minus(z,b3);break;
case gtQ(b5,z):s+="4";z=minus(z,b4);break;
case gtQ(b6,z):s+="5";z=minus(z,b5);break;
case gtQ(b7,z):s+="6";z=minus(z,b6);break;
case gtQ(b8,z):s+="7";z=minus(z,b7);break;
case gtQ(b9,z):s+="8";z=minus(z,b8);break;
default:s+="9";z=minus(z,b9);break;
}
z=z==="0"?(a[i]||"0"):z+(a[i]||"0");
}
la+=1-lb;
s=s.slice(0,la)+"."+s.slice(la);
return s;
}
function divideR(x,y,de){
var xd=x.search(/\./),yd=y.search(/\./),xsn=x.search(/\-/)+1,ysn=y.search(/\-/)+1;
if(xd===-1){xd=x.length-1}
if(yd===-1){yd=y.length-1}
var xz=x.replace(/\D/g,""),yz=y.replace(/\D/g,"");
var mD=xd+y.search(/0*$/)-x.search(/0*$/)-yd;
xz=xz.replace(/^0+|0+$/g,"");yz=yz.replace(/^0+|0+$/g,"");
var ve=divide(xz,yz,de+yz.length+1);
ve=moveDeci(ve,mD);
if(xsn===ysn){return ve}else{return "-"+ve}
}

function fact(n){
var f=[1],l=1,z=0,t=0;
for(var i=2;i<=n;i++){
for(var k=0;k<l;k++){
z=f[k]*i+z/10000000;
t=z%10000000;
f[k]=t;
z-=t;
}
if(z){f.push(z/10000000);l++;z=0;}
}
var s=f[l-1]+"";
for(var k=l-2;k>=0;k--){
s+=f[k]>999999?f[k]:("000000"+f[k]).slice(-7);
}
return s;
}

function divideN(ai,bi){
var ail=ai.length,bil=bi.length-1,sh="";
var bi2=multiply(bi,"2"),bi3=multiply(bi,"3"),bi4=multiply(bi,"4"),bi5=multiply(bi,"5"),bi6=multiply(bi,"6"),bi7=multiply(bi,"7"),bi8=multiply(bi,"8"),bi9=multiply(bi,"9");
var zs=ai.slice(0,bil);
for(var wi=bil;wi<ail;wi++){
zs=zs==="0"?ai[wi]:zs+ai[wi];
switch(true){
case gtQ(bi,zs):sh+="0";break;
case gtQ(bi2,zs):sh+="1";zs=minus(zs,bi);break;
case gtQ(bi3,zs):sh+="2";zs=minus(zs,bi2);break;
case gtQ(bi4,zs):sh+="3";zs=minus(zs,bi3);break;
case gtQ(bi5,zs):sh+="4";zs=minus(zs,bi4);break;
case gtQ(bi6,zs):sh+="5";zs=minus(zs,bi5);break;
case gtQ(bi7,zs):sh+="6";zs=minus(zs,bi6);break;
case gtQ(bi8,zs):sh+="7";zs=minus(zs,bi7);break;
case gtQ(bi9,zs):sh+="8";zs=minus(zs,bi8);break;
default:sh+="9";zs=minus(zs,bi9);break;
}
}
sh=sh.replace(/^0+(?!$)/,"");
return sh;
}
function mod(ai,bi){
var ail=ai.length,bil=bi.length-1;
var bi2=multiply(bi,"2"),bi3=multiply(bi,"3"),bi4=multiply(bi,"4"),bi5=multiply(bi,"5"),bi6=multiply(bi,"6"),bi7=multiply(bi,"7"),bi8=multiply(bi,"8"),bi9=multiply(bi,"9");
var zs=ai.slice(0,bil);
for(var wi=bil;wi<ail;wi++){
zs=zs==="0"?ai[wi]:zs+ai[wi];
switch(true){
case gtQ(bi,zs):break;
case gtQ(bi2,zs):zs=minus(zs,bi);break;
case gtQ(bi3,zs):zs=minus(zs,bi2);break;
case gtQ(bi4,zs):zs=minus(zs,bi3);break;
case gtQ(bi5,zs):zs=minus(zs,bi4);break;
case gtQ(bi6,zs):zs=minus(zs,bi5);break;
case gtQ(bi7,zs):zs=minus(zs,bi6);break;
case gtQ(bi8,zs):zs=minus(zs,bi7);break;
case gtQ(bi9,zs):zs=minus(zs,bi8);break;
default:zs=minus(zs,bi9);break;
}
}
zs=zs.replace(/^0+(?!$)/,"");
return zs;
}
function divideM(ai,bi){
var ail=ai.length,bil=bi.length-1,sh="";
var bi2=multiply(bi,"2"),bi3=multiply(bi,"3"),bi4=multiply(bi,"4"),bi5=multiply(bi,"5"),bi6=multiply(bi,"6"),bi7=multiply(bi,"7"),bi8=multiply(bi,"8"),bi9=multiply(bi,"9");
var zs=ai.slice(0,bil);
for(var wi=bil;wi<ail;wi++){
zs=zs==="0"?ai[wi]:zs+ai[wi];
switch(true){
case gtQ(bi,zs):sh+="0";break;
case gtQ(bi2,zs):sh+="1";zs=minus(zs,bi);break;
case gtQ(bi3,zs):sh+="2";zs=minus(zs,bi2);break;
case gtQ(bi4,zs):sh+="3";zs=minus(zs,bi3);break;
case gtQ(bi5,zs):sh+="4";zs=minus(zs,bi4);break;
case gtQ(bi6,zs):sh+="5";zs=minus(zs,bi5);break;
case gtQ(bi7,zs):sh+="6";zs=minus(zs,bi6);break;
case gtQ(bi8,zs):sh+="7";zs=minus(zs,bi7);break;
case gtQ(bi9,zs):sh+="8";zs=minus(zs,bi8);break;
default:sh+="9";zs=minus(zs,bi9);break;
}
}
sh=sh.replace(/^0+(?!$)/,"");
zs=zs.replace(/^0+(?!$)/,"");
return sh+"......"+zs;
}
function divideMod(ai,bi){
var ail=ai.length,bil=bi.length-1,sh="";
var bi2=multiply(bi,"2"),bi3=multiply(bi,"3"),bi4=multiply(bi,"4"),bi5=multiply(bi,"5"),bi6=multiply(bi,"6"),bi7=multiply(bi,"7"),bi8=multiply(bi,"8"),bi9=multiply(bi,"9");
var zs=ai.slice(0,bil);
for(var wi=bil;wi<ail;wi++){
zs=zs==="0"?ai[wi]:zs+ai[wi];
switch(true){
case gtQ(bi,zs):sh+="0";break;
case gtQ(bi2,zs):sh+="1";zs=minus(zs,bi);break;
case gtQ(bi3,zs):sh+="2";zs=minus(zs,bi2);break;
case gtQ(bi4,zs):sh+="3";zs=minus(zs,bi3);break;
case gtQ(bi5,zs):sh+="4";zs=minus(zs,bi4);break;
case gtQ(bi6,zs):sh+="5";zs=minus(zs,bi5);break;
case gtQ(bi7,zs):sh+="6";zs=minus(zs,bi6);break;
case gtQ(bi8,zs):sh+="7";zs=minus(zs,bi7);break;
case gtQ(bi9,zs):sh+="8";zs=minus(zs,bi8);break;
default:sh+="9";zs=minus(zs,bi9);break;
}
}
sh=sh.replace(/^0+(?!$)/,"");
zs=zs.replace(/^0+(?!$)/,"");
return [sh,zs];
}
function sqrt(num,d){
var numl=num.length,rt="",ss="0";
var f=(numl%2===0)?2:1,zs=num.slice(0,f);
for(var wi=f;wi<d;wi+=2){
switch(true){
case gtQ(plus(ss,"1"),zs):rt+="0";break;
case gtQ(multiply(plus(ss,"2"),"2"),zs):rt+="1";zs=minus(zs,plus(ss,"1"));break;
case gtQ(multiply(plus(ss,"3"),"3"),zs):rt+="2";zs=minus(zs,multiply(plus(ss,"2"),"2"));break;
case gtQ(multiply(plus(ss,"4"),"4"),zs):rt+="3";zs=minus(zs,multiply(plus(ss,"3"),"3"));break;
case gtQ(multiply(plus(ss,"5"),"5"),zs):rt+="4";zs=minus(zs,multiply(plus(ss,"4"),"4"));break;
case gtQ(multiply(plus(ss,"6"),"6"),zs):rt+="5";zs=minus(zs,multiply(plus(ss,"5"),"5"));break;
case gtQ(multiply(plus(ss,"7"),"7"),zs):rt+="6";zs=minus(zs,multiply(plus(ss,"6"),"6"));break;
case gtQ(multiply(plus(ss,"8"),"8"),zs):rt+="7";zs=minus(zs,multiply(plus(ss,"7"),"7"));break;
case gtQ(multiply(plus(ss,"9"),"9"),zs):rt+="8";zs=minus(zs,multiply(plus(ss,"8"),"8"));break;
default:rt+="9";zs=minus(zs,multiply(plus(ss,"9"),"9"));break;
}
num+="00";
zs=zs==="0"?num.slice(wi,wi+2):zs+num.slice(wi,wi+2);
ss=multiply(rt,"20");
}
f=(numl+numl%2)/2;
rt=rt.slice(0,f)+"."+rt.slice(f);
return rt;
}
function sqrtN(num){
var numl=num.length,rt="",ss="0";
var f=(numl%2===0)?2:1,zs=num.slice(0,f);
for(var wi=f;wi<=numl;wi+=2){
switch(true){
case gtQ(plus(ss,"1"),zs):rt+="0";break;
case gtQ(multiply(plus(ss,"2"),"2"),zs):rt+="1";zs=minus(zs,plus(ss,"1"));break;
case gtQ(multiply(plus(ss,"3"),"3"),zs):rt+="2";zs=minus(zs,multiply(plus(ss,"2"),"2"));break;
case gtQ(multiply(plus(ss,"4"),"4"),zs):rt+="3";zs=minus(zs,multiply(plus(ss,"3"),"3"));break;
case gtQ(multiply(plus(ss,"5"),"5"),zs):rt+="4";zs=minus(zs,multiply(plus(ss,"4"),"4"));break;
case gtQ(multiply(plus(ss,"6"),"6"),zs):rt+="5";zs=minus(zs,multiply(plus(ss,"5"),"5"));break;
case gtQ(multiply(plus(ss,"7"),"7"),zs):rt+="6";zs=minus(zs,multiply(plus(ss,"6"),"6"));break;
case gtQ(multiply(plus(ss,"8"),"8"),zs):rt+="7";zs=minus(zs,multiply(plus(ss,"7"),"7"));break;
case gtQ(multiply(plus(ss,"9"),"9"),zs):rt+="8";zs=minus(zs,multiply(plus(ss,"8"),"8"));break;
default:rt+="9";zs=minus(zs,multiply(plus(ss,"9"),"9"));break;
}
zs=zs==="0"?num.slice(wi,wi+2):zs+num.slice(wi,wi+2);
ss=multiply(rt,"20");
}
return rt;
}
function sqrtR(num,d){
var dec=num.search(/\./),nl=num.length;
if(dec===-1){dec=nl-1}
var deci=nl-dec-1;
nl=deci%2;
num=num.replace(/\D/g,"")+((nl===0)?"":"0");
deci=-(deci+nl)/2;
return moveDeci(sqrt(num,d*2+1),deci);
}
function pwr(b,ex){
var p=b,bstr="";
while(ex!==0){
bstr=ex%2+bstr;
ex=(ex-ex%2)/2;
}
for(var i=1;i<bstr.length;i++){
p=multiplyR(p,p);
if(bstr[i]==="1"){p=multiplyR(p,b)}
}
return p;
}
