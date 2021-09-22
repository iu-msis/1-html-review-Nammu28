const Profile = {
    data() {
        return{
                "result":{},

                "date":{},

            
        }



        





    

    },
    methods:{ fetchUserData()  {
        fetch('https://randomuser.me/api') // Getting the data from the site, opens webpage in background - returns a promise - either do then or catch
        .then( response => response.json())   //return response in json format, creates a method - it returns a promise object
        .then(
            (json) => {
                console.log(json); // put it in console log
                this.result = json.results[0]; // updaing the data value - vue recognizes it changed and updates it
                console.log(this.result);
                //Convert Date to look pretty
                let str = this.result.dob.date;
                //Split the string '-'
                let str1= str.split("-");
                console.log(str1);
                //Grab the month
                let month = str1[1]
                //grab the year
                let year = str1[0]
                // //Trim down day/time to just day
                let day = str1[2].substring(0,2)
                // str1.substring(0,11)

                // //combine
                 str2= year + "-"+ month + "-" +  day
                this.date = str2
                

                
            }
        );

    }

    },


    
    
    created() { // after vue instance created, the function is called 
        
        this.fetchUserData();
        // .catch( (error) => console.error(error)/*;}*/ ) /*;*/ // Any error is caught
        
    }
}
Vue.createApp(Profile).mount('#profilechange')