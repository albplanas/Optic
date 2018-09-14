var {Interacction_mirror,Distance} = require('./Interaction')

function ToNumeber(obj){
   
    var transf=[];
   for (var prop in obj) {
     if(obj[prop]==="inf"){transf[prop]=Infinity}
    else if(obj[prop]==="+)" || obj[prop]==="-)"){transf[prop]=obj[prop][0]}
    else transf[prop]=parseFloat(obj[prop]);
  }

    return transf
}



function Calcule_Haz_interaction(haz,dvc){
    
        console.log("ray")
       if(haz.prop.gen>=3) return [];

       else{

                var ray=ToNumeber(haz.prop)
            

                var   interaction_result=dvc.map(device=>{

                                var dev=ToNumeber(device.prop);

                                    switch(device.fn){
                                        case "mirror":
                                            return Interacction_mirror(ray,dev) ;   

                                        }
                                        return [];
                            
                        })

                var min=10000000, ray_children_index=0;

                for(var i=0;i<interaction_result.length;i++){

                    var d=Distance({x:ray.x_origen,y:ray.y_origen},{x:interaction_result[i].x_origen, y:interaction_result[i].y_origen}) 

                    ray_children_index = d <= min ?i:ray_children_index;

                }
                

            return   interaction_result[ray_children_index]

       }
}





/**************Mean Function********************* */
 function Calculate_interaction(src,dvc){

    for(var i=0;i<src.length;i++){

        const haz = Object.assign({}, src[i]);
         result=Calcule_Haz_interaction(haz,dvc)
    }

  console.log(result,"result")
}


 module.exports = {
    Calculate_interaction:Calculate_interaction
}
