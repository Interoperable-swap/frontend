import React from "react"
const Footer = () => {
	return(
	<footer >
		<div class="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
			<div>
				<h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Company</h2>
				<ul class="text-gray-500 dark:text-gray-400">
					<li class="mb-4">
						<a href="#" class="hover:underline">Careers</a>
					</li>
					<li class="mb-4">
						<a href="#" class="hover:underline">Brand Assets</a>
					</li>
					<li class="mb-4">
						<a href="#" class="hover:underline">Blog</a>
					</li>
				</ul>
			</div>
			<div>
				<h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Help center</h2>
				<ul class="text-gray-500 dark:text-gray-400">
					<li class="mb-4">
						<a href="#" class="hover:underline">Discord</a>
					</li>
					<li class="mb-4">
						<a href="#" class="hover:underline">Twitter</a>
					</li>
					<li class="mb-4">
						<a href="https://github.com/interoperable-swap" class="hover:underline">GitHub</a>
					</li>
				</ul>
			</div>
			<div>
				<h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Legal</h2>
				<ul class="text-gray-500 dark:text-gray-400">
					<li class="mb-4">
						<a href="#" class="hover:underline">Privacy Policy</a>
					</li>
					<li class="mb-4">
						<a href="#" class="hover:underline">Licensing</a>
					</li>
					<li class="mb-4">
						<a href="#" class="hover:underline">Terms &amp; Conditions</a>
					</li>
				</ul>
			</div>
		</div>
	</footer>
	)
}
export default Footer