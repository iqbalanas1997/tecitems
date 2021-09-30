


var spraymachinestockFinal

var gelmachinestockFinal

var dailyactivityrecords

var lastupdateGel
var lastupdateSpray

var RCchargers

function gelStockadds() {
  
  firebase.database().ref("gelstocks").set({
    gelmachinestock: ((parseInt(document.getElementById('gelstockTF').value)) + (parseInt(gelmachinestockFinal)))

  });
 
  document.getElementById("gelstcks").innerHTML = gelmachinestockFinal

  lastupdategelModel()
}


function lastupdategelModel() {


  var today = new Date();

var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

var dateTime = date+' '+time;


  lastupdateGel = dateTime.toString()

  firebase.database().ref("lastupdategels").set({
    dated: lastupdateGel

  });
  document.getElementById("lastupdategel").innerHTML = lastupdateGel;
  
}

function readdatas(){
  firebase.database().ref("gelstocks").on('value',function(snapshot){
    document.getElementById("gelstcks").innerHTML = snapshot.val().gelmachinestock
    gelmachinestockFinal = snapshot.val().gelmachinestock
  })

}


function readlastupdateGEL(){
  firebase.database().ref("lastupdategels").on('value',function(snapshot){
    document.getElementById("lastupdategel").innerHTML = snapshot.val().dated
    lastupdateGel = snapshot.val().dated
  })

}

function gelStockremove() {

  firebase.database().ref("gelstocks").set({
    gelmachinestock: ( (parseInt(gelmachinestockFinal)) - (parseInt(document.getElementById('gelstockTF').value)) )

  });
 
  document.getElementById("gelstcks").innerHTML = gelmachinestockFinal
  lastupdategelModel()
}




function sprayStockadd() {
  firebase.database().ref("spraystocks").set({
    spraymachinestock: ((parseInt(document.getElementById('spraystockTF').value)) + (parseInt(spraymachinestockFinal)))

  });

 
  document.getElementById("spraystcks").innerHTML = spraymachinestockFinal
  lastupdatesprayModel()
}


function lastupdatesprayModel() {


  var today = new Date();

var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

var dateTime = date+' '+time;


  lastupdateSpray = dateTime.toString()

  firebase.database().ref("lastupdateSprays").set({
    dated: lastupdateSpray

  });
  document.getElementById("lastupdatespray").innerHTML = lastupdateSpray;
  
}


function readspraydatas(){
  firebase.database().ref("spraystocks").on('value',function(snapshot){
    document.getElementById("spraystcks").innerHTML = snapshot.val().spraymachinestock
    spraymachinestockFinal = snapshot.val().spraymachinestock
  })

}


function readlastupdateSPRAY(){
  firebase.database().ref("lastupdateSprays").on('value',function(snapshot){
    document.getElementById("lastupdatespray").innerHTML = snapshot.val().dated
    lastupdateSpray = snapshot.val().dated
  })

}
    
function sprayStockremoves() {
  firebase.database().ref("spraystocks").set({
    spraymachinestock: ( (parseInt(spraymachinestockFinal)) - (parseInt(document.getElementById('spraystockTF').value)) )

  });
 
  document.getElementById("spraystcks").innerHTML = spraymachinestockFinal
  lastupdatesprayModel()
}


function activity(){
  firebase.database().ref("dailyactivity").set({
    DActivity: document.getElementById('message').value

  });
 
  document.getElementById("dactivityrecord").innerHTML = dailyactivityrecords
}









//rakat couter chargers :
function RCchargerStockadd() {
  firebase.database().ref("RCchargersStocks").set({
    RCchargersQuantity: ((parseInt(document.getElementById('RCchargerTF').value)) + (parseInt(RCchargers)))

  });


  function RCchargersremoves() {
    firebase.database().ref("RCchargersStocks").set({
      RCchargersQuantity: ( (parseInt(RCchargers)) - (parseInt(document.getElementById('RCchargerTF').value)) )
  
    });
   
    document.getElementById("spraystcks").innerHTML = spraymachinestockFinal
    lastupdatesprayModel()
  }


function readDailyActivity(){
  firebase.database().ref("dailyactivity").on('value',function(snapshot){
    document.getElementById("dactivityrecord").innerHTML = snapshot.val().DActivity
    dailyactivityrecords = snapshot.val().DActivity
  })
}



function readlastupdateRCchargers(){
  firebase.database().ref("RCchargersStocks").on('value',function(snapshot){
    document.getElementById("RCchargerstcks").innerHTML = snapshot.val().RCchargersQuantity
    lastupdateSpray = snapshot.val().RCchargersQuantity

    firebase.database().ref("RCchargersStocks").on('value',function(snapshot){
      document.getElementById("RCchargerstcks").innerHTML = snapshot.val().RCchargersQuantity
      RCchargers = snapshot.val().RCchargersQuantity
  })

}





$(function () {
  var selectedClass = "";
  $(".filter").click(function () {
    selectedClass = $(this).attr("data-rel");
    $("#gallery").fadeTo(100, 0.1);
    $("#gallery div").not("." + selectedClass).fadeOut().removeClass('animation');
    setTimeout(function () {
      $("." + selectedClass).fadeIn().addClass('animation');
      $("#gallery").fadeTo(300, 1);
    }, 300);
  });
});



$('#video-gallery').lightGallery({
  videojs: true
});

$('#video-gallery').lightGallery({
  videojs: true
});





function switchStyle() {
  if (document.getElementById('styleSwitch').checked) {
    document.getElementById('gallery').classList.add("custom");
    document.getElementById('exampleModal').classList.add("custom");
  } else {
    document.getElementById('gallery').classList.remove("custom");
    document.getElementById('exampleModal').classList.remove("custom");
  }
}

$(document).on("click", '[data-toggle="lightbox"]', function (event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});








function getdata() {
  readdatas()
  readspraydatas()
  readDailyActivity()
  readlastupdateGEL()
  readlastupdateSPRAY()
 // document.getElementById('gelstck').innerHTML = gelmachinestockFinal;
 // document.getElementById('spraystck').innerHTML = spraymachinestockFinal;
}





function sprayStockremove() {
  spraymachinestockTF = parseInt(document.getElementById("spraystock").value)

  document.getElementById("spraystck").innerHTML = (spraymachinestockFinal - spraymachinestockTF)
  spraymachinestockFinal = spraymachinestockFinal - spraymachinestockTF
}




function tecPrivate() {
  var pass = prompt("Page is private, please enter the password : ")

  if (pass == "tec123") {
    window.location.href = 'tec private.html'
  } else {
    alert("incorrect password")
  }
}