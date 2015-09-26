(function(){var t,r,n,o,e,i,h;n={createGrid:function(t,r,n,o,e,i){var h,s,u,a,l,f,c,g;for(f=[],c=h=0,u=Math.floor(n/e)+3;u>=0?u>=h:h>=u;c=u>=0?++h:--h){for(l=[],g=s=0,a=Math.floor(o/e)+3;a>=0?a>=s:s>=a;g=a>=0?++s:--s)l.push(new Two.Vector(c*e+i*Math.random()+t,g*e+i*Math.random()+r));f.push(l)}return f},transpose:function(t,r){var n,o,e,i,h,s,u,a,l,f,c;for(a=[],n=e=0,l=t.length-1;l>=0?l>=e:e>=l;n=l>=0?++e:--e)a.push([]);for(i=0,h=t.length;h>i;i++)for(f=t[i],o=u=0,s=f.length;s>u;o=++u)c=f[o],a[o].push(c);return a},average:function(t){var r,n,o,e;for(o=[0,0],r=0,n=t.length;n>r;r++)e=t[r],o[0]+=e.x,o[1]+=e.y;return{x:o[0]/3,y:o[1]/3}},toQuadCoords:function(t){var r;return r=[],t.x-1>=0?t.y-1>=0?(r.push([t.x-1,t.y-1]),r.push([t.x,t.y-1]),r.push([t.x-1,t.y]),r.push([t.x,t.y])):(r.push([t.x-1,t.y]),r.push([t.x,t.y])):t.y-1>=0?(r.push([t.x,t.y-1]),r.push([t.x,t.y])):r.push([t.x,t.y]),r},quadToTriangleTopLeft:function(t){return new Two.Polygon([t[0],t[1],t[2]],!0,!1,!1)},quadToTriangleBottomRight:function(t){return new Two.Polygon([t[1],t[2],t[3]],!0,!1,!1)},quadToTriangleTopRight:function(t){return new Two.Polygon([t[0],t[1],t[3]],!0,!1,!1)},quadToTriangleBottomLeft:function(t){return new Two.Polygon([t[0],t[2],t[3]],!0,!1,!1)}},h=function(t,r){var n,o,e,i,h,s,u,a,l,f,c,g,p,y,d,v,w,x;for(h=[],l=0,c=r.length;c>l;l++)o=r[l],w=o.x*two.width,x=o.y*two.height,s=Math.abs(w-t.x)/two.width,u=Math.abs(x-t.y)/two.height,i=Math.sqrt(s*s+u*u),h.push([i,o]);for(v=0,f=0,g=h.length;g>f;f++)e=h[f],v+=e[0];for(d=[0,0,0],y=0,p=h.length;p>y;y++)e=h[y],a=1-e[0]/v,n=e[1].rgb,d[0]=d[0]+a*n[0],d[1]=d[1]+a*n[1],d[2]=d[2]+a*n[2];return"rgb("+parseInt(d[0])+","+parseInt(d[1])+","+parseInt(d[2])+")"},t={mixByVector:function(r,n,o){var e,i,h,s,u,a,l,f,c,g,p,y,d,v,w,x;for(v=0,l=[],f=0,g=n.length;g>f;f++)e=n[f],w=e.x,x=e.y,h=Math.abs(w-r.x),s=Math.abs(x-r.y),i=Math.sqrt(h*h+s*s),a=e.factor(i),0>a&&(a=0),v+=a,l.push({factor:a,color:e.rgb});for(1>v&&(l.push({factor:1-v,color:o}),v=1),d=[0,0,0],c=0,p=l.length;p>c;c++)u=l[c],y=u.factor/v,0!==y&&(d=t.mix(d,u.color,y));return t.vary(d,15),"rgb("+parseInt(d[0])+","+parseInt(d[1])+","+parseInt(d[2])+")"},mix:function(t,r,n){var o;return o=[],o.push(t[0]*(1-n)+r[0]*n),o.push(t[1]*(1-n)+r[1]*n),o.push(t[2]*(1-n)+r[2]*n),o},vary:function(t,r){var n;return n=Math.random()*r,t[0]+=n,t[1]+=n,t[3]+=n}},r=function(){function t(t,r,n){var o,e,i;i=n.rgb,e=n.falloff_radius,o=n.falloff_easing,this.relx=t,this.rely=r,this.x=null,this.y=null,this.rgb=i,this.falloff_radius=e,this.falloff_easing=o}return t.prototype.setXY=function(t,r){return this.x=t,this.y=r},t.prototype.factor=function(t){var r;return r=t/this.falloff_radius,this.falloff_easing?1-this.falloff_easing(r):1-r},t}(),e={linear:function(t){return t},square:function(t){return t*t},cubic:function(t){return t*t*t},flat:function(t){var r;return r=function(r){return r>=t?r-t:0}}},o={circles:function(t,r){var n,o,e,i,h,s;for(i=[],o=0,e=r.length;e>o;o++)h=r[o],i.push(function(){var r,o,e;for(e=[],r=0,o=h.length;o>r;r++)s=h[r],n=t.makeCircle(s.x,s.y,4),e.push(n.fill="#000000");return e}());return i},triangles:function(r,o,e,i){var h,s,u,a,l,f,c,g,p,y,d,v,w,x,T,b,m,M,q,B,V,I,P,_,k,C,R;for(T={},k=a=0,f=o.length;f>a;k=++a)for(B=o[k],R=l=0,c=B.length;c>l;R=++l)for(C=B[R],w=n.toQuadCoords({x:k,y:R}),p=0,g=w.length;g>p;p++)v=w[p],v[0]in T?v[1]in T[v[0]]?T[v[0]][v[1]].push(C):T[v[0]][v[1]]=[C]:(T[v[0]]={},T[v[0]][v[1]]=[C]);for(_=[],V=o.length-1,b=y=0,M=V;M>=0?M>=y:y>=M;b=M>=0?++y:--y){for(B=[],u=o[0].length-1,m=d=0,q=u;q>=0?q>=d:d>=q;m=q>=0?++d:--d)x=T[b][m],4===x.length&&(b>=V/2&&m>=u/2||V/2>b&&u/2>m?(I=n.quadToTriangleTopLeft(x),h=t.mixByVector(n.average(I.vertices),e,i),I.fill=h,I.stroke=h,B.push(I),r.add(I),P=n.quadToTriangleBottomRight(x),s=t.mixByVector(n.average(P.vertices),e,i),P.fill=s,P.stroke=s,B.push(P),r.add(P)):(I=n.quadToTriangleTopRight(x),h=t.mixByVector(n.average(I.vertices),e,i),I.fill=h,I.stroke=h,B.push(I),r.add(I),P=n.quadToTriangleBottomLeft(x),s=t.mixByVector(n.average(P.vertices),e,i),P.fill=s,P.stroke=s,B.push(P),r.add(P)));_.push(B)}return _},waves:function(r,o,e){var i,h,s,u,a,l,f;for(a=[],l=n.transpose(o),h=0,s=l.length;s>h;h++)u=l[h],u.push(new Two.Vector(r.width,r.height+100)),u.push(new Two.Vector(0,r.height+100)),f=new Two.Polygon(u,!1,!0,!1),i=t.mixByVector({x:r.height/2,y:u[0].y},e),f.fill=i,f.stroke=i,r.add(f),a.push(f);return a}},i=function(){function t(t,r){var n,o,e,i,h;i=r.x,h=r.y,e=r.width,n=r.height,o=r.resolution,this.resolution=o,this.variance=0,this.colors=[],this.vectors=null,this.triangles=null,this.bgColor=[0,0,0],this.two=t,this.width=e,this.height=n,this.x=i,this.y=h,this.bind(),this.resize=function(){}}return t.prototype.varyBy=function(t){return this.variance=t,this},t.prototype.bind=function(){var t;return t=function(t){return function(){return t.draw()}}(this)},t.prototype.onResize=function(t){return this.resize=t.bind(this)},t.prototype.draw=function(){return this.two.clear(),null!==this.vectors&&(this.vectors=null,this.triangles=null),this.vectors=n.createGrid(this.x,this.y,this.width,this.height,this.resolution,this.variance),this.triangles=o.triangles(this.two,this.vectors,this.colors,this.bgColor),this.two.update()},t.prototype.animate=function(t,r){var n,o;return o=0,n=this.two.bind("update",function(n){return function(e,i){var h,s,u,a,l,f,c,g,p,y,d,v,w,x;for(o+=i,s=o/r*(Math.PI/2),h=n.vectors.length,g=n.vectors,p=[],v=u=0,a=g.length;a>u;v=++u)y=g[v],d=y.length,p.push(function(){var r,n,o;for(o=[],x=r=0,n=y.length;n>r;x=++r)w=y[x],0!==v&&0!==x&&v!==h-1&&x!==d-1&&(c="prev"in w?w.prev:0,l=t*Math.sin(s+v),f=w.y+l-c,w.prev=l,o.push(w.set(w.x,f)));return o}());return p}}(this)),n.play()},t}(),window.ColorPoint=r,window.Easing=e,window.Mesh=i}).call(this);
//# sourceMappingURL=./lowpoly.js.map