module.exports = function solveEquation(equation) {
  var a,b,c;
  var a1,b2,c1;
  var k,l;
  var root1,root2;
  
  
  var f=false;
  for (var i =0; i< equation.length-1; i++){
	if ( equation.charAt(i)=="*"  && f== false) {
	  a = equation.slice(0,i);
	  f = true;
	  k=i+6;
	}
	if (equation.charAt(i)=="*"  && f== true){
		b= equation.slice(k,i);
		l=i+4;
	}
  }
	c= equation.slice(l, equation.length);
	
	a1= eval(a);
	b1 = eval(b);
	c1= eval(c);
	
	root1= Math.round((-b1 + Math.sqrt(b1*b1-4*a1*c1))/(2*a1));
	root2= Math.round((-b1 - Math.sqrt(b1*b1-4*a1*c1))/(2*a1));
	
	
	if (root1<=root2) return ([root1,root2]);
	else return ([root2,root1]);
		    
			
  // your implementation
}
