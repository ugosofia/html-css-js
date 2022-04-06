class Logger {
    name = new String();
 
    data = new Date()


    constructor(name, data) {
        this.name = name
        this.data = data
    }
    
    /**
     * 
     * @param {*} message 
     */
    info(message ) { console.info(message)}

    /**
     * 
     * @param {*} message 
     */
    debug(message) { console.debug(message)}

    /**
     * 
     * @param {*} message 
     */
    warn(message) {console.warn(message) }



}