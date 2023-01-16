function varScope() {
    // console.log(i)
    for(var i=0; i<5; i++) {
    (function(i) {
        setTimeout(() => {
            console.log('After ' + i + ' seconds')
        }, 1000 * i)
    })(i)
    }
}