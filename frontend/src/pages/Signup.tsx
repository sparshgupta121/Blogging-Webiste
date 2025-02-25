import { Auth } from "./components/auth"
import { Quote } from "./components/quote"

function Signup(){

    return <>
    <div className="grid grid-cols-1 lg:grid-cols-2">
    <div>
    <Auth type="signup"></Auth>
    </div>
    <div className="invisible lg:visible">
    <Quote/>
    </div>

    </div>
    </>
}

export default Signup