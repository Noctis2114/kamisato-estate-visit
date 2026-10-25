const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./automations-D2RMDGJ_.js","./locale-catalog-DH4vmtQb.js","./preload-helper-CIc_hbWm.js","./storage-CSfy7ei8.js","./media-limits-DvFSfR5T.js","./keys-BePOtOUh.js","./idb-Bw8Vz8T8.js","./estate-integrity-DSAoa-Dz.js","./rolldown-runtime-hePW80VL.js","./prefs-DdaDVn_w.js","./estate-map-plxfblK_.js","./lang-P0qPCJpR.js","./ids-D7aKNHEt.js","./rich-text-B4zttWbv.js","./days-DsPVVU9s.js","./store-DML4tkW_.js","./react-D0Ec-185.js","./workspace-storage-DCe_-s3N.js","./model-BjA3Pc6N.js","./media-BWuW8ppz.js","./page-j6djP4--.js","./index-C9EaFae5.js","./seasonal-art-CwZVx2fs.js","./worker-build-jmpUHxhL.js","./build-info-COZwgBBI.js","./tea-seal-CuU3UmR4.js","./wallpaper-catalog-D_-8w06s.js","./estate-names-CjVDGWmW.js","./lag-guard-DrGMEqzH.js","./perf-mode-DR1lZzwB.js","./use-fx-tier-Bxs9Q33s.js","./fullscreen-C4ZRVxTq.js","./focus-frame-CiewN-6L.js","./deck-BiC9M9yL.js","./cached-CZ_TaJbx.js","./live-DDYNLfI5.js","./live-cards-Ba3JiUiw.js","./catalog-d1tWVWz0.js","./shelf-BQphkXtB.js","./daily-BEt1_sIS.js","./live-save-CeazTO_a.js","./solitaire--OvAB6FQ.js","./lanterns-D8XbgAwK.js","./scores-CYg6cA_L.js","./private-guard-weaqfucx.js","./passkey-lock-C7WSBcyA.js","./asset-fetch-B6o4vEYS.js","./bible-books-cMk3yt4V.js","./leaving-sF8zGCrk.js","./model-UtARqacn.js","./error-net-D6jPi2Ju.js","./error-ledger-CIA16ra5.js","./prefetch-B7zG0YsA.js","./use-local-state-CPQfSIRz.js","./code-points-hBUNK0ZR.js","./estate-file-limits-DpmbZW-C.js","./perf-trace-lIYLa8MR.js","./index-ByPE1LNq.css","./money-private-D4EBzho0.js","./markdown-html-C_VWB7p8.js","./paste-lines-DHPbgDOe.js","./library-readable-BgoleND_.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-hePW80VL.js";import{i as t}from"./locale-catalog-DH4vmtQb.js";import{t as n}from"./preload-helper-CIc_hbWm.js";import{L as r,gt as i}from"./prefs-DdaDVn_w.js";import{a}from"./ids-D7aKNHEt.js";import{F as o,T as s}from"./rich-text-B4zttWbv.js";import{D as c,H as l,L as u,N as d,O as f,U as p,X as m,Y as h}from"./paste-lines-DHPbgDOe.js";import{a as g}from"./remind-BrUV_FoK.js";var _=e({CSV_BOM:()=>`﻿`,CSV_SKIPPED_TYPES:()=>I,DATE_RANGE_ARROW:()=>c,DEFAULT_EXPORT_OPTS:()=>he,ICS_COUNT_MAX:()=>_e,OWN_TEMPLATES_KEY:()=>G,OWN_TEMPLATES_MAX:()=>40,OWN_TEMPLATE_BODY_MAX:()=>K,PAGE_TEMPLATES:()=>re,SELECT_MAX_OPTIONS:()=>24,applyCsvImport:()=>F,applyIcsImport:()=>ye,applyMarkdownImport:()=>ne,countImport:()=>V,csvCell:()=>w,csvDate:()=>O,csvEscape:()=>S,csvNumber:()=>D,csvUnescape:()=>C,csvValue:()=>N,databaseToCsv:()=>L,deleteOwnTemplate:()=>oe,docxToDrafts:()=>pe,dropImages:()=>Q,exportFiles:()=>ge,fillTemplate:()=>W,htmlToDrafts:()=>se,importDrafts:()=>B,importTitle:()=>R,inferColumn:()=>k,joinTags:()=>p,parseCsv:()=>y,planCsvImport:()=>M,planMarkdownImport:()=>z,planNotionZip:()=>Y,propToCsv:()=>m,readOwnTemplates:()=>q,safeFileName:()=>Z,saveOwnTemplate:()=>ae,splitTags:()=>A,stripNotionIds:()=>X,templateDrafts:()=>ie,templateVars:()=>U,toCsv:()=>T});function v(e,n,r){return t({en:e,zh:n,ja:r})}function y(e){e.charCodeAt(0)===65279&&(e=e.slice(1));let t=[],n=[],r=``,i=!1,a=!1,o=()=>{n.push(r),r=``,a=!0},s=()=>{o(),t.push(n),n=[],a=!1};for(let t=0;t<e.length;t+=1){let n=e[t];if(i){n===`"`?e[t+1]===`"`?(r+=`"`,t+=1):i=!1:r+=n;continue}if(n===`"`&&r===``){i=!0,a=!0;continue}if(n===`,`){o();continue}if(n!==`\r`){if(n===`
`){s();continue}r+=n,a=!0}}return(a||r!==``||n.length)&&s(),t}var b=/^'*[=+\-@\t\r]/,x=/^[-+]?\d*\.?\d+(?:e[-+]?\d+)?$/i;function S(e){return b.test(e)&&!x.test(e)?`'${e}`:e}function C(e){return e.startsWith(`'`)&&b.test(e.slice(1))&&!x.test(e.slice(1))?e.slice(1):e}function w(e){let t=S(e);return/[",\r\n]/.test(t)?`"${t.replace(/"/g,`""`)}"`:t}function T(e){return`﻿`+e.map(e=>e.map(w).join(`,`)).join(`\r
`)}var E=new Set([`yes`,`true`,`y`,`1`,`✓`,`done`,`是`,`はい`]),ee=new Set([`no`,`false`,`n`,`0`,``,`否`,`いいえ`]);function D(e){let t=e.trim();if(t.includes(`,`)&&!/^[-+]?\d{1,3}(?:,\d{3})+(?:\.\d+)?$/.test(t))return null;let n=t.replace(/,/g,``);if(!n||!/^[-+]?\d*\.?\d+(?:e[-+]?\d+)?$/i.test(n))return null;let r=Number(n);return Number.isFinite(r)?r:null}function O(e){let t=/^(\d{4})-(\d{2})-(\d{2})(?:[T ](\d{2}):(\d{2}))?/.exec(e.trim());if(!t)return null;let n=Number(t[2]),r=Number(t[3]),i=new Date(Date.UTC(Number(t[1]),n,0)).getUTCDate();return n<1||n>12||r<1||r>i||t[4]&&(Number(t[4])>23||Number(t[5])>59)?null:t[4]?`${t[1]}-${t[2]}-${t[3]}T${t[4]}:${t[5]}`:`${t[1]}-${t[2]}-${t[3]}`}function k(e){let t=e.map(e=>e.trim()).filter(e=>e!==``);if(!t.length)return`text`;if(t.every(e=>D(e)!==null))return`number`;if(t.map(e=>e.toLowerCase()).every(e=>E.has(e)||ee.has(e)))return`checkbox`;if(t.every(e=>O(e)!==null))return`date`;if(t.every(e=>/^https?:\/\/\S+$/i.test(e)))return`url`;if(t.filter(e=>e.includes(`,`)).length>=Math.ceil(t.length/2)){let e=new Set;for(let n of t)for(let t of A(n))e.add(t);if(e.size&&e.size<=24)return`multi_select`}let n=new Set(t);return n.size<=24&&n.size<t.length?`select`:`text`}function A(e){let t=[],n=``,r=!1,i=!1,a=()=>{let e=i?n:n.trim();e.trim()&&t.push(e),n=``,i=!1};for(let t=0;t<e.length;t+=1){let o=e[t];if(r){o===`"`?e[t+1]===`"`?(n+=`"`,t+=1):r=!1:n+=o;continue}if(o===`"`&&n.trim()===``&&!i){r=!0,i=!0,n=``;continue}if(o===`,`){a();continue}if(i){o?.trim()&&(n+=o);continue}n+=o}return r&&(n=`"${n}`),a(),t}var j=[`blue`,`green`,`orange`,`purple`,`pink`,`yellow`,`brown`,`red`,`grey`];function M(e,t){let n=y(e).map(e=>e.map(C)),r=n[0];if(!r||!r.length)return null;let i=n.slice(1).filter(e=>e.some(e=>e.trim()!==``)),o=n.length-1-i.length,s=r.map((e,t)=>({name:e.trim()||`Column ${t+1}`,values:i.map(e=>e[t]??``)})),c=[],l=new Map;s.forEach((e,t)=>{let n=t===0?`title`:k(e.values),r={id:a(),name:e.name,type:n};if(n===`select`||n===`multi_select`){let t=[];for(let r of e.values){let e=n===`multi_select`?A(r):[r.trim()];for(let n of e)n&&!t.includes(n)&&t.push(n)}let i=new Map;r.options=t.map((e,t)=>{let n=a();return i.set(e,n),{id:n,name:e,color:j[t%j.length]??`default`}}),l.set(r.id,i)}c.push(r)});let u={title:t.trim()||`Imported`,props:c,rows:[],blank:o};for(let e of i){let t={},n=``;c.forEach((r,i)=>{let a=(e[i]??``).trim();if(i===0){n=a;return}let o=N(r,a,l.get(r.id));o&&(t[r.id]=o)}),u.rows.push({title:n,props:t})}return u}function N(e,t,n){if(e.type===`checkbox`)return{t:`checkbox`,v:E.has(t.toLowerCase())};if(!t)return null;switch(e.type){case`number`:{let e=D(t);return e===null?null:{t:`number`,v:e}}case`date`:{let e=t.indexOf(`→`),n=O(e===-1?t:t.slice(0,e));return n===null?null:{t:`date`,v:{start:n,end:e===-1?null:O(t.slice(e+1)),hasTime:n.includes(`T`)}}}case`url`:case`email`:case`phone`:return{t:`string`,v:t};case`select`:{let e=n?.get(t);return e?{t:`select`,v:e}:null}case`multi_select`:{let e=A(t).map(e=>n?.get(e)).filter(e=>!!e);return e.length?{t:`multi`,v:e}:null}default:return{t:`text`,v:s(t)}}}function te(e){return{id:a(),name:`Table`,type:`table`,filter:{kind:`group`,op:`and`,items:[]},sorts:[],groupByPropId:null,hideEmptyGroups:!1,collapsedGroups:[],visibleProps:e.map(e=>e.id),widths:{},wrap:{},calcs:{},manualOrder:[],search:``}}function P(e,t,n,r){return{id:e,parent:t,title:[],icon:null,cover:null,children:[],blocks:[],fullWidth:n.fullWidthDefault,smallText:n.smallText,font:n.font,locked:!1,createdAt:r,editedAt:r,deletedAt:null,deletedFrom:null}}function F(e,t,n,r,i=Date.now()){let o=a(),c=P(o,t,r,i);c.title=s(n.title);let l={id:a(),pageId:o,inline:!1,title:n.title,icon:null,description:``,props:n.props,rows:[],templates:[],views:[te(n.props)],locked:!1};for(let t of n.rows){let n=a(),c=P(n,o,r,i);c.title=t.title?s(t.title):[],c.databaseId=l.id,c.props=t.props,e.pages[n]=c,l.rows.push(n)}return e.pages[o]=c,e.databases[l.id]=l,t===null?e.roots.push(o):e.pages[t]?.children.push(o),o}var I=f;function L(e,t,n=Date.now()){let r=d(e,t);return r?T([r.head,...r.rows.map(e=>e.cells)]):``}function R(e){return e.replace(/\.(md|markdown|txt|csv)$/i,``).replace(/[_-]+/g,` `).trim()||`Untitled`}function z(e){let t={title:``,text:null,children:[]},n=new Map([[``,t]]),r=new Map,i=e=>{let t=n.get(e);if(t)return t;let a=r.get(e);if(a)return n.set(e,a),a;let o=e.lastIndexOf(`/`),s=i(o===-1?``:e.slice(0,o)),c={title:R(o===-1?e:e.slice(o+1)),text:null,children:[]};return s.children.push(c),n.set(e,c),c};for(let a of e){if(!/\.(md|markdown|txt)$/i.test(a.path))continue;let e=a.path.split(`/`).filter(e=>e&&e!==`.`&&e!==`..`),o=e.pop()??``,s=e.join(`/`),c=`${s?`${s}/`:``}${o.replace(/\.(md|markdown|txt)$/i,``)}`,l=n.get(c);if(l&&l!==t&&l.text===null&&!r.has(c)){l.text=a.text,r.set(c,l);continue}let u=i(s),d=R(o);if(s&&d===u.title&&u.text===null){u.text=a.text;continue}let f={title:d,text:a.text,children:[]};u.children.push(f),r.has(c)||r.set(c,f)}return t.children}function B(e){let t=h(e),n=t[0];if(n&&n.type===`heading_1`&&!n.children.length){let e=o(n.text).trim();if(e)return{title:e,drafts:t.slice(1)}}return{title:null,drafts:t}}function ne(e,t,n,r,i=Date.now()){let o=[],c=(t,n)=>{let o=a(),l=P(o,n,r,i),d=t.title;if(t.text!==null){let n=B(t.text);n.title&&(d=n.title);let{blocks:r,ids:a}=u(n.drafts,o,i);for(let t of r)e.blocks[t.id]=t;l.blocks=a}if(!l.blocks.length){let t={id:a(),type:`paragraph`,parent:o,children:[],text:[],color:`default`,createdAt:i,editedAt:i};e.blocks[t.id]=t,l.blocks=[t.id]}return l.title=d?s(d):[],e.pages[o]=l,n===null?e.roots.push(o):e.pages[n]?.children.push(o),l.children=t.children.map(e=>c(e,o)),o};for(let e of n)o.push(c(e,t));return o}function V(e){return e.reduce((e,t)=>e+1+V(t.children),0)}var re=[{id:`meeting`,icon:`🗒️`,name:v(`Meeting notes`,`会议记录`,`議事録`),note:v(`Who came, what was said, what happens next.`,`与会者、讨论与后续。`,`出席者・議題・次の一手。`),markdown:`# Meeting notes

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
`},{id:`weekly`,icon:`📅`,name:v(`Weekly agenda`,`每周计划`,`週間予定`),note:v(`A week laid out a day at a time.`,`一周七天，逐日安排。`,`一週間を一日ずつ。`),markdown:`# Weekly agenda

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
`},{id:`project`,icon:`🧭`,name:v(`Project plan`,`项目计划`,`プロジェクト計画`),note:v(`The goal, the parts, the dates, the risks.`,`目标、拆解、时间与风险。`,`目的・分解・期日・リスク。`),markdown:`# Project plan

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
`},{id:`journal`,icon:`🌤️`,name:v(`Daily journal`,`每日日记`,`日記`),note:v(`Three questions, once a day.`,`每天三问。`,`一日三つの問い。`),markdown:`# Daily journal — {{weekday}} {{date}}

## What happened

## What I learned

## What is next
- [ ] 
`},{id:`reading`,icon:`📚`,name:v(`Reading list`,`阅读清单`,`読書リスト`),note:v(`Books, where you are in them, what they said.`,`书目、进度与摘记。`,`本と進み具合と覚え書き。`),markdown:`# Reading list

| Title | Author | Status | Note |
| --- | --- | --- | --- |
|  |  | Reading |  |

## Passages worth keeping
> 
`},{id:`todo`,icon:`✅`,name:v(`Task list`,`待办清单`,`やること`),note:v(`Today, this week, and someday.`,`今天、本周与以后。`,`今日・今週・いつか。`),markdown:`# Tasks

## Today ({{date}})
- [ ] 

## This week
- [ ] 

## Someday
- [ ] 
`}];function ie(e){return B(e.markdown)}var H=v(`Sunday Monday Tuesday Wednesday Thursday Friday Saturday`,`星期日 星期一 星期二 星期三 星期四 星期五 星期六`,`日曜日 月曜日 火曜日 水曜日 木曜日 金曜日 土曜日`);function U(e,t=new Date,n=``){let[r=``,i=``]=l(t.getTime()).split(`T`);return{date:r,today:r,time:i,page:n,weekday:H[e].split(` `)[t.getDay()]??``}}async function W(e,t,r=``,i=new Date){let{resolveVars:a}=await n(async()=>{let{resolveVars:e}=await import(`./automations-D2RMDGJ_.js`);return{resolveVars:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58]),import.meta.url);return a(e,U(t,i,r))}var G=`ayaka_notion_templates`,K=2e4;function q(){let e=[];for(let t of r(G,[])){if(!t||typeof t!=`object`)continue;let{id:n,title:r,body:i,created:a}=t;if(!(typeof n!=`string`||!n)&&typeof r==`string`&&typeof i==`string`&&!(typeof a!=`number`||!Number.isFinite(a))&&(e.push({id:n,title:r,body:i.slice(0,K),created:a}),e.length===40))break}return e}function J(e){let t=e.slice(0,40);return i(G,t),t}function ae(e,t,n=Date.now()){return J([{id:a(),title:e.slice(0,200),body:t.slice(0,K),created:n},...q()])}function oe(e){return J(q().filter(t=>t.id!==e))}async function se(e){let{pasteToDrafts:t}=await n(async()=>{let{pasteToDrafts:e}=await import(`./markdown-html-C_VWB7p8.js`);return{pasteToDrafts:e}},__vite__mapDeps([59,13,1,2,12,18,15,16,8,5,3,4,6,7,9,10,11,17,19,60,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,14,61]),import.meta.url);return t({html:e,text:``})}var ce=/<w:p[ >][\s\S]*?<\/w:p>/g,le=/<w:t(?:\s[^>]*)?>([\s\S]*?)<\/w:t>/g,ue=/<w:pStyle\s+w:val="([^"]*)"/,de=/<w:numFmt\s+w:val="([^"]*)"/;function fe(e){return e.replace(/&lt;/g,`<`).replace(/&gt;/g,`>`).replace(/&quot;/g,`"`).replace(/&apos;/g,`'`).replace(/&amp;/g,`&`)}async function pe(e){let{zipEntry:t}=await n(async()=>{let{zipEntry:e}=await import(`./zipread-hKXo5VQJ.js`);return{zipEntry:e}},[],import.meta.url),r=t(e,`word/document.xml`);if(!r)return[];let i=new TextDecoder().decode(r.bytes),a=[];for(let e of i.match(ce)??[]){let t=``;for(let n of e.matchAll(le))t+=fe(n[1]??``);t=t.replace(/\s+$/,``);let n=ue.exec(e)?.[1]??``,r=/^Heading([1-6])$/i.exec(n);if(r){let e=Math.min(3,Number(r[1]));a.push({type:`heading_${e}`,text:s(t),children:[]});continue}if(t!==``){if(/<w:numPr[ >]/.test(e)){let n=de.exec(e)?.[1]===`decimal`;a.push({type:n?`numbered_list_item`:`bulleted_list_item`,text:s(t),children:[]});continue}if(/^Quote$/i.test(n)){a.push({type:`quote`,text:s(t),children:[]});continue}a.push({type:`paragraph`,text:s(t),children:[]})}}return a}var me=/\.(md|markdown|txt|csv)$/i;async function Y(e){let{zipEntries:t}=await n(async()=>{let{zipEntries:e}=await import(`./zipread-hKXo5VQJ.js`);return{zipEntries:e}},[],import.meta.url),r=t(e,e=>me.test(e)),i=[];for(let e of r)/\.csv$/i.test(e.name)||i.push({path:X(e.name),text:new TextDecoder().decode(e.bytes)});return z(i)}function X(e){return e.split(`/`).map(e=>e.replace(/[ _-]+[0-9a-f]{32}(?=$|\.)/i,``)).join(`/`)}var he={subpages:!0,folders:!1,files:!0};function Z(e){let t=e.replace(/[\\/:*?"<>|\u0000-\u001f]/g,`-`).replace(/\s+/g,` `).trim().slice(0,80).replace(/[. ]+$/,``);return t?/^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i.test(t)?`_${t}`:t:`Untitled`}function Q(e){let t=[],n=null;for(let r of e.split(`
`)){let e=/^\s*(`{3,}|~{3,})/.exec(r)?.[1];if(n!==null){e&&e[0]===n[0]&&e.length>=n.length&&r.trim()===e&&(n=null),t.push(r);continue}if(e){n=e,t.push(r);continue}t.push(r.replace(/!\[([^\]]*)\]\([^)]*\)/g,(e,t)=>t||``).replace(/\[([^\]]*)\]\(data:[^)]*\)/g,(e,t)=>t))}return t.join(`
`)}function ge(e,t,n,r,i){let a=e=>t.files?e:Q(e);if(!t.folders){let o=n(e,1);if(t.subpages){let t=(e,i)=>{for(let a of r(e))o+=`
`+n(a,i),t(a,Math.min(6,i+1))};t(e,2)}return[{name:`${Z(i(e))}.md`,text:a(o)}]}let o=[],s=new Set,c=(e,l,u)=>{let d=Z(i(e)),f=d;for(let e=2;s.has(`${l}${f}`.toLowerCase());e++)f=`${d} (${e})`;if(s.add(`${l}${f}`.toLowerCase()),o.push({name:`${l}${f}.md`,text:a(n(e,u))}),t.subpages)for(let t of r(e))c(t,`${l}${f}/`,Math.min(6,u+1))};return c(e,``,1),o}var _e=5e3,$=/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,ve={DAILY:`daily`,WEEKLY:`weekly`,MONTHLY:`monthly`,YEARLY:`yearly`};function ye(e,t,n,r,i=Date.now()){let c=e.databases[t],l=c?.props.find(e=>e.type===`date`);if(!c||!l)return 0;let u=c.props.find(e=>e.name.trim().toLowerCase()===`uid`&&(e.type===`text`||e.type===`url`)),d=new Set,f=new Set(c.rows.map(e=>`${e}@kamisato-estate`));if(u)for(let t of c.rows){let n=e.pages[t]?.props?.[u.id];n?.t===`text`?d.add(o(n.v)):n?.t===`string`&&d.add(n.v)}let p=new Map;for(let e of n){let t=e.uid?.trim();!t||!e.recurrenceId||p.set(t,[...p.get(t)??[],e.recurrenceId])}let m=new Set,h=0;for(let t of n){let n=t.uid?.trim();if(n&&f.has(n)||t.recurrenceId&&t.cancelled)continue;if(u&&n){if(d.has(n))continue;let e=`${n}\n${t.recurrenceId??``}`;if(m.has(e))continue;m.add(e)}let o=a(),_=P(o,c.pageId,r,i);_.title=t.title?s(t.title):[],_.databaseId=c.id;let v={start:t.start,end:t.end,hasTime:t.hasTime},y=t.rrule??``,b=t.rrule?ve[/FREQ=([A-Z]+)/.exec(y)?.[1]??``]:void 0;if(b){v.repeat=b;let e=Number(/INTERVAL=(\d+)/.exec(y)?.[1]??1);e>1&&(v.interval=Math.min(99,e));let r=/UNTIL=(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})(Z?))?/.exec(y),i=Number(/COUNT=(\d+)/.exec(y)?.[1]??0);if(r?.[7]===`Z`){let e=new Date(Date.UTC(Number(r[1]),Number(r[2])-1,Number(r[3]),Number(r[4]),Number(r[5]),Number(r[6])));v.repeatUntil=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}else if(r)v.repeatUntil=`${r[1]}-${r[2]}-${r[3]}`;else if(i>0&&i<=5e3){let t=g(v.start.slice(0,10),b,(i-1)*Math.min(99,Math.max(1,e)));$.test(t)&&(v.repeatUntil=t)}let a=[...t.exdate??[],...n?p.get(n)??[]:[]].filter(e=>$.test(e));a.length&&(v.skip=[...new Set(a)].sort())}_.props={[l.id]:{t:`date`,v}},u&&n&&(_.props[u.id]=u.type===`url`?{t:`string`,v:n}:{t:`text`,v:s(n)}),e.pages[o]=_,c.rows.push(o),h+=1}return h}export{T as n,_ as t};