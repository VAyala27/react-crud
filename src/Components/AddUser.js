import React from 'react'

const addUser = () => {
    return (
        <div className="container mt-5">
            <form className="w-50 mx-auto">
                <div class="form-group">
                    <label for="formGroupExampleInput">Name</label>
                    <input type="text" class="form-control mb-3" id="name" placeholder="Enter Your Name..." />
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput2">Email</label>
                    <input type="text" class="form-control mb-3" id="email" placeholder="Enter Your Email..." />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
    )
}

export default addUser
