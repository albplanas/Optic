/**********************************************
                Laws Functions
 **********************************************/
//this is vectorial
      function  Reflection(hs,ms){

          if(hs===ms){return ms}

          if(hs===Infinity){  return  ms===0? Infinity : (ms-(1/ms))/2 }

          if(ms===Infinity){ return -hs }

          return  (2*ms-hs+Math.pow(ms,2)*hs)/(1-Math.pow(ms,2)+2*ms*hs)
      }

/*********************************************** *
                   Math Function
*********************************************** */

    function Interception(r){
            return r.m===Infinity?Infinity:r.y-r.m*r.x;
    }


    function Interception_rect(r1,r2){

        var n1=Interception(r1);
        var n2=Interception(r2);

        if(r1.m===Infinity && r2.m===Infinity){return {x:undefined,y:undefined}}
        if(r1.m===Infinity)return {x:r1.x,y:r2.m*r2.x+n2}
        if(r2.m===Infinity)return {x:r2.x,y:r1.m*r1.x+n1}

        return r1.m===r2.m?{x:undefined,y:undefined}:{x:-(n2-n1)/(r2.m-r1.m),y:n2-r2.m*(n2-n1)/(r2.m-r1.m)}
    }

    function Distance(p1,p2){
            return Math.sqrt(Math.pow(p1.x-p2.x,2)+Math.pow(p1.y-p2.y,2))
    }







/*********************************************** *
                   Interaction Functions
*********************************************** 
1-I don't care the sense of the mirror, just i want the sense of the ray (so far) 
************************************************/

function Interacction_mirror(haz,mirror){


      var  rect_1={
            x:haz.x_origen,
            y:haz.y_origen,
            m:haz.slope,
            sence:haz.sence
        }
      var   rect_2={
            x:mirror.x_origen,
            y:mirror.y_origen,
            m:mirror.slope,
            sence:mirror.sence
        }

       if(mirror){
        var Intercept=Interception_rect(rect_1,rect_2);
        var Origen_Mirror={ x:mirror.x_origen,y:mirror.y_origen};
        
        //Inside of mirror    
        var L=Distance(Intercept,Origen_Mirror)
        Intercept= mirror.longitud/2.0 >= L ?Intercept:{x:undefined,y:undefined}
       }

               //SENCE  OF INTERCEPT
               if(haz.sence==="+" && Intercept.x < haz.x_origen){Intercept= {x:undefined,y:undefined} }
               if(haz.sence==="-" && Intercept.x > haz.x_origen){Intercept= {x:undefined,y:undefined} }
       console.log("haz",haz)
       return        Intercept.x===undefined? []: {
                                                        x_origen:Intercept.x,
                                                        y_origen:Intercept.y,
                                                        slope:Reflection(haz.slope,mirror.slope),
                                                        sence:haz.sence==="+"?"-":"+",
                                                        gen:haz.gen+1
                                                  }
        
}


module.exports = {
    Interacction_mirror:Interacction_mirror,
    Distance:Distance
}