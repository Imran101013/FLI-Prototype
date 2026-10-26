/* FLI — shared behaviour for every page */
(function(){
  var d=document, root=d.body.getAttribute('data-root')||'';
  d.documentElement.classList.add('js');

  /* mobile nav + sub-menus */
  var nav=d.getElementById('nav'), mb=d.querySelector('.menu-btn');
  if(mb&&nav){
    mb.addEventListener('click',function(){
      var o=nav.classList.toggle('open');mb.setAttribute('aria-expanded',o);
    });
    nav.querySelectorAll('.sub-tg').forEach(function(b){
      b.addEventListener('click',function(){
        var li=b.closest('li'),o=li.classList.toggle('exp');b.setAttribute('aria-expanded',o);
      });
    });
    d.addEventListener('keydown',function(e){if(e.key==='Escape'&&nav.classList.contains('open')){nav.classList.remove('open');mb.setAttribute('aria-expanded',false);mb.focus();}});
  }

  /* reveal on scroll */
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12});
    d.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});
  } else d.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in');});

  /* tabs (home programmes, media) */
  d.querySelectorAll('[data-tabs]').forEach(function(w){
    var tabs=w.querySelectorAll('[role="tab"]'),panels=w.querySelectorAll('[role="tabpanel"]');
    function show(i){
      tabs.forEach(function(t,j){t.classList.toggle('active',i===j);t.setAttribute('aria-selected',i===j);t.tabIndex=i===j?0:-1;});
      panels.forEach(function(p,j){p.classList.toggle('active',i===j);p.hidden=i!==j;});
    }
    tabs.forEach(function(t,i){
      t.addEventListener('click',function(){show(i);});
      t.addEventListener('keydown',function(e){
        var k=e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:0;
        if(k){var n=(i+k+tabs.length)%tabs.length;show(n);tabs[n].focus();}
      });
    });
  });

  /* filterable lists: languages, library, papers, news, keyboards, table */
  d.querySelectorAll('[data-filter]').forEach(function(box){
    var list=d.getElementById(box.getAttribute('data-filter')),
        items=[].slice.call(list.querySelectorAll('[data-item]')),
        state={},q='',
        count=box.parentNode.querySelector('[data-count]'),
        empty=box.parentNode.querySelector('.empty'),
        sortSel=box.querySelector('[data-sort]');
    function norm(s){return (s||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');}
    function apply(){
      var n=0;
      items.forEach(function(it){
        var ok=true;
        for(var k in state){ if(state[k]&&(' '+(it.getAttribute('data-'+k)||'')+' ').indexOf(' '+state[k]+' ')<0){ok=false;break;} }
        if(ok&&q){ ok=norm(it.getAttribute('data-text')||it.textContent).indexOf(q)>-1; }
        it.classList.toggle('hide',!ok); if(ok)n++;
      });
      if(count)count.textContent=n;
      if(empty)empty.classList.toggle('show',n===0);
      if(box.hasAttribute('data-hash')){
        var h=[];for(var k in state)if(state[k])h.push(k+'='+state[k]);
        history.replaceState(null,'',h.length?'#'+h.join('&'):location.pathname);
      }
    }
    box.querySelectorAll('[data-f]').forEach(function(c){
      var k=c.getAttribute('data-f');
      if(c.tagName==='SELECT'){ c.addEventListener('change',function(){state[k]=c.value;apply();}); return; }
      c.addEventListener('click',function(){
        var v=c.getAttribute('data-v');
        box.querySelectorAll('[data-f="'+k+'"]').forEach(function(o){o.setAttribute('aria-pressed',o===c);});
        state[k]=v;apply();
      });
    });
    var qi=box.querySelector('[data-q]');
    if(qi)qi.addEventListener('input',function(){q=norm(qi.value.trim());apply();});
    if(sortSel)sortSel.addEventListener('change',function(){
      var m=sortSel.value;
      items.sort(function(a,b){
        if(m==='az')return (a.getAttribute('data-title')||'').localeCompare(b.getAttribute('data-title')||'');
        var ya=+a.getAttribute('data-year')||0,yb=+b.getAttribute('data-year')||0;
        return m==='old'?ya-yb:yb-ya;
      });
      items.forEach(function(it){list.appendChild(it);});
    });
    d.querySelectorAll('[data-reset="'+list.id+'"]').forEach(function(r){r.addEventListener('click',function(){
      state={};q='';if(qi)qi.value='';
      box.querySelectorAll('[data-f]').forEach(function(c){if(c.tagName==='SELECT')c.value='';else c.setAttribute('aria-pressed',c.getAttribute('data-v')==='');});
      apply();
    });});
    /* deep links like publications.html#series=ver or #lang=khowar */
    function fromHash(){
      if(location.hash.indexOf('=')<0)return;
      var scope=box.parentNode;
      location.hash.slice(1).split('&').forEach(function(p){
        var kv=p.split('='),v=decodeURIComponent(kv[1]||''),c=scope.querySelector('[data-f="'+kv[0]+'"][data-v="'+v+'"]'),s=scope.querySelector('select[data-f="'+kv[0]+'"]');
        if(c){scope.querySelectorAll('[data-f="'+kv[0]+'"]').forEach(function(o){o.setAttribute('aria-pressed',o===c);});state[kv[0]]=v;}
        else if(s){s.value=v;state[kv[0]]=v;}
      });
      apply();
    }
    fromHash();
    window.addEventListener('hashchange',function(){fromHash();list.scrollIntoView({behavior:'smooth',block:'start'});});
  });

  /* table-of-contents highlight */
  var toc=d.querySelector('.toc');
  if(toc&&'IntersectionObserver' in window){
    var links={};toc.querySelectorAll('a[href^="#"]').forEach(function(a){links[a.getAttribute('href').slice(1)]=a;});
    var tio=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){for(var k in links)links[k].classList.toggle('on',k===e.target.id);}});},{rootMargin:'-30% 0px -60% 0px'});
    for(var id in links){var el=d.getElementById(id);if(el)tio.observe(el);}
  }

  /* newsletter forms (prototype: no network call) */
  d.querySelectorAll('[data-subscribe]').forEach(function(f){
    f.addEventListener('submit',function(e){
      e.preventDefault();var i=f.querySelector('input[type=email]');
      if(!i.value||i.validity.typeMismatch){i.focus();i.setAttribute('aria-invalid','true');return;}
      f.parentNode.classList.add('sent');
    });
  });

  /* contact form validation states */
  var cf=d.getElementById('contact-form');
  if(cf){
    cf.addEventListener('submit',function(e){
      e.preventDefault();var bad=null;
      cf.querySelectorAll('[required]').forEach(function(el){
        var f=el.closest('.field')||el.closest('.consent'),ok=el.type==='checkbox'?el.checked:(el.value.trim()&&el.checkValidity());
        f.classList.toggle('bad',!ok);el.setAttribute('aria-invalid',!ok);if(!ok&&!bad)bad=el;
      });
      if(bad){bad.focus();return;}
      cf.parentNode.classList.add('form-done');
      var s=cf.parentNode.querySelector('.sent-box');if(s){s.tabIndex=-1;s.focus();}
    });
    cf.querySelectorAll('input,textarea,select').forEach(function(el){el.addEventListener('input',function(){var f=el.closest('.field')||el.closest('.consent');if(f)f.classList.remove('bad');});});
    var sub=new URLSearchParams(location.search).get('topic'),sel=cf.querySelector('select[name=topic]');
    if(sub&&sel)sel.value=sub;
  }

  /* copy buttons (citation, link) */
  d.querySelectorAll('[data-copy]').forEach(function(b){
    b.addEventListener('click',function(){
      var t=b.getAttribute('data-copy')==='url'?location.href:d.getElementById(b.getAttribute('data-copy')).innerText;
      (navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(function(){
        var o=b.getAttribute('data-label')||b.textContent;b.setAttribute('data-label',o);
        if(b.querySelector('.lbl'))b.querySelector('.lbl').textContent='Copied';else b.setAttribute('aria-label','Copied');
        setTimeout(function(){if(b.querySelector('.lbl'))b.querySelector('.lbl').textContent=o;},1800);
      }).catch(function(){});
    });
  });

  /* global search */
  var sx=d.getElementById('search'),sbtn=d.querySelectorAll('[data-open-search]'),loaded=false,IDX=[];
  if(!sx)return;
  var si=sx.querySelector('input'),res=sx.querySelector('.srch-res'),sel=-1,lastFocus=null;
  function load(cb){
    if(loaded)return cb();
    var s=d.createElement('script');s.src=root+'assets/search-index.js';
    s.onload=function(){loaded=true;IDX=window.FLI_INDEX||[];cb();};d.head.appendChild(s);
  }
  function open(){lastFocus=d.activeElement;sx.classList.add('open');d.body.style.overflow='hidden';si.focus();load(function(){render(si.value);});}
  function close(){sx.classList.remove('open');d.body.style.overflow='';if(lastFocus)lastFocus.focus();}
  function esc(s){return s.replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
  function render(v){
    var q=v.toLowerCase().trim(),quick=sx.querySelector('.srch-quick'),hint=sx.querySelector('.srch-hint');
    if(!q){res.innerHTML='';quick.style.display='';hint.textContent='Try a language, a book, a place or a topic.';return;}
    quick.style.display='none';
    var words=q.split(/\s+/),out=IDX.map(function(it){
      var t=(it.t+' '+(it.k||'')).toLowerCase(),sc=0;
      for(var i=0;i<words.length;i++){var p=t.indexOf(words[i]);if(p<0)return null;sc+=p===0?3:(it.t.toLowerCase().indexOf(words[i])>-1?2:1);}
      return{it:it,sc:sc};
    }).filter(Boolean).sort(function(a,b){return b.sc-a.sc;}).slice(0,12);
    hint.textContent=out.length?out.length+(out.length===12?'+':'')+' results':'No results for "'+v+'". Try another spelling, or browse the languages list.';
    res.innerHTML=out.map(function(o,i){var it=o.it;return '<a href="'+root+it.u+'"'+(i===0?' class="sel"':'')+'><b>'+esc(it.t)+'</b><small>'+esc(it.s||'')+'</small><span class="kind">'+esc(it.c)+'</span></a>';}).join('');
    sel=out.length?0:-1;
  }
  sbtn.forEach(function(b){b.addEventListener('click',open);});
  sx.querySelector('[data-close]').addEventListener('click',close);
  sx.addEventListener('click',function(e){if(e.target===sx)close();});
  si.addEventListener('input',function(){render(si.value);});
  sx.addEventListener('keydown',function(e){
    var a=res.querySelectorAll('a');
    if(e.key==='Escape')close();
    else if((e.key==='ArrowDown'||e.key==='ArrowUp')&&a.length){e.preventDefault();sel=(sel+(e.key==='ArrowDown'?1:-1)+a.length)%a.length;a.forEach(function(x,i){x.classList.toggle('sel',i===sel);});a[sel].scrollIntoView({block:'nearest'});}
    else if(e.key==='Enter'&&d.activeElement===si&&a[sel]){location.href=a[sel].href;}
    else if(e.key==='Tab'){var f=sx.querySelectorAll('input,button,a'),first=f[0],last=f[f.length-1];if(e.shiftKey&&d.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&d.activeElement===last){e.preventDefault();first.focus();}}
  });
  d.addEventListener('keydown',function(e){if((e.key==='/'&&!/INPUT|TEXTAREA|SELECT/.test(d.activeElement.tagName))||((e.ctrlKey||e.metaKey)&&e.key==='k')){e.preventDefault();open();}});
})();
