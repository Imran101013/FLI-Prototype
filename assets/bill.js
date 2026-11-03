/* FLI home, variant B: set every billing line to the full measure, like a compositor
   choosing wood type. Width axis first, then size. Without JS the lines simply wrap.

   WordPress / Elementor (free): driven by CSS classes only, so editors never touch data attributes.
   - .fit-lines  on a Heading widget (or a theme element). Each direct <span> child of the heading is a line;
                 with no spans, the whole heading is one line.
   - .bill-names on a Text Editor widget holding a <ul>. The names are broken into balanced lines, each fitted.
   Settings come from CSS custom properties in assets/bill.css:
     lines: --fit-r (share of the width as preferred size), --fit-lo/--fit-hi (width-axis range), --fit-min, --fit-max
     bills: --bill-r, --bill-min, --bill-max, --bill-lo, --bill-hi, --bill-lh (leading), --bill-stretch (0 = never stretch) */
(function(){
  var d=document;

  function inner(el){var cs=getComputedStyle(el);return el.clientWidth-parseFloat(cs.paddingLeft)-parseFloat(cs.paddingRight);}
  function span(els){
    var l=1e9,r=-1e9;
    els.forEach(function(e){var rs=e.getClientRects();for(var i=0;i<rs.length;i++){if(rs[i].left<l)l=rs[i].left;if(rs[i].right>r)r=rs[i].right;}});
    return r-l;
  }
  function set(els,size,st){els.forEach(function(e){e.style.fontSize=size+'px';if(st!=null)e.style.fontStretch=st+'%';});}
  function cv(el,name,dflt){var v=getComputedStyle(el).getPropertyValue(name).trim();return v===''||isNaN(parseFloat(v))?dflt:parseFloat(v);}

  /* fill width W with one line made of els */
  function fit(els,W,o){
    var size=o.size,st=null,w;
    if(o.lo!==o.hi){
      set(els,size,o.hi);w=span(els);
      if(w<=W){st=o.hi;size=Math.min(o.max,size*W/w);}
      else{
        set(els,size,o.lo);w=span(els);
        if(w>=W){st=o.lo;size=Math.max(o.min,size*W/w);}
        else{var a=o.lo,b=o.hi;for(var i=0;i<9;i++){var m=(a+b)/2;set(els,size,m);if(span(els)>W)b=m;else a=m;}st=a;}
      }
    }else{
      set(els,size,null);w=span(els);size=Math.max(o.min,Math.min(o.max,size*W/w));
    }
    set(els,size,st);
    w=span(els);if(w>W){size*=W/w;set(els,size,st);}
  }

  /* the heading element inside a widget wrapper, or the element itself */
  function target(box){return box.matches('h1,h2,h3,h4,h5,h6,p')?box:box.querySelector('h1,h2,h3,h4,h5,h6,p');}

  /* single-element lines: the hero headline, the ledger, the footer signature */
  function fitLines(box){
    var t=target(box);if(!t)return;
    var lines=[].slice.call(t.children).filter(function(c){return c.tagName==='SPAN';});
    if(!lines.length){
      var s=d.createElement('span');while(t.firstChild)s.appendChild(t.firstChild);t.appendChild(s);lines=[s];
    }
    var W=inner(box)*0.997;
    lines.forEach(function(el){
      el.classList.add('fit-line');
      var r=cv(el,'--fit-r',0.1),pref=W*r;
      fit([el],W,{size:pref,lo:cv(el,'--fit-lo',62),hi:cv(el,'--fit-hi',128),min:cv(el,'--fit-min',20),max:cv(el,'--fit-max',pref*1.5)});
    });
  }

  /* split widths into k consecutive lines whose lengths are as even as possible */
  function balance(ws,k){
    var n=ws.length,pre=[0],i,j,l;for(i=0;i<n;i++)pre.push(pre[i]+ws[i]);
    var T=pre[n]/k,dp=[],cut=[];
    for(l=0;l<=k;l++){dp.push([]);cut.push([]);for(j=0;j<=n;j++){dp[l].push(Infinity);cut[l].push(0);}}
    dp[0][0]=0;
    for(l=1;l<=k;l++)for(j=l;j<=n;j++)for(i=l-1;i<j;i++){
      if(dp[l-1][i]===Infinity)continue;
      var s=pre[j]-pre[i],c=dp[l-1][i]+(s-T)*(s-T);
      if(c<dp[l][j]){dp[l][j]=c;cut[l][j]=i;}
    }
    var out=[];j=n;for(l=k;l>0;l--){i=cut[l][j];out.unshift([i,j]);j=i;}
    return out;
  }

  /* a list of names broken into balanced lines, each fitted */
  function bill(box){
    var ul=box.matches('ul')?box:box.querySelector('ul');if(!ul)return;
    var items=[].slice.call(ul.children).filter(function(c){return c.tagName==='LI';});if(!items.length)return;
    var W=inner(ul)*0.995,stretch=cv(box,'--bill-stretch',1)!==0;
    ul.classList.add('built');
    items.forEach(function(li){li.classList.remove('eol');li.style.fontSize='100px';if(stretch)li.style.fontStretch='100%';});
    var ws=items.map(function(li){return span([li]);}),total=ws.reduce(function(a,b){return a+b;},0);
    var pref=Math.max(cv(box,'--bill-min',30),Math.min(cv(box,'--bill-max',90),W*cv(box,'--bill-r',0.06)));
    var k=Math.min(items.length,Math.max(1,Math.round(total*pref/100/W)));
    var lines=balance(ws,k).map(function(r){return items.slice(r[0],r[1]);});
    lines.forEach(function(line){line[line.length-1].classList.add('eol');});
    var lo=stretch?cv(box,'--bill-lo',62):100,hi=stretch?cv(box,'--bill-hi',126):100;
    lines.forEach(function(line){fit(line,W,{size:pref,lo:lo,hi:hi,min:pref*0.8,max:pref*1.1});});
    /* one leading for the whole bill, whatever size each line ended at */
    var lh=Math.round(pref*cv(box,'--bill-lh',1.04))+'px';items.forEach(function(li){li.style.lineHeight=lh;});
  }

  var lastW=0;
  function all(){
    var vw=d.documentElement.clientWidth;if(vw===lastW)return;lastW=vw;
    d.querySelectorAll('.fit-lines').forEach(fitLines);
    d.querySelectorAll('.bill-names').forEach(bill);
  }
  all();
  var raf;window.addEventListener('resize',function(){cancelAnimationFrame(raf);raf=requestAnimationFrame(all);});
  if(d.fonts&&d.fonts.ready)d.fonts.ready.then(function(){lastW=0;all();var h=d.querySelector('.hero-title');if(h)h.classList.add('printed');});
})();
