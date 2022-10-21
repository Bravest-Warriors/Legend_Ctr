class R{
    static search(name) {
        const search=decodeURI(location.search)
        const params=new URLSearchParams(search)
        return params.get(name)
    } 
}