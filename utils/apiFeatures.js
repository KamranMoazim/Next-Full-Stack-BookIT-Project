class APIFeature {
    constructor(query, queryStr){
        this.query = query;
        this.queryStr = queryStr;
    }

    search(){
        const location = this.queryStr.location ? {
            address: {
                $regex: this.queryStr.location,
                $options: "i"
            }
        } : {};
        // console.log(location)
        this.query = this.query.find({ ...location });
        return this
    }

    filter(){
        const queryCopy = { ...this.queryStr };
        // console.log(queryCopy);

        // Remove Fields from query
        const removeFields = ["location", "page"];
        removeFields.forEach(el=> delete queryCopy[el]);

        // console.log(queryCopy);
        this.query = this.query.find(queryCopy);
        return this;
    }

    pagination(resPerPage){
        const currentPage = Number(this.queryStr.page) || 1;
        const skip = resPerPage * (currentPage - 1);

        this.query = this.query.skip(skip).limit(resPerPage);
        return this
    }

}

export default APIFeature;