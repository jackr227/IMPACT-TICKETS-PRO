const STORAGE_KEY="impactTicketsPro.v1",INITIAL_DATE="2026-09-29",SEED_VERSION=2;
const INITIAL_BOOKINGS={"L17":{"purchaser":"Alida van den Berg","email":"1@email.com","phone":"1234567890","barcode":"1","source":"webtickets"},"E10":{"purchaser":"Anika de Beer","email":"2@email.com","phone":"1234567891","barcode":"2","source":"webtickets"},"E11":{"purchaser":"Anika de Beer","email":"3@email.com","phone":"1234567892","barcode":"3","source":"webtickets"},"E12":{"purchaser":"Anika de Beer","email":"4@email.com","phone":"1234567893","barcode":"4","source":"webtickets"},"L11":{"purchaser":"Ashley MacKinnon","email":"5@email.com","phone":"1234567894","barcode":"5","source":"webtickets"},"L10":{"purchaser":"Ashley MacKinnon","email":"6@email.com","phone":"1234567895","barcode":"6","source":"webtickets"},"L9":{"purchaser":"Ashley MacKinnon","email":"7@email.com","phone":"1234567896","barcode":"7","source":"webtickets"},"L8":{"purchaser":"Ashley MacKinnon","email":"8@email.com","phone":"1234567897","barcode":"8","source":"webtickets"},"L7":{"purchaser":"Ashley MacKinnon","email":"9@email.com","phone":"1234567898","barcode":"9","source":"webtickets"},"F5":{"purchaser":"Barbara Hoek","email":"10@email.com","phone":"1234567899","barcode":"10","source":"webtickets"},"F4":{"purchaser":"Barbara Hoek","email":"11@email.com","phone":"1234567900","barcode":"11","source":"webtickets"},"F12":{"purchaser":"Barbara Hoek","email":"12@email.com","phone":"1234567901","barcode":"12","source":"webtickets"},"F11":{"purchaser":"Barbara Hoek","email":"13@email.com","phone":"1234567902","barcode":"13","source":"webtickets"},"F10":{"purchaser":"Barbara Hoek","email":"14@email.com","phone":"1234567903","barcode":"14","source":"webtickets"},"F9":{"purchaser":"Barbara Hoek","email":"15@email.com","phone":"1234567904","barcode":"15","source":"webtickets"},"C14":{"purchaser":"Carey Furniss","email":"16@email.com","phone":"1234567905","barcode":"16","source":"webtickets"},"C13":{"purchaser":"Carey Furniss","email":"17@email.com","phone":"1234567906","barcode":"17","source":"webtickets"},"C12":{"purchaser":"Carey Furniss","email":"18@email.com","phone":"1234567907","barcode":"18","source":"webtickets"},"C11":{"purchaser":"Carey Furniss","email":"19@email.com","phone":"1234567908","barcode":"19","source":"webtickets"},"C10":{"purchaser":"Carey Furniss","email":"20@email.com","phone":"1234567909","barcode":"20","source":"webtickets"},"C9":{"purchaser":"Carey Furniss","email":"21@email.com","phone":"1234567910","barcode":"21","source":"webtickets"},"G18":{"purchaser":"Corienne Erasmus","email":"22@email.com","phone":"1234567911","barcode":"22","source":"webtickets"},"G19":{"purchaser":"Corienne Erasmus","email":"23@email.com","phone":"1234567912","barcode":"23","source":"webtickets"},"E14":{"purchaser":"Craig Campbell","email":"24@email.com","phone":"1234567913","barcode":"24","source":"webtickets"},"E13":{"purchaser":"Craig Campbell","email":"25@email.com","phone":"1234567914","barcode":"25","source":"webtickets"},"B13":{"purchaser":"Daniel Hattingh","email":"26@email.com","phone":"1234567915","barcode":"26","source":"webtickets"},"B14":{"purchaser":"Daniel Hattingh","email":"27@email.com","phone":"1234567916","barcode":"27","source":"webtickets"},"J11":{"purchaser":"Erna Cloete","email":"28@email.com","phone":"1234567917","barcode":"28","source":"webtickets"},"J10":{"purchaser":"Erna Cloete","email":"29@email.com","phone":"1234567918","barcode":"29","source":"webtickets"},"J9":{"purchaser":"Erna Cloete","email":"30@email.com","phone":"1234567919","barcode":"30","source":"webtickets"},"G20":{"purchaser":"Fransie Van Stryp","email":"31@email.com","phone":"1234567920","barcode":"31","source":"webtickets"},"G21":{"purchaser":"Fransie Van Stryp","email":"32@email.com","phone":"1234567921","barcode":"32","source":"webtickets"},"H14":{"purchaser":"Frederik de Vries","email":"33@email.com","phone":"1234567922","barcode":"33","source":"webtickets"},"H13":{"purchaser":"Frederik de Vries","email":"34@email.com","phone":"1234567923","barcode":"34","source":"webtickets"},"H12":{"purchaser":"Frederik de Vries","email":"35@email.com","phone":"1234567924","barcode":"35","source":"webtickets"},"H11":{"purchaser":"Frederik de Vries","email":"36@email.com","phone":"1234567925","barcode":"36","source":"webtickets"},"H10":{"purchaser":"Frederik de Vries","email":"37@email.com","phone":"1234567926","barcode":"37","source":"webtickets"},"H9":{"purchaser":"Frederik de Vries","email":"38@email.com","phone":"1234567927","barcode":"38","source":"webtickets"},"H8":{"purchaser":"Frederik de Vries","email":"39@email.com","phone":"1234567928","barcode":"39","source":"webtickets"},"H7":{"purchaser":"Frederik de Vries","email":"40@email.com","phone":"1234567929","barcode":"40","source":"webtickets"},"C8":{"purchaser":"Gudrun Kitson","email":"41@email.com","phone":"1234567930","barcode":"41","source":"webtickets"},"C7":{"purchaser":"Gudrun Kitson","email":"42@email.com","phone":"1234567931","barcode":"42","source":"webtickets"},"M14":{"purchaser":"Hester crause","email":"43@email.com","phone":"1234567932","barcode":"43","source":"webtickets"},"M13":{"purchaser":"Hester crause","email":"44@email.com","phone":"1234567933","barcode":"44","source":"webtickets"},"M12":{"purchaser":"Hester crause","email":"45@email.com","phone":"1234567934","barcode":"45","source":"webtickets"},"B5":{"purchaser":"Hilde Arthur","email":"46@email.com","phone":"1234567935","barcode":"46","source":"webtickets"},"B4":{"purchaser":"Hilde Arthur","email":"47@email.com","phone":"1234567936","barcode":"47","source":"webtickets"},"J14":{"purchaser":"janice malkinson","email":"48@email.com","phone":"1234567937","barcode":"48","source":"webtickets"},"J13":{"purchaser":"janice malkinson","email":"49@email.com","phone":"1234567938","barcode":"49","source":"webtickets"},"J12":{"purchaser":"janice malkinson","email":"50@email.com","phone":"1234567939","barcode":"50","source":"webtickets"},"F17":{"purchaser":"Jeanette Albertyn","email":"51@email.com","phone":"1234567940","barcode":"51","source":"webtickets"},"F18":{"purchaser":"Jeanette Albertyn","email":"52@email.com","phone":"1234567941","barcode":"52","source":"webtickets"},"F19":{"purchaser":"Jeanette Albertyn","email":"53@email.com","phone":"1234567942","barcode":"53","source":"webtickets"},"F20":{"purchaser":"Jeanette Albertyn","email":"54@email.com","phone":"1234567943","barcode":"54","source":"webtickets"},"B22":{"purchaser":"Jenny-Anne Schoeman","email":"55@email.com","phone":"1234567944","barcode":"55","source":"webtickets"},"B23":{"purchaser":"Jenny-Anne Schoeman","email":"56@email.com","phone":"1234567945","barcode":"56","source":"webtickets"},"B24":{"purchaser":"Jenny-Anne Schoeman","email":"57@email.com","phone":"1234567946","barcode":"57","source":"webtickets"},"E5":{"purchaser":"Kelvin Smallwood","email":"58@email.com","phone":"1234567947","barcode":"58","source":"webtickets"},"E4":{"purchaser":"Kelvin Smallwood","email":"59@email.com","phone":"1234567948","barcode":"59","source":"webtickets"},"E3":{"purchaser":"Kelvin Smallwood","email":"60@email.com","phone":"1234567949","barcode":"60","source":"webtickets"},"F23":{"purchaser":"Lara Parker","email":"61@email.com","phone":"1234567950","barcode":"61","source":"webtickets"},"L14":{"purchaser":"Lianne Bantjes","email":"62@email.com","phone":"1234567951","barcode":"62","source":"webtickets"},"L13":{"purchaser":"Lianne Bantjes","email":"63@email.com","phone":"1234567952","barcode":"63","source":"webtickets"},"L12":{"purchaser":"Lianne Bantjes","email":"64@email.com","phone":"1234567953","barcode":"64","source":"webtickets"},"C17":{"purchaser":"Liezl Labuschagne","email":"65@email.com","phone":"1234567954","barcode":"65","source":"webtickets"},"C18":{"purchaser":"Liezl Labuschagne","email":"66@email.com","phone":"1234567955","barcode":"66","source":"webtickets"},"B6":{"purchaser":"Lwazi mdyesha","email":"67@email.com","phone":"1234567956","barcode":"67","source":"webtickets"},"B7":{"purchaser":"Lwazi mdyesha","email":"68@email.com","phone":"1234567957","barcode":"68","source":"webtickets"},"B8":{"purchaser":"Lwazi mdyesha","email":"69@email.com","phone":"1234567958","barcode":"69","source":"webtickets"},"B9":{"purchaser":"Lwazi mdyesha","email":"70@email.com","phone":"1234567959","barcode":"70","source":"webtickets"},"E6":{"purchaser":"Mandy Kukovec","email":"71@email.com","phone":"1234567960","barcode":"71","source":"webtickets"},"E7":{"purchaser":"Mandy Kukovec","email":"72@email.com","phone":"1234567961","barcode":"72","source":"webtickets"},"E8":{"purchaser":"Mandy Kukovec","email":"73@email.com","phone":"1234567962","barcode":"73","source":"webtickets"},"F6":{"purchaser":"Mandy Kukovec","email":"74@email.com","phone":"1234567963","barcode":"74","source":"webtickets"},"F7":{"purchaser":"Mandy Kukovec","email":"75@email.com","phone":"1234567964","barcode":"75","source":"webtickets"},"L18":{"purchaser":"Mariana Lourens","email":"76@email.com","phone":"1234567965","barcode":"76","source":"webtickets"},"L19":{"purchaser":"Mariana Lourens","email":"77@email.com","phone":"1234567966","barcode":"77","source":"webtickets"},"F21":{"purchaser":"Matt Parker","email":"78@email.com","phone":"1234567967","barcode":"78","source":"webtickets"},"F22":{"purchaser":"Matt Parker","email":"79@email.com","phone":"1234567968","barcode":"79","source":"webtickets"},"K13":{"purchaser":"Nicola Boshoff","email":"80@email.com","phone":"1234567969","barcode":"80","source":"webtickets"},"K12":{"purchaser":"Nicola Boshoff","email":"81@email.com","phone":"1234567970","barcode":"81","source":"webtickets"},"K11":{"purchaser":"Nicola Boshoff","email":"82@email.com","phone":"1234567971","barcode":"82","source":"webtickets"},"L21":{"purchaser":"Riana Lumsden","email":"83@email.com","phone":"1234567972","barcode":"83","source":"webtickets"},"L20":{"purchaser":"Riana Lumsden","email":"84@email.com","phone":"1234567973","barcode":"84","source":"webtickets"},"L22":{"purchaser":"Riana Lumsden","email":"85@email.com","phone":"1234567974","barcode":"85","source":"webtickets"},"K9":{"purchaser":"Rouxle Horn","email":"86@email.com","phone":"1234567975","barcode":"86","source":"webtickets"},"K10":{"purchaser":"Rouxle Horn","email":"87@email.com","phone":"1234567976","barcode":"87","source":"webtickets"},"G1":{"purchaser":"Ryan Lawlor","email":"88@email.com","phone":"1234567977","barcode":"88","source":"webtickets"},"G2":{"purchaser":"Ryan Lawlor","email":"89@email.com","phone":"1234567978","barcode":"89","source":"webtickets"},"K6":{"purchaser":"Seugnet Steyn","email":"90@email.com","phone":"1234567979","barcode":"90","source":"webtickets"},"K7":{"purchaser":"Seugnet Steyn","email":"91@email.com","phone":"1234567980","barcode":"91","source":"webtickets"},"K8":{"purchaser":"Seugnet Steyn","email":"92@email.com","phone":"1234567981","barcode":"92","source":"webtickets"},"B17":{"purchaser":"Susan Gane","email":"93@email.com","phone":"1234567982","barcode":"93","source":"webtickets"},"B18":{"purchaser":"Susan Gane","email":"94@email.com","phone":"1234567983","barcode":"94","source":"webtickets"},"B19":{"purchaser":"Susan Gane","email":"95@email.com","phone":"1234567984","barcode":"95","source":"webtickets"},"B20":{"purchaser":"Susan Gane","email":"96@email.com","phone":"1234567985","barcode":"96","source":"webtickets"},"B21":{"purchaser":"Susan Gane","email":"97@email.com","phone":"1234567986","barcode":"97","source":"webtickets"},"B12":{"purchaser":"Tammy Burton","email":"98@email.com","phone":"1234567987","barcode":"98","source":"webtickets"},"B11":{"purchaser":"Tammy Burton","email":"99@email.com","phone":"1234567988","barcode":"99","source":"webtickets"},"B10":{"purchaser":"Tammy Burton","email":"100@email.com","phone":"1234567989","barcode":"100","source":"webtickets"},"L23":{"purchaser":"Tracey Olivier","email":"101@email.com","phone":"1234567990","barcode":"101","source":"webtickets"},"L24":{"purchaser":"Tracey Olivier","email":"102@email.com","phone":"1234567991","barcode":"102","source":"webtickets"},"H6":{"purchaser":"Wendy Steel","email":"103@email.com","phone":"1234567992","barcode":"103","source":"webtickets"},"H5":{"purchaser":"Wendy Steel","email":"104@email.com","phone":"1234567993","barcode":"104","source":"webtickets"}};
const layout={id:"joseph-standard",name:"Joseph — Standard",rows:{
 B:[4,5,6,7,8,9,10,11,12,13,14,17,18,19,20,21,22,23,24,25,26,27],
 C:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
 D:[1,2,3,4,5,6,7,8,9,10,11,12,13,18,19,20,21,22,23,24,25,26,27,28,29,30],
 E:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
 F:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
 G:[1,2,3,4,5,6,7,8,9,10,11,12,13,18,19,20,21,22,23,24,25],
 H:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,18,19,20,21,22,23,24,25],
 J:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,18,19,20,21,22,23,24,25],
 K:[1,2,3,4,5,6,7,8,9,10,11,12,13,18,19,20,21,22,23,24,25,26,27,28,29,30],
 L:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
 M:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
 N:[1,2,3,4,5,6,7,8,9,10,11,12,19,20,21,22,23,24,25,26,27,28,29,30],
 P:[1,2,3,4,5,6,7,8,9,10,11,12,20,21,22,23,24,25,26,27,28,29,30],
 Q:[1,2,3,4,5,6,7,8,9,10,11,12,21,22,23,24,25,26,27,28,29,30]
}};
const defaultState={seedVersion:SEED_VERSION,selectedDate:INITIAL_DATE,performances:{[INITIAL_DATE]:{label:"29 September 2026",layoutId:layout.id,bookings:structuredClone(INITIAL_BOOKINGS)}}};
let state=loadState(),activeSeat=null,toastTimer;
const performanceSelect=document.querySelector("#performance-select"),scanPerformanceSelect=document.querySelector("#scan-performance-select"),performanceHeading=document.querySelector("#performance-heading"),seatMap=document.querySelector("#seat-map"),seatDialog=document.querySelector("#seat-dialog"),dialogContent=document.querySelector("#dialog-content"),dayDialog=document.querySelector("#day-dialog"),uploadInput=document.querySelector("#booking-upload");

function loadState(){try{const saved=JSON.parse(localStorage.getItem(STORAGE_KEY));if(saved?.performances){if(saved.seedVersion!==SEED_VERSION){saved.performances[INITIAL_DATE]??={label:"29 September 2026",layoutId:layout.id,bookings:{}};saved.performances[INITIAL_DATE].bookings={...INITIAL_BOOKINGS,...saved.performances[INITIAL_DATE].bookings};saved.seedVersion=SEED_VERSION;localStorage.setItem(STORAGE_KEY,JSON.stringify(saved))}return saved}}catch(error){console.warn(error)}return structuredClone(defaultState)}
function saveState(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}
function currentPerformance(){return state.performances[state.selectedDate]}
function formatDate(date){return new Intl.DateTimeFormat("en-ZA",{day:"numeric",month:"long",year:"numeric"}).format(new Date(`${date}T12:00:00`))}
function refreshPerformanceOptions(){[performanceSelect,scanPerformanceSelect].forEach(select=>{select.innerHTML="";Object.keys(state.performances).sort().forEach(date=>{const option=document.createElement("option");option.value=date;option.textContent=state.performances[date].label||formatDate(date);option.selected=date===state.selectedDate;select.append(option)})})}
function render(){if(!currentPerformance())state.selectedDate=Object.keys(state.performances).sort()[0];refreshPerformanceOptions();performanceHeading.textContent=currentPerformance().label;renderSeats();renderCounts()}
function rowLabel(label){const el=document.createElement("span");el.className="row-label";el.textContent=label;return el}
function renderSeats(){seatMap.innerHTML="";const bookings=currentPerformance().bookings;Object.entries(layout.rows).forEach(([rowName,numbers],index)=>{const row=document.createElement("div");row.className="seat-row";row.setAttribute("aria-label",`Row ${rowName}`);row.append(rowLabel(rowName));for(let number=1;number<=30;number++){const name=`${rowName}${number}`;if(numbers.includes(number)){const booking=bookings[name],seat=document.createElement("button");seat.type="button";seat.className=`seat${booking?` ${booking.source==="door"?"door":"booked"}`:""}`;seat.textContent=number;seat.title=booking?`${name} — ${booking.purchaser||"Booked"}`:`${name} — Available`;seat.setAttribute("aria-label",seat.title);seat.addEventListener("click",()=>openSeat(name));row.append(seat)}else{const gap=document.createElement("span");gap.className="seat-gap";gap.setAttribute("aria-hidden","true");row.append(gap)}}row.append(rowLabel(rowName));seatMap.append(row);if([1,4,7,10].includes(index)){const spacer=document.createElement("div");spacer.style.height="10px";seatMap.append(spacer)}})}
function renderCounts(){const capacity=Object.values(layout.rows).reduce((sum,seats)=>sum+seats.length,0),booked=Object.keys(currentPerformance().bookings).filter(seatExists).length;document.querySelector("#booked-count").textContent=booked;document.querySelector("#available-count").textContent=capacity-booked;document.querySelector("#capacity-count").textContent=capacity}
function normalizeSeat(value){const compact=String(value??"").toUpperCase().replace(/[^A-Z0-9]/g,"");const match=compact.match(/([A-Z])(\d{1,2})$/);return match?`${match[1]}${Number(match[2])}`:compact}
function seatExists(name){const match=normalizeSeat(name).match(/^([A-Z]+)(\d+)$/);return !!(match&&layout.rows[match[1]]?.includes(Number(match[2])))}
function openSeat(name){activeSeat=name;const booking=currentPerformance().bookings[name];dialogContent.innerHTML=booking?bookingDetails(name,booking):bookingForm(name);seatDialog.showModal();if(booking)document.querySelector("#remove-booking").addEventListener("click",()=>{if(!confirm(`Remove the booking from ${name}?`))return;delete currentPerformance().bookings[name];saveState();seatDialog.close();render();showToast(`${name} is available again`)});else document.querySelector("#booking-form").addEventListener("submit",saveDoorBooking)}
function bookingDetails(name,b){return `<p class="eyebrow">${b.source==="door"?"Door booking":"Webtickets booking"}</p><h2>Seat ${escapeHtml(name)}</h2><dl class="detail-list"><div><dt>Purchaser</dt><dd>${escapeHtml(b.purchaser||"—")}</dd></div><div><dt>Email</dt><dd>${escapeHtml(b.email||"—")}</dd></div><div><dt>Phone</dt><dd>${escapeHtml(b.phone||"—")}</dd></div><div><dt>Barcode</dt><dd>${escapeHtml(b.barcode||"—")}</dd></div></dl><button class="button button-danger full-width" id="remove-booking" type="button">Remove booking</button>`}
function bookingForm(name){return `<p class="eyebrow">Available seat</p><h2>Add booking to ${escapeHtml(name)}</h2><form id="booking-form"><div class="form-grid"><label class="field wide"><span>Purchaser name</span><input name="purchaser" required autofocus></label><label class="field"><span>Email</span><input name="email" type="email"></label><label class="field"><span>Phone</span><input name="phone" type="tel"></label><label class="field wide"><span>Reference / barcode</span><input name="barcode"></label></div><button class="button button-primary full-width" type="submit">Add door booking</button></form>`}
function saveDoorBooking(event){event.preventDefault();const data=new FormData(event.currentTarget);currentPerformance().bookings[activeSeat]={purchaser:data.get("purchaser")?.trim(),email:data.get("email")?.trim(),phone:data.get("phone")?.trim(),barcode:data.get("barcode")?.trim(),source:"door"};saveState();seatDialog.close();render();showToast(`Door booking added to ${activeSeat}`)}
function normalizedRow(row){return Object.fromEntries(Object.entries(row).map(([key,value])=>[key.toLowerCase().replace(/[^a-z0-9]/g,""),String(value??"").trim()]))}
function findValue(row,keys){for(const key of keys)if(row[key])return row[key];return ""}
async function importBookings(file){if(!file)return;if(!window.XLSX){showToast("Spreadsheet reader unavailable. Refresh and try again.");return}try{const bytes=await file.arrayBuffer(),workbook=XLSX.read(bytes,{type:"array"}),sheet=workbook.Sheets[workbook.SheetNames[0]],rows=XLSX.utils.sheet_to_json(sheet,{defval:"",raw:false});if(!rows.length)throw new Error("The spreadsheet contains no bookings.");let imported=0,skipped=0;const bookings=currentPerformance().bookings;rows.forEach(raw=>{const row=normalizedRow(raw),name=normalizeSeat(findValue(row,["seatname","seat","seatnumber"]));if(!seatExists(name)){skipped++;return}bookings[name]={purchaser:findValue(row,["purchaser","customer","name","purchasername"]),email:findValue(row,["purchaseremail","email","emailaddress"]),phone:findValue(row,["phone","phonenumber","mobile"]),barcode:findValue(row,["barcode","ticketbarcode","reference","bookingreference"]),source:"webtickets"};imported++});saveState();render();showToast(`${imported} bookings imported${skipped?` · ${skipped} rows skipped`:""}`)}catch(error){console.error(error);showToast(error.message||"Could not read that spreadsheet")}finally{uploadInput.value=""}}
function escapeHtml(value){return String(value??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}
function showToast(message){const toast=document.querySelector("#toast");toast.textContent=message;toast.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove("show"),3200)}

const scanResult=document.querySelector("#scan-result"),scannerHelp=document.querySelector("#scanner-help"),seatView=document.querySelector("#seat-view"),scanView=document.querySelector("#scan-view"),seatActions=document.querySelector("#seat-actions"),seatModeButton=document.querySelector("#seat-mode-button"),scanModeButton=document.querySelector("#scan-mode-button");
let ticketScanner=null;

async function showScanMode(){
  seatView.hidden=true;
  scanView.hidden=false;
  seatActions.hidden=true;
  seatModeButton.classList.remove("active");
  scanModeButton.classList.add("active");
  seatModeButton.setAttribute("aria-pressed","false");
  scanModeButton.setAttribute("aria-pressed","true");
  scanResult.innerHTML="";
  document.querySelector("#manual-barcode").value="";
  scannerHelp.textContent="Point the camera at the ticket’s QR code or barcode.";
  await startScanner();
}

async function showSeatMode(){
  await stopScanner();
  scanView.hidden=true;
  seatView.hidden=false;
  seatActions.hidden=false;
  scanModeButton.classList.remove("active");
  seatModeButton.classList.add("active");
  scanModeButton.setAttribute("aria-pressed","false");
  seatModeButton.setAttribute("aria-pressed","true");
}

async function startScanner(){
  if(!window.Html5Qrcode){scannerHelp.textContent="Camera scanning is unavailable. Enter the barcode below.";return}
  try{
    ticketScanner??=new Html5Qrcode("scanner-reader");
    if(ticketScanner.isScanning)return;
    scanResult.innerHTML="";
    await ticketScanner.start({facingMode:"environment"},{fps:10,qrbox:{width:250,height:160}},onTicketScanned,()=>{});
  }catch(error){
    console.warn(error);
    scannerHelp.textContent="The camera could not start. Allow camera access or enter the barcode below.";
  }
}

async function stopScanner(){
  if(ticketScanner?.isScanning){try{await ticketScanner.stop()}catch(error){console.warn(error)}}
}

async function onTicketScanned(decodedText){
  await stopScanner();
  checkTicket(decodedText);
}

function barcodeCandidates(rawValue){
  const raw=String(rawValue??"").trim(),values=new Set([raw]);
  try{
    const url=new URL(raw);
    ["barcode","ticket","reference","ref","code"].forEach(key=>{const value=url.searchParams.get(key);if(value)values.add(value.trim())});
  }catch(error){}
  return [...values].filter(Boolean);
}

function findTicket(rawValue){
  const candidates=barcodeCandidates(rawValue);
  return Object.entries(currentPerformance().bookings).find(([,booking])=>candidates.includes(String(booking.barcode??"").trim()));
}

function checkTicket(rawValue){
  const match=findTicket(rawValue);
  if(!match){
    scanResult.innerHTML=`<div class="scan-card invalid"><h3>Ticket not found</h3><p>No matching ticket exists for ${escapeHtml(currentPerformance().label)}.</p><p class="scan-meta">Scanned: ${escapeHtml(rawValue)}</p><button class="button button-secondary" id="scan-again" type="button">Scan another ticket</button></div>`;
    document.querySelector("#scan-again").addEventListener("click",startScanner);
    return;
  }
  const [seatName,booking]=match;
  if(booking.checkedInAt){
    const usedAt=new Intl.DateTimeFormat("en-ZA",{dateStyle:"medium",timeStyle:"short"}).format(new Date(booking.checkedInAt));
    scanResult.innerHTML=`<div class="scan-card used"><h3>Already admitted</h3><p><strong>${escapeHtml(booking.purchaser||"Ticket holder")}</strong> · Seat ${escapeHtml(seatName)}</p><p class="scan-meta">First scanned ${escapeHtml(usedAt)}</p><button class="button button-secondary" id="scan-again" type="button">Scan another ticket</button></div>`;
    document.querySelector("#scan-again").addEventListener("click",startScanner);
    return;
  }
  scanResult.innerHTML=`<div class="scan-card valid"><h3>Valid ticket</h3><p><strong>${escapeHtml(booking.purchaser||"Ticket holder")}</strong></p><p>Seat ${escapeHtml(seatName)} · Barcode ${escapeHtml(booking.barcode)}</p><button class="button button-primary" id="admit-ticket" type="button">Admit and mark scanned</button></div>`;
  document.querySelector("#admit-ticket").addEventListener("click",()=>admitTicket(seatName));
}

function admitTicket(seatName){
  const booking=currentPerformance().bookings[seatName];
  booking.checkedInAt=new Date().toISOString();
  saveState();
  scanResult.innerHTML=`<div class="scan-card valid"><h3>Admitted</h3><p><strong>${escapeHtml(booking.purchaser||"Ticket holder")}</strong> · Seat ${escapeHtml(seatName)}</p><p class="scan-meta">This ticket is now marked as scanned.</p><button class="button button-secondary" id="scan-again" type="button">Scan next ticket</button></div>`;
  document.querySelector("#scan-again").addEventListener("click",startScanner);
}

seatModeButton.addEventListener("click",showSeatMode);
scanModeButton.addEventListener("click",showScanMode);
document.querySelector("#start-camera").addEventListener("click",startScanner);
document.querySelector("#manual-scan-form").addEventListener("submit",async event=>{event.preventDefault();await stopScanner();checkTicket(document.querySelector("#manual-barcode").value)});
function changePerformance(event){state.selectedDate=event.target.value;saveState();render();scanResult.innerHTML=`<div class="scan-empty"><p>Scan a ticket or enter its barcode to check whether it exists for this performance.</p></div>`}
performanceSelect.addEventListener("change",changePerformance);scanPerformanceSelect.addEventListener("change",changePerformance);uploadInput.addEventListener("change",event=>importBookings(event.target.files[0]));document.querySelector("#dialog-close").addEventListener("click",()=>seatDialog.close());document.querySelector("#day-dialog-close").addEventListener("click",()=>dayDialog.close());document.querySelector("#add-day-button").addEventListener("click",()=>{document.querySelector("#new-day").value="";dayDialog.showModal()});document.querySelector("#day-form").addEventListener("submit",event=>{event.preventDefault();const date=document.querySelector("#new-day").value;if(!date)return;if(!state.performances[date])state.performances[date]={label:formatDate(date),layoutId:layout.id,bookings:{}};state.selectedDate=date;saveState();dayDialog.close();render();showToast(`${formatDate(date)} is ready for bookings`)});[seatDialog,dayDialog].forEach(dialog=>dialog.addEventListener("click",event=>{if(event.target===dialog)dialog.close()}));render();

