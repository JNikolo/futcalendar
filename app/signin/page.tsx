export default function SignIn() {
    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
                <h1 className="text-4xl">Sign In</h1>
            </div>
            <div className="col-span-2">
                <input type="text" placeholder="Email" className="input input-primary" />
            </div>
            <div className="col-span-2">
                <input type="password" placeholder="Password" className="input input-primary" />
            </div>
            <div className="col-span-2">
                <button className="btn btn-primary">Sign In</button>
            </div>
            <div className="col-span-2">
                <a>Forgot password?</a>
            </div>
            <div className="col-span-2">
                <a>Sign Up</a>
            </div>
        </div>
    );
}