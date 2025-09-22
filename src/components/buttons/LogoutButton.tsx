import { useState } from "react";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

export default function LogoutButton (){
	const [loading, setLoading] = useState(false);
	
	const handleLogout = async () => {
		setLoading(true);
		try {
			await signOut(auth);
			window.location.href = "/";
		} catch (error) {
			console.error("Error signing out:", error);
		} finally {
			setLoading(false);
		}
	}
	return (
		<button
			disabled={loading}
			onClick={() => handleLogout()}
			className="
				bg-gray-300
				hover:border-gray-900 
				hover:border-4
				text-black 
				dark:bg-gray-900
				dark:text-white
				dark:hover:border-gray-300
				font-bold 
				rounded-xl
				cursor-pointer
				px-3 sm:px-4 md:px-6
				mx-2
				py-0.5 sm:py-1 md:py-2
				text-[clamp(.5rem,2vw,1.5rem)]"
		>
			{loading ? "Logging out..." : "Log Out"}
		</button>
	);
}