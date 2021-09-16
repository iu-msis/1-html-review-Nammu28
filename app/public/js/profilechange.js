const Profile = {
    data() {
        return{
                "result":{},



            
        }


        







    },
    //str = result.dob.date,
    //str.trimRight(),
    created() { // after vue instance created, the function is called 
        fetch('https://randomuser.me/api') // Getting the data from the site, opens webpage in background - returns a promise - either do then or catch
        .then( response => response.json())   //return response in json format, creates a method - it returns a promise object
        .then(
            (json) => {
                console.log(json); // put it in console log
                this.result = json.results[0]; // updaing the data value - vue recognizes it changed and updates it
                console.log(this.result);
                
            }
        );
        // .catch( (error) => console.error(error)/*;}*/ ) /*;*/ // Any error is caught
        
    }
}
Vue.createApp(Profile).mount('#profilechange')