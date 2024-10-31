import logo from "../../assets/Stake_logo.png"

const Header = () => {
	return (
		<header className="bg-[#1a2c38] flex justify-between items-center max-sm:px-4 px-10  md:px-24  lg:px-48 py-2">
			<div className="logo">
				<img src={logo} alt="" className="invert max-w-16 max-w-[400px]:w-10" />
			</div>
			<div className="btns">
				<button className="text-white">Sign In</button>
				<button className="bg-[#1375e1] text-white px-5 ml-5 py-3 rounded-md text-sm">
					Register
				</button>
			</div>
		</header>
	)
}

export default Header
