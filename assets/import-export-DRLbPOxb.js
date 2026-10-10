const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./automations-Dn6d5Ye0.js","./storage-DIEhLhtr.js","./keys-D19KYcSs.js","./idb-Bw8Vz8T8.js","./estate-integrity-DSAoa-Dz.js","./rolldown-runtime-hePW80VL.js","./prefs-BrHa3H-2.js","./estate-map-C3HmtJyq.js","./lang-CCx6Lj2G.js","./ids-4PYwBDu2.js","./store-DxchXjGR.js","./react-D0Ec-185.js","./workspace-storage-qf3TzyVI.js","./preload-helper-CIc_hbWm.js","./rich-text-BMsM8feJ.js","./page-ClkfLAK5.js","./index-DBIvCHxS.js","./lag-guard-DrGMEqzH.js","./perf-mode-DR1lZzwB.js","./use-fx-tier-Bxs9Q33s.js","./seasonal-art-CPDfUE97.js","./fullscreen-C4ZRVxTq.js","./focus-frame-CiewN-6L.js","./deck-DxigEOlc.js","./cached-D3qLWtPO.js","./live-qBAeMEYR.js","./live-cards-CiMzCwuY.js","./catalog-BFh631eF.js","./shelf-B_NvUyvN.js","./daily-BEt1_sIS.js","./live-save-CKTDKeYB.js","./solitaire-DFRk-na8.js","./lanterns-D8XbgAwK.js","./scores-C0213KpW.js","./private-guard-weaqfucx.js","./passkey-lock-C7WSBcyA.js","./asset-fetch-B6o4vEYS.js","./bible-books-CV4yveCF.js","./build-info-EYomoVQ8.js","./tea-seal-D8dv6I5H.js","./model-Rf9OIwGC.js","./door-transition-Bos4xn0Z.js","./chunk-error-C8iyqf4g.js","./error-net-DtVJtL2u.js","./error-ledger-84Altf6B.js","./prefetch-BBFW8yJz.js","./use-local-state-B5rmWaA4.js","./code-points-hBUNK0ZR.js","./perf-trace-lIYLa8MR.js","./index-CxQLEWtU.css","./markdown-html-BQK0Rgtt.js","./markdown-Dr82Zxxx.js"])))=>i.map(i=>d[i]);
import{L as e,gt as t}from"./prefs-BrHa3H-2.js";import{t as n}from"./preload-helper-CIc_hbWm.js";import{i as r}from"./ids-4PYwBDu2.js";import{F as i,T as a}from"./rich-text-BMsM8feJ.js";import{T as o,_ as s,d as c,g as l,n as u,s as d,t as f,w as p}from"./markdown-Dr82Zxxx.js";import{a as ee}from"./remind-J155MpgU.js";function m(e,t,n){return{en:e,zh:t,ja:n}}function h(e){e.charCodeAt(0)===65279&&(e=e.slice(1));let t=[],n=[],r=``,i=!1,a=!1,o=()=>{n.push(r),r=``,a=!0},s=()=>{o(),t.push(n),n=[],a=!1};for(let t=0;t<e.length;t+=1){let n=e[t];if(i){n===`"`?e[t+1]===`"`?(r+=`"`,t+=1):i=!1:r+=n;continue}if(n===`"`&&r===``){i=!0,a=!0;continue}if(n===`,`){o();continue}if(n!==`\r`){if(n===`
`){s();continue}r+=n,a=!0}}return(a||r!==``||n.length)&&s(),t}var g=/^'*[=+\-@\t\r]/,_=/^[-+]?\d*\.?\d+(?:e[-+]?\d+)?$/i;function v(e){return g.test(e)&&!_.test(e)?`'${e}`:e}function y(e){return e.startsWith(`'`)&&g.test(e.slice(1))&&!_.test(e.slice(1))?e.slice(1):e}function b(e){let t=v(e);return/[",\r\n]/.test(t)?`"${t.replace(/"/g,`""`)}"`:t}var te=`﻿`;function x(e){return`﻿`+e.map(e=>e.map(b).join(`,`)).join(`\r
`)}var S=new Set([`yes`,`true`,`y`,`1`,`✓`,`done`,`是`,`はい`]),C=new Set([`no`,`false`,`n`,`0`,``,`否`,`いいえ`]);function w(e){let t=e.trim();if(t.includes(`,`)&&!/^[-+]?\d{1,3}(?:,\d{3})+(?:\.\d+)?$/.test(t))return null;let n=t.replace(/,/g,``);if(!n||!/^[-+]?\d*\.?\d+(?:e[-+]?\d+)?$/i.test(n))return null;let r=Number(n);return Number.isFinite(r)?r:null}function T(e){let t=/^(\d{4})-(\d{2})-(\d{2})(?:[T ](\d{2}):(\d{2}))?/.exec(e.trim());if(!t)return null;let n=Number(t[2]),r=Number(t[3]),i=new Date(Date.UTC(Number(t[1]),n,0)).getUTCDate();return n<1||n>12||r<1||r>i||t[4]&&(Number(t[4])>23||Number(t[5])>59)?null:t[4]?`${t[1]}-${t[2]}-${t[3]}T${t[4]}:${t[5]}`:`${t[1]}-${t[2]}-${t[3]}`}var E=24;function D(e){let t=e.map(e=>e.trim()).filter(e=>e!==``);if(!t.length)return`text`;if(t.every(e=>w(e)!==null))return`number`;if(t.map(e=>e.toLowerCase()).every(e=>S.has(e)||C.has(e)))return`checkbox`;if(t.every(e=>T(e)!==null))return`date`;if(t.every(e=>/^https?:\/\/\S+$/i.test(e)))return`url`;if(t.filter(e=>e.includes(`,`)).length>=Math.ceil(t.length/2)){let e=new Set;for(let n of t)for(let t of O(n))e.add(t);if(e.size&&e.size<=24)return`multi_select`}let n=new Set(t);return n.size<=24&&n.size<t.length?`select`:`text`}function O(e){let t=[],n=``,r=!1,i=!1,a=()=>{let e=i?n:n.trim();e.trim()&&t.push(e),n=``,i=!1};for(let t=0;t<e.length;t+=1){let o=e[t];if(r){o===`"`?e[t+1]===`"`?(n+=`"`,t+=1):r=!1:n+=o;continue}if(o===`"`&&n.trim()===``&&!i){r=!0,i=!0,n=``;continue}if(o===`,`){a();continue}if(i){o?.trim()&&(n+=o);continue}n+=o}return r&&(n=`"${n}`),a(),t}var k=[`blue`,`green`,`orange`,`purple`,`pink`,`yellow`,`brown`,`red`,`grey`];function A(e,t){let n=h(e).map(e=>e.map(y)),i=n[0];if(!i||!i.length)return null;let a=n.slice(1).filter(e=>e.some(e=>e.trim()!==``)),o=n.length-1-a.length,s=i.map((e,t)=>({name:e.trim()||`Column ${t+1}`,values:a.map(e=>e[t]??``)})),c=[],l=new Map;s.forEach((e,t)=>{let n=t===0?`title`:D(e.values),i={id:r(),name:e.name,type:n};if(n===`select`||n===`multi_select`){let t=[];for(let r of e.values){let e=n===`multi_select`?O(r):[r.trim()];for(let n of e)n&&!t.includes(n)&&t.push(n)}let a=new Map;i.options=t.map((e,t)=>{let n=r();return a.set(e,n),{id:n,name:e,color:k[t%k.length]??`default`}}),l.set(i.id,a)}c.push(i)});let u={title:t.trim()||`Imported`,props:c,rows:[],blank:o};for(let e of a){let t={},n=``;c.forEach((r,i)=>{let a=(e[i]??``).trim();if(i===0){n=a;return}let o=j(r,a,l.get(r.id));o&&(t[r.id]=o)}),u.rows.push({title:n,props:t})}return u}function j(e,t,n){if(e.type===`checkbox`)return{t:`checkbox`,v:S.has(t.toLowerCase())};if(!t)return null;switch(e.type){case`number`:{let e=w(t);return e===null?null:{t:`number`,v:e}}case`date`:{let e=t.indexOf(`→`),n=T(e===-1?t:t.slice(0,e));return n===null?null:{t:`date`,v:{start:n,end:e===-1?null:T(t.slice(e+1)),hasTime:n.includes(`T`)}}}case`url`:case`email`:case`phone`:return{t:`string`,v:t};case`select`:{let e=n?.get(t);return e?{t:`select`,v:e}:null}case`multi_select`:{let e=O(t).map(e=>n?.get(e)).filter(e=>!!e);return e.length?{t:`multi`,v:e}:null}default:return{t:`text`,v:a(t)}}}function M(e){return{id:r(),name:`Table`,type:`table`,filter:{kind:`group`,op:`and`,items:[]},sorts:[],groupByPropId:null,hideEmptyGroups:!1,collapsedGroups:[],visibleProps:e.map(e=>e.id),widths:{},wrap:{},calcs:{},manualOrder:[],search:``}}function N(e,t,n,r){return{id:e,parent:t,title:[],icon:null,cover:null,children:[],blocks:[],fullWidth:n.fullWidthDefault,smallText:n.smallText,font:n.font,locked:!1,createdAt:r,editedAt:r,deletedAt:null,deletedFrom:null}}function ne(e,t,n,i,o=Date.now()){let s=r(),c=N(s,t,i,o);c.title=a(n.title);let l={id:r(),pageId:s,inline:!1,title:n.title,icon:null,description:``,props:n.props,rows:[],templates:[],views:[M(n.props)],locked:!1};for(let t of n.rows){let n=r(),c=N(n,s,i,o);c.title=t.title?a(t.title):[],c.databaseId=l.id,c.props=t.props,e.pages[n]=c,l.rows.push(n)}return e.pages[s]=c,e.databases[l.id]=l,t===null?e.roots.push(s):e.pages[t]?.children.push(s),s}var P=u;function F(e,t,n=Date.now()){let r=d(e,t);return r?x([r.head,...r.rows.map(e=>e.cells)]):``}function I(e){return e.replace(/\.(md|markdown|txt|csv)$/i,``).replace(/[_-]+/g,` `).trim()||`Untitled`}function L(e){let t={title:``,text:null,children:[]},n=new Map([[``,t]]),r=new Map,i=e=>{let t=n.get(e);if(t)return t;let a=r.get(e);if(a)return n.set(e,a),a;let o=e.lastIndexOf(`/`),s=i(o===-1?``:e.slice(0,o)),c={title:I(o===-1?e:e.slice(o+1)),text:null,children:[]};return s.children.push(c),n.set(e,c),c};for(let a of e){if(!/\.(md|markdown|txt)$/i.test(a.path))continue;let e=a.path.split(`/`).filter(e=>e&&e!==`.`&&e!==`..`),o=e.pop()??``,s=e.join(`/`),c=`${s?`${s}/`:``}${o.replace(/\.(md|markdown|txt)$/i,``)}`,l=n.get(c);if(l&&l!==t&&l.text===null&&!r.has(c)){l.text=a.text,r.set(c,l);continue}let u=i(s),d=I(o);if(s&&d===u.title&&u.text===null){u.text=a.text;continue}let f={title:d,text:a.text,children:[]};u.children.push(f),r.has(c)||r.set(c,f)}return t.children}function R(e){let t=p(e),n=t[0];if(n&&n.type===`heading_1`&&!n.children.length){let e=i(n.text).trim();if(e)return{title:e,drafts:t.slice(1)}}return{title:null,drafts:t}}function re(e,t,n,i,o=Date.now()){let s=[],l=(t,n)=>{let s=r(),u=N(s,n,i,o),d=t.title;if(t.text!==null){let n=R(t.text);n.title&&(d=n.title);let{blocks:r,ids:i}=c(n.drafts,s,o);for(let t of r)e.blocks[t.id]=t;u.blocks=i}if(!u.blocks.length){let t={id:r(),type:`paragraph`,parent:s,children:[],text:[],color:`default`,createdAt:o,editedAt:o};e.blocks[t.id]=t,u.blocks=[t.id]}return u.title=d?a(d):[],e.pages[s]=u,n===null?e.roots.push(s):e.pages[n]?.children.push(s),u.children=t.children.map(e=>l(e,s)),s};for(let e of n)s.push(l(e,t));return s}function z(e){return e.reduce((e,t)=>e+1+z(t.children),0)}var ie=[{id:`meeting`,icon:`🗒️`,name:m(`Meeting notes`,`会议记录`,`議事録`),note:m(`Who came, what was said, what happens next.`,`与会者、讨论与后续。`,`出席者・議題・次の一手。`),markdown:`# Meeting notes

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
`},{id:`weekly`,icon:`📅`,name:m(`Weekly agenda`,`每周计划`,`週間予定`),note:m(`A week laid out a day at a time.`,`一周七天，逐日安排。`,`一週間を一日ずつ。`),markdown:`# Weekly agenda

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
`},{id:`project`,icon:`🧭`,name:m(`Project plan`,`项目计划`,`プロジェクト計画`),note:m(`The goal, the parts, the dates, the risks.`,`目标、拆解、时间与风险。`,`目的・分解・期日・リスク。`),markdown:`# Project plan

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
`},{id:`journal`,icon:`🌤️`,name:m(`Daily journal`,`每日日记`,`日記`),note:m(`Three questions, once a day.`,`每天三问。`,`一日三つの問い。`),markdown:`# Daily journal — {{weekday}} {{date}}

## What happened

## What I learned

## What is next
- [ ] 
`},{id:`reading`,icon:`📚`,name:m(`Reading list`,`阅读清单`,`読書リスト`),note:m(`Books, where you are in them, what they said.`,`书目、进度与摘记。`,`本と進み具合と覚え書き。`),markdown:`# Reading list

| Title | Author | Status | Note |
| --- | --- | --- | --- |
|  |  | Reading |  |

## Passages worth keeping
> 
`},{id:`todo`,icon:`✅`,name:m(`Task list`,`待办清单`,`やること`),note:m(`Today, this week, and someday.`,`今天、本周与以后。`,`今日・今週・いつか。`),markdown:`# Tasks

## Today ({{date}})
- [ ] 

## This week
- [ ] 

## Someday
- [ ] 
`}];function B(e){return R(e.markdown)}var V=m(`Sunday Monday Tuesday Wednesday Thursday Friday Saturday`,`星期日 星期一 星期二 星期三 星期四 星期五 星期六`,`日曜日 月曜日 火曜日 水曜日 木曜日 金曜日 土曜日`);function H(e,t=new Date,n=``){let[r=``,i=``]=l(t.getTime()).split(`T`);return{date:r,today:r,time:i,page:n,weekday:V[e].split(` `)[t.getDay()]??``}}async function U(e,t,r=``,i=new Date){let{resolveVars:a}=await n(async()=>{let{resolveVars:e}=await import(`./automations-Dn6d5Ye0.js`);return{resolveVars:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49]),import.meta.url);return a(e,H(t,i,r))}var W=`ayaka_notion_templates`,G=40,K=2e4;function q(){let t=[];for(let n of e(W,[])){if(!n||typeof n!=`object`)continue;let{id:e,title:r,body:i,created:a}=n;if(!(typeof e!=`string`||!e)&&typeof r==`string`&&typeof i==`string`&&!(typeof a!=`number`||!Number.isFinite(a))&&(t.push({id:e,title:r,body:i.slice(0,K),created:a}),t.length===40))break}return t}function J(e){let n=e.slice(0,40);return t(W,n),n}function ae(e,t,n=Date.now()){return J([{id:r(),title:e.slice(0,200),body:t.slice(0,K),created:n},...q()])}function oe(e){return J(q().filter(t=>t.id!==e))}async function se(e){let{pasteToDrafts:t}=await n(async()=>{let{pasteToDrafts:e}=await import(`./markdown-html-BQK0Rgtt.js`);return{pasteToDrafts:e}},__vite__mapDeps([50,10,11,5,2,1,3,4,6,7,8,12,13,9,14,51]),import.meta.url);return t({html:e,text:``})}var ce=/<w:p[ >][\s\S]*?<\/w:p>/g,le=/<w:t(?:\s[^>]*)?>([\s\S]*?)<\/w:t>/g,ue=/<w:pStyle\s+w:val="([^"]*)"/,de=/<w:numFmt\s+w:val="([^"]*)"/;function fe(e){return e.replace(/&lt;/g,`<`).replace(/&gt;/g,`>`).replace(/&quot;/g,`"`).replace(/&apos;/g,`'`).replace(/&amp;/g,`&`)}async function pe(e){let{zipEntry:t}=await n(async()=>{let{zipEntry:e}=await import(`./zipread-hKXo5VQJ.js`);return{zipEntry:e}},[],import.meta.url),r=t(e,`word/document.xml`);if(!r)return[];let i=new TextDecoder().decode(r.bytes),o=[];for(let e of i.match(ce)??[]){let t=``;for(let n of e.matchAll(le))t+=fe(n[1]??``);t=t.replace(/\s+$/,``);let n=ue.exec(e)?.[1]??``,r=/^Heading([1-6])$/i.exec(n);if(r){let e=Math.min(3,Number(r[1]));o.push({type:`heading_${e}`,text:a(t),children:[]});continue}if(t!==``){if(/<w:numPr[ >]/.test(e)){let n=de.exec(e)?.[1]===`decimal`;o.push({type:n?`numbered_list_item`:`bulleted_list_item`,text:a(t),children:[]});continue}if(/^Quote$/i.test(n)){o.push({type:`quote`,text:a(t),children:[]});continue}o.push({type:`paragraph`,text:a(t),children:[]})}}return o}var me=/\.(md|markdown|txt|csv)$/i;async function he(e){let{zipEntries:t}=await n(async()=>{let{zipEntries:e}=await import(`./zipread-hKXo5VQJ.js`);return{zipEntries:e}},[],import.meta.url),r=t(e,e=>me.test(e)),i=[];for(let e of r)/\.csv$/i.test(e.name)||i.push({path:Y(e.name),text:new TextDecoder().decode(e.bytes)});return L(i)}function Y(e){return e.split(`/`).map(e=>e.replace(/[ _-]+[0-9a-f]{32}(?=$|\.)/i,``)).join(`/`)}var X={subpages:!0,folders:!1,files:!0};function Z(e){let t=e.replace(/[\\/:*?"<>|\u0000-\u001f]/g,`-`).replace(/\s+/g,` `).trim().slice(0,80).replace(/[. ]+$/,``);return t?/^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i.test(t)?`_${t}`:t:`Untitled`}function Q(e){let t=[],n=null;for(let r of e.split(`
`)){let e=/^\s*(`{3,}|~{3,})/.exec(r)?.[1];if(n!==null){e&&e[0]===n[0]&&e.length>=n.length&&r.trim()===e&&(n=null),t.push(r);continue}if(e){n=e,t.push(r);continue}t.push(r.replace(/!\[([^\]]*)\]\([^)]*\)/g,(e,t)=>t||``).replace(/\[([^\]]*)\]\(data:[^)]*\)/g,(e,t)=>t))}return t.join(`
`)}function ge(e,t,n,r,i){let a=e=>t.files?e:Q(e);if(!t.folders){let o=n(e,1);if(t.subpages){let t=(e,i)=>{for(let a of r(e))o+=`
`+n(a,i),t(a,Math.min(6,i+1))};t(e,2)}return[{name:`${Z(i(e))}.md`,text:a(o)}]}let o=[],s=new Set,c=(e,l,u)=>{let d=Z(i(e)),f=d;for(let e=2;s.has(`${l}${f}`.toLowerCase());e++)f=`${d} (${e})`;if(s.add(`${l}${f}`.toLowerCase()),o.push({name:`${l}${f}.md`,text:a(n(e,u))}),t.subpages)for(let t of r(e))c(t,`${l}${f}/`,Math.min(6,u+1))};return c(e,``,1),o}var _e=5e3,$=/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,ve={DAILY:`daily`,WEEKLY:`weekly`,MONTHLY:`monthly`,YEARLY:`yearly`};function ye(e,t,n,o,s=Date.now()){let c=e.databases[t],l=c?.props.find(e=>e.type===`date`);if(!c||!l)return 0;let u=c.props.find(e=>e.name.trim().toLowerCase()===`uid`&&(e.type===`text`||e.type===`url`)),d=new Set,f=new Set(c.rows.map(e=>`${e}@kamisato-estate`));if(u)for(let t of c.rows){let n=e.pages[t]?.props?.[u.id];n?.t===`text`?d.add(i(n.v)):n?.t===`string`&&d.add(n.v)}let p=new Map;for(let e of n){let t=e.uid?.trim();!t||!e.recurrenceId||p.set(t,[...p.get(t)??[],e.recurrenceId])}let m=new Set,h=0;for(let t of n){let n=t.uid?.trim();if(n&&f.has(n)||t.recurrenceId&&t.cancelled)continue;if(u&&n){if(d.has(n))continue;let e=`${n}\n${t.recurrenceId??``}`;if(m.has(e))continue;m.add(e)}let i=r(),g=N(i,c.pageId,o,s);g.title=t.title?a(t.title):[],g.databaseId=c.id;let _={start:t.start,end:t.end,hasTime:t.hasTime},v=t.rrule??``,y=t.rrule?ve[/FREQ=([A-Z]+)/.exec(v)?.[1]??``]:void 0;if(y){_.repeat=y;let e=Number(/INTERVAL=(\d+)/.exec(v)?.[1]??1);e>1&&(_.interval=Math.min(99,e));let r=/UNTIL=(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})(Z?))?/.exec(v),i=Number(/COUNT=(\d+)/.exec(v)?.[1]??0);if(r?.[7]===`Z`){let e=new Date(Date.UTC(Number(r[1]),Number(r[2])-1,Number(r[3]),Number(r[4]),Number(r[5]),Number(r[6])));_.repeatUntil=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}else if(r)_.repeatUntil=`${r[1]}-${r[2]}-${r[3]}`;else if(i>0&&i<=5e3){let t=ee(_.start.slice(0,10),y,(i-1)*Math.min(99,Math.max(1,e)));$.test(t)&&(_.repeatUntil=t)}let a=[...t.exdate??[],...n?p.get(n)??[]:[]].filter(e=>$.test(e));a.length&&(_.skip=[...new Set(a)].sort())}g.props={[l.id]:{t:`date`,v:_}},u&&n&&(g.props[u.id]=u.type===`url`?{t:`string`,v:n}:{t:`text`,v:a(n)}),e.pages[i]=g,c.rows.push(i),h+=1}return h}export{te as CSV_BOM,P as CSV_SKIPPED_TYPES,f as DATE_RANGE_ARROW,X as DEFAULT_EXPORT_OPTS,_e as ICS_COUNT_MAX,W as OWN_TEMPLATES_KEY,G as OWN_TEMPLATES_MAX,K as OWN_TEMPLATE_BODY_MAX,ie as PAGE_TEMPLATES,E as SELECT_MAX_OPTIONS,ne as applyCsvImport,ye as applyIcsImport,re as applyMarkdownImport,z as countImport,b as csvCell,T as csvDate,v as csvEscape,w as csvNumber,y as csvUnescape,j as csvValue,F as databaseToCsv,oe as deleteOwnTemplate,pe as docxToDrafts,Q as dropImages,ge as exportFiles,U as fillTemplate,se as htmlToDrafts,R as importDrafts,I as importTitle,D as inferColumn,s as joinTags,h as parseCsv,A as planCsvImport,L as planMarkdownImport,he as planNotionZip,o as propToCsv,q as readOwnTemplates,Z as safeFileName,ae as saveOwnTemplate,O as splitTags,Y as stripNotionIds,B as templateDrafts,H as templateVars,x as toCsv};