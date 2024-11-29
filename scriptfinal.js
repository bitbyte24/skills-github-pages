function menu(){
    var menu=document.getElementById('sideMenu');
    menu.style.width='max-Content';
}
function quit(){
    var menu=document.getElementById('sideMenu');
    menu.style.width='0';
}
function products(){
    var product=confirm('you are opening a product store.\nclick Ok to continue')
    if(product==true){
        document.write('<h1 style="color:blue;">giltous exclusive product store.\n\n<p style="color:green;">product store is empty,you will get a notification when an item is added.\n\n\nthank you for visiting our stores')
    }else{
        return false;
    }
}
function services(){
    alert('Sorry,the services here are under review.you will be notified when any service is ready\n\nthank you for visiting our service center\n\n\n.......Giltous Exclusive........')
}
function contact(){
    var meet=confirm('you are attempting to ')
}
///.....javascript code missing here.../
//.....looking forward to filling it.../

function msg(){
    setTimeout(() => {
        inform()
    }, 4000);function inform(){
        var sms=document.getElementById('help-message');
        sms.style.width='max-Content';
    }
    setTimeout(() => {
        Inform()
    }, 9000);function Inform(){
        var sms=document.getElementById('help-message');
        sms.style.width='0';
    }
}
msg();
//---for beds-----/
function bed(){
    setTimeout(() => {
        tell()
    }, 1000);function tell(){
        var bed=document.getElementById('bed-info')
        bed.style.width='max-Content';
    }
    setTimeout(() => {
        tell2()
    }, 5000);function tell2(){
        var bed=document.getElementById('bed-info')
        bed.style.width='0';
    }
}
window.onscroll(addEventListener('load',bed()));
function update(){
    var update=document.getElementById('mr-update');
    setTimeout(() => {
        updater()
    }, 4000);function updater(){
    update.style.backgroundImage='url(ad2.jpg)';
    update.style.width='340px';
    update.style.height='300px';
    update.style.borderRadius='10px';
    }
    setTimeout(() => {
        unUpdate()
    }, 10000);function unUpdate(){
        update.style.backgroundImage='url(ad2.jpg)';
    update.style.width='0';
    update.style.height='0';
    update.style.borderRadius='10px';
    }
}
window.onfocus(addEventListener('load',update));
function represent(){
    var present=document.getElementById('representative');
    var pic=document.getElementById('pic');
    present.style.width='100px';
    present.style.height='100px';
    if(pic==true){
        present.style,backgroundImage=present.value;
    }else{
        return false;
    }
}
represent();
function inform(){
    alert('this page is only available after payments,get the key from your developer.thank you')
}
function view(){
    var viewer=confirm('press ok to continue with this product');
    if(viewer==true){
        document.write('hello,giltous has not yet added items in this box,thank you\n\n\n'+'<button>back</button>')
    }else{
        return false;
    }
    }


//---showroom button react.js code written here below---/
function showroom1(){
    var showroom=document.getElementById('show')
    var grant=confirm('click ok to continue to the showroom!')
    if(grant==true){
    document.write('WELCOME TO THE SHOWROOM\n\n\n');
    document.write('<img src="ad2.jpg" style="border-radius:20px;"/>\n\n\n<button onclick="buy1">buy</button>')    
    }else{
        return false;
    }
}
addEventListener('click',showroom1());
function buy1(){
    alert('choose payment method')
}