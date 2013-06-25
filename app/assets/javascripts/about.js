
// following two methods from http://answers.oreilly.com/topic/1823-adding-a-page-overlay-in-javascript/

$(document).ready(function() {
  
    
  function nameButtons(tagName, baseName) {
    var buttons=document.getElementsByTagName(tagName);
    
    for(var i=0; i<buttons.length; i++) {
      buttons[i].id=baseName+(i+1);
    }
  }
  
  nameButtons('button', 'show_button');  
  
  function nameText(className, baseName) {
//     BE AWARE THAT GETELEMENTSBYCLASSNAME MAY NOT WORK IN ALL BROWSERS
    var texts=document.getElementsByClassName(className);
    
    for(var i=0; i<texts.length; i++) {
      texts[i].id=baseName+(i+1);
    }
  }
  
  nameText('overlay_box', 'overlay_box');
  
//   var expanded = 0;
  var expanded1 = 0;
  var expanded2 = 0;
  var expanded3 = 0;
  var expanded4 = 0;
  
//   if we push the box itself
//   $('#overlay_box1').click(function(){
//     if (expanded1==0) {
//       $(this).animate({'z-index': '5'});
//       $(this).animate({'height': '400px'},600);
//       expanded1 = 1;
//     }
//     else if (expanded1==1) {
//       $(this).animate({'height': '100px'},600);
//       $(this).animate({'z-index': '0'});
//       expanded1 = 0;
//     }
//     
//   });
  
   
//   now if we push the button...
//   $('div#show_button').click(function(){
  $('button#show_button1').click(function() {

    if (expanded1==0) {
      $('div#overlay_box1').animate({'z-index': '5'});
      $('div#overlay_box1').animate({'height': '400px'},600);
      expanded1 = 1;
    }
    else if (expanded1==1) {
      $('div#overlay_box1').animate({'height': '100px'},600);
      $('div#overlay_box1').animate({'z-index': '0'});
      expanded1 = 0;
    }

  });
  
  $('#show_button2').click(function() {
    
    if (expanded2==0) {
      $('#overlay_box2').animate({'z-index': '5'});
      $('#overlay_box2').animate({'height': '400px'},600);
      expanded2 = 1;
    }
    else if (expanded2==1) {
      $('#overlay_box2').animate({'height': '100px'},600);
      $('#overlay_box2').animate({'z-index': '0'});
      expanded2 = 0;
    }
    
  });
  
  $('#show_button3').click(function() {
    
    if (expanded3==0) {
      $('#overlay_box3').animate({'z-index': '5'});
      $('#overlay_box3').animate({'height': '400px'},600);
      expanded3 = 1;
    }
    else if (expanded3==1) {
      $('#overlay_box3').animate({'height': '100px'},600);
      $('#overlay_box3').animate({'z-index': '0'});
      expanded3 = 0;
    }
    
  });
  
  $('#show_button4').click(function() {

    if (expanded4==0) {
      $('#overlay_box4').animate({'z-index': '5'});
      $('#overlay_box4').animate({'height': '400px'},600);
      expanded4 = 1;
    }
    else if (expanded4==1) {
      $('#overlay_box4').animate({'height': '100px'},600);
      $('#overlay_box4').animate({'z-index': '0'});
      expanded4 = 0;
    }

  });

  

  
});



