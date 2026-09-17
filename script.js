function setActive(el){document.querySelectorAll('nav a').forEach(a=>a.classList.remove('active'));el.classList.add('active');if(innerWidth<800)document.getElementById('sidebar').classList.remove('open')}
function toggleSidebar(){document.getElementById('sidebar').classList.toggle('open')}
function recommend(){
 const s=soil.value,se=season.value,r=rain.value,w=water.value;let crop='Maize',why='Balanced field conditions in this prototype point toward maize.';
 if(se==='Kharif'&&r==='High'){crop='Rice';why='Kharif season with high rainfall can support rice where suitable water management is available.'}
 else if(se==='Rabi'&&r==='Low'&&w!=='Limited'){crop='Wheat';why='Rabi season and lower rainfall can suit wheat when irrigation is available.'}
 else if(s==='Sandy'&&w==='Limited'){crop='Groundnut';why='Groundnut can be considered for lighter soils with careful moisture management.'}
 else if(s==='Black Soil'){crop='Cotton';why='Black soil is commonly associated with cotton; local climate and agronomy still need verification.'}
 advice.classList.remove('hidden');advice.innerHTML=`<b>🌱 Suggested crop: ${crop}</b><br>${why}<br><small>Prototype recommendation. Verify with local soil testing and agricultural experts.</small>`;
}
function preview(e){const f=e.target.files[0];if(!f)return;const img=document.getElementById('preview');img.src=URL.createObjectURL(f);img.classList.remove('hidden')}
function analyze(){diseaseResult.classList.remove('hidden');diseaseResult.innerHTML='<b>✓ Image received</b><br>The prototype upload workflow is working. A production version can connect this screen to a validated plant-disease computer-vision model.'}
new Chart(document.getElementById('marketChart'),{type:'bar',data:{labels:['Rice','Maize','Groundnut'],datasets:[{data:[2350,2100,5800],borderRadius:6}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{y:{beginAtZero:true,grid:{color:'#edf1ef'},ticks:{font:{size:8}}},x:{grid:{display:false},ticks:{font:{size:8}}}}}});
