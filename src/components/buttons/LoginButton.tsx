import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../../firebase";

export default function LoginButton () {
	const handleLogin = () => {
		const provider = new GoogleAuthProvider();

		//const redirectUrl = encodeURIComponent(window.location.href);
		//provider.setCustomParameters({ state: redirectUrl });
		signInWithRedirect(auth, provider);
	}
	return (
		<button
			onClick={handleLogin}
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
			Login with Google
		</button>
	);
}
