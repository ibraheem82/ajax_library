
// * this is my library

function aslib() {
    this.http = new XMLHttpRequest();
}


// Todo: we are using the four prototypes methods //

// * Make an HTTP GET Request * //
// ! we dont want to hard code the url, we want the user to be able to pass in the url when they are using the library.
// * we are doing this asynchronously using [callBack]
aslib.prototype.get = function(url, callBack) {
    this.http.open('GET', url, true);

        // * in es5 without the use of arrow functionl
        let self  = this;
    this.http.onload = function() {
        if(self.http.status === 200) {
            // ? the [null] is for the error => it will catch the error.
            callBack(null, self.http.responseText);
        } else{
            // [self.http.status] whatever the error is.
            callBack('Error🌋 : ' + self.http.status)
        }
    }
    
    this.http.send();
}

// * Make an HTTP POST Request   * //
// ? [data] is the data that you want to send.
aslib.prototype.post = function(url, data, callBack){
    this.http.open('POST', url, true);
    // * setting the content-type
    // ? [application/json] is the data type that we are working with.
    this.http.setRequestHeader('Content-type', 'application/json');


    let self  = this;
    this.http.onload = function() {
        // * dont need to check the status because we are doing a post request
            // ? the [null] is for the error => it will catch the error.
            // * the [self.http.responseText] should be the new post that we added
            callBack(null, self.http.responseText);

    }

    // Todo: when ever you are send a data you hv to send it using json
    this.http.send(JSON.stringify(data));
}

// *  Make an HTTP PUT which is [UPDATE] Request  * //
aslib.prototype.put = function(url, data, callBack){
    this.http.open('PUT', url, true);
    // * setting the content-type
    // ? [application/json] is the data type that we are working with.
    this.http.setRequestHeader('Content-type', 'application/json');


    let self  = this;
    this.http.onload = function() {
        // * dont need to check the status because we are doing a post request
            // ? the [null] is for the error => it will catch the error.
            // * the [self.http.responseText] should be the new post that we added
            callBack(null, self.http.responseText);
    }
    // Todo: when ever you are send a data you hv to send it using json
    this.http.send(JSON.stringify(data));
}

// *  Make an HTTP DELETE Request  * //
aslib.prototype.delete = function(url, callBack) {
    this.http.open('DELETE', url, true);

        // * in es5 without the use of arrow function 
        let self  = this;
    this.http.onload = function() {
        if(self.http.status === 200) {

            // TODO: THE REPONSE MUST BE AN EMPTY OBJECT
            callBack(null, 'Post Deleted');
        } else{
            // [self.http.status] whatever the error is.
            callBack('Error🌋 : ' + self.http.status)
        }
    }

    this.http.send();
}
