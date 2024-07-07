export const Footer = () => {
    return (
        <div>
            <footer className="bg-white rounded-lg shadowm-4">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="https://medium.com" className="flex items-center mb-4 sm:mb-0 space-x-3">
                            <img src="https://companieslogo.com/img/orig/medium-0908be16.png?t=1720244494" className="h-8" alt="Medium logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap">Medium</span>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                            <li>
                                <a href="https://medium.com/about" className="hover:underline mr-4 md:mr-6">About</a>
                            </li>
                            <li>
                                <a href="https://policy.medium.com/medium-privacy-policy-f03bf92035c9" className="hover:underline mr-4 md:mr-6">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="https://policy.medium.com/medium-terms-of-service-9db0094a1e0f" className="hover:underline mr-4 md:mr-6">Terms</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center ">© 2024 <a href="https://medium.com/" className="hover:underline">Medium™</a>. All Rights Reserved.</span>
                </div>
            </footer>
        </div>
    );
};
