var cat = {
    name: 'Fluffy',
    activities: ['play', 'eat cat food'],
    catFriends: [
    {
    name: 'bar',
    activities: ['be grumpy', 'eat bread omblet'],
    weight: 8,
    furcolor: 'white'
    }, 
    {
    name: 'foo',
    activities: ['sleep', 'pre-sleep naps'],
    weight: 3
    }
    ]
   }

   // 1. Add height and weight to fluffy

   cat.height=1;
   cat.weight=10;

   // 2. Fluffy name is spelled wrongly. Update it to Fluffyy

   cat.name='Fluffyy';

   // 3. List all the activities of Fluffyy’s catFriends.

   for(var i in cat.catFriends){
       console.log("Activities of "+cat.catFriends[i].name);
       console.log(cat.catFriends[i].activities);
   }

   // 4. Print the catFriends names.

   console.log("Fluffyy's catfriends names are:");
  
   for(i in cat.catFriends){
       console.log(cat.catFriends[i].name);
   }

   // 5. Print the total weight of catFriends

        var total_weight=0;
  
   for(i in cat.catFriends){
          total_weight = total_weight + cat.catFriends[i].weight;
   }
       
   console.log("catfriends weight(total) is:"+total_weight);

   // 6. Print the total activities of all cats (op:6)

   console.log('Activities of Fluffyy:');
  
   for(i in cat.activities){
           console.log(cat.activities[i]);
   }

   for(i in cat.catFriends){
    console.log("Activities of "+cat.catFriends[i].name+":");
    
       for(var j in cat.catFriends[i].activities){
           console.log(cat.catFriends[i].activities[j]);
       }
   }
   
   // 7. Add 2 more activities to bar & foo cats

   for(var i in cat.catFriends){
     cat.catFriends[i].activities.push("sing");
     cat.catFriends[i].activities.push("bath");
   }

   // 8. Update the fur color of bar

   for(var i in cat.catFriends){
    
    if(cat.catFriends[i].name==="bar"){
        cat.catFriends[i].furcolor="pink";
    }
 
   } 

   console.log(cat);