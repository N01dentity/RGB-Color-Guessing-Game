
var num=6;
			var color=generaterandomcolors(num);
			var h1=document.querySelector("h1");
			var easybtn=document.getElementById("easybtn");
			var hardbtn=document.getElementById("hardbtn");
			var square=document.querySelectorAll(".square");
			var pickedcolor=pickcolor();
			var rgbdisplay=document.getElementById("rgb");

			var message=document.getElementById("message");
			var reset=document.getElementById("reset");
			rgbdisplay.textContent=pickedcolor;
			
			easybtn.addEventListener("click",function(){
				num=3;
				color=generaterandomcolors(num);
				pickedcolor=pickcolor();
				rgb.textContent=pickedcolor;
				easybtn.classList.add("buttoncolor");
				hardbtn.classList.remove("buttoncolor");
				let i=0;
				
				for(i=0;i<square.length;i++)
				{
					if(color[i])
					{
						square[i].style.backgroundColor=color[i];
					}
					else
					{
						square[i].style.display="none";
					}
				}
				h1.style.backgroundColor="steelblue";
				message.textContent="";
				reset.textContent="New Color";
			});
			
			hardbtn.addEventListener("click",function(){
				num=6;
				color=generaterandomcolors(num);
				pickedcolor=pickcolor();
				rgb.textContent=pickedcolor;
				hardbtn.classList.add("buttoncolor");
				easybtn.classList.remove("buttoncolor");
				let i=0;
				for(i=0;i<square.length;i++)
				{
					square[i].style.backgroundColor=color[i];
					square[i].style.display="block";
				}
				h1.style.backgroundColor="steelblue";
				message.textContent="";
				reset.textContent="New Color";
				
			});
			
			
			
			reset.addEventListener("click", function(){
				reset.textContent="New Color";
				color=generaterandomcolors(num);
				pickedcolor=pickcolor();
				rgb.textContent=pickedcolor;
				//rgb.style.backgroundColor=pickedcolor;
				h1.style.backgroundColor="steelblue";
				message.textContent="";
				let i=0;
				for(i=0;i<square.length;i++)
				{
					square[i].style.backgroundColor=color[i];
				}
			});
			
			
			for(i=0;i<square.length;i++)
			{
				square[i].style.backgroundColor=color[i];
				
				square[i].addEventListener("click",function(){
					var clickedcolor=this.style.backgroundColor;
					let i=0;
					
					if(clickedcolor === pickedcolor)
					{
						message.textContent="Correct";
						samecolor(clickedcolor);
						reset.textContent="Play Again?";
						h1.style.backgroundColor=pickedcolor;
					}
					else
					{
						message.textContent="Try Again";
						this.style.backgroundColor="#232323";
						
					}
				});
				
			}
			
			function samecolor(color){
				for(i=0;i<square.length;i++)
				{
					square[i].style.backgroundColor=color;
				}
			}
			
			function generaterandomcolors(num){
				var arr=[];
				let i=0;
				for(i=0 ;i<num;i++)
				{
					var a=randomcolors()
					arr.push(a);
				}
				return arr;
			}
			
			function randomcolors(){
				var red = Math.floor(Math.random() * 256);
				var green = Math.floor(Math.random() * 256);
				var blue = Math.floor(Math.random() * 256);
				let i=0;
				return("rgb(" + red + ", " + green +", " + blue +")");
			}
			
			function pickcolor(){
				var random= Math.floor(Math.random()*num);
				return color[random];
			}
		