document.addEventListener("DOMContentLoaded",function()
{
	//De click vao menu
	var chitiet = document.getElementsByClassName('chitiet');
	var hienthi = document.getElementsByClassName('dehienthi');
	var menu = document.querySelector('.menu');
	var trangthaimenudo = "duoi100";
	var nuthoat = document.getElementsByClassName('nutthoat');
	//Để xem chi tiết
	for (var i = chitiet.length - 1; i >= 0; i--)
	{
		chitiet[i].onclick = function()
		{
			if(this.classList[2]!="mautrang")
			{
					for(var j =0; j < chitiet.length; j++)
					{
						chitiet[j].classList.remove('mautrang');
					}
					this.classList.toggle('mautrang');
					var ndhienra = this.getAttribute('data-hienlen');
					var phan_tu_hien_ra	= document.getElementById(ndhienra);
					phan_tu_hien_ra.classList.toggle('ra');
					for(var k =0; k < nuthoat.length; k++)
						nuthoat[k].onclick = function()
						{
							phan_tu_hien_ra.classList.toggle('ra');
						}
			}
		}
	}
	console.log(nuthoat);
	//De lan chuot 
    window.addEventListener('scroll',function() {
       console.log(window.pageYOffset);
       if(window.pageYOffset > 100){
         if(trangthaimenudo == "duoi100"){
            trangthaimenudo = "tren100";
            menu.classList.add('menuden');
         }
       }
       else if(window.pageYOffset <= 100){
         if(trangthaimenudo == "tren100"){
            trangthaimenudo = "duoi100";
            menu.classList.remove('menuden');
         }
       }
    })
},false)