

function isTouching(object1,object2){
    if( object1.x - object2.x < object2.width/2 + object1.width/2 
      && object2.x - object1.x < object1.width/2 + object2.width/2 
      && object1.y - object2.y < object2.width/2 + object1.width/2
      && object2.y - object1.y < movingRect.width/2 + object2.width/2){
     
        return  true;
      }
    else {
  
      return false;
    }
  }
  
  function BounceOff(object1,object2){
  
    if( object1.x - object2.x < object2.width/2 + object1.width/2 
      && object2.x - object1.x < object1.width/2 + object2.width/2)
      {
          object1.velocityX = object1.velocityX * (-1);
      }
      
    if (object1.y - object2.y < object2.width/2 + object1.width/2
    && object2.y - object1.y < movingRect.width/2 + object2.width/2)
    {
       object2.velocityY = object2.velocityY * (-1);
    }
  
  }
  
  