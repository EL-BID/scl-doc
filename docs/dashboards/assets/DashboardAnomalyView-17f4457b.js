import{_ as v,r as f,b as g,o as y,c as x,g as n,h as i,i as b,a as o,t as A,j as u}from"./index-955c35c0.js";d3plus.colorDefaults.missing="white";d3plus.colorDefaults.scale.range(["#305EA9","#1C97C9","#6CCDEF","#685990","#B1B6BA","#555555","#24264F","#30A98C","#F453AA","#F9965E","#FC4D4D","#FFCB65"]);d3plus.findLocale("pt-BR");const C={methods:{},setup(){var m=f(!1),p=f(0);function _(){Promise.all([fetch("https://mydata.iadb.org/resource/s8uc-zq8r.json").then(t=>t.ok&&t.json()||Promise.reject(t))]).then(t=>{var s=t[0],e=s.sort((a,l)=>a.isoalpha3<l.isoalpha3?-1:a.isoalpha3>l.isoalpha3?1:0),r=[];e.forEach(a=>{var l=r.filter(c=>a.indicator==c.indicator&&a.isoalpha3==c.isoalpha3)[0];l!=null?(l.years.push(+a.year),l.years=[...new Set(l.years.map(c=>+c))]):(a.years=[+a.year],r.push(a))}),this.anomalies=r,d(r)})}function d(t){var s=[{groupby:"indicator",container:"viz-resume",title:"Distribución de anomalías por indicador"},{groupby:"isoalpha3",container:"viz-resume-country",title:"Distribución de anomalías por país"},{groupby:"year",container:"viz-resume-year",title:"Distribución de anomalías por año"},{groupby:"theme_en",container:"viz-resume-theme",title:"Distribución de anomalías por tema"}];s.forEach(e=>{var r=new d3plus.Treemap().data(t).groupBy(e.groupby).title(e.title).color("theme_en").sum(a=>Array.isArray(a.unnamed_column)?a.unnamed_column.length:0).tooltipConfig({body:a=>`Cantidad: ${Array.isArray(a.unnamed_column)?a.unnamed_column.length:0}`,tbody:""}).shapeConfig({Rect:{label:a=>a[e.groupby].split(",").length>1?`Otros casos
${Array.isArray(a.unnamed_column)?a.unnamed_column.length:0}`:`${a[e.groupby]}
${Array.isArray(a.unnamed_column)?a.unnamed_column.length:0}`}}).legend(!1).height(300).threshold(.02).select(`#${e.container}`);console.log(r),r._locale="es-ES",r.render()})}function h(t){fetch(`https://mydata.iadb.org/resource/q8e9-eb82.json?$$app_token=IjHG1z0fQXsM9vxlkB8vPq3S2&indicator=${t.indicator}&isoalpha3=${t.isoalpha3}&totals_dummy=1`).then(s=>s.json()).then(s=>{d3.select("#viz").select("svg").remove(),console.clear(),d3.max(s,e=>e.value),new d3plus.LinePlot().data(s).groupBy(["isoalpha3","indicator"]).height(600).x(e=>+e.year).loadingMessage(!0).tooltip(!0).lineMarkerConfig({fill:(e,r)=>+e.y&&b(t.years).indexOf(e.x)>-1||e.value&&b(t.years).indexOf(+e.year)>-1?"#C24E4C":"#1E88E5",label:e=>d3.format(".2f")(e.y),r:20,labelConfig:{fontResize:!0}}).baseline(0).title(`Error encontrado en: <b>${t.isoalpha3} ${t.years.join(", ")} ${t.indicator} ${t.theme_en}</b>`).tooltip(!0).lineMarkers(!0).legend(!1).y(e=>+e.value).select("#viz").render()})}return{getData:_,anomalies:p,dialog:m,drawViz:h}},mounted(){this.getData()}},D={class:"container"},z=o("p",{class:"text-3xl font-semibold text-black mb-2 lg:mb-0"},"REPORTE DE ANOMALÍAS EN LOS INDICADORES",-1),E=o("p",{class:"text-md mb-2 lg:mb-0 text-black"},[u("Con el objetivo de identificar indicadores con valores extremos, se definen las anomalías como aquellos cuyo valor se encuentra fuera de tres veces el rango intercuartílico para un país a través de los años. A continuación, se muestran la distribución de las anomalías por tema, año, indicadores y países, es decir, del total, la cantidad de anomalías que corresponde a cada categoría. La metodología detrás de la identificación de las anomalías se describe en el repositorio de Github: "),o("a",{class:"text-blue-400",href:"https://github.com/BID-DATA/scldata_anomaly_detection_scl/tree/development",target:"_blank"}," anomalías"),u(".")],-1),$=o("p",{class:"text-md mb-2 lg:mb-0 text-black"},[u("Las anomalías se pueden descargar desde "),o("a",{class:"text-blue-400",href:"https://mydata.iadb.org/resource/s8uc-zq8r.csv",target:"_blank"},"aquí")],-1),w={class:"p-1 text-white"},k={class:"text-5xl font-weight-bold"},B=o("p",{class:"text-md"},"Total de anomalías ",-1),j=o("div",{id:"viz-resume-theme"},null,-1),q=o("div",{id:"viz-resume-year"},null,-1),F=o("div",{id:"viz-resume-country"},null,-1),O=o("div",{id:"viz-resume"},null,-1);function R(m,p,_,d,h,t){const s=g("v-col"),e=g("v-row");return y(),x("div",D,[n(e,{class:"",align:"center"},{default:i(()=>[n(s,{cols:"8"},{default:i(()=>[z,E,$]),_:1}),n(s,{class:"pb-10 text-center bg-gray-400",cols:"3"},{default:i(()=>[o("div",w,[o("p",k,A(d.anomalies.length),1),B])]),_:1})]),_:1}),n(e,{class:"py-5"},{default:i(()=>[n(s,{cols:"12",md:"6",sm:"12"},{default:i(()=>[j]),_:1}),n(s,{cols:"12",md:"6",sm:"12"},{default:i(()=>[q]),_:1})]),_:1}),n(e,{class:"py-5"},{default:i(()=>[n(s,{cols:"12",md:"6",sm:"12"},{default:i(()=>[F]),_:1}),n(s,{cols:"12",md:"6",sm:"12"},{default:i(()=>[O]),_:1})]),_:1})])}const L=v(C,[["render",R]]);export{L as default};
