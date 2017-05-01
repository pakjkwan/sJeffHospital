


function arithmeticSeries(){
	$('#tableRight').empty();
	app.component.inputText('inputText').attr('placeholder','시작값 한계값 공차(공백으로 구분)입력').appendTo(tableRight);
	app.component.aButton('aButton','btn-primary').html('등차수열의 합').appendTo(tableRight)
		.css('margin','10px auto')
		.on('click',function(){
			
			var inputVal=$('#inputText').val();
			console.log('inputVal:'+inputVal);
			var arr=inputVal.split(' ');
			var start=arr[0];
			var limit=arr[1];
			var diff=arr[2];
			console.log('start:'+start+',limit:'+limit+',diff:'+diff);
			var start=start*1,limit=limit*1,diff=diff*1;
			var sum=0;
			var rs="";
			var i=start;
			while(i<=limit){
				rs+=(i+diff>limit)?i+"=":i+"+";
				sum+=i;
				i+=diff;
			}
			
			app.component.divAlert('alert-danger').html(rs+sum).appendTo(tableRight);
	});
}
function algorithmTable(){
		return '<table id="table" style="width:800px;height:300px;border-collapse: collapse;border: 1px solid black;margin:0 auto">'
		+	'<tr style="border: 1px solid black;">'
		+		'<td id="tableLeft" style="width: 50%;border: 1px solid black;"></td>'
		+		'<td id="tableRight" style="width: 50%;border: 1px solid black;"></td>'
		+	'</tr>'
		+'</table>';
}
function seriesMenu(){
	return '<ul class="list-group">'
	+	'<li id="aSeries" class="list-group-item"><a href="#">등차수열 합</a></li>'
	+	'<li id="swSeries" class="list-group-item"><a href="#">스위치수열 합</a></li>'
	+	'<li id="dSeries" class="list-group-item"><a href="#">계차수열 합</a></li>'
	+	'<li id="factorial" class="list-group-item"><a href="#">팩토리얼수열 합</a></li>'
	+	'<li id="fibonacci" class="list-group-item"><a href="#">피보나치수열 합</a></li>'
	+'</ul>';
}
function switchSeries(limit){
		//1,-2,3,-4,5,-6
		var sum = 0;
		 var flag=-1;
		 for(i=0;i<=limit;i++){
			sum += flag*i;
			flag = -1*flag;
		 }
		return sum;
}
function differenceSeries(limit){
	//1,2,4,7,11
	var sum = 1,total=0;
	var total = 0;
	for(i=0;i<limit;i++){
		sum += i;
		total += sum ;
	}
	return total;
};
function factorial(limit){
	//1!,1!+2!,1!+2!+3!,1!+2!+3!+4!,1!+2!+3!+4!+5!
	 var sum = 1, total = 0;
	 for(i=1;i<=limit;i++){
		 sum = sum*i;
		 total += sum;
	 }
	 if(limit == 0){total = 0;}else if(limit == 1){total = 1;}
	return total;
};
function fibonacci(limit){
	//1,1,2,3,5,8,13,21,
	 var sum = 2,a = 1,b = 1,c = 0;
	 for(i=3;i<=limit;i++){
		 c=a+b;
		 sum+=c;
		 a=b;
		 b=c;
	 }
	 if(limit == 0){sum = 0;}else if(limit == 1){sum = 1;}else if(limit == 2){sum = 2;} 
	return sum;
};

function sortMenu(){
	return [{id:'selectSort',txt:'선택정렬'},
		{id:'bubbleSort',txt:'버블정렬'},
		{id:'insertSort',txt:'삽입정렬'},
		{id:'ranking',txt:'석차구하기'},
		{id:'binSearch',txt:'이분검색'},
		{id:'merge',txt:'병합'},
		{id:'stack',txt:'스택'}];
};
function ascSort(arr){
	var i=0,j=0,k=0;
	for(i=0;i<arr.length;i++){
		for(j=i;j<arr.length;j++){
			if(arr[i]>arr[j+1]){
				k = arr[i];
				arr[i] = arr[j+1];
				arr[j+1] = k;
			}
		}
	}
	return arr;
}
function selectSort(x,y,z){
	var i=0,j=0,k=0;
	var arr=randomGen(x,y,z);
	for(i=0;i<arr.length;i++){
		for(j=i;j<arr.length;j++){
			if(arr[i]>arr[j+1]){
				k = arr[i];
				arr[i] = arr[j+1];
				arr[j+1] = k;
			}
		}
	}
	return arr;
}
function bubbleSort(x,y,z){
	var arr=randomGen(x,y,z);
	var i=0,j=0,k=0;
	for(i=0;i<arr.length;i++){
		for(j=0;j<arr.length;j++){
			if(arr[j]>arr[j+1]){
				k=arr[j];
				arr[j]=arr[j+1];
				arr[j+1]=k;
			}
		}
	}
	return arr;
}
function insertSort(x,y,z){  
	var arr=randomGen(x,y,z);
	// notComplete
	return arr;
}
function ranking(arr){
	var rank=[1,1,1,1,1,1];
	for(var i=0;i<arr.length;i++){
		for(var k=0;k<arr.length;k++){
			if(arr[i]<arr[k]){
				rank[i]++;
			}
		}
	}
	return rank;
}
function binSearch(x,arr){ // notComplete
	var fnum=(arr.length-1)-(arr.length-2);
	var pnum=arr.length-1;
	var i=x*1;
	for(i=0;i<pnum;i++){
		if(fnum<=pnum){
			var m=Math.floor((fnum+pnum)/2);
			if(x==arr[m]){
				var result=m;
				break;
			}
			if(x<arr[m]){
				fnum=m+1;
			}else{
				pnum=m-1;
			}
	}
	}
	return arr[m];
}
function randomGen(theNumberOfRandoms,biginNumber,endNumber){
	var i=0,k=0;
	var x=[];
	for(;i<theNumberOfRandoms;i++){
		x[i]=Math.floor(Math.random() * endNumber) + biginNumber;
		for(k=i;k>0;k--){
			if(x[i]==x[k-1]){
				i--;
			}
		}
	}
	return x;
}


















var temp=(function(){
	var wrapper,ctx,img,js,css;
	var init=function(){
		wrapper=app.component.getWrapper();
		ctx=app.session.getContextPath();
		img=app.session.getImagePath();
		js=app.session.getJavascriptPath();
		css=app.session.getStylePath();
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		series();
		arr();
		matrix();
		math();
		appl();
	};
	var setContentView=function(){};
/*app-algorithm-series*/	
	var series=function(){
		$('#series').on('click',function(){
			wrapper.empty();
			wrapper.append(app.ui.algorithmTable());
			$('#tableLeft').html(app.ui.algorithmSeriesMenu());
			var tableRight=$('#tableRight');
			aSeries();
			$('#aSeries').on('click',function(){aSeries();});
			$('#swSeries').on('click',function(){
				tableRight.empty();
				app.component.inputText('inputText').attr('placeholder','한계값입력(100 -> -50)').appendTo(tableRight);
				app.component.aButton('aButton','btn-success').html('스위치수열의 합').appendTo(tableRight)
					.css('margin','10px auto')
					.on('click',function(){
					var limit=$('#inputText').val();
					app.component.divAlert('alert-success').html('1부터'+limit+'까지 스위치수열의 합은'+swSeries(limit)+'입니다.').appendTo(tableRight);
				});
			});
			$('#dSeries').on('click',function(){
				tableRight.empty();
				app.component.inputText('inputText').attr('placeholder','한계값입력(5 -> 25)').appendTo(tableRight);
				app.component.aButton('aButton','btn-info').html('계차수열의 합').appendTo(tableRight)
					.css('margin','10px auto')
					.on('click',function(){
					var limit=$('#inputText').val();
					app.component.divAlert('alert-info').html('1부터'+limit+'계차수열의 합은'+dSeries(limit)+'입니다.').appendTo(tableRight);
				});
			});
			$('#factorial').on('click',function(){
				tableRight.empty();
				app.component.inputText('inputText').attr('placeholder','한계값입력(5 -> 153)').appendTo(tableRight);
				app.component.aButton('aButton','btn-warning').html('팩토리얼수열의 합').appendTo(tableRight)
					.css('margin','10px auto')
					.on('click',function(){
					var limit=$('#inputText').val();
					app.component.divAlert('alert-warning').html('1부터'+limit+'팩토리얼수열의 합은'+factorial(limit)+'입니다.').appendTo(tableRight);
				});
			});
			$('#fibonacci').on('click',function(){
				tableRight.empty();
				app.component.inputText('inputText').attr('placeholder','한계값입력((5 -> 12))').appendTo(tableRight);
				app.component.aButton('aButton','btn-danger').html('피보나치수열의 합').appendTo(tableRight)
					.css('margin','10px auto')
					.on('click',function(){
					var limit=$('#inputText').val();
					app.component.divAlert('alert-danger').html('1부터'+limit+'피보나치수열의 합은'+fibonacci(limit)+'입니다.').appendTo(tableRight);
				});
			});
			
		});
	};
	var aSeries = function(){
		$('#tableRight').empty();
		app.component.inputText('inputText').attr('placeholder','시작값 한계값 공차(공백으로 구분)입력').appendTo(tableRight);
		app.component.aButton('aButton','btn-primary').html('등차수열의 합').appendTo(tableRight)
			.css('margin','10px auto')
			.on('click',function(){
				
				var inputVal=$('#inputText').val();
				console.log('inputVal:'+inputVal);
				var arr=inputVal.split(' ');
				var start=arr[0];
				var limit=arr[1];
				var diff=arr[2];
				console.log('start:'+start+',limit:'+limit+',diff:'+diff);
				var start=start*1,limit=limit*1,diff=diff*1;
				var sum=0;
				var rs="";
				var i=start;
				while(i<=limit){
					rs+=(i+diff>limit)?i+"=":i+"+";
					sum+=i;
					i+=diff;
				}
				
				app.component.divAlert('alert-danger').html(rs+sum).appendTo(tableRight);
		});
	
	};
	var swSeries = function(limit){
		//1,-2,3,-4,5,-6
		var sum = 0;
		 var flag=-1;
		 for(i=0;i<=limit;i++){
			sum += flag*i;
			flag = -1*flag;
		 }
		return sum;
	};
	var dSeries = function(limit){
		//1,2,4,7,11
		var sum = 1,total=0;
		var total = 0;
		for(i=0;i<limit;i++){
			sum += i;
			total += sum ;
		}
		return total;
	};
	var factorial = function(limit){
		//1!,1!+2!,1!+2!+3!,1!+2!+3!+4!,1!+2!+3!+4!+5!
		 var sum = 1, total = 0;
		 for(i=1;i<=limit;i++){
			 sum = sum*i;
			 total += sum;
		 }
		 if(limit == 0){total = 0;}else if(limit == 1){total = 1;}
		return total;
	};
	var fibonacci = function(limit){
		//1,1,2,3,5,8,13,21,
		 var sum = 2,a = 1,b = 1,c = 0;
		 for(i=3;i<=limit;i++){
			 c=a+b;
			 sum+=c;
			 a=b;
			 b=c;
		 }
		 if(limit == 0){sum = 0;}else if(limit == 1){sum = 1;}else if(limit == 2){sum = 2;} 
		return sum;
	};
/*app-algorithm-array*/	
	var arr=function(){
		$('#arr').on('click',function(){
			wrapper.empty();
			wrapper.append(app.ui.algorithmTable());
			var arr=[{id:'selectSort',txt:'선택정렬'},
				{id:'bubbleSort',txt:'버블정렬'},
				{id:'insertSort',txt:'삽입정렬'},
				{id:'ranking',txt:'석차구하기'},
				{id:'binSearch',txt:'이분검색'},
				{id:'merge',txt:'병합'},
				{id:'stack',txt:'스택'}];
			var str='';
			$.each(arr,function(i,j){
				str+='<li id="'+j.id+'" class="list-group-item"><a href="#">'+j.txt+'</a></li>';
			});
			$('#tableLeft').html(str);
			$('#selectSort').on('click',function(){
				var i=0,j=0,temp=0;
				var arr=randomGen();
				for(i=0;i<arr.length;i++){
					for(j=i;j<arr.length;j++){
						if(arr[i]>arr[j+1]){
							temp = arr[i];
							arr[i] = arr[j+1];
							arr[j+1] = temp;
						}
					}
				}
				
				$('#tableRight').html(app.component.horList(arr,'default'));	
			});
			$('#bubbleSort').on('click',function(){
				
				var arr=randomGen();
				var num=0,i=0,j=0;
				for(i=0;i<arr.length;i++){
					for(j=0;j<arr.length;j++){
						if(arr[j]>arr[j+1]){
							num=arr[j];
							arr[j]=arr[j+1];
							arr[j+1]=num;
						}
					}
				}
				$('#tableRight').html(app.component.horList(arr,'default'));	
			});
			$('#insertSort').on('click',function(){
				var arr=randomGen();
				var i=0,j=0;
				
				
				$('#tableRight').html(app.component.horList(arr,'default'));	
			});
			$('#ranking').on('click',function(){
				var arr=randomGen();
				var rank=[1,1,1,1,1,1];
				for(var i=0;i<arr.length;i++){
					for(var k=0;k<arr.length;k++){
						if(arr[i]<arr[k]){
							rank[i]++;
						}
					}
				}
				$('#tableRight').html(app.component.horList(arr,'default'));
				$('#tableRight').append(app.component.horList(rank,'default'));
			});
			$('#binSearch').on('click',function(){
				var num=randomGen();
				var arr=sort(num);
				$('#tableRight').html(app.component.horList(arr,'default'));
				app.component.inputText('inputText').attr('placeholder','찾을 숫자').appendTo(tableRight);
				app.component.aButton('aButton','btn-warning').html('찾기').appendTo(tableRight)
					.css('margin','10px auto')
					.on('click',function(){
						var val=$('#inputText').val();
						var fnum=(arr.length-1)-(arr.length-2);
						var pnum=arr.length-1;
						var i=val*1;
						for(i=0;i<pnum;i++){
							if(fnum<=pnum){
								var m=Math.floor((fnum+pnum)/2);
								if(v==arr[m]){
									var result=m;
									break;
								}
								if(v<arr[m]){
									fnum=m+1;
								}else{
									pnum=m-1;
								}
						}
						}
						app.component.divAlert('alert-danger').html('index=: '+result + '의 숫자는' +arr[m]+ '입니다.').appendTo(tableRight);
					});					
				
			});
			$('#merge').on('click',function(){
				var num1=randomGen();
				var num2=randomGen();
				var arr1=sort(randomGen());
				var arr2=sort(randomGen());
				var arr=[];
				var i=0;
				var j=0;
				$('#tableRight').html(app.component.horList(arr1,'default'));
				$('#tableRight').append(app.component.horList(arr2,'default'));
				app.component.aButton('aButton','btn-warning').html('병합').appendTo(tableRight)
					.css('margin','10px auto')
					.on('click',function(){
				for(k=0;k<12;k++){
					if(arr1[i]<arr2[j]){
						arr[k]=arr1[i];
						i++;
					}else if(arr1[i]==arr2[2]){
						arr[k]=arr1[i];
						i++;
					}else{
						arr[k]=arr2[j];
						j++;
					}
				}
				$('#tableRight').append(app.component.horList(arr,'default'));
			  });
			});
		});
	};
	var randomGen=function(){
		var i=0,k=0;
		var arr=[];
		for(;i<6;i++){
			arr[i]=Math.floor(Math.random() * 45) + 1;
			for(k=i;k>0;k--){
				if(arr[i]==arr[k-1]){
					i--;
				}
			}
		}
		return arr;
	};
	var sort=function(arr){
		var i=0,j=0,temp=0;
		var arr=randomGen();
		for(i=0;i<arr.length;i++){
			for(j=i;j<arr.length;j++){
				if(arr[i]>arr[j+1]){
					temp = arr[i];
					arr[i] = arr[j+1];
					arr[j+1] = temp;
				}
			}
		}
		return arr;
	}
/* app-algorithm-matrix */	
	var matrix=function(){
		$('#matrix').on('click',function(){
			var wrapper=app.component.getWrapper();
			wrapper.empty();
			wrapper.append(app.ui.algorithmTable());
			var arr=[{id:'basic',txt:'기본5X5'},
				{id:'ziazag',txt:'지그재그'},
				{id:'diamond',txt:'다이아몬드'},
				{id:'sandGlass',txt:'모래시계'},
				{id:'snail',txt:'달팽이'},
				{id:'magicSquare',txt:'마방진'}];
			var str='';
			$.each(arr,function(i,j){
				str+='<li id="'+j.id+'" class="list-group-item"><a href="#">'+j.txt+'</a></li>';
			});
			$('#tableLeft').html(str);	
			basic();
		});
		
	};
	var basic=function(){
		$('#basic').on('click',function(){
			var mtx = new Array(new Array(5), new Array(5),new Array(5), new Array(5),new Array(5));
			var jason=[
		        {
		            a : 1,
		            b : 2,
		            c : 3,
		            d : 4,
		            e : 5
		        },
		        {
		        	a : 6,
		            b : 7,
		            c : 8,
		            d : 9,
		            e : 10
		        },
		        {
		        	a : 11,
		            b : 12,
		            c : 13,
		            d : 14,
		            e : 15
		        },
		        {
		        	a : 16,
		            b : 17,
		            c : 18,
		            d : 19,
		            e : 20
		        },
		        {
		        	a : 21,
		            b : 22,
		            c : 23,
		            d : 24,
		            e : 25
		        }
		    ];
			$('#tableRight').html(app.component.panelTable(jason,'Basic','default'));
		});
		
	};
/* app-algorithm-math */	
	var math=function(){
		var wrapper=app.component.getWrapper();
		$('#math').on('click',function(){
			wrapper.empty();
			wrapper.append(app.ui.algorithmTable());
			var arr=[{id:'determinePrime',txt:'소수판별'},
				{id:'primeSum',txt:'소수의합'},
				{id:'primeCount',txt:'소수의개수'},
				{id:'lcmGcd',txt:'최대최소공배수'},
				{id:'euclid',txt:'유클리드 호제법'},
				{id:'fatorization',txt:'약수구하기'},
				{id:'primeFactor',txt:'소인수분해'},
				{id:'multiSum',txt:'배수의 합'},
				{id:'approx',txt:'근사값 구하기'}];
			var str='';
			$.each(arr,function(i,j){
				str+='<li id="'+j.id+'" class="list-group-item"><a href="#">'+j.txt+'</a></li>';
			});
			$('#tableLeft').html(str);
			determinePrime();
			primefactor();
			multiSum();
		});
		
	};
	var determinePrime=function(){
		$('#determinePrime').on('click',function(){
			alert('determinePrime click');
		});
	};
	var primefactor=function(){
		$('#primeFactor').on('click',function(){
			alert('소인수 분해!!!');
			app.component.inputText('inputText').attr('placeholder','입력 값').appendTo(tableRight);
			app.component.aButton('aButton','btn-warning').html('소인수 분해').appendTo(tableRight)
				.css('margin','10px auto')
				.on('click',function(){
					var val=$('#inputText').val();
					var prime=2;
					var val=val;
					var result='';
					for(i=0;i<=val;i++){
						if(val%prime!=0){
							prime++;
						}else{
							val/=prime;
							result+=prime+'*';
						}
					}
					app.component.divAlert('alert-danger').html(val+'의 소인수 분해 :'+result.substr(0,result.lastIndexOf('*'))).appendTo(tableRight);
				});
		});
	};
	var multiSum=function(){
		$('#multiSum').on('click',function(){
			alert('소인수 분해!!!');
			app.component.inputText('inputText').attr('placeholder','입력 값').appendTo(tableRight);
			app.component.inputText('limit').attr('placeholder','한계 값').appendTo(tableRight);
			app.component.aButton('aButton','btn-warning').html('배수의 합').appendTo(tableRight)
				.css('margin','10px auto')
				.on('click',function(){
					var val=$('#inputText').val()*1;
					var limit=$('#limit').val()*1;
					var sum=0;
					for(i=0;i<=limit;i++){
						if(i%val==0){
							sum+=i;
						}
						
					}
					app.component.divAlert('alert-danger').html(val+'의 배수의 합은:'+sum).appendTo(tableRight);
				});
			app.component.divAlert.empty();
		});

	}
/* app-algorithm-application */	
	var appl=function(){
		$('#appl').on('click',function(){
			alert('appl click');
		});
	};	
	return {
		init : init,
		series : series,
		aSeries : aSeries,
		swSeries : swSeries,
		dSeries : dSeries,
		factorial : factorial,
		fibonacci : fibonacci,
		arr : arr,
		randomGen : randomGen,
		sort:sort,
		matrix : matrix,
		basic : basic,
		math : math,
		determinePrime : determinePrime,
		primefactor:primefactor,
		appl : appl
	};
})();