const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./automations-Bkix5lIb.js","./prefs-BPoxcaQn.js","./storage-DYFzANnb.js","./rich-text-BP8HnxI4.js","./store-5Vg7Epxb.js","./react-D0Ec-185.js","./rolldown-runtime-hePW80VL.js","./preload-helper-HclGiUj8.js","./page-hU7-Ck0p.js","./markdown-html-lvQBlYE2.js","./markdown-Co_25zR9.js"])))=>i.map(i=>d[i]);
import{R as e,m as t}from"./prefs-BPoxcaQn.js";import{t as n}from"./preload-helper-HclGiUj8.js";import{K as r,N as i,w as a}from"./rich-text-BP8HnxI4.js";import{p as o,s}from"./markdown-Co_25zR9.js";import{mt as c}from"./page-hU7-Ck0p.js";import{i as l}from"./remind-BYQiGPSw.js";function u(e,t,n){return{en:e,zh:t,ja:n}}function d(e){let t=[],n=[],r=``,i=!1,a=!1,o=()=>{n.push(r),r=``,a=!0},s=()=>{o(),t.push(n),n=[],a=!1};for(let t=0;t<e.length;t+=1){let n=e[t];if(i){n===`"`?e[t+1]===`"`?(r+=`"`,t+=1):i=!1:r+=n;continue}if(n===`"`&&r===``){i=!0,a=!0;continue}if(n===`,`){o();continue}if(n!==`\r`){if(n===`
`){s();continue}r+=n,a=!0}}return(a||r!==``||n.length)&&s(),t}function f(e){return/[",\r\n]/.test(e)?`"${e.replace(/"/g,`""`)}"`:e}function p(e){return e.map(e=>e.map(f).join(`,`)).join(`\r
`)}var m=new Set([`yes`,`true`,`y`,`1`,`✓`,`done`,`是`,`はい`]),h=new Set([`no`,`false`,`n`,`0`,``,`否`,`いいえ`]);function g(e){let t=e.trim().replace(/,/g,``);if(!t||!/^[-+]?\d*\.?\d+(?:e[-+]?\d+)?$/i.test(t))return null;let n=Number(t);return Number.isFinite(n)?n:null}function _(e){let t=/^(\d{4})-(\d{2})-(\d{2})(?:[T ](\d{2}):(\d{2}))?/.exec(e.trim());if(!t)return null;let n=Number(t[2]),r=Number(t[3]);return n<1||n>12||r<1||r>31?null:t[4]?`${t[1]}-${t[2]}-${t[3]}T${t[4]}:${t[5]}`:`${t[1]}-${t[2]}-${t[3]}`}var v=24;function y(e){let t=e.map(e=>e.trim()).filter(e=>e!==``);if(!t.length)return`text`;if(t.every(e=>g(e)!==null))return`number`;if(t.map(e=>e.toLowerCase()).every(e=>m.has(e)||h.has(e)))return`checkbox`;if(t.every(e=>_(e)!==null))return`date`;if(t.every(e=>/^https?:\/\/\S+$/i.test(e)))return`url`;if(t.filter(e=>e.includes(`,`)).length>=Math.ceil(t.length/2)){let e=new Set;for(let n of t)for(let t of b(n))e.add(t);if(e.size&&e.size<=24)return`multi_select`}let n=new Set(t);return n.size<=24&&n.size<t.length?`select`:`text`}function b(e){return e.split(`,`).map(e=>e.trim()).filter(Boolean)}var x=[`blue`,`green`,`orange`,`purple`,`pink`,`yellow`,`brown`,`red`,`grey`];function S(e,t){let n=d(e),i=n[0];if(!i||!i.length)return null;let a=n.slice(1).filter(e=>e.some(e=>e.trim()!==``)),o=n.length-1-a.length,s=i.map((e,t)=>({name:e.trim()||`Column ${t+1}`,values:a.map(e=>e[t]??``)})),c=[],l=new Map;s.forEach((e,t)=>{let n=t===0?`title`:y(e.values),i={id:r(),name:e.name,type:n};if(n===`select`||n===`multi_select`){let t=[];for(let r of e.values){let e=n===`multi_select`?b(r):[r.trim()];for(let n of e)n&&!t.includes(n)&&t.push(n)}let a=new Map;i.options=t.map((e,t)=>{let n=r();return a.set(e,n),{id:n,name:e,color:x[t%x.length]??`default`}}),l.set(i.id,a)}c.push(i)});let u={title:t.trim()||`Imported`,props:c,rows:[],blank:o};for(let e of a){let t={},n=``;c.forEach((r,i)=>{let a=(e[i]??``).trim();if(i===0){n=a;return}let o=C(r,a,l.get(r.id));o&&(t[r.id]=o)}),u.rows.push({title:n,props:t})}return u}function C(e,t,n){if(e.type===`checkbox`)return{t:`checkbox`,v:m.has(t.toLowerCase())};if(!t)return null;switch(e.type){case`number`:{let e=g(t);return e===null?null:{t:`number`,v:e}}case`date`:{let e=_(t);return e===null?null:{t:`date`,v:{start:e,end:null,hasTime:e.includes(`T`)}}}case`url`:case`email`:case`phone`:return{t:`string`,v:t};case`select`:{let e=n?.get(t);return e?{t:`select`,v:e}:null}case`multi_select`:{let e=b(t).map(e=>n?.get(e)).filter(e=>!!e);return e.length?{t:`multi`,v:e}:null}default:return{t:`text`,v:a(t)}}}function w(e){return{id:r(),name:`Table`,type:`table`,filter:{kind:`group`,op:`and`,items:[]},sorts:[],groupByPropId:null,hideEmptyGroups:!1,collapsedGroups:[],visibleProps:e.map(e=>e.id),widths:{},wrap:{},calcs:{},manualOrder:[],search:``}}function T(e,t,n,r){return{id:e,parent:t,title:[],icon:null,cover:null,children:[],blocks:[],fullWidth:n.fullWidthDefault,smallText:n.smallText,font:n.font,locked:!1,createdAt:r,editedAt:r,deletedAt:null,deletedFrom:null}}function E(e,t,n,i,o=Date.now()){let s=r(),c=T(s,t,i,o);c.title=a(n.title);let l={id:r(),pageId:s,inline:!1,title:n.title,icon:null,description:``,props:n.props,rows:[],templates:[],views:[w(n.props)],locked:!1};for(let t of n.rows){let n=r(),c=T(n,s,i,o);c.title=t.title?a(t.title):[],c.databaseId=l.id,c.props=t.props,e.pages[n]=c,l.rows.push(n)}return e.pages[s]=c,e.databases[l.id]=l,t===null?e.roots.push(s):e.pages[t]?.children.push(s),s}function D(e,t,n){if(!n)return``;switch(n.t){case`text`:return i(n.v);case`number`:return n.v===null?``:String(n.v);case`checkbox`:return n.v?`Yes`:`No`;case`string`:return n.v;case`select`:{let e=t.options?.find(e=>e.id===n.v);return e?e.name:``}case`multi`:return n.v.map(e=>t.options?.find(t=>t.id===e)?.name??``).filter(Boolean).join(`, `);case`date`:return n.v?n.v.end?`${n.v.start} → ${n.v.end}`:n.v.start:``;case`relation`:return n.v.map(t=>i(e.pages[t]?.title).trim()).filter(Boolean).join(`, `);default:return``}}var O=[`formula`,`rollup`];function k(e,t,n=Date.now()){let r=e.databases[t];if(!r)return``;let a=r.props.filter(e=>!O.includes(e.type)),o=[a.map(e=>e.name)];for(let t of r.rows){let n=e.pages[t];!n||n.deletedAt!==null||o.push(a.map(t=>t.type===`title`?i(n.title):t.type===`created_time`?A(n.createdAt):t.type===`edited_time`?A(n.editedAt):D(e,t,n.props?.[t.id])))}return p(o)}function A(e){let t=new Date(e),n=e=>String(e).padStart(2,`0`);return`${t.getFullYear()}-${n(t.getMonth()+1)}-${n(t.getDate())}T${n(t.getHours())}:${n(t.getMinutes())}`}function j(e){return e.replace(/\.(md|markdown|txt)$/i,``).replace(/[_-]+/g,` `).trim()||`Untitled`}function M(e){let t={title:``,text:null,children:[]},n=new Map([[``,t]]),r=e=>{let t=n.get(e);if(t)return t;let i=e.lastIndexOf(`/`),a=r(i===-1?``:e.slice(0,i)),o={title:j(i===-1?e:e.slice(i+1)),text:null,children:[]};return a.children.push(o),n.set(e,o),o};for(let t of e){if(!/\.(md|markdown|txt)$/i.test(t.path))continue;let e=t.path.split(`/`).filter(e=>e&&e!==`.`),n=e.pop()??``,i=e.join(`/`),a=r(i),o=j(n);if(i&&o===a.title&&a.text===null){a.text=t.text;continue}a.children.push({title:o,text:t.text,children:[]})}return t.children}function N(e){let t=o(e),n=t[0];if(n&&n.type===`heading_1`&&!n.children.length){let e=i(n.text).trim();if(e)return{title:e,drafts:t.slice(1)}}return{title:null,drafts:t}}function P(e,t,n,i,o=Date.now()){let c=[],l=(t,n)=>{let c=r(),u=T(c,n,i,o),d=t.title;if(t.text!==null){let n=N(t.text);n.title&&(d=n.title);let{blocks:r,ids:i}=s(n.drafts,c,o);for(let t of r)e.blocks[t.id]=t;u.blocks=i}if(!u.blocks.length){let t={id:r(),type:`paragraph`,parent:c,children:[],text:[],color:`default`,createdAt:o,editedAt:o};e.blocks[t.id]=t,u.blocks=[t.id]}return u.title=d?a(d):[],e.pages[c]=u,n===null?e.roots.push(c):e.pages[n]?.children.push(c),u.children=t.children.map(e=>l(e,c)),c};for(let e of n)c.push(l(e,t));return c}function F(e){return e.reduce((e,t)=>e+1+F(t.children),0)}var ee=[{id:`meeting`,icon:`🗒️`,name:u(`Meeting notes`,`会议记录`,`議事録`),note:u(`Who came, what was said, what happens next.`,`与会者、讨论与后续。`,`出席者・議題・次の一手。`),markdown:`# Meeting notes

**Date:** {{date}} ({{weekday}})
**Time:** {{time}}
**Present:** 

## Agenda
- 

## Notes
- 

## Decisions
- 

## Next steps
- [ ] 
`},{id:`weekly`,icon:`📅`,name:u(`Weekly agenda`,`每周计划`,`週間予定`),note:u(`A week laid out a day at a time.`,`一周七天，逐日安排。`,`一週間を一日ずつ。`),markdown:`# Weekly agenda

_The week of {{date}}_

## Monday
- [ ] 

## Tuesday
- [ ] 

## Wednesday
- [ ] 

## Thursday
- [ ] 

## Friday
- [ ] 

## The weekend
- [ ] 
`},{id:`project`,icon:`🧭`,name:u(`Project plan`,`项目计划`,`プロジェクト計画`),note:u(`The goal, the parts, the dates, the risks.`,`目标、拆解、时间与风险。`,`目的・分解・期日・リスク。`),markdown:`# Project plan

> What is done when this is done?

**Started:** {{date}}

## Goal

## Milestones
1. 
2. 
3. 

## Open questions
- 

## Risks
| Risk | How likely | What we would do |
| --- | --- | --- |
|  |  |  |
`},{id:`journal`,icon:`🌤️`,name:u(`Daily journal`,`每日日记`,`日記`),note:u(`Three questions, once a day.`,`每天三问。`,`一日三つの問い。`),markdown:`# Daily journal — {{weekday}} {{date}}

## What happened

## What I learned

## What is next
- [ ] 
`},{id:`reading`,icon:`📚`,name:u(`Reading list`,`阅读清单`,`読書リスト`),note:u(`Books, where you are in them, what they said.`,`书目、进度与摘记。`,`本と進み具合と覚え書き。`),markdown:`# Reading list

| Title | Author | Status | Note |
| --- | --- | --- | --- |
|  |  | Reading |  |

## Passages worth keeping
> 
`},{id:`todo`,icon:`✅`,name:u(`Task list`,`待办清单`,`やること`),note:u(`Today, this week, and someday.`,`今天、本周与以后。`,`今日・今週・いつか。`),markdown:`# Tasks

## Today ({{date}})
- [ ] 

## This week
- [ ] 

## Someday
- [ ] 
`}];function te(e){return N(e.markdown)}var ne=u(`Sunday Monday Tuesday Wednesday Thursday Friday Saturday`,`星期日 星期一 星期二 星期三 星期四 星期五 星期六`,`日曜日 月曜日 火曜日 水曜日 木曜日 金曜日 土曜日`);function I(e,t=new Date,n=``){let[r=``,i=``]=A(t.getTime()).split(`T`);return{date:r,today:r,time:i,page:n,weekday:ne[e].split(` `)[t.getDay()]??``}}async function L(e,t,r=``,i=new Date){let{resolveVars:a}=await n(async()=>{let{resolveVars:e}=await import(`./automations-Bkix5lIb.js`);return{resolveVars:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url);return a(e,I(t,i,r))}var R=`ayaka_notion_templates`,z=40,B=2e4;function V(){let e=[];for(let n of t(R,[])){if(!n||typeof n!=`object`)continue;let{id:t,title:r,body:i,created:a}=n;if(!(typeof t!=`string`||!t)&&typeof r==`string`&&typeof i==`string`&&!(typeof a!=`number`||!Number.isFinite(a))&&(e.push({id:t,title:r,body:i.slice(0,B),created:a}),e.length===40))break}return e}function H(t){let n=t.slice(0,40);return e(R,n),n}function U(e,t,n=Date.now()){return H([{id:r(),title:e.slice(0,200),body:t.slice(0,B),created:n},...V()])}function W(e){return H(V().filter(t=>t.id!==e))}async function G(e){let{pasteToDrafts:t}=await n(async()=>{let{pasteToDrafts:e}=await import(`./markdown-html-lvQBlYE2.js`);return{pasteToDrafts:e}},__vite__mapDeps([9,3,4,5,6,2,7,10]),import.meta.url);return t({html:e,text:``})}var K=/<w:p[ >][\s\S]*?<\/w:p>/g,q=/<w:t(?:\s[^>]*)?>([\s\S]*?)<\/w:t>/g,J=/<w:pStyle\s+w:val="([^"]*)"/,Y=/<w:numFmt\s+w:val="([^"]*)"/;function X(e){return e.replace(/&lt;/g,`<`).replace(/&gt;/g,`>`).replace(/&quot;/g,`"`).replace(/&apos;/g,`'`).replace(/&amp;/g,`&`)}async function re(e){let{zipEntry:t}=await n(async()=>{let{zipEntry:e}=await import(`./zipread-hKXo5VQJ.js`);return{zipEntry:e}},[],import.meta.url),r=t(e,`word/document.xml`);if(!r)return[];let i=new TextDecoder().decode(r.bytes),o=[];for(let e of i.match(K)??[]){let t=``;for(let n of e.matchAll(q))t+=X(n[1]??``);t=t.replace(/\s+$/,``);let n=J.exec(e)?.[1]??``,r=/^Heading([1-6])$/i.exec(n);if(r){let e=Math.min(3,Number(r[1]));o.push({type:`heading_${e}`,text:a(t),children:[]});continue}if(t!==``){if(/<w:numPr[ >]/.test(e)){let n=Y.exec(e)?.[1]===`decimal`;o.push({type:n?`numbered_list_item`:`bulleted_list_item`,text:a(t),children:[]});continue}if(/^Quote$/i.test(n)){o.push({type:`quote`,text:a(t),children:[]});continue}o.push({type:`paragraph`,text:a(t),children:[]})}}return o}var ie=/\.(md|markdown|txt|csv)$/i;async function ae(e){let{zipEntries:t}=await n(async()=>{let{zipEntries:e}=await import(`./zipread-hKXo5VQJ.js`);return{zipEntries:e}},[],import.meta.url),r=t(e,e=>ie.test(e)),i=[];for(let e of r)/\.csv$/i.test(e.name)||i.push({path:Z(e.name),text:new TextDecoder().decode(e.bytes)});return M(i)}function Z(e){return e.split(`/`).map(e=>e.replace(/[ _-]+[0-9a-f]{32}(?=$|\.)/i,``)).join(`/`)}var oe={subpages:!0,folders:!1,files:!0};function Q(e){return e.replace(/[\\/:*?"<>|]/g,`-`).replace(/\s+/g,` `).trim().slice(0,80)||`Untitled`}function $(e){return e.replace(/!\[([^\]]*)\]\([^)]*\)/g,(e,t)=>t||``)}function se(e,t,n,r,i){let a=e=>t.files?e:$(e);if(!t.folders){let o=n(e,1);if(t.subpages){let t=(e,i)=>{for(let a of r(e))o+=`
`+n(a,i),t(a,Math.min(6,i+1))};t(e,2)}return[{name:`${Q(i(e))}.md`,text:a(o)}]}let o=[],s=(e,c,l)=>{let u=Q(i(e));if(o.push({name:`${c}${u}.md`,text:a(n(e,l))}),t.subpages)for(let t of r(e))s(t,`${c}${u}/`,Math.min(6,l+1))};return s(e,``,1),o}var ce={DAILY:`daily`,WEEKLY:`weekly`,MONTHLY:`monthly`,YEARLY:`yearly`};function le(e,t,n,o,s=Date.now()){let u=e.databases[t],d=u?.props.find(e=>e.type===`date`);if(!u||!d)return 0;let f=u.props.find(e=>e.name.trim().toLowerCase()===`uid`&&(e.type===`text`||e.type===`url`)),p=new Set;if(f)for(let t of u.rows){let n=e.pages[t]?.props?.[f.id];n?.t===`text`?p.add(i(n.v)):n?.t===`string`&&p.add(n.v)}let m=0;for(let t of n){let n=t.uid?.trim();if(f&&n){if(p.has(n))continue;p.add(n)}let i=r(),h=T(i,u.pageId,o,s);h.title=t.title?a(t.title):[],h.databaseId=u.id;let g={start:t.start,end:t.end,hasTime:t.hasTime},_=t.rrule??``,v=t.rrule?ce[/FREQ=([A-Z]+)/.exec(_)?.[1]??``]:void 0;if(v){g.repeat=v;let e=Number(/INTERVAL=(\d+)/.exec(_)?.[1]??1);e>1&&(g.interval=Math.min(99,e));let t=/UNTIL=(\d{4})(\d{2})(\d{2})/.exec(_),n=Number(/COUNT=(\d+)/.exec(_)?.[1]??0);if(t)g.repeatUntil=`${t[1]}-${t[2]}-${t[3]}`;else if(n>0){let t=c(g.start.slice(0,10))??0,r=v===`daily`?1:v===`weekly`?7:v===`monthly`?31:366,i=l(g,t,t+(n-1)*Math.max(1,e)*r),a=i[n-1]??i[i.length-1];a&&(g.repeatUntil=a.start.slice(0,10))}}h.props={[d.id]:{t:`date`,v:g}},f&&n&&(h.props[f.id]=f.type===`url`?{t:`string`,v:n}:{t:`text`,v:a(n)}),e.pages[i]=h,u.rows.push(i),m+=1}return m}export{O as CSV_SKIPPED_TYPES,oe as DEFAULT_EXPORT_OPTS,R as OWN_TEMPLATES_KEY,z as OWN_TEMPLATES_MAX,B as OWN_TEMPLATE_BODY_MAX,ee as PAGE_TEMPLATES,v as SELECT_MAX_OPTIONS,E as applyCsvImport,le as applyIcsImport,P as applyMarkdownImport,F as countImport,f as csvCell,_ as csvDate,g as csvNumber,C as csvValue,k as databaseToCsv,W as deleteOwnTemplate,re as docxToDrafts,$ as dropImages,se as exportFiles,L as fillTemplate,G as htmlToDrafts,N as importDrafts,j as importTitle,y as inferColumn,d as parseCsv,S as planCsvImport,M as planMarkdownImport,ae as planNotionZip,D as propToCsv,V as readOwnTemplates,Q as safeFileName,U as saveOwnTemplate,b as splitTags,Z as stripNotionIds,te as templateDrafts,I as templateVars,p as toCsv};