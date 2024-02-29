import WhoAmI from "@/components/pure/home/WhoAmI.jsx";
import "iconify-icon";

export default function Home() {
	return (
		<>
			<WhoAmI />

			<hr className="mb-16 w-full max-w-[900px] mx-auto" />

			<section className="px-8 mb-10">
				<h1 className="text-md text-center uppercase font-medium pb-8">
					Seguramente te encuentras en una de estas situaciones
				</h1>

				<div className="flex gap-8 max-md:flex-col [&>article]:mx-auto [&>article]:w-full [&>article]:max-w-[420px] [&>article]:bg-[#490b0a] [&>article]:px-6 [&>article]:py-4 [&>article>p]:text-sm">
					<article>
						<iconify-icon
							icon="material-symbols:assistant-on-hub-outline-sharp"
							width="70"
							height="70"
						/>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
							possimus iure libero voluptatum necessitatibus asperiores impedit
							repellendus aspernatur, ullam nisi cupiditate illum quam quos
							ducimus suscipit error eveniet ut fuga?
						</p>
					</article>

					<article>
						<iconify-icon
							icon="material-symbols:assistant-on-hub-outline-sharp"
							width="70"
							height="70"
						/>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
							possimus iure libero voluptatum necessitatibus asperiores impedit
							repellendus aspernatur, ullam nisi cupiditate illum quam quos
							ducimus suscipit error eveniet ut fuga?
						</p>
					</article>

					<article>
						<iconify-icon
							icon="material-symbols:assistant-on-hub-outline-sharp"
							width="70"
							height="70"
						/>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
							possimus iure libero voluptatum necessitatibus asperiores impedit
							repellendus aspernatur, ullam nisi cupiditate illum quam quos
							ducimus suscipit error eveniet ut fuga?
						</p>
					</article>
				</div>
			</section>
		</>
	);
}
