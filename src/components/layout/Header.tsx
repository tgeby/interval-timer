import AuthButton from "../buttons/AuthButton";
import { DarkModeToggle } from "../buttons/DarkModeToggle";
import teabee512 from '../../../public/teabee512.png';

interface DarkModeProps {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ isDark, setIsDark }: DarkModeProps) => {

	return (
		<div className="w-full bg-emerald-600 relative grid grid-cols-3 items-center">
			<div className="flex justify-evenly items-center">
				<a className="cursor-pointer" href="https://teabee.org">
					<img
						src={teabee512}
						alt="TeaBee Logo"
						className="h-12 w-12 sm:h-16 sm:w-16 md:w-20 md:h-20"
					/>
				</a>
				<DarkModeToggle isDark={isDark} setIsDark={setIsDark} />
			</div>
			<h1 className="text-[clamp(.5rem,4vw,3rem)] text-center rounded font-extrabold tracking-wide bg-gray-300 dark:bg-gray-900 self-center  py-2 my-3 w-full ">Interval Timer</h1>
			<div className="flex justify-center">
				<AuthButton />
			</div>
		</div>
	);
}
export default Header;