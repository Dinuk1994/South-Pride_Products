import Logo from "../../assets/South-Pride-Products.png"

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-base-200 text-base-content p-10">
                <aside>
                    <div className="flex mt-5 mobile:mt-0 ">
                        <img src={Logo} alt="" className="size-24 flex " />
                        <p className="text-center text-gray-700 mt-4">
                            <span className="font-bold text-lg mobile:text-sm">South Pride Products (PVT) Ltd</span>
                            <br />
                            <span className="italic mobile:text-xs">Providing organic products since 2015</span>
                            <br />
                            <span className="text-sm mobile:text-xs">All rights reserved</span>
                        </p>
                    </div>

                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <div className="grid gap-y-2 mobile:flex mobile:gap-x-5">
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <div className="grid gap-y-2 mobile:flex mobile:gap-x-5">
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <div className="grid gap-y-2 mobile:flex mobile:gap-x-5">
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                </nav>
            </footer>
        </div>
    )
}

export default Footer