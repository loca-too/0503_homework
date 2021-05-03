var jsondata;
var ssobj=[];
function preload(){
  // 取得spreadsheet
  jsondata = loadJSON('https://spreadsheets.google.com/feeds/list/1EbEaRHd6l9klM-x_q6s086x0lnHqBs8hMZ7uz2FyB8Y/od6/public/values?alt=json');
}
function setup() {
  let temp = jsondata.feed.entry;
  console.log(jsondata);

  for(let i=0;i<jsondata.feed.entry.length;i+=1)
    {
      str += '<div class = "slide-'+i+'">'+
      '<a href="'+jsondata.feed.entry[i].gsx$url.$t+'"target="_blank">'+
      '<center><img id="'+temp[i].gsx$img.$t+'_01" src="./asset/'+temp[i].gsx$img.$t+'.jpg" class="img-fluid" ></img></center>'+
      '<center><p style=color:#FFB11B><big><big><big><b>'+jsondata.feed.entry[i].gsx$color.$t+'</b></big></big></big></p></center>'+
        '</a>'+
      '</div>';
    }
    //將演算的資料 str 插入 index 裡面 id= hw1 的 tag 物件
  //window.document.getElementById("hw1").innerHTML=str;
  $('#hw1').html(str);
    $(document).ready(()=>{
      $('#hw1').slick({
          centerMode:true,
          slidesToShow: 1,
          slidesToScroll: 3,
          autoplaySpeed: 2000,
          arrows: true
      });
    }); 

}



function draw() {
  
  
}